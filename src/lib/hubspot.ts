import "server-only";

const HUBSPOT_API_BASE = "https://api.hubapi.com";

export interface PartnerLead {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface HubSpotObjectRef {
  id: string;
}

interface HubSpotSearchResponse {
  results: HubSpotObjectRef[];
}

interface HubSpotDealStage {
  id: string;
  displayOrder: number;
}

interface HubSpotDealPipeline {
  id: string;
  stages: HubSpotDealStage[];
}

interface HubSpotPipelinesResponse {
  results: HubSpotDealPipeline[];
}

function getToken(): string {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) throw new Error("HUBSPOT_PRIVATE_APP_TOKEN is not set");
  return token;
}

async function hubspotFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${HUBSPOT_API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HubSpot API error (${res.status}) on ${path}: ${body}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

async function findContactIdByEmail(email: string): Promise<string | null> {
  const result = await hubspotFetch<HubSpotSearchResponse>("/crm/v3/objects/contacts/search", {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [{ filters: [{ propertyName: "email", operator: "EQ", value: email }] }],
      limit: 1,
    }),
  });
  return result.results[0]?.id ?? null;
}

/** Creates a contact, or updates it in place if the email already exists. Returns the contact ID. */
export async function upsertContact(lead: PartnerLead): Promise<string> {
  const properties = {
    firstname: lead.name,
    email: lead.email,
    phone: lead.phone,
    company: lead.company,
  };

  const existingId = await findContactIdByEmail(lead.email);
  if (existingId) {
    await hubspotFetch(`/crm/v3/objects/contacts/${existingId}`, {
      method: "PATCH",
      body: JSON.stringify({ properties }),
    });
    return existingId;
  }

  const created = await hubspotFetch<HubSpotObjectRef>("/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });
  return created.id;
}

interface DealStageTarget {
  pipelineId: string;
  stageId: string;
}

/** Resolves the account's default deal pipeline and its earliest stage, without hardcoding IDs. */
async function getDefaultPipelineFirstStage(): Promise<DealStageTarget> {
  const { results: pipelines } = await hubspotFetch<HubSpotPipelinesResponse>(
    "/crm/v3/pipelines/deals"
  );
  if (pipelines.length === 0) throw new Error("No deal pipelines found in HubSpot account");

  const pipeline = pipelines.find((p) => p.id === "default") ?? pipelines[0];
  const stages = [...pipeline.stages].sort((a, b) => a.displayOrder - b.displayOrder);
  if (stages.length === 0) throw new Error(`Pipeline "${pipeline.id}" has no stages`);

  return { pipelineId: pipeline.id, stageId: stages[0].id };
}

/** Creates a deal in the default pipeline's first stage and associates it with the given contact. */
export async function createDeal(lead: PartnerLead, contactId: string): Promise<string> {
  const { pipelineId, stageId } = await getDefaultPipelineFirstStage();

  const deal = await hubspotFetch<HubSpotObjectRef>("/crm/v3/objects/deals", {
    method: "POST",
    body: JSON.stringify({
      properties: {
        dealname: `${lead.company} — Parceria`,
        pipeline: pipelineId,
        dealstage: stageId,
        description: lead.message,
      },
    }),
  });

  await hubspotFetch(`/crm/v4/objects/deals/${deal.id}/associations/default/contacts/${contactId}`, {
    method: "PUT",
  });

  return deal.id;
}
