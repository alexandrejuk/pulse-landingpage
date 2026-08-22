import { cn } from "@/lib/utils";

/** Small monospace metadata label (e.g. "PLAY #024", "60 FPS") -- the
 * broadcast-graphics/tactical-software detail sprinkled around the hero and
 * sports sections. Deliberately quiet (tertiary text, thin border, no fill)
 * so it reads as real UI chrome, not a design flourish. */
export function TechChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/20 px-2 py-1 font-mono text-[10px] font-medium tracking-wider text-text-tertiary",
        className
      )}
    >
      {children}
    </span>
  );
}
