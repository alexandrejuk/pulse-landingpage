import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/pulse-logo.png"
      alt="PulseUp"
      width={512}
      height={193}
      priority
      className={cn("h-8 w-auto", className)}
    />
  );
}
