import { Dumbbell, Flame, Users, MapPin, Star, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

const ICONS = [Dumbbell, Flame, Users, MapPin, Star, ShieldCheck];
const COLORS = [
  "from-primary-light to-primary",
  "from-streak to-error",
  "from-ai-blue to-primary",
  "from-success to-ai-blue",
  "from-achievement to-streak",
  "from-neon to-deep-purple",
];

export function Achievements({ dict }: { dict: Dictionary["achievements"] }) {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {dict.badges.map((title, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={title} delay={i * 0.06}>
                <GlassCard className="flex flex-col items-center gap-4 py-8 text-center">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${COLORS[i]} shadow-[0_0_30px_-8px_color-mix(in_srgb,var(--color-primary-light)_60%,transparent)]`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-bold leading-snug text-white sm:text-sm">
                    {title}
                  </span>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
