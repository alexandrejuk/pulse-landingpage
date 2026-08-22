import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { Reveal } from "@/components/ui/Reveal";
import { SPORT_GIF } from "@/lib/tacticalMedia";
import type { Dictionary } from "@/dictionaries";

/** The product's real differentiator, given its own big section: a static
 * player→ball→player diagram (muted, plain lines) next to the real,
 * animated version of the same idea (the board's own live GIF) -- side by
 * side rather than a scroll-triggered morph, so it reads instantly instead
 * of asking the visitor to wait for an effect. */
export function TacticalAnimationShowcase({ dict }: { dict: Dictionary["tacticalPage"]["animation"] }) {
  return (
    <section className="relative py-28">
      <GradientBlob className="right-[-10%] top-1/3 h-[420px] w-[420px] bg-primary/15" />
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <span className="font-mono text-[11px] font-semibold tracking-widest text-text-tertiary">
                {dict.staticLabel}
              </span>
              <div className="mt-8 flex items-center justify-center gap-3">
                {dict.staticSteps.map((step, i) => (
                  <span key={i} className="flex items-center gap-3">
                    <span className="rounded-full border border-white/15 px-3 py-1.5 text-sm font-medium text-text-secondary">
                      {step}
                    </span>
                    {i < dict.staticSteps.length - 1 && <span className="text-text-tertiary">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center">
            <ArrowRight className="h-6 w-6 rotate-90 text-primary-light lg:rotate-0" />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-primary/30 p-4 shadow-[0_0_60px_-24px_var(--color-primary)]">
              <span className="font-mono text-[11px] font-semibold tracking-widest text-primary-light">
                {dict.animatedLabel}
              </span>
              <div className="mt-3">
                <BrowserFrame>
                  {/* eslint-disable-next-line @next/next/no-img-element -- real,
                      live animated GIF; next/image's optimizer risks re-encoding
                      it down to a still frame. */}
                  <img src={SPORT_GIF.soccer} alt="Pulse Tactical -- the same play, animated" className="block w-full" />
                </BrowserFrame>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.28}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2">
            {dict.animatedSteps.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="text-sm font-medium text-text-secondary">{step}</span>
                {i < dict.animatedSteps.length - 1 && <span className="text-text-tertiary">→</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
