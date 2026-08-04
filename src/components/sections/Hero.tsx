"use client";

import { Play, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Float } from "@/components/ui/Float";
import { Reveal } from "@/components/ui/Reveal";
import { AppleIcon } from "@/components/ui/AppleIcon";
import { PlayStoreIcon } from "@/components/ui/PlayStoreIcon";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { WorkoutMock, PartyMock, CardioMock } from "@/components/mocks/ScreenMocks";
import { AppScreenshot } from "@/components/ui/AppScreenshot";
import type { Dictionary } from "@/dictionaries";

const PARTICLES = [
  { top: "12%", left: "8%", size: 3, duration: 7, delay: 0 },
  { top: "22%", left: "88%", size: 2, duration: 9, delay: 0.5 },
  { top: "68%", left: "6%", size: 2, duration: 8, delay: 1 },
  { top: "80%", left: "92%", size: 3, duration: 6, delay: 1.5 },
  { top: "8%", left: "48%", size: 2, duration: 10, delay: 0.2 },
  { top: "48%", left: "95%", size: 2, duration: 7.5, delay: 0.8 },
  { top: "58%", left: "20%", size: 3, duration: 9.5, delay: 1.2 },
  { top: "30%", left: "70%", size: 2, duration: 8.5, delay: 0.3 },
];

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_10%,transparent_75%)]" />
      <GradientBlob className="left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 bg-primary/40" />
      <GradientBlob className="right-[-10%] top-[30%] h-[380px] w-[380px] bg-neon/20" />
      <GradientBlob className="left-[-10%] top-[55%] h-[380px] w-[380px] bg-deep-purple/30" />

      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{ top: p.top, left: p.left }}
          className="pointer-events-none absolute z-0 hidden sm:block"
        >
          <Float duration={p.duration} delay={p.delay} distance={14}>
            <div
              style={{ width: p.size, height: p.size }}
              className="rounded-full bg-primary-light/70"
            />
          </Float>
        </div>
      ))}

      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-light">
            <Sparkles size={13} />
            {dict.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {dict.titleLine1}
            <br />
            <span className="text-gradient">{dict.titleLine2}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl whitespace-pre-line text-balance text-lg leading-relaxed text-text-secondary sm:text-xl">
            {dict.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button href={APP_STORE_URL} size="lg" icon={<AppleIcon className="h-5 w-5" />}>
              {dict.appStore}
            </Button>
            <Button
              href={PLAY_STORE_URL}
              variant="secondary"
              size="lg"
              icon={<PlayStoreIcon className="h-4 w-4" />}
            >
              {dict.playStore}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full glass">
              <Play size={12} className="ml-0.5 fill-white text-white" />
            </span>
            {dict.watchDemo}
          </button>
        </Reveal>
      </Container>

      <div className="relative z-10 mt-20 flex items-center justify-center">
        <Container className="flex items-end justify-center">
          <div className="relative flex items-end justify-center">
            <Float duration={7} delay={0.4} className="hidden xl:block">
              <PhoneFrame size="sm" className="-mr-10 mb-10 rotate-[-14deg] opacity-80 blur-[0.5px]">
                <CardioMock />
              </PhoneFrame>
            </Float>

            <Float duration={6} delay={0.1} className="hidden sm:block">
              <PhoneFrame size="md" className="-mr-6 mb-6 rotate-[-8deg]">
                <WorkoutMock />
              </PhoneFrame>
            </Float>

            <Float duration={5.5} delay={0}>
              <PhoneFrame size="lg" className="z-10">
                <AppScreenshot src="/screenshots/feed.png" alt="PulseUp feed screen" />
              </PhoneFrame>
            </Float>

            <Float duration={6} delay={0.2} className="hidden sm:block">
              <PhoneFrame size="md" className="-ml-6 mb-6 rotate-[8deg]">
                <PartyMock />
              </PhoneFrame>
            </Float>

            <Float duration={7} delay={0.6} className="hidden xl:block">
              <PhoneFrame size="sm" className="-ml-10 mb-10 rotate-[14deg] opacity-80 blur-[0.5px]">
                <AppScreenshot src="/screenshots/pulse-live.png" alt="PulseUp Live screen" />
              </PhoneFrame>
            </Float>
          </div>
        </Container>
      </div>
    </section>
  );
}
