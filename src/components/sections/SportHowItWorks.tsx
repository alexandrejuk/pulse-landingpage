import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SportPageContent } from "@/lib/sportPages";

const NUMBERS = ["01", "02", "03", "04"];

/** Build → Draw → Animate → Share, same structure as the main page's
 * TacticalHowItWorks, but each step's title/description is reworded per
 * sport (see content.howItWorks.steps). */
export function SportHowItWorks({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: SportPageContent["howItWorks"]["steps"];
}) {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative border-t border-white/10 pt-5">
                <span className="font-mono text-3xl font-bold text-primary/40">{NUMBERS[i]}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
