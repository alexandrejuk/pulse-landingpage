import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { SportPageContent } from "@/lib/sportPages";

/** The "why this sport" pitch -- deliberately just a title, one paragraph
 * and 3 bullet points, no generic feature talk (that's SportFeatures,
 * further down). */
export function SportValue({ content }: { content: SportPageContent["value"] }) {
  return (
    <section className="relative py-24">
      <Container className="max-w-2xl">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {content.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-balance text-lg leading-relaxed text-text-secondary">{content.description}</p>
        </Reveal>
        <div className="mt-8 flex flex-col gap-4">
          {content.points.map((point, i) => (
            <Reveal key={point} delay={0.14 + i * 0.06}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Check size={12} className="text-primary-light" />
                </span>
                <span className="text-text-secondary">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
