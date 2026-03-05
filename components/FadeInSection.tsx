"use client";

import { motion } from "framer-motion";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
  /** When true, animates on mount instead of when in view. Use for above-the-fold sections so they show on route change. */
  animateOnMount?: boolean;
};

export function FadeInSection({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  animateOnMount = false,
}: FadeInSectionProps) {
  const Component =
    Tag === "section"
      ? motion.section
      : Tag === "article"
        ? motion.article
        : motion.div;
  const transition = { duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      {...(animateOnMount
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-40px" },
          })}
      transition={transition}
      className={className}
    >
      {children}
    </Component>
  );
}
