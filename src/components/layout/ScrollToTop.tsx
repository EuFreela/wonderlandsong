import { useEffect, useState } from 'react';
import { IconArrowUp } from '../ui/Icons';

const SHOW_AFTER_PX = 320;

/**
 * Floating control that appears after leaving the top of the page.
 * Mount is deferred until idle so it never competes with first paint.
 */
function ScrollToTop() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof win.requestIdleCallback === 'function') {
      const id = win.requestIdleCallback(() => setReady(true), { timeout: 2000 });
      return () => win.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(() => setReady(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ready) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const next = window.scrollY > SHOW_AFTER_PX;
      setVisible((prev) => (prev === next ? prev : next));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ready]);

  const goTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  if (!ready || !visible) return null;

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-5 z-[150] flex h-12 w-12 animate-menu-fade items-center justify-center rounded-full border border-black/10 bg-[#171717] text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition hover:scale-105 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:bottom-8 sm:right-8"
    >
      <IconArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;
