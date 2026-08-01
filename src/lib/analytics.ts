type AnalyticsProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: AnalyticsProps; callback?: () => void }
    ) => void;
    umami?: {
      track: (event: string, data?: AnalyticsProps) => void;
    };
  }
}

const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as
  | string
  | undefined;
const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID as
  | string
  | undefined;
const umamiSrc =
  (import.meta.env.VITE_UMAMI_SCRIPT_URL as string | undefined) ||
  "https://cloud.umami.is/script.js";
const plausibleSrc =
  (import.meta.env.VITE_PLAUSIBLE_SCRIPT_URL as string | undefined) ||
  "https://plausible.io/js/script.js";

export function isAnalyticsConfigured(): boolean {
  return Boolean(plausibleDomain || umamiWebsiteId);
}

/** Inject privacy-friendly analytics script once (Plausible or Umami). */
export function initAnalytics(): void {
  if (typeof document === "undefined") return;
  if (!isAnalyticsConfigured()) return;
  if (document.getElementById("portfolio-analytics")) return;

  if (plausibleDomain) {
    const script = document.createElement("script");
    script.id = "portfolio-analytics";
    script.defer = true;
    script.dataset.domain = plausibleDomain;
    script.src = plausibleSrc;
    document.head.appendChild(script);
    return;
  }

  if (umamiWebsiteId) {
    const script = document.createElement("script");
    script.id = "portfolio-analytics";
    script.defer = true;
    script.dataset.websiteId = umamiWebsiteId;
    script.src = umamiSrc;
    document.head.appendChild(script);
  }
}

/**
 * Track a custom event. No-ops when analytics is not configured.
 * Examples: case_study_click, download_cv, contact_open
 */
export function trackEvent(
  name: string,
  props?: AnalyticsProps
): void {
  if (!isAnalyticsConfigured()) return;

  try {
    if (typeof window.plausible === "function") {
      window.plausible(name, props ? { props } : undefined);
      return;
    }
    if (typeof window.umami?.track === "function") {
      window.umami.track(name, props);
    }
  } catch {
    // Analytics must never break UX
  }
}
