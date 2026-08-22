import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

/** "From idea to movement" -- 4 numbered steps, horizontal on desktop
 * (matches the brief's own big "01 —" numbering, echoing the PLAY #024 /
 * FORMATION 4—3—3 broadcast-label motif used in the hero and sports
 * sections), stacked on mobile. */
export function TacticalHowItWorks({ dict }: { dict: Dictionary["tacticalPage"]["howItWorks"] }) {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {dict.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="relative border-t border-white/10 pt-5">
                <span className="font-mono text-3xl font-bold text-primary/40">{step.n}</span>
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
