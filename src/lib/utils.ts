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
