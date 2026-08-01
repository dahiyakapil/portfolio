import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";

/** Loads Plausible or Umami when env vars are set. */
export function Analytics() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return null;
}
