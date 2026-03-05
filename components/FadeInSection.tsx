"use client";

import { motion } from "framer-motion";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

export function FadeInSection({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: FadeInSectionProps) {
  const Component =
    Tag === "section"
      ? motion.section
      : Tag === "article"
        ? motion.article
        : motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
