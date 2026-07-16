import { useEffect, type RefObject } from 'react';

type Entry = {
  panel: HTMLElement;
  media: HTMLElement;
  lastY: number;
};

const entries = new Set<Entry>();
let listening = false;
let frame = 0;
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
    entry.lastY = Number.NaN;
  }
}

/**
 * One rAF tick: read all geometries first, then write transforms.
 * Avoids interleaved read/write forced reflows.
 */
function tick() {
  frame = 0;

  if (!mobileParallaxOn()) return;

  const vh = window.innerHeight;
  const writes: { media: HTMLElement; y: number; entry: Entry }[] = [];

  // Phase 1 — layout reads only
  for (const entry of entries) {
    const rect = entry.panel.getBoundingClientRect();

    // Only drive panels near the viewport
    if (rect.bottom < -80 || rect.top > vh + 80) {
      continue;
    }

    const y = Math.round(-rect.top);
    if (y === entry.lastY) continue;
    writes.push({ media: entry.media, y, entry });
  }

  // Phase 2 — style writes only
  for (const { media, y, entry } of writes) {
    entry.lastY = y;
    media.style.transform = `translate3d(0, ${y}px, 0)`;
  }
}

function schedule() {
  if (!mobileParallaxOn()) return;
  if (frame) return;
  frame = window.requestAnimationFrame(tick);
}

function onResize() {
  if (!mobileParallaxOn()) {
    clearTransforms();
    return;
  }
  for (const entry of entries) entry.lastY = Number.NaN;
  schedule();
}

function ensureListeners() {
  if (listening) return;
  listening = true;
  mqMobile = window.matchMedia('(max-width: 900px)');
  mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mobileParallaxOn()) {
    clearTransforms();
  }
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
 * Shared rAF loop: batched geometry reads → integer translate3d writes.
 * Layer height comes from CSS (100vh / 100dvh), not JS — avoids reflow.
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
    schedule();

    return () => {
      entries.delete(entry);
      media.style.transform = '';
      teardownIfEmpty();
    };
  }, [panelRef, mediaRef]);
}
