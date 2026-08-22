import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

// One real tactic per sport, not a mock -- downloaded once from
// pulse-live-api's own GCS bucket (TacticalWorkout.gifUrl, the exact object
// board.pulseup.io itself renders) straight into this repo's public/
// folder, so the gallery doesn't depend on hotlinking prod storage. All 7
// sports have a real exported GIF in the catalog today.
const SPORT_MEDIA: Record<string, { src: string; kind: "gif" | "image"; width: number; height: number }> = {
  soccer: { src: "/screenshots/tactical/soccer.gif", kind: "gif", width: 900, height: 560 },
  basketball: { src: "/screenshots/tactical/basketball.gif", kind: "gif", width: 900, height: 560 },
  volleyball: { src: "/screenshots/tactical/volleyball.gif", kind: "gif", width: 900, height: 560 },
  tennis: { src: "/screenshots/tactical/tennis.gif", kind: "gif", width: 900, height: 560 },
  americanFootball: { src: "/screenshots/tactical/american-football.gif", kind: "gif", width: 900, height: 560 },
  iceHockey: { src: "/screenshots/tactical/ice-hockey.gif", kind: "gif", width: 900, height: 560 },
  baseball: { src: "/screenshots/tactical/baseball.gif", kind: "gif", width: 900, height: 560 },
};

export function TacticalGallery({ dict }: { dict: Dictionary["tacticalPage"]["gallery"] }) {
  return (
    <section id="tactical-gallery" className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.sports.map((sport, i) => {
            const media = SPORT_MEDIA[sport.key];
            if (!media) return null;
            return (
              <Reveal key={sport.key} delay={(i % 6) * 0.06}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="relative aspect-[16/10] w-full">
                    {media.kind === "gif" ? (
                      // next/image's optimizer route can re-encode animated GIFs down to a
                      // still frame; a plain <img> guarantees the real, live animation plays.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={media.src}
                        alt={sport.label}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={media.src}
                        alt={sport.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="px-5 py-4">
                    <span className="text-sm font-bold text-white">{sport.label}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
