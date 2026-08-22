import type { Locale } from "@/i18n/config";

// The SEO/acquisition layer -- one indexable landing page per sport at
// /pulse-tactical/<slug>, never linked from the main nav/footer (see
// src/app/[locale]/pulse-tactical/[sport]/page.tsx's own comment). The
// general /pulse-tactical page stays the one official, nav-linked product
// page; these are parallel, sport-flavored acquisition pages that all point
// back to it/board.pulseup.io.
//
// `slug` is the URL segment (kebab-case, e.g. "american-football"); `key`
// is the internal sport identifier used everywhere else in this codebase
// (SPORT_GIF, Modality, TacticalWorkout.sport -- camelCase, e.g.
// "americanFootball"). They differ for 2 of the 7 sports, hence both fields
// instead of deriving one from the other.
export const SPORT_SLUGS = [
  "soccer",
  "basketball",
  "volleyball",
  "tennis",
  "american-football",
  "ice-hockey",
  "baseball",
] as const;

export type SportSlug = (typeof SPORT_SLUGS)[number];

export const SLUG_TO_KEY: Record<SportSlug, string> = {
  soccer: "soccer",
  basketball: "basketball",
  volleyball: "volleyball",
  tennis: "tennis",
  "american-football": "americanFootball",
  "ice-hockey": "iceHockey",
  baseball: "baseball",
};

export function isSportSlug(value: string): value is SportSlug {
  return (SPORT_SLUGS as readonly string[]).includes(value);
}

// Localized display name (e.g. hero's "Nome do esporte" line) -- kept as
// its own small map here rather than a field inside each sport's content
// JSON, since it's the same 1-3 words every other locale-aware component on
// this site already keeps in a lookup table (see the main page's own
// dict.tacticalPage.sports.list), not real page copy worth delegating.
export const SPORT_DISPLAY_NAME: Record<SportSlug, Record<Locale, string>> = {
  soccer: { en: "Soccer", pt: "Futebol", es: "Fútbol" },
  basketball: { en: "Basketball", pt: "Basquete", es: "Baloncesto" },
  volleyball: { en: "Volleyball", pt: "Vôlei", es: "Vóleibol" },
  tennis: { en: "Tennis", pt: "Tênis", es: "Tenis" },
  "american-football": { en: "American Football", pt: "Futebol Americano", es: "Fútbol Americano" },
  "ice-hockey": { en: "Ice Hockey", pt: "Hóquei no Gelo", es: "Hockey sobre Hielo" },
  baseball: { en: "Baseball", pt: "Beisebol", es: "Béisbol" },
};

// A single {x,y} point (0-100, percent of the diagram's own viewBox) used
// to draw a play's movement arrow over its sport's CourtShape background --
// see PlayPreview. Not real coaching diagrams, just enough visual signature
// per play to read as "a real tactic", matching the brief's own "pequena
// prévia visual da jogada".
export interface PlayPathPoint {
  x: number;
  y: number;
}

export interface SportPlay {
  name: string;
  description: string;
  path: PlayPathPoint[];
}

export interface SportPageContent {
  meta: { title: string; description: string };
  hero: { headline: string; subheadline: string };
  value: { title: string; description: string; points: string[] };
  board: { labels: string[] };
  plays: SportPlay[];
  features: string[];
  howItWorks: { steps: { title: string; description: string }[] };
  finalCta: { headline: string; description: string };
}

// Loaded via explicit static imports (not fs.readFileSync -- this needs to
// work in both the Node build and the edge/serverless runtime, and stay
// tree-shakeable/statically analyzable by Next's bundler) -- one row per
// sport, one column per locale, mirroring src/dictionaries/index.ts's own
// dictionaries map shape.
import soccerEn from "@/content/sportPages/soccer.en.json";
import soccerPt from "@/content/sportPages/soccer.pt.json";
import soccerEs from "@/content/sportPages/soccer.es.json";
import basketballEn from "@/content/sportPages/basketball.en.json";
import basketballPt from "@/content/sportPages/basketball.pt.json";
import basketballEs from "@/content/sportPages/basketball.es.json";
import volleyballEn from "@/content/sportPages/volleyball.en.json";
import volleyballPt from "@/content/sportPages/volleyball.pt.json";
import volleyballEs from "@/content/sportPages/volleyball.es.json";
import tennisEn from "@/content/sportPages/tennis.en.json";
import tennisPt from "@/content/sportPages/tennis.pt.json";
import tennisEs from "@/content/sportPages/tennis.es.json";
import americanFootballEn from "@/content/sportPages/american-football.en.json";
import americanFootballPt from "@/content/sportPages/american-football.pt.json";
import americanFootballEs from "@/content/sportPages/american-football.es.json";
import iceHockeyEn from "@/content/sportPages/ice-hockey.en.json";
import iceHockeyPt from "@/content/sportPages/ice-hockey.pt.json";
import iceHockeyEs from "@/content/sportPages/ice-hockey.es.json";
import baseballEn from "@/content/sportPages/baseball.en.json";
import baseballPt from "@/content/sportPages/baseball.pt.json";
import baseballEs from "@/content/sportPages/baseball.es.json";

const CONTENT: Record<SportSlug, Record<Locale, SportPageContent>> = {
  soccer: { en: soccerEn, pt: soccerPt, es: soccerEs },
  basketball: { en: basketballEn, pt: basketballPt, es: basketballEs },
  volleyball: { en: volleyballEn, pt: volleyballPt, es: volleyballEs },
  tennis: { en: tennisEn, pt: tennisPt, es: tennisEs },
  "american-football": { en: americanFootballEn, pt: americanFootballPt, es: americanFootballEs },
  "ice-hockey": { en: iceHockeyEn, pt: iceHockeyPt, es: iceHockeyEs },
  baseball: { en: baseballEn, pt: baseballPt, es: baseballEs },
};

export function getSportPageContent(slug: SportSlug, locale: Locale): SportPageContent {
  return CONTENT[slug][locale];
}
