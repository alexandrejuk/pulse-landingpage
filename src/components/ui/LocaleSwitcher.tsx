"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

function pathWithLocale(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");
  segments[1] = nextLocale;
  return segments.join("/") || "/";
}

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-xs font-semibold text-text-secondary transition-colors hover:text-white"
        aria-label="Change language"
      >
        <Globe size={14} />
        {locale.toUpperCase()}
      </button>

      {open && (
        <div className="glass absolute right-0 top-11 z-50 w-36 overflow-hidden rounded-xl py-1">
          {locales.map((l) => (
            <a
              key={l}
              href={pathWithLocale(pathname, l)}
              className={cn(
                "block px-4 py-2 text-sm font-medium text-text-secondary hover:bg-white/5 hover:text-white",
                l === locale && "text-white"
              )}
            >
              {localeNames[l]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
