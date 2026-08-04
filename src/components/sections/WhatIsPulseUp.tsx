import { Check, User, Dumbbell as CoachIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

function ChecklistCard({
  icon: Icon,
  title,
  items,
  delay,
}: {
  icon: typeof User;
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <GlassCard hover={false} className="h-full">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
            <Icon size={18} className="text-primary-light" />
          </div>
          <h3 className="font-bold text-white">{title}</h3>
        </div>
        <ul className="mt-6 flex flex-col gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Check size={12} className="text-primary-light" />
              </span>
              <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </Reveal>
  );
}

// Plain-language product explainer placed directly after the Hero -- written
// to be understood in seconds by someone with zero context on PulseUp
// (explicitly for Google OAuth branding verification reviewers), not just
// existing users who already know the product.
export function WhatIsPulseUp({ dict }: { dict: Dictionary["whatIsPulseUp"] }) {
  return (
    <section id="what-is-pulseup" className="relative py-24">
      <Container className="max-w-4xl">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            {dict.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-center text-lg leading-relaxed text-text-secondary">
            {dict.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ChecklistCard icon={User} title={dict.forUsersTitle} items={dict.forUsersItems} delay={0.14} />
          <ChecklistCard icon={CoachIcon} title={dict.forCoachesTitle} items={dict.forCoachesItems} delay={0.2} />
        </div>
      </Container>
    </section>
  );
}
