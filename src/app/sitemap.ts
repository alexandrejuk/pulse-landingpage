import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SPORT_SLUGS } from "@/lib/sportPages";

// No sitemap existed for this site before -- every route below is real and
// indexable (nothing here carries noindex). The 21 sport-page URLs
// (7 sports x 3 locales) are the main reason this file exists: they're
// deliberately not linked from Navbar/Footer (see
// src/app/[locale]/pulse-tactical/[sport]/page.tsx's own comment), so a
// sitemap is their only structured discovery path for crawlers, per the
// product brief's explicit "adicionar ao sitemap" requirement.
const siteUrl = "https://pulseup.io";

// path WITHOUT a leading locale segment, e.g. "" for home, "/coach" for
// /en/coach, "/pulse-tactical/soccer" for /en/pulse-tactical/soccer.
const STATIC_PATHS = ["", "/coach", "/nutri", "/parceiros", "/pulse-tactical", "/privacy-policy", "/terms-of-use"];
const SPORT_PATHS = SPORT_SLUGS.map((slug) => `/pulse-tactical/${slug}`);

function localizedAlternates(path: string) {
  return Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of [...STATIC_PATHS, ...SPORT_PATHS]) {
    // Priority/changefreq: the homepage and the general product page rank
    // highest and are the ones most likely to change; sport pages are
    // static acquisition content (lower churn, still real pages -- not an
    // afterthought, just not the primary funnel).
    const isHome = path === "";
    const isSportPage = SPORT_PATHS.includes(path);
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 1 : isSportPage ? 0.6 : 0.8,
        alternates: { languages: localizedAlternates(path) },
      });
    }
  }

  return entries;
}
