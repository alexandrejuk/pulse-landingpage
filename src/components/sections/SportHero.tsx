import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Float } from "@/components/ui/Float";
import { Reveal } from "@/components/ui/Reveal";
import { SPORT_GIF } from "@/lib/tacticalMedia";
import { SLUG_TO_KEY, type SportPageContent, type SportSlug } from "@/lib/sportPages";

const BOARD_URL = "https://board.pulseup.io";

/** Same grid-placement approach as the main page's TacticalHero (mobile:
 * text, board, CTA; desktop: text+CTA left column, board spanning the
 * right) -- see that component's own comment for why explicit grid
 * placement is used instead of just `order`. */
export function SportHero({
  sport,
  sportName,
  content,
  ctaLabel,
}: {
  sport: SportSlug;
  sportName: string;
  content: SportPageContent["hero"];
  ctaLabel: string;
}) {
  const gif = SPORT_GIF[SLUG_TO_KEY[sport]];

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
      <GradientBlob className="left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-primary/25" />

      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-6">
        <div className="order-1 text-center lg:order-none lg:col-start-1 lg:row-start-1 lg:text-left">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-light uppercase">
              Pulse Tactical · {sportName}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-lg text-balance text-lg leading-relaxed text-text-secondary lg:mx-0">
              {content.subheadline}
            </p>
          </Reveal>
        </div>

        <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <Reveal delay={0.2}>
            <Float duration={7} distance={8}>
              <BrowserFrame className="mx-auto max-w-xl">
                {/* eslint-disable-next-line @next/next/no-img-element -- real,
                    live animated GIF; next/image's optimizer risks re-encoding
                    it down to a still frame. */}
                <img src={gif} alt={`Pulse Tactical -- animated ${sportName} play`} className="block w-full" />
              </BrowserFrame>
            </Float>
          </Reveal>
        </div>

        <Reveal delay={0.28} className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
          <div className="flex justify-center lg:justify-start">
            <Button href={BOARD_URL} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
