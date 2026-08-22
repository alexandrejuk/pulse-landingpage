import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** A sport-relevant SUBSET of the real toolset (5 items, per the brief --
 * "não precisa listar todas as funcionalidades"), not the full feature
 * grid the main /pulse-tactical page shows. */
export function SportFeatures({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={(i % 5) * 0.06}>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <CheckCircle2 size={18} className="shrink-0 text-primary-light" />
                <span className="text-sm font-semibold text-white">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
