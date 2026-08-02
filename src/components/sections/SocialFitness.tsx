import { Users, Zap, Globe2, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

const ICONS = [Users, Zap, Globe2, Heart];
const COLORS = [
  "from-primary-light to-primary",
  "from-achievement to-streak",
  "from-ai-blue to-success",
  "from-error to-primary",
];

export function SocialFitness({ dict }: { dict: Dictionary["socialFitness"] }) {
  return (
    <section id="social-fitness" className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.features.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={feature.title} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${COLORS[i]}`}
                  >
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
