import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";
import { Navbar } from "@/components/sections/Navbar";
import { TacticalHero } from "@/components/sections/TacticalHero";
import { WhatIsPulseUp } from "@/components/sections/WhatIsPulseUp";
import { TacticalGallery } from "@/components/sections/TacticalGallery";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Gamification } from "@/components/sections/Gamification";
import { Faq } from "@/components/sections/Faq";
import { TacticalFinalCta } from "@/components/sections/TacticalFinalCta";
import { Footer } from "@/components/sections/Footer";

const siteUrl = "https://pulseup.io";
const BOARD_URL = "https://board.pulseup.io";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const page = dict.tacticalPage;

  return {
    title: page.meta.title,
    description: page.meta.description,
    keywords: [
      "tactics board",
      "sports whiteboard",
      "coaching tool",
      "soccer tactics",
      "basketball tactics",
      "playbook maker",
      "animated plays",
      "team tactics app",
      "free tactics board",
    ],
    alternates: {
      canonical: `${siteUrl}/${locale}/pulse-tactical`,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}/pulse-tactical`])),
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}/pulse-tactical`,
      siteName: "PulseUp",
      title: page.meta.title,
      description: page.meta.description,
      images: [{ url: "/screenshots/tactical/soccer.gif", width: 900, height: 560, alt: page.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta.title,
      description: page.meta.description,
      images: ["/screenshots/tactical/soccer.gif"],
    },
  };
}

export default async function PulseTacticalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const page = dict.tacticalPage;

  // SoftwareApplication + free Offer -- board.pulseup.io is a real, free,
  // no-install product distinct from the PulseUp mobile app itself, so it
  // earns its own structured-data entry rather than inheriting the root
  // layout's generic PulseUp Organization markup.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pulse Tactical",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    url: BOARD_URL,
    description: page.meta.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        // Static, server-built JSON with no user input -- safe to inject as-is.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale={locale as Locale} dict={dict.nav} />
      <main className="flex-1">
        <TacticalHero dict={page.hero} />
        <WhatIsPulseUp dict={page.whatIs} />
        <TacticalGallery dict={page.gallery} />
        <FeatureGrid dict={page.featureGrid} />
        <Gamification dict={page.howItWorks} />
        <Faq dict={page.faq} />
        <TacticalFinalCta dict={page.finalCta} />
      </main>
      <Footer dict={dict.footer} locale={locale} />
    </div>
  );
}
