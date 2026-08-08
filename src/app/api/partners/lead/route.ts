import { NextResponse } from "next/server";
import { createDeal, upsertContact, type PartnerLead } from "@/lib/hubspot";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface PartnerLeadRequestBody {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  honeypot?: unknown;
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: PartnerLeadRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Bots fill hidden fields; humans never see this one. Pretend success without calling HubSpot.
  if (asTrimmedString(body.honeypot) !== "") {
    return NextResponse.json({ ok: true });
  }

  const lead: PartnerLead = {
    name: asTrimmedString(body.name),
    email: asTrimmedString(body.email),
    phone: asTrimmedString(body.phone),
    company: asTrimmedString(body.company),
    message: asTrimmedString(body.message),
  };

  if (!lead.name || !lead.email || !lead.phone || !lead.company || !lead.message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    const contactId = await upsertContact(lead);
    await createDeal(lead, contactId);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[partners/lead] failed to sync lead to HubSpot", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 502 });
  }
}
