import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { AppleIcon } from "@/components/ui/AppleIcon";
import { PlayStoreIcon } from "@/components/ui/PlayStoreIcon";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import type { Dictionary } from "@/dictionaries";

export function FinalCta({ dict }: { dict: Dictionary["finalCta"] }) {
  return (
    <section className="relative py-28">
      <Container>
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center sm:px-16">
          <GradientBlob className="left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-primary/40" />
          <div className="relative z-10">
            <Reveal>
              <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                {dict.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-text-secondary">
                {dict.description}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={APP_STORE_URL} size="lg" icon={<AppleIcon className="h-5 w-5" />}>
                  {dict.appStore}
                </Button>
                <Button
                  href={PLAY_STORE_URL}
                  variant="secondary"
                  size="lg"
                  icon={<PlayStoreIcon className="h-4 w-4" />}
                >
                  {dict.playStore}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
