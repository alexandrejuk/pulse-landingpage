import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlayPreview } from "@/components/ui/PlayPreview";
import type { SportPageContent, SportSlug } from "@/lib/sportPages";

export function SportPlays({
  sport,
  eyebrow,
  title,
  plays,
}: {
  sport: SportSlug;
  eyebrow: string;
  title: string;
  plays: SportPageContent["plays"];
}) {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {plays.map((play, i) => (
            <Reveal key={play.name} delay={i * 0.08}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <PlayPreview sport={sport} play={play} />
                <div className="p-5">
                  <span className="text-sm font-bold text-white">{play.name}</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{play.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
