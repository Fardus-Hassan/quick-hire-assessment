"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures each route starts at the top of the page.
 * - Disables browser automatic scroll restoration.
 * - On pathname change, scrolls window back to (0, 0).
 */
export function ScrollToTop() {
  const pathname = usePathname();

  // Disable browser scroll restoration once
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

