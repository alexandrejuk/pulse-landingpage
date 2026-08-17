import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoVariant = "default" | "coach" | "nutri";

const LOGO_SRC: Record<LogoVariant, string> = {
  default: "/pulse-logo.png",
  coach: "/pulse-blue-logo.png",
  nutri: "/pulse-red-logo.png",
};

export function Logo({
  variant = "default",
  className,
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  return (
    <Image
      src={LOGO_SRC[variant]}
      alt="PulseUp"
      width={512}
      height={193}
      priority
      className={cn("h-8 w-auto", className)}
    />
  );
}
