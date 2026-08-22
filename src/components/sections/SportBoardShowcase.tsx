import { Container } from "@/components/ui/Container";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { TechChip } from "@/components/ui/TechChip";
import { Reveal } from "@/components/ui/Reveal";
import { SPORT_GIF } from "@/lib/tacticalMedia";
import { SLUG_TO_KEY, type SportSlug } from "@/lib/sportPages";

/** The board itself, front and center -- a real, live, sport-specific
 * tactic (not a mock), with that sport's own tactical vocabulary as
 * metadata chips (e.g. basketball's "PICK & ROLL" instead of soccer's
 * "4-3-3"). One real GIF per sport, same as the main page's sports
 * switcher -- this page is locked to its own sport rather than switchable,
 * since the whole point of the page is "built for THIS sport". */
export function SportBoardShowcase({
  sport,
  sportName,
  labels,
}: {
  sport: SportSlug;
  sportName: string;
  labels: string[];
}) {
  const gif = SPORT_GIF[SLUG_TO_KEY[sport]];

  return (
    <section className="relative py-24">
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-2xl">
            <BrowserFrame>
              {/* eslint-disable-next-line @next/next/no-img-element -- real,
                  live animated GIF; next/image's optimizer risks re-encoding
                  it down to a still frame. */}
              <img src={gif} alt={`Pulse Tactical -- animated ${sportName} play`} className="block w-full" />
            </BrowserFrame>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {labels.map((label) => (
                <TechChip key={label}>{label}</TechChip>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
