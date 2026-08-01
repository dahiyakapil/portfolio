import { useEffect, useState } from "react";

function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Heavy hero effects (cursor-tracking glow, blob animation, noise) stay off when:
 * - prefers-reduced-motion
 * - Save-Data is on
 * - very low CPU / memory hints
 */
export function canUseHeavyHeroEffects(): boolean {
  if (typeof window === "undefined") return false;
  if (getPrefersReducedMotion()) return false;

  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };

  if (nav.connection?.saveData) return false;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return false;
  if (
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency > 0 &&
    navigator.hardwareConcurrency <= 2
  ) {
    return false;
  }

  return true;
}

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(getPrefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function useHeavyHeroEffects(): boolean {
  const reducedMotion = usePrefersReducedMotion();
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    setAllow(!reducedMotion && canUseHeavyHeroEffects());
  }, [reducedMotion]);

  return allow && !reducedMotion;
}
