"use client";

import { motion } from "framer-motion";
import { Zap, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { GradientBlob } from "@/components/ui/GradientBlob";
import type { Dictionary } from "@/dictionaries";

export function WorkoutParty({ dict }: { dict: Dictionary["workoutParty"] }) {
  return (
    <section className="relative py-28">
      <GradientBlob className="right-1/2 bottom-0 h-[460px] w-[460px] translate-x-1/2 bg-primary/20" />
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <GlassCard hover={false} className="mx-auto max-w-md p-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wide text-text-tertiary">
                {dict.lobbyLabel}
              </span>
              <h3 className="mt-1 text-xl font-extrabold text-white">{dict.lobbyName}</h3>
            </div>

            <div className="relative mx-auto mt-8 flex h-28 w-28 items-center justify-center">
              <svg className="absolute inset-0 h-full w-full -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="56"
                  cy="56"
                  r="50"
                  fill="none"
                  stroke="url(#partyGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 50}
                  initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 50 * 0.25 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="partyGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-4xl font-extrabold text-white">3</span>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-3">
              {dict.players.map((player) => (
                <div key={player.name} className="flex flex-col items-center gap-2">
                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-deep-purple ${
                      player.ready ? "ring-2 ring-success ring-offset-2 ring-offset-surface" : "opacity-50"
                    }`}
                  >
                    {player.ready && (
                      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success ring-2 ring-surface">
                        <Check size={11} className="text-white" />
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold text-text-secondary">
                    {player.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 rounded-full bg-achievement/15 px-4 py-2.5">
              <Zap size={14} className="fill-achievement text-achievement" />
              <span className="text-sm font-bold text-achievement">{dict.bonus}</span>
            </div>
          </GlassCard>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-light uppercase">
              {dict.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {dict.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-secondary">
              {dict.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-col gap-4">
              {dict.steps.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check size={12} className="text-primary-light" />
                  </span>
                  <span className="text-sm text-text-secondary">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
