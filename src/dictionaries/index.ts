import "server-only";
import type { Locale } from "@/i18n/config";
import en from "./en.json";

const dictionaries = {
  en: () => import("./en.json").then((m) => m.default),
  pt: () => import("./pt.json").then((m) => m.default),
  es: () => import("./es.json").then((m) => m.default),
};

export type Dictionary = typeof en;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionaries[locale]();
