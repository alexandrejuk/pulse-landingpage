"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { TechChip } from "@/components/ui/TechChip";
import { cn } from "@/lib/utils";
import { SPORT_GIF } from "@/lib/tacticalMedia";
import type { Dictionary } from "@/dictionaries";

/** "One board. Every game." -- clicking a sport swaps the board visual to
 * that sport's own real, live tactic GIF. Not a full editor demo (per the
 * brief, that's out of scope here) -- just proof, in one interaction, that
 * the same board adapts to 7 different fields/courts. */
export function TacticalSportsSwitcher({ dict }: { dict: Dictionary["tacticalPage"]["sports"] }) {
  const [active, setActive] = useState(dict.list[0].key);
  const activeLabel = dict.list.find((s) => s.key === active)?.label ?? dict.list[0].label;

  return (
    <section id="sports" className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {dict.list.map((sport) => (
            <button
              key={sport.key}
              onClick={() => setActive(sport.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200",
                active === sport.key
                  ? "border-transparent bg-gradient-to-r from-primary-light to-primary text-white"
                  : "border-white/10 bg-white/5 text-text-secondary hover:text-white"
              )}
            >
              {sport.label}
            </button>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative mx-auto max-w-2xl">
            <BrowserFrame>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- real,
                      live animated GIF per sport; next/image's optimizer risks
                      re-encoding it down to a still frame. */}
                  <img src={SPORT_GIF[active]} alt={`Pulse Tactical -- animated ${activeLabel} play`} className="block w-full" />
                </motion.div>
              </AnimatePresence>
            </BrowserFrame>
            <div className="absolute left-3 top-3">
              <TechChip>
                <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
                {activeLabel.toUpperCase()}
              </TechChip>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
