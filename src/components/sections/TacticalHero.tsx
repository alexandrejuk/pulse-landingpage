import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { TechChip } from "@/components/ui/TechChip";
import { Float } from "@/components/ui/Float";
import { Reveal } from "@/components/ui/Reveal";
import { SPORT_GIF } from "@/lib/tacticalMedia";
import type { Dictionary } from "@/dictionaries";

// board.pulseup.io -- the real Pulse Tactical editor. Unlike every other
// CTA on this site (Hero/FinalCta), this one is a real, working link today,
// not a store placeholder (see APP_STORE_URL/PLAY_STORE_URL's own comment)
// -- that's why this page gets its own hero instead of reusing Hero, which
// hardcodes both its buttons to those two placeholder constants.
const BOARD_URL = "https://board.pulseup.io";

export function TacticalHero({ dict }: { dict: Dictionary["tacticalPage"]["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
      <GradientBlob className="left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-primary/25" />

      {/* Explicit grid placement (not just `order`) so the mobile stacking
          order (text, board, CTA -- this page's own priority order) and the
          desktop layout (text+CTA in a left column, board spanning both
          rows on the right) can both be true at once from the same markup. */}
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-6">
        <div className="order-1 text-center lg:order-none lg:col-start-1 lg:row-start-1 lg:text-left">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-light uppercase">
              {dict.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {dict.titleLine1}
              <br />
              {dict.titleLine2}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-lg text-balance text-lg leading-relaxed text-text-secondary lg:mx-0">
              {dict.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Board visual -- a real, live animated tactic (not a mock), with
            broadcast-style metadata chips overlaid to sell "professional
            software" rather than "marketing screenshot". */}
        <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <Reveal delay={0.2}>
            <Float duration={7} distance={8}>
              <div className="relative">
                <BrowserFrame className="mx-auto max-w-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element -- real,
                      live animated GIF; next/image's optimizer risks re-encoding
                      it down to a still frame. */}
                  <img src={SPORT_GIF.soccer} alt="Pulse Tactical -- animated soccer play" className="block w-full" />
                </BrowserFrame>

                <div className="absolute left-3 top-14 hidden sm:block">
                  <TechChip>{dict.meta.play}</TechChip>
                </div>
                <div className="absolute right-3 top-14 hidden sm:block">
                  <TechChip>{dict.meta.formation}</TechChip>
                </div>
                <div className="absolute bottom-3 left-3 hidden sm:block">
                  <TechChip>{dict.meta.duration}</TechChip>
                </div>
                <div className="absolute bottom-3 right-3 hidden sm:block">
                  <TechChip>{dict.meta.fps}</TechChip>
                </div>
              </div>
            </Float>

            {/* Timeline strip -- decorative, echoes the board's own playback
                scrubber (see ANIMATE feature card) without pretending to be
                a working control here. */}
            <div className="mx-auto mt-6 flex max-w-xl items-center gap-3 font-mono text-[11px] text-text-tertiary">
              <span>0s</span>
              <div className="relative h-px flex-1 bg-white/15">
                <span className="absolute left-[38%] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light shadow-[0_0_8px_var(--color-primary-light)]" />
              </div>
              <span>8s</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.28} className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href={BOARD_URL} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {dict.ctaPrimary}
            </Button>
            <Button href="#features" variant="ghost" size="lg">
              {dict.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
