import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries";

export function Pricing({ dict }: { dict: Dictionary["pricing"] }) {
  return (
    <section id="pricing" className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {dict.plans.map((plan, i) => {
            const highlight = Boolean(plan.badge);
            return (
              <Reveal key={plan.name} delay={i * 0.1}>
                <GlassCard
                  hover={false}
                  className={cn(
                    "relative h-full",
                    highlight && "border-primary/40 bg-gradient-to-b from-primary/10 to-surface/60"
                  )}
                  glow={highlight}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-8 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary-light to-primary px-3 py-1 text-xs font-bold text-white">
                      <Sparkles size={12} />
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-sm font-medium text-text-tertiary">{plan.period}</span>
                  </div>

                  <ul className="mt-8 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span
                          className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            highlight ? "bg-primary/25" : "bg-white/10"
                          )}
                        >
                          <Check size={12} className="text-primary-light" />
                        </span>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#top"
                    variant={highlight ? "primary" : "secondary"}
                    className="mt-10 w-full"
                  >
                    {plan.cta}
                  </Button>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
