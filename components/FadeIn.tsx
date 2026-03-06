"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function FadeIn({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.21, 1.02, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
