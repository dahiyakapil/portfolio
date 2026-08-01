/** Fixed nav is h-14 (56px) / md:h-16 (64px) plus a little air. */
export const HASH_SCROLL_OFFSET = 88;

export function scrollToHash(
  hash: string,
  { behavior = "smooth" }: { behavior?: ScrollBehavior } = {}
): boolean {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  const top =
    el.getBoundingClientRect().top + window.scrollY - HASH_SCROLL_OFFSET;

  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/** Retry briefly — home sections may not be mounted yet after a route change. */
export function scrollToHashWhenReady(
  hash: string,
  { behavior = "smooth", attempts = 8, intervalMs = 50 }: {
    behavior?: ScrollBehavior;
    attempts?: number;
    intervalMs?: number;
  } = {}
): () => void {
  let cancelled = false;
  let tries = 0;

  const tick = () => {
    if (cancelled) return;
    if (scrollToHash(hash, { behavior })) return;
    tries += 1;
    if (tries < attempts) {
      window.setTimeout(tick, intervalMs);
    }
  };

  // Double-rAF so layout from the newly mounted page can settle first
  requestAnimationFrame(() => {
    requestAnimationFrame(tick);
  });

  return () => {
    cancelled = true;
  };
}
