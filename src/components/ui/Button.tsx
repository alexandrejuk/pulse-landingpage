import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary-light to-primary text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-4px_rgba(124,58,237,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_40px_-4px_rgba(168,85,247,0.7)] hover:brightness-110",
  secondary: "glass text-text-primary hover:bg-white/10",
  ghost: "text-text-secondary hover:text-text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  icon,
  className,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out active:scale-[0.97]",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
