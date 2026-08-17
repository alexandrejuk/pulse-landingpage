import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export type ScreenshotVariant = "coach" | "nutri";

/** Resolves a screenshot filename to the default app screenshot, or to the
 * Coach/Nutritionist workspace variant living in its own /screenshots/<variant>
 * subfolder, so the same section component can serve all three landing pages. */
export function screenshotSrc(name: string, variant?: ScreenshotVariant) {
  return variant ? `/screenshots/${variant}/${name}` : `/screenshots/${name}`;
}

export type PersonaScreenshotSlot = "home" | "ia" | "pulseLive" | "extra";

// Real per-persona screenshots (test accounts), replacing the generic
// mock screens the coach/nutri pages used before real ones existed. Only
// 4 exist per persona -- "extra" is each persona's own flagship screen
// (coach: workout-template library; nutri: per-patient progress detail),
// not a shared filename, which is why this needs its own lookup instead
// of reusing screenshotSrc's single `name` param.
const PERSONA_SCREENSHOTS: Record<ScreenshotVariant, Record<PersonaScreenshotSlot, string>> = {
  coach: {
    home: "coach-home.png",
    ia: "coach-ia.png",
    pulseLive: "coach-pulse-live.png",
    extra: "coach-workout.png",
  },
  nutri: {
    home: "nutri-home.png",
    ia: "nutri-ia.png",
    pulseLive: "nutri-pulse-live.png",
    extra: "nutri-detail-pacient.png",
  },
};

export function personaScreenshotSrc(variant: ScreenshotVariant, slot: PersonaScreenshotSlot) {
  return `/screenshots/${variant}/${PERSONA_SCREENSHOTS[variant][slot]}`;
}
