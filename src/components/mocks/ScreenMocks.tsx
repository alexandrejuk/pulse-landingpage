import { Flame, Heart, MapPin, Zap, Check, Users, Trophy, Star, Award } from "lucide-react";
import { cn } from "@/lib/utils";

/** Lightweight CSS/SVG stand-ins for real app screenshots (none exist yet).
 * Each mock renders inside a <PhoneFrame> and mirrors a real Pulse screen
 * using the same tokens as the mobile app (purple accents, dark surfaces).
 * Replace with actual screenshots via next/image once captured. */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-2 pt-4 text-[10px] font-semibold text-white/70">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <div className="h-2 w-3 rounded-[1px] border border-white/50" />
      </div>
    </div>
  );
}

function Avatar({ className, ring }: { className?: string; ring?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-br from-primary-light via-primary to-deep-purple",
        ring && "ring-2 ring-primary-light ring-offset-2 ring-offset-background",
        className
      )}
    />
  );
}

export function FeedMock() {
  return (
    <div className="flex h-full flex-col bg-background">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pb-3">
        <span className="text-sm font-extrabold text-white">Feed</span>
        <Heart size={14} className="text-white/50" />
      </div>
      <div className="mx-3 overflow-hidden rounded-2xl border border-white/10 bg-surface">
        <div className="flex items-center gap-2 p-3">
          <Avatar className="h-8 w-8" />
          <div className="flex-1">
            <div className="h-2 w-20 rounded-full bg-white/80" />
            <div className="mt-1.5 h-1.5 w-14 rounded-full bg-white/25" />
          </div>
          <div className="rounded-full bg-white/10 px-2 py-1 text-[8px] font-bold text-white/60">PUBLIC</div>
        </div>
        <div className="relative mx-3 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-primary-light/40 via-primary/30 to-deep-purple/60">
          <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/40 px-2 py-1">
            <Zap size={10} className="fill-achievement text-achievement" />
            <span className="text-[9px] font-bold text-white">+120 XP</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3">
          <div className="flex -space-x-2">
            <Avatar className="h-5 w-5 ring-2 ring-surface" />
            <Avatar className="h-5 w-5 ring-2 ring-surface" />
            <Avatar className="h-5 w-5 ring-2 ring-surface" />
          </div>
          <span className="text-[9px] font-semibold text-white/50">+24 reactions</span>
        </div>
      </div>
      <div className="mx-3 mt-3 overflow-hidden rounded-2xl border border-white/10 bg-surface p-3">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8" />
          <div className="flex-1">
            <div className="h-2 w-24 rounded-full bg-white/80" />
            <div className="mt-1.5 h-1.5 w-16 rounded-full bg-white/25" />
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="h-14 flex-1 rounded-lg bg-white/5" />
          <div className="h-14 flex-1 rounded-lg bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export function WorkoutMock() {
  const rows = [
    { done: true, label: "Bench Press" },
    { done: true, label: "Incline Dumbbell" },
    { done: false, label: "Cable Fly" },
    { done: false, label: "Tricep Pushdown" },
  ];
  return (
    <div className="flex h-full flex-col bg-background">
      <StatusBar />
      <div className="px-4 pb-3">
        <span className="text-sm font-extrabold text-white">Push Day</span>
        <div className="mt-1 flex items-center gap-2 text-[9px] text-white/50">
          <span>32:10</span>
          <span>·</span>
          <span>Exercise 3/8</span>
        </div>
      </div>
      <div className="mx-3 mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-primary-light to-primary" />
      </div>
      <div className="mx-3 flex flex-col gap-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className={cn(
              "flex items-center gap-2 rounded-xl border p-2.5",
              row.done ? "border-primary/30 bg-primary/10" : "border-white/10 bg-surface"
            )}
          >
            <div
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full",
                row.done ? "bg-primary" : "bg-white/10"
              )}
            >
              {row.done && <Check size={11} className="text-white" />}
            </div>
            <div className="h-2 w-20 rounded-full bg-white/60" />
          </div>
        ))}
      </div>
      <div className="mt-auto p-3">
        <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-primary-light to-primary py-2.5 text-[10px] font-bold text-white">
          Rest — 0:42
        </div>
      </div>
    </div>
  );
}

export function PartyMock() {
  const players = [true, true, true, false];
  return (
    <div className="flex h-full flex-col items-center bg-background px-4">
      <StatusBar />
      <span className="mt-2 text-sm font-extrabold text-white">Party Lobby</span>
      <span className="mt-1 text-[9px] font-semibold text-white/40">Leg Day Crew</span>
      <div className="relative mt-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary/40">
        <span className="text-3xl font-extrabold text-white">3</span>
        <div className="absolute inset-0 animate-spin-slow rounded-full border-t-4 border-primary-light" />
      </div>
      <div className="mt-6 grid w-full grid-cols-4 gap-2">
        {players.map((ready, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <Avatar className="h-9 w-9" ring={ready} />
            <span
              className={cn(
                "text-[7px] font-bold",
                ready ? "text-success" : "text-white/30"
              )}
            >
              {ready ? "READY" : "..."}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-1 rounded-full bg-achievement/15 px-3 py-1.5">
        <Zap size={10} className="fill-achievement text-achievement" />
        <span className="text-[9px] font-bold text-achievement">+30% XP bonus</span>
      </div>
    </div>
  );
}

export function CardioMock() {
  return (
    <div className="flex h-full flex-col bg-background">
      <StatusBar />
      <div className="relative mx-3 mt-1 h-48 overflow-hidden rounded-2xl bg-[#0d1a12]">
        <svg viewBox="0 0 200 220" className="h-full w-full opacity-90">
          <path
            d="M20 190 C 60 160, 40 110, 80 90 S 140 40, 120 10"
            fill="none"
            stroke="#A855F7"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1">
          <MapPin size={9} className="text-primary-light" />
          <span className="text-[8px] font-bold text-white">Live</span>
        </div>
        <div className="absolute bottom-3 left-3 flex -space-x-2">
          <Avatar className="h-6 w-6 ring-2 ring-background" />
          <Avatar className="h-6 w-6 ring-2 ring-background" />
        </div>
      </div>
      <div className="mx-3 mt-3 grid grid-cols-3 gap-2">
        {[
          ["5.2", "km"],
          ["28:14", "time"],
          ["5:23", "/km"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-xl border border-white/10 bg-surface py-2 text-center">
            <div className="text-xs font-extrabold text-white">{v}</div>
            <div className="text-[7px] font-bold uppercase text-white/40">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RewardsMock() {
  const badges = [Trophy, Star, Award, Flame];
  return (
    <div className="flex h-full flex-col bg-background px-4">
      <StatusBar />
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm font-extrabold text-white">Level 24</span>
        <div className="flex items-center gap-1 rounded-full bg-streak/15 px-2 py-1">
          <Flame size={10} className="text-streak" />
          <span className="text-[9px] font-bold text-streak">18</span>
        </div>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-achievement to-streak" />
      </div>
      <span className="mt-1 text-[8px] font-semibold text-white/40">2,340 / 3,500 XP</span>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {badges.map((Icon, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-surface py-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-deep-purple">
              <Icon size={14} className="text-white" />
            </div>
            <div className="h-1.5 w-10 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-1 rounded-xl border border-white/10 bg-surface py-2">
        <Users size={11} className="text-primary-light" />
        <span className="text-[9px] font-semibold text-white/60">Crew rank #3</span>
      </div>
    </div>
  );
}
