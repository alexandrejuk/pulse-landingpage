"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Award, Flame, BarChart3, Gift } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

const ICONS = [Zap, TrendingUp, Award, Flame, BarChart3, Gift];
const COLORS = [
  "from-primary-light to-primary",
  "from-ai-blue to-primary",
  "from-achievement to-streak",
  "from-streak to-error",
  "from-primary to-deep-purple",
  "from-neon to-primary",
];

export function Gamification({ dict }: { dict: Dictionary["gamification"] }) {
  return (
    <section id="gamification" className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="relative mt-20">
          <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent lg:left-0 lg:top-6 lg:h-px lg:w-full lg:bg-gradient-to-r">
            <motion.div
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{ scaleY: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top left" }}
              className="h-full w-full origin-left bg-gradient-to-r from-primary-light via-primary to-transparent lg:origin-left"
            />
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-4">
            {dict.steps.map((label, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={label} delay={i * 0.1}>
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-3 lg:text-center">
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${COLORS[i]} shadow-[0_0_30px_-6px_rgba(168,85,247,0.7)] ring-4 ring-background`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-bold text-white lg:text-[13px]">{label}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
