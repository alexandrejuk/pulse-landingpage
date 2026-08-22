import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { COMMUNITY_TACTICS } from "@/lib/tacticalMedia";
import type { Dictionary } from "@/dictionaries";

/** "Don't start from zero" -- real plays from the shared community library
 * (same pulse_prod rows, type: "community", same badge the board's own
 * "TÁTICAS" panel shows), not a fabricated social feed. Deliberately just
 * 4 cards, not a full browsable library -- this is a demonstration, not a
 * second copy of the board's own catalog. */
export function TacticalCommunity({ dict }: { dict: Dictionary["tacticalPage"]["community"] }) {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMMUNITY_TACTICS.map((tactic, i) => (
            <Reveal key={tactic.name} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-[16/10] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element -- real,
                      live animated GIF; next/image's optimizer risks re-encoding
                      it down to a still frame. */}
                  <img src={tactic.gif} alt={tactic.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-200 group-hover:bg-black/30 group-hover:opacity-100">
                    <Play className="h-8 w-8 fill-white text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm font-bold text-white">{tactic.name}</span>
                  <div className="mt-2">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-text-tertiary">
                      {dict.badge}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
