import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

/** Thin value strip right under the hero -- "7 Sports · Animated Plays ·
 * Free · No Install". Deliberately minimal: no cards, no icons, just a
 * quiet line of quick facts before the page gets into detail. */
export function TacticalStats({ dict }: { dict: Dictionary["tacticalPage"]["stats"] }) {
  return (
    <section className="relative border-y border-white/5 py-6">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
            {dict.items.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="text-text-tertiary/40">·</span>}
                <span className="text-xs font-bold tracking-wide text-text-secondary uppercase sm:text-sm">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
