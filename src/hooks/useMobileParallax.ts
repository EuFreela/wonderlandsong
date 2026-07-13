import { useEffect, type RefObject } from 'react';

type Entry = {
  panel: HTMLElement;
  media: HTMLElement;
  lastY: number;
};

const entries = new Set<Entry>();
let listening = false;
let frame = 0;
let viewportH = 0;
let mqMobile: MediaQueryList | null = null;
let mqReduce: MediaQueryList | null = null;

function mobileParallaxOn() {
  if (typeof window === 'undefined') return false;
  if (!mqMobile) mqMobile = window.matchMedia('(max-width: 900px)');
  if (!mqReduce) mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mqMobile.matches && !mqReduce.matches;
}

function clearTransforms() {
  for (const entry of entries) {
    entry.media.style.transform = '';
    entry.media.style.height = '';
    entry.lastY = Number.NaN;
  }
}

function syncHeights() {
  viewportH = window.innerHeight;
  if (!mobileParallaxOn()) {
    clearTransforms();
    return;
  }
  for (const entry of entries) {
    entry.media.style.height = `${viewportH}px`;
  }
}

function tick() {
  frame = 0;

  // Desktop uses pure CSS fixed — never write transforms there
  if (!mobileParallaxOn()) return;

  const vh = viewportH || window.innerHeight;

  for (const entry of entries) {
    const rect = entry.panel.getBoundingClientRect();

    // Only drive panels near the viewport
    if (rect.bottom < -80 || rect.top > vh + 80) {
      continue;
    }

    const y = Math.round(-rect.top);
    if (y === entry.lastY) continue;
    entry.lastY = y;
    entry.media.style.transform = `translate3d(0, ${y}px, 0)`;
  }
}

function schedule() {
  if (!mobileParallaxOn()) return;
  if (frame) return;
  frame = window.requestAnimationFrame(tick);
}

function onResize() {
  syncHeights();
  for (const entry of entries) entry.lastY = Number.NaN;
  schedule();
}

function ensureListeners() {
  if (listening) return;
  listening = true;
  mqMobile = window.matchMedia('(max-width: 900px)');
  mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  syncHeights();
  // Scroll listener only needed on mobile; still attach once and gate in schedule()
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  mqMobile.addEventListener('change', onResize);
  mqReduce.addEventListener('change', onResize);
  schedule();
}

function teardownIfEmpty() {
  if (entries.size > 0 || !listening) return;
  listening = false;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', onResize);
  mqMobile?.removeEventListener('change', onResize);
  mqReduce?.removeEventListener('change', onResize);
  if (frame) {
    window.cancelAnimationFrame(frame);
    frame = 0;
  }
}

/**
 * Mobile-only fixed-window parallax.
 * Desktop uses pure CSS (position:fixed) — this loop no-ops there.
 * One shared rAF loop + integer pixels to avoid scroll shimmer.
 */
export function useMobileParallax(
  panelRef: RefObject<HTMLElement | null>,
  mediaRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const panel = panelRef.current;
    const media = mediaRef.current;
    if (!panel || !media) return;

    const entry: Entry = { panel, media, lastY: Number.NaN };
    entries.add(entry);
    ensureListeners();
    syncHeights();
    schedule();

    return () => {
      entries.delete(entry);
      media.style.transform = '';
      media.style.height = '';
      teardownIfEmpty();
    };
  }, [panelRef, mediaRef]);
}
