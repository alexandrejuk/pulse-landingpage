"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Dictionary } from "@/dictionaries";

type FormDict = Dictionary["partners"]["form"];
type SuccessDict = Dictionary["partners"]["success"];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors";

function Field({
  label,
  name,
  placeholder,
  type,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-text-secondary">{label}</span>
      <input type={type} name={name} placeholder={placeholder} required className={inputClasses} />
    </label>
  );
}

export function PartnerLeadForm({
  formDict,
  successDict,
}: {
  formDict: FormDict;
  successDict: SuccessDict;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      honeypot: String(data.get("company_website") ?? ""),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.company || !payload.message) {
      setStatus("error");
      setErrorMessage(formDict.errorRequired);
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/partners/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request_failed");
      // Only fired once HubSpot actually confirms the lead was created --
      // this is the one real conversion event on the whole landing page
      // today, and it's what makes the Google Ads link (shared GA4 property
      // with the app) mean anything beyond raw pageviews.
      sendGAEvent("event", "lead_form_submitted", { form: "partners" });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(formDict.errorGeneric);
    }
  }

  if (status === "success") {
    return (
      <GlassCard className="text-center" hover={false}>
        <h3 className="text-2xl font-bold text-text-primary">{successDict.title}</h3>
        <p className="mt-3 text-text-secondary">{successDict.description}</p>
        <div className="mt-8 flex justify-center">
          <Button href="/">{successDict.cta}</Button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard hover={false}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <Field label={formDict.nameLabel} name="name" placeholder={formDict.namePlaceholder} type="text" />
        <Field label={formDict.emailLabel} name="email" placeholder={formDict.emailPlaceholder} type="email" />
        <Field label={formDict.phoneLabel} name="phone" placeholder={formDict.phonePlaceholder} type="tel" />
        <Field
          label={formDict.companyLabel}
          name="company"
          placeholder={formDict.companyPlaceholder}
          type="text"
        />

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-text-secondary">{formDict.messageLabel}</span>
          <textarea
            name="message"
            placeholder={formDict.messagePlaceholder}
            rows={4}
            required
            className={inputClasses}
          />
        </label>

        {status === "error" && errorMessage && <p className="text-sm text-error">{errorMessage}</p>}

        <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-tertiary">
            {formDict.consent}{" "}
            <Link href="/privacy-policy" className="underline hover:text-text-secondary">
              {formDict.consentLink}
            </Link>
            .
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary-light to-primary px-7 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-4px_rgba(124,58,237,0.55)] transition-all duration-300 ease-out hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? formDict.submitting : formDict.submit}
          </button>
        </div>
      </form>
    </GlassCard>
  );
}
