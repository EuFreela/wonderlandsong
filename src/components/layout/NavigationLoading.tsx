import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoading from './PageLoading';

const MIN_VISIBLE_MS = 280;
const MAX_VISIBLE_MS = 4000;

/**
 * Thin top progress bar while the next route paints.
 * Works with BrowserRouter (no data-router `useNavigation`).
 */
function NavigationLoading() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const first = useRef(true);
  const hideTimer = useRef(0);
  const shownAt = useRef(0);

  useEffect(() => {
    // Skip the initial mount — only show on subsequent navigations
    if (first.current) {
      first.current = false;
      return;
    }

    window.clearTimeout(hideTimer.current);
    shownAt.current = Date.now();
    setActive(true);

    // Hide after paint settles (double rAF) + minimum visible time
    let frame2 = 0;
    const frame1 = window.requestAnimationFrame(() => {
      frame2 = window.requestAnimationFrame(() => {
        const elapsed = Date.now() - shownAt.current;
        const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
        hideTimer.current = window.setTimeout(() => setActive(false), wait);
      });
    });

    // Safety: never leave the bar stuck
    const maxTimer = window.setTimeout(() => setActive(false), MAX_VISIBLE_MS);

    return () => {
      window.cancelAnimationFrame(frame1);
      window.cancelAnimationFrame(frame2);
      window.clearTimeout(hideTimer.current);
      window.clearTimeout(maxTimer);
    };
  }, [location.pathname, location.search]);

  if (!active) return null;
  return <PageLoading variant="bar" />;
}

export default NavigationLoading;
