import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";
import { SPORT_SLUGS, SPORT_DISPLAY_NAME, isSportSlug, getSportPageContent } from "@/lib/sportPages";
import { Navbar } from "@/components/sections/Navbar";
import { SportHero } from "@/components/sections/SportHero";
import { SportValue } from "@/components/sections/SportValue";
import { SportBoardShowcase } from "@/components/sections/SportBoardShowcase";
import { SportPlays } from "@/components/sections/SportPlays";
import { SportFeatures } from "@/components/sections/SportFeatures";
import { SportHowItWorks } from "@/components/sections/SportHowItWorks";
import { SportFinalCta } from "@/components/sections/SportFinalCta";
import { Footer } from "@/components/sections/Footer";

// The SEO/acquisition layer -- one indexable page per sport, deliberately
// NOT linked from Navbar/Footer (see src/dictionaries/*.json's nav.links /
// footer.groups -- neither references this route). The general
// /pulse-tactical page (one directory up) stays the sole nav-linked,
// official product page; these are parallel, sport-flavored pages meant to
// be found via search/direct links/campaigns instead, each pointing back to
// board.pulseup.io the same way the general page does. No noindex, no
// robots.txt block, included in sitemap.ts -- see that file.
const siteUrl = "https://pulseup.io";
const BOARD_URL = "https://board.pulseup.io";

export function generateStaticParams() {
  return SPORT_SLUGS.map((sport) => ({ sport }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; sport: string }>;
}): Promise<Metadata> {
  const { locale, sport } = await params;
  if (!isLocale(locale) || !isSportSlug(sport)) notFound();
  const content = getSportPageContent(sport, locale);
  const path = `/pulse-tactical/${sport}`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])),
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}${path}`,
      siteName: "PulseUp",
      title: content.meta.title,
      description: content.meta.description,
      images: [{ url: `/screenshots/tactical/${sport}.gif`, width: 900, height: 560, alt: content.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: [`/screenshots/tactical/${sport}.gif`],
    },
  };
}

export default async function SportTacticalPage({
  params,
}: {
  params: Promise<{ locale: string; sport: string }>;
}) {
  const { locale, sport } = await params;
  if (!isLocale(locale) || !isSportSlug(sport)) notFound();
  const dict = await getDictionary(locale);
  const content = getSportPageContent(sport, locale);
  const sportName = SPORT_DISPLAY_NAME[sport][locale];
  const ctaLabel = dict.tacticalPage.finalCta.ctaPrimary;
  const playsTitle = dict.sportPage.playsTitle.replace("{sport}", sportName);
  const featuresTitle = dict.sportPage.featuresTitle.replace("{sport}", sportName.toLowerCase());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Pulse Tactical for ${SPORT_DISPLAY_NAME[sport].en}`,
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    url: BOARD_URL,
    description: content.meta.description,
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
        <SportHero sport={sport} sportName={sportName} content={content.hero} ctaLabel={ctaLabel} />
        <SportValue content={content.value} />
        <SportBoardShowcase sport={sport} sportName={sportName} labels={content.board.labels} />
        <SportPlays sport={sport} eyebrow={dict.sportPage.playsEyebrow} title={playsTitle} plays={content.plays} />
        <SportFeatures eyebrow={dict.sportPage.featuresEyebrow} title={featuresTitle} items={content.features} />
        <SportHowItWorks
          eyebrow={dict.tacticalPage.howItWorks.eyebrow}
          title={dict.tacticalPage.howItWorks.title}
          steps={content.howItWorks.steps}
        />
        <SportFinalCta content={content.finalCta} ctaLabel={ctaLabel} />
      </main>
      <Footer dict={dict.footer} locale={locale} />
    </div>
  );
}
