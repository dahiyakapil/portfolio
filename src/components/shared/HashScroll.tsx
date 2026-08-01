import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHashWhenReady } from "@/lib/hashScroll";

/**
 * Smooth-scrolls to #hash targets with an offset for the fixed navbar.
 * Handles cross-route navigation (e.g. /projects → /#case-study).
 */
export function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    return scrollToHashWhenReady(hash);
  }, [pathname, hash]);

  return null;
}
