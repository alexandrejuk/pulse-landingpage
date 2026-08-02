"use client";

import { motion } from "framer-motion";
import { MapPin, Radio, Trophy, Timer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { GradientBlob } from "@/components/ui/GradientBlob";
import type { Dictionary } from "@/dictionaries";

export function LiveCardio({ dict }: { dict: Dictionary["liveCardio"] }) {
  return (
    <section id="live-cardio" className="relative py-28">
      <GradientBlob className="left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 bg-ai-blue/15" />
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <Reveal delay={0.1}>
          <GlassCard hover={false} className="mt-16 overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
              <div className="relative h-[340px] overflow-hidden bg-[#070e0a] sm:h-[420px]">
                <svg viewBox="0 0 400 400" className="h-full w-full opacity-90">
                  <path
                    d="M40 360 C 100 320, 60 240, 140 210 S 260 140, 220 60 S 340 20, 360 40"
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <circle cx="220" cy="60" r="7" fill="#38BDF8" />
                  <circle cx="140" cy="210" r="7" fill="#F97316" />
                </svg>

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-error opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-error" />
                  </span>
                  <span className="text-xs font-bold text-white">{dict.live}</span>
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur">
                  <Radio size={12} className="text-primary-light" />
                  <span className="text-xs font-semibold text-white">{dict.nearby}</span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-black/50 px-4 py-2.5 backdrop-blur"
                >
                  <MapPin size={16} className="text-primary-light" />
                  <div>
                    <div className="text-sm font-extrabold text-white">6.4 km</div>
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-white/50">
                      {dict.distanceLabel}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-achievement" />
                    <span className="text-sm font-bold text-white">{dict.leaderboardTitle}</span>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    {dict.leaderboard.map((entry, i) => (
                      <div
                        key={entry.name}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                              i === 0 ? "bg-achievement text-black" : "bg-white/10 text-white/60"
                            }`}
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm font-semibold text-white">{entry.name}</span>
                        </div>
                        <span className="text-xs font-medium text-text-secondary">{entry.pace}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <Timer size={16} className="text-primary-light" />
                  <div>
                    <div className="text-xs font-semibold text-white/70">{dict.nextEvent}</div>
                    <div className="text-sm font-bold text-white">{dict.nextEventDetail}</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
