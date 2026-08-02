"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries";

export function Faq({ dict }: { dict: Dictionary["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} />

        <div className="mt-14 flex flex-col gap-3">
          {dict.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-white">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 text-text-secondary transition-transform duration-300",
                        isOpen && "rotate-180 text-primary-light"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
