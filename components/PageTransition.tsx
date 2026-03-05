"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { duration: 0 } },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col flex-1 min-h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
