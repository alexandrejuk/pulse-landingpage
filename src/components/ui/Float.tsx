"use client";

import { motion } from "framer-motion";

export function Float({
  children,
  duration = 5,
  delay = 0,
  distance = 16,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
