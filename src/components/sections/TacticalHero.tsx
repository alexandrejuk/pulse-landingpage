import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Float } from "@/components/ui/Float";
import { Reveal } from "@/components/ui/Reveal";
import { APP_STORE_URL } from "@/lib/constants";
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

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-light uppercase">
              {dict.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {dict.titleLine1}
              <br />
              {dict.titleLine2}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-text-secondary">
              {dict.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={BOARD_URL} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                {dict.ctaPrimary}
              </Button>
              <Button href={APP_STORE_URL} variant="secondary" size="lg">
                {dict.ctaSecondary}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.32}>
          <Float duration={7} distance={10} className="mt-16">
            <BrowserFrame className="mx-auto max-w-4xl">
              {/* Real, live animated GIF -- next/image's optimizer risks re-encoding it down to a still frame. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/tactical/soccer.gif"
                alt="Pulse Tactical -- animated soccer play"
                className="block w-full"
              />
            </BrowserFrame>
          </Float>
        </Reveal>
      </Container>
    </section>
  );
}
