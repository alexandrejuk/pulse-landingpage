import type { SportSlug } from "@/lib/sportPages";

// Simplified static outlines of each sport's real field/court -- same
// shapes board.pulseup.io's own canvas board draws (see that repo's
// drawCourt), stylized down to just the markings that make each one
// instantly recognizable. Shared 200x120 viewBox so every sport drops into
// PlayPreview's overlay the same way. Real sport colors (green pitch,
// hardwood orange, ice blue, dirt brown), muted a touch to sit on the dark
// theme without clashing.
export function CourtShape({ sport, className }: { sport: SportSlug; className?: string }) {
  const common = { className, viewBox: "0 0 200 120", xmlns: "http://www.w3.org/2000/svg" } as const;
  const line = "rgba(255,255,255,0.4)";

  switch (sport) {
    case "soccer":
      return (
        <svg {...common}>
          <rect x="0" y="0" width="200" height="120" fill="#1e5c34" />
          <rect x="6" y="6" width="188" height="108" fill="none" stroke={line} strokeWidth="1.5" />
          <line x1="100" y1="6" x2="100" y2="114" stroke={line} strokeWidth="1.5" />
          <circle cx="100" cy="60" r="16" fill="none" stroke={line} strokeWidth="1.5" />
          <rect x="6" y="35" width="22" height="50" fill="none" stroke={line} strokeWidth="1.5" />
          <rect x="172" y="35" width="22" height="50" fill="none" stroke={line} strokeWidth="1.5" />
        </svg>
      );
    case "basketball":
      return (
        <svg {...common}>
          <rect x="0" y="0" width="200" height="120" fill="#8a4a1e" />
          <rect x="6" y="6" width="188" height="108" fill="none" stroke={line} strokeWidth="1.5" />
          <rect x="6" y="40" width="45" height="40" fill="none" stroke={line} strokeWidth="1.5" />
          <circle cx="51" cy="60" r="17" fill="none" stroke={line} strokeWidth="1.5" />
          <path d="M 6 20 A 75 75 0 0 1 6 100" fill="none" stroke={line} strokeWidth="1.5" />
        </svg>
      );
    case "volleyball":
      return (
        <svg {...common}>
          <rect x="0" y="0" width="200" height="120" fill="#c98a2c" />
          <rect x="6" y="6" width="188" height="108" fill="none" stroke={line} strokeWidth="1.5" />
          <line x1="100" y1="0" x2="100" y2="120" stroke={line} strokeWidth="2.5" />
          <line x1="67" y1="6" x2="67" y2="114" stroke={line} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="133" y1="6" x2="133" y2="114" stroke={line} strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      );
    case "tennis":
      return (
        <svg {...common}>
          <rect x="0" y="0" width="200" height="120" fill="#2e6b8f" />
          <rect x="6" y="6" width="188" height="108" fill="none" stroke={line} strokeWidth="1.5" />
          <line x1="100" y1="6" x2="100" y2="114" stroke={line} strokeWidth="2" />
          <rect x="35" y="20" width="65" height="80" fill="none" stroke={line} strokeWidth="1" />
          <rect x="100" y="20" width="65" height="80" fill="none" stroke={line} strokeWidth="1" />
          <line x1="35" y1="60" x2="165" y2="60" stroke={line} strokeWidth="1" />
        </svg>
      );
    case "american-football":
      return (
        <svg {...common}>
          <rect x="0" y="0" width="200" height="120" fill="#2f6b3a" />
          <rect x="6" y="6" width="18" height="108" fill="rgba(0,0,0,0.25)" />
          <rect x="176" y="6" width="18" height="108" fill="rgba(0,0,0,0.25)" />
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={i} x1={24 + i * 21.7} y1="6" x2={24 + i * 21.7} y2="114" stroke={line} strokeWidth="1" />
          ))}
        </svg>
      );
    case "ice-hockey":
      return (
        <svg {...common}>
          <rect x="0" y="0" width="200" height="120" rx="24" fill="#dfeffa" />
          <rect x="4" y="4" width="192" height="112" rx="20" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="2" />
          <line x1="72" y1="6" x2="72" y2="114" stroke="#2f6fb0" strokeWidth="3" />
          <line x1="128" y1="6" x2="128" y2="114" stroke="#2f6fb0" strokeWidth="3" />
          <line x1="100" y1="6" x2="100" y2="114" stroke="#c0392b" strokeWidth="2" />
          <circle cx="100" cy="60" r="14" fill="none" stroke="#c0392b" strokeWidth="1.5" />
        </svg>
      );
    case "baseball":
      return (
        <svg {...common}>
          <rect x="0" y="0" width="200" height="120" fill="#2f7a3d" />
          <path d="M 100 108 L 55 63 A 65 65 0 0 1 145 63 Z" fill="#8a5a35" opacity="0.7" />
          <rect x="93" y="101" width="14" height="14" fill={line} transform="rotate(45 100 108)" />
          <rect x="53" y="56" width="10" height="10" fill={line} transform="rotate(45 58 61)" />
          <rect x="137" y="56" width="10" height="10" fill={line} transform="rotate(45 142 61)" />
          <rect x="95" y="14" width="10" height="10" fill={line} transform="rotate(45 100 19)" />
        </svg>
      );
  }
}
