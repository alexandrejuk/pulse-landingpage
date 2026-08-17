import { LayoutTemplate, SlidersHorizontal, Users, CalendarRange } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Float } from "@/components/ui/Float";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { AppScreenshot } from "@/components/ui/AppScreenshot";
import { personaScreenshotSrc, screenshotSrc, type ScreenshotVariant } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries";

const ICONS = [LayoutTemplate, SlidersHorizontal, Users, CalendarRange];

export function ForCoaches({
  dict,
  screenshotVariant,
}: {
  dict: Dictionary["forCoaches"];
  screenshotVariant?: ScreenshotVariant;
}) {
  return (
    <section id="for-coaches" className="relative py-28">
      <GradientBlob className="left-[-10%] top-1/4 h-[420px] w-[420px] bg-deep-purple/25" />
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="relative flex justify-center lg:order-1">
            <Float duration={6} delay={0}>
              <PhoneFrame size="lg">
                <AppScreenshot
                  src={
                    screenshotVariant
                      ? personaScreenshotSrc(screenshotVariant, "pulseLive")
                      : screenshotSrc("coach.png")
                  }
                  alt="PulseUp Live screen"
                />
              </PhoneFrame>
            </Float>
          </div>
        </Reveal>

        <div className="lg:order-2">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-light uppercase">
              {dict.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {dict.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-secondary">
              {dict.description}
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6">
            {dict.highlights.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={item.title} delay={0.18 + i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon size={19} className="text-primary-light" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
