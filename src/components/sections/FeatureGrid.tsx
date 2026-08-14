import {
  ListChecks,
  Dumbbell,
  BookOpen,
  CheckCircle2,
  Footprints,
  Timer,
  TrendingUp,
  Zap,
  Award,
  Flame,
  Trophy,
  Radio,
  PartyPopper,
  Rss,
  LayoutDashboard,
  LayoutTemplate,
  Users2,
  HeartPulse,
  Activity,
  MapPin,
  MessageCircle,
  Swords,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/dictionaries";

// Order matches dict.items exactly (22 items) -- keep in sync when editing
// either list.
const ICONS = [
  ListChecks,
  Dumbbell,
  BookOpen,
  CheckCircle2,
  Footprints,
  Timer,
  TrendingUp,
  Zap,
  Award,
  Flame,
  Trophy,
  Radio,
  PartyPopper,
  Rss,
  LayoutDashboard,
  LayoutTemplate,
  Users2,
  HeartPulse,
  Activity,
  MapPin,
  MessageCircle,
  Swords,
];

// A flat, scannable inventory of every feature PulseUp has -- lets a reader
// with zero context (a Google branding reviewer included) recognize this as
// a full-featured, legitimate fitness app within seconds, without reading
// every section's prose.
export function FeatureGrid({ dict }: { dict: Dictionary["featureGrid"] }) {
  return (
    <section id="features" className="relative py-28">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} description={dict.description} />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {dict.items.map((label, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={label} delay={(i % 8) * 0.05}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Icon size={16} className="text-primary-light" />
                  </div>
                  <span className="text-sm font-semibold leading-snug text-white">{label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
