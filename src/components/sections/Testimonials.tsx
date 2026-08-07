import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

// Index-aligned with dict.testimonials.items -- not part of the dictionary
// itself since the same photo is reused across locales.
const AVATARS = ["/avatars/marina.jpg", "/avatars/diego.jpg", "/avatars/kaique.jpg"];

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
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image src={AVATARS[i]} alt={t.name} fill className="object-cover" sizes="40px" />
                  </div>
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
