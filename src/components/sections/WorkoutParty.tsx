"use client";

import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Float } from "@/components/ui/Float";
import { AppScreenshot } from "@/components/ui/AppScreenshot";
import { screenshotSrc } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries";

export function WorkoutParty({ dict }: { dict: Dictionary["workoutParty"] }) {
  return (
    <section className="relative py-28">
      <GradientBlob className="right-1/2 bottom-0 h-[460px] w-[460px] translate-x-1/2 bg-primary/20" />
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative flex justify-center">
            <Float duration={6} delay={0}>
              <PhoneFrame size="lg">
                <AppScreenshot src={screenshotSrc("party-workout.png")} alt="PulseUp party workout screen" />
              </PhoneFrame>
            </Float>
          </div>
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
