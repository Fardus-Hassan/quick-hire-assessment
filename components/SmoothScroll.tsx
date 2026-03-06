"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const LERP = 0.08;
const MIN_DELTA = 0.5;

function findScrollableParent(el: Element | null): Element | null {
  while (el && el !== document.body) {
    const style = getComputedStyle(el);
    const overflowY = style.overflowY;
    if (
      (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") &&
      el.scrollHeight > el.clientHeight
    ) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetScrollY = window.scrollY;
    let currentScrollY = targetScrollY;
    let rafId: number | null = null;

    function animate() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));
      const diff = targetScrollY - currentScrollY;

      if (Math.abs(diff) < MIN_DELTA) {
        currentScrollY = targetScrollY;
        window.scrollTo(0, currentScrollY);
        rafId = null;
        return;
      }

      currentScrollY += diff * LERP;
      window.scrollTo(0, currentScrollY);
      rafId = requestAnimationFrame(animate);
    }

    function onWheel(e: WheelEvent) {
      if (findScrollableParent(e.target as Element) != null) return;
      targetScrollY += e.deltaY;
      e.preventDefault();
      if (rafId == null) {
        rafId = requestAnimationFrame(animate);
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    const onScroll = () => {
      if (rafId == null) {
        targetScrollY = window.scrollY;
        currentScrollY = window.scrollY;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return null;
}

