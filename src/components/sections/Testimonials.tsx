import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

export function Testimonials({ dict }: { dict: Dictionary["testimonials"] }) {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {dict.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <GlassCard className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 text-achievement">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} size={14} className="fill-achievement" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-light to-deep-purple" />
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-text-tertiary">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
