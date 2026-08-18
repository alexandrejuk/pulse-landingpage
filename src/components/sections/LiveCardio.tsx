"use client";

import { Trophy, Timer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Float } from "@/components/ui/Float";
import { AppScreenshot } from "@/components/ui/AppScreenshot";
import { screenshotSrc } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries";

export function LiveCardio({ dict }: { dict: Dictionary["liveCardio"] }) {
  return (
    <section id="live-cardio" className="relative py-28">
      <GradientBlob className="left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 bg-ai-blue/15" />
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="relative flex justify-center">
              <Float duration={6} delay={0}>
                <PhoneFrame size="lg">
                  <AppScreenshot src={screenshotSrc("live-cardio.png")} alt="PulseUp live cardio map screen" />
                </PhoneFrame>
              </Float>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <GlassCard hover={false} className="flex flex-col justify-between gap-6 p-8">
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
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
