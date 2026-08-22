import { CourtShape } from "@/components/ui/CourtShape";
import type { SportPlay, SportSlug } from "@/lib/sportPages";

/** A play's court background (CourtShape) plus its own dashed movement
 * path -- the "pequena prévia visual da jogada" the brief asks for on each
 * play card, built from data (sport shape + 2-4 points), not a unique
 * per-play asset. */
export function PlayPreview({ sport, play }: { sport: SportSlug; play: SportPlay }) {
  const d = play.path.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x * 2} ${p.y * 1.2}`).join(" ");
  const last = play.path[play.path.length - 1];
  const prev = play.path[play.path.length - 2] ?? play.path[0];
  const angle = Math.atan2((last.y - prev.y) * 1.2, (last.x - prev.x) * 2);
  const ax = last.x * 2;
  const ay = last.y * 1.2;
  const arrowSize = 6;

  return (
    <div className="relative aspect-[5/3] w-full overflow-hidden rounded-xl">
      <CourtShape sport={sport} className="absolute inset-0 h-full w-full" />
      <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full">
        <path d={d} fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
        {play.path.map((p, i) => (
          <circle key={i} cx={p.x * 2} cy={p.y * 1.2} r={i === 0 ? 4 : 2.5} fill="#ffffff" opacity={i === 0 ? 1 : 0.7} />
        ))}
        <path
          d={`M 0 -${arrowSize / 2} L ${arrowSize} 0 L 0 ${arrowSize / 2} Z`}
          fill="#ffffff"
          transform={`translate(${ax} ${ay}) rotate(${(angle * 180) / Math.PI})`}
        />
      </svg>
    </div>
  );
}
