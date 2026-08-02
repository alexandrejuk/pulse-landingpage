import { cn } from "@/lib/utils";

/** Device-frame mockup used in place of real app screenshots (none are
 * available yet). Renders arbitrary `children` as the "screen" content, so
 * each call site builds a lightweight CSS mock of the real screen using the
 * same design tokens as the mobile app. Swap for actual screenshots once
 * they exist by rendering an <Image> inside instead of children. */
export function PhoneFrame({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: "w-[220px] h-[452px]",
    md: "w-[260px] h-[534px]",
    lg: "w-[300px] h-[616px]",
  }[size];

  return (
    <div
      className={cn(
        dims,
        "relative shrink-0 rounded-[2.75rem] border-[6px] border-[#1b1b22] bg-[#08080b] p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10",
        className
      )}
    >
      <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1b1b22]" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-background">
        {children}
      </div>
    </div>
  );
}
