import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { Dictionary } from "@/dictionaries";

export function Statistics({ dict }: { dict: Dictionary["stats"] }) {
  return (
    <section className="relative py-24">
      <GradientBlob className="left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-primary/15" />
      <Container>
        <div className="glass grid grid-cols-1 gap-10 rounded-3xl px-8 py-14 sm:px-14 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-text-secondary">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
