import { Zap, Flame, Trophy, TrendingUp, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries";

type FeedCardsDict = Dictionary["feedCards"];

function Avatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-br from-primary-light via-primary to-deep-purple",
        className
      )}
    />
  );
}

function CardShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[240px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardioMomentCard({ dict }: { dict: FeedCardsDict }) {
  const { cardio } = dict;
  return (
    <CardShell>
      <div className="flex items-center gap-2 p-3">
        <Avatar className="h-7 w-7" />
        <div className="flex-1">
          <div className="h-2 w-16 rounded-full bg-white/80" />
          <div className="mt-1 h-1.5 w-12 rounded-full bg-white/25" />
        </div>
        <MapPin size={12} className="text-primary-light" />
      </div>
      <div className="relative mx-3 h-28 overflow-hidden rounded-xl bg-[#0d1a12]">
        <svg viewBox="0 0 160 100" className="h-full w-full opacity-90">
          <path
            d="M10 90 C 40 70, 30 40, 70 40 S 120 10, 150 20"
            fill="none"
            style={{ stroke: "var(--color-primary-light)" }}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-1 p-3 text-center">
        {[
          [cardio.distance, cardio.distanceUnit],
          [cardio.time, cardio.timeUnit],
          [cardio.calories, cardio.caloriesUnit],
        ].map(([v, l]) => (
          <div key={l}>
            <div className="text-[11px] font-extrabold text-white">{v}</div>
            <div className="text-[7px] font-bold uppercase text-white/40">{l}</div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}

export function WorkoutPhotoCard({ dict }: { dict: FeedCardsDict }) {
  const { workoutPhoto } = dict;
  return (
    <CardShell>
      <div className="flex items-center gap-2 p-3">
        <Avatar className="h-7 w-7" />
        <div className="flex-1">
          <div className="h-2 w-20 rounded-full bg-white/80" />
          <div className="mt-1 h-1.5 w-14 rounded-full bg-white/25" />
        </div>
      </div>
      <div className="relative mx-3 h-36 overflow-hidden rounded-xl bg-gradient-to-br from-primary-light/40 via-primary/30 to-deep-purple/70">
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/40 px-2 py-1">
          <Zap size={9} className="fill-achievement text-achievement" />
          <span className="text-[8px] font-bold text-white">{workoutPhoto.xp}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3">
        <div className="flex -space-x-2">
          <Avatar className="h-4 w-4 ring-2 ring-surface" />
          <Avatar className="h-4 w-4 ring-2 ring-surface" />
        </div>
        <span className="text-[8px] font-semibold text-white/50">{workoutPhoto.reactions}</span>
      </div>
    </CardShell>
  );
}

export function AchievementCard({ dict }: { dict: FeedCardsDict }) {
  const { achievement } = dict;
  return (
    <CardShell className="bg-gradient-to-b from-achievement/10 to-surface">
      <div className="flex flex-col items-center gap-3 p-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-achievement to-streak shadow-[0_0_30px_-6px_rgba(250,204,21,0.6)]">
          <Trophy size={24} className="text-white" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wide text-achievement">
            {achievement.label}
          </div>
          <div className="mt-1 text-sm font-extrabold text-white">{achievement.title}</div>
        </div>
        <div className="h-1.5 w-16 rounded-full bg-white/15" />
      </div>
    </CardShell>
  );
}

export function LevelUpCard({ dict }: { dict: FeedCardsDict }) {
  const { levelUp } = dict;
  return (
    <CardShell className="bg-gradient-to-b from-primary/15 to-surface">
      <div className="flex flex-col items-center gap-3 p-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ai-blue to-primary shadow-[0_0_30px_-6px_rgba(56,189,248,0.6)]">
          <TrendingUp size={22} className="text-white" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wide text-primary-light">
            {levelUp.label}
          </div>
          <div className="mt-1 text-sm font-extrabold text-white">{levelUp.title}</div>
        </div>
        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-ai-blue to-primary" />
        </div>
      </div>
    </CardShell>
  );
}

export function PartyCompletionCard({ dict }: { dict: FeedCardsDict }) {
  const { party } = dict;
  return (
    <CardShell>
      <div className="flex items-center gap-2 p-3">
        <div className="flex -space-x-2">
          <Avatar className="h-7 w-7 ring-2 ring-surface" />
          <Avatar className="h-7 w-7 ring-2 ring-surface" />
          <Avatar className="h-7 w-7 ring-2 ring-surface" />
        </div>
        <div className="flex-1">
          <div className="h-2 w-24 rounded-full bg-white/80" />
          <div className="mt-1 h-1.5 w-16 rounded-full bg-white/25" />
        </div>
      </div>
      <div className="mx-3 flex items-center justify-center gap-2 rounded-xl bg-white/5 py-6">
        <Users size={18} className="text-primary-light" />
        <span className="text-sm font-extrabold text-white">{party.completed}</span>
      </div>
      <div className="flex items-center justify-center gap-1 p-3">
        <Flame size={11} className="text-streak" />
        <span className="text-[9px] font-bold text-streak">{party.streaks}</span>
      </div>
    </CardShell>
  );
}
