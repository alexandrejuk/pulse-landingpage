"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { APP_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries";

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary["nav"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#top" aria-label="Pulse home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {dict.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher locale={locale} />
          <Button href={APP_STORE_URL} size="md">
            {dict.download}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher locale={locale} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <Container className="flex flex-col gap-5 pb-6 pt-4">
              {dict.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <Button href={APP_STORE_URL} className="mt-2 justify-center">
                {dict.download}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
