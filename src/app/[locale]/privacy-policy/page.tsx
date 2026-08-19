import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal/LegalPage";
import { isLocale } from "@/i18n/config";
import { PRIVACY_POLICY_BY_LOCALE, PRIVACY_POLICY_TITLE } from "@/content/privacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PulseUp collects, uses, and protects your data.",
};

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const title = PRIVACY_POLICY_TITLE[locale];
  const document = PRIVACY_POLICY_BY_LOCALE[locale];

  return (
    <LegalPage title={title} updated={document.updatedAt}>
      {document.sections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </div>
      ))}
    </LegalPage>
  );
}
