import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  CardioMomentCard,
  WorkoutPhotoCard,
  AchievementCard,
  LevelUpCard,
  PartyCompletionCard,
} from "@/components/mocks/FeedCards";
import type { Dictionary } from "@/dictionaries";

const CARDS = [
  CardioMomentCard,
  WorkoutPhotoCard,
  AchievementCard,
  LevelUpCard,
  PartyCompletionCard,
];

export function FeedShowcase({
  dict,
  cardsDict,
}: {
  dict: Dictionary["feed"];
  cardsDict: Dictionary["feedCards"];
}) {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />
      </Container>

      <Reveal delay={0.1}>
        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

          <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
            {[...CARDS, ...CARDS].map((Card, i) => (
              <Card key={i} dict={cardsDict} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
