const SPORTSHUB_PATH = "/projects/sportshub";

function alreadyPrefetched(href: string, rel: string): boolean {
  return Boolean(
    document.head.querySelector(`link[rel="${rel}"][href="${href}"]`)
  );
}

function injectLink(
  rel: "prefetch" | "preload",
  href: string,
  as?: string
): void {
  if (alreadyPrefetched(href, rel)) return;
  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  if (as) link.as = as;
  document.head.appendChild(link);
}

function runPrefetch(): void {
  if (window.location.pathname.startsWith(SPORTSHUB_PATH)) return;
  injectLink("prefetch", SPORTSHUB_PATH);
  void import("@/pages/ProjectDetailPage");
}

function whenIdle(cb: () => void): void {
  const ric = (
    window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions
      ) => number;
    }
  ).requestIdleCallback;

  if (typeof ric === "function") {
    ric(() => cb(), { timeout: 6000 });
  } else {
    window.setTimeout(cb, 2500);
  }
}

/**
 * Prefetch SportsHub only after first paint / LCP has had time to settle.
 * Avoids competing with hero JS on the critical path.
 */
export function prefetchSportsHubWhenIdle(): void {
  if (typeof window === "undefined") return;

  const kickoff = () => {
    window.setTimeout(() => whenIdle(runPrefetch), 2500);
  };

  if (document.readyState === "complete") {
    kickoff();
  } else {
    window.addEventListener("load", kickoff, { once: true });
  }
}
