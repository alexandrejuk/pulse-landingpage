import { cn } from "@/lib/utils";

/** Desktop-browser chrome mockup -- Pulse Tactical (board.pulseup.io) is a
 * desktop web app, not a mobile screen, so it doesn't fit PhoneFrame's
 * portrait phone mockup. Renders arbitrary `children` as the "page"
 * content, same "device frame around real content" pattern as PhoneFrame. */
export function BrowserFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
