import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GradientBlob } from "@/components/ui/GradientBlob";
import type { SportPageContent } from "@/lib/sportPages";

const BOARD_URL = "https://board.pulseup.io";

export function SportFinalCta({ content, ctaLabel }: { content: SportPageContent["finalCta"]; ctaLabel: string }) {
  return (
    <section className="relative py-28">
      <Container>
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center sm:px-16">
          <GradientBlob className="left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-primary/40" />
          <div className="relative z-10">
            <Reveal>
              <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                {content.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-text-secondary">{content.description}</p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-10 flex justify-center">
                <Button href={BOARD_URL} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  {ctaLabel}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
