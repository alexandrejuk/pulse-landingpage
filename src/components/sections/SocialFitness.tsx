import { Users, Zap, Globe2, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Float } from "@/components/ui/Float";
import { AppScreenshot } from "@/components/ui/AppScreenshot";
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
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        </div>

        <Reveal delay={0.1}>
          <div className="relative flex justify-center">
            <Float duration={6} delay={0}>
              <PhoneFrame size="lg">
                <AppScreenshot src="/screenshots/discovery.png" alt="PulseUp discover screen" />
              </PhoneFrame>
            </Float>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
