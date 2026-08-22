import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GradientBlob } from "@/components/ui/GradientBlob";
import type { Dictionary } from "@/dictionaries";

// Same reasoning as TacticalHero: the CTA is a real, working link
// (board.pulseup.io) today, not a store placeholder, so this page can't
// reuse the shared FinalCta -- it hardcodes both its buttons to
// APP_STORE_URL/PLAY_STORE_URL. Just one button here, per the brief --
// footnote covers what the shared component would've used a second
// (App/Play Store) button for.
const BOARD_URL = "https://board.pulseup.io";

export function TacticalFinalCta({ dict }: { dict: Dictionary["tacticalPage"]["finalCta"] }) {
  return (
    <section className="relative py-28">
      <Container>
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center sm:px-16">
          <GradientBlob className="left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-primary/40" />
          <div className="relative z-10">
            <Reveal>
              <p className="mb-4 whitespace-pre-line text-balance text-sm font-bold uppercase tracking-wide text-primary-light">
                {dict.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                {dict.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-text-secondary">
                {dict.description}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex justify-center">
                <Button href={BOARD_URL} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  {dict.ctaPrimary}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-5 font-mono text-xs text-text-tertiary">{dict.footnote}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
