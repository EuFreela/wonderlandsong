import { useEffect, type RefObject } from 'react';

/**
 * Simulates background-attachment: fixed on all browsers (including mobile).
 *
 * Media sits absolutely inside an overflow-hidden panel. On scroll we apply
 * translateY(-panel.top) so the media stays locked to the viewport while the
 * panel acts as a moving window — same transition as desktop fixed parallax.
 */
export function useParallaxFixedMedia(
  panelRef: RefObject<HTMLElement | null>,
  mediaRef: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  useEffect(() => {
    const panel = panelRef.current;
    const media = mediaRef.current;
    if (!panel || !media || !enabled) {
      if (media) {
        media.style.transform = '';
      }
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const { top } = panel.getBoundingClientRect();
      media.style.transform = `translate3d(0, ${-top}px, 0)`;
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.visualViewport?.addEventListener('resize', schedule);
    window.visualViewport?.addEventListener('scroll', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.visualViewport?.removeEventListener('resize', schedule);
      window.visualViewport?.removeEventListener('scroll', schedule);
      if (frame) window.cancelAnimationFrame(frame);
      media.style.transform = '';
    };
  }, [panelRef, mediaRef, enabled]);
}
