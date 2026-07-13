import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const SHOW_AFTER_PX = 320;

/**
 * Floating control that appears after leaving the top of the page
 * and scrolls back to the top on click.
 */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="scroll-to-top"
          type="button"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={goTop}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-5 z-[150] flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#171717] text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition hover:bg-black hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={20} strokeWidth={2.25} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export default ScrollToTop;
