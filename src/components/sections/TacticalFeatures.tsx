"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

const PLAYER_DOTS = ["bg-primary-light", "bg-error", "bg-achievement", "bg-ai-blue"];

/** BUILD's own tiny visual -- 4 player dots and a ball, appearing one at a
 * time on a loop, standing in for "placing pieces on the board" without a
 * real canvas engine. */
function BuildVisual() {
  return (
    <div className="flex h-24 items-center justify-center gap-3">
      {PLAYER_DOTS.map((color, i) => (
        <motion.span
          key={i}
          className={`h-6 w-6 rounded-full ${color}`}
          initial={{ opacity: 0.15, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.4, ease: "easeOut" }}
        />
      ))}
      <motion.span
        className="ml-1 h-5 w-5 rounded-full border-2 border-white/70"
        initial={{ opacity: 0.15, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}

/** DRAW's own tiny visual -- an arrow, a curve and a dashed pass line, the
 * same annotation vocabulary the real board's toolbar uses. */
function DrawVisual() {
  return (
    <svg viewBox="0 0 200 96" className="h-24 w-full" fill="none">
      <path d="M10 20 L110 20" stroke="var(--color-primary-light)" strokeWidth="2.5" />
      <path d="M100 14 L112 20 L100 26" stroke="var(--color-primary-light)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 48 Q70 20 130 48" stroke="var(--color-primary-light)" strokeWidth="2.5" />
      <path d="M118 41 L131 48 L119 55" stroke="var(--color-primary-light)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 76 L150 76" stroke="var(--color-primary-light)" strokeWidth="2" strokeDasharray="6 5" />
      <circle cx="150" cy="76" r="4" stroke="var(--color-primary-light)" strokeWidth="2" />
    </svg>
  );
}

/** ANIMATE's own tiny visual -- the literal "0s ────●──── 8s" scrubber from
 * the brief, with the dot actually sliding back and forth. This is the
 * headline feature, so it's the one card whose visual keeps moving instead
 * of settling once on scroll-into-view. */
function AnimateVisual() {
  return (
    <div className="flex h-24 flex-col items-center justify-center gap-3">
      <div className="relative h-px w-full max-w-[220px] bg-white/15">
        <motion.span
          className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary-light shadow-[0_0_10px_var(--color-primary-light)]"
          animate={{ left: ["2%", "96%", "2%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="flex w-full max-w-[220px] justify-between font-mono text-[11px] text-text-tertiary">
        <span>0s</span>
        <span>8s</span>
      </div>
    </div>
  );
}

/** SHARE's own tiny visual -- CREATE → ANIMATE → SAVE → GIF/SHARE, the real
 * pipeline (see generateAndUploadGif in the board's own code). */
function ShareVisual({ steps }: { steps: string[] }) {
  return (
    <div className="flex h-24 flex-wrap items-center justify-center gap-2">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-text-secondary">
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight className="h-3 w-3 text-text-tertiary" />}
        </span>
      ))}
    </div>
  );
}

export function TacticalFeatures({ dict }: { dict: Dictionary["tacticalPage"]["features"] }) {
  const visuals = [BuildVisual, DrawVisual, AnimateVisual, null];

  return (
    <section id="features" className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {dict.cards.map((card, i) => {
            const Visual = visuals[i];
            const isAnimate = card.key === "animate";
            return (
              <Reveal key={card.key} delay={i * 0.08}>
                <GlassCard
                  hover={false}
                  glow={isAnimate}
                  className={isAnimate ? "border-primary/30" : undefined}
                >
                  <span className="text-2xl font-extrabold tracking-tight text-white">{card.title}</span>
                  <p className="mt-2 text-text-secondary">{card.subtitle}</p>
                  <div className="mt-6">
                    {card.key === "share" ? <ShareVisual steps={dict.shareSteps} /> : Visual ? <Visual /> : null}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
