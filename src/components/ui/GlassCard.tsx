"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  glow = false,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "glass relative rounded-3xl p-6",
        glow && "shadow-[0_0_60px_-20px_rgba(124,58,237,0.55)]",
        hover && "hover:border-white/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
