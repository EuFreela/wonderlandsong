import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { SITE_LAST_UPDATED_LABEL } from '../../config/site';
import { projects } from '../../data/content';
import { useActivePanelTone } from '../../hooks/useActivePanelTone';

const navItems = [
  { label: 'Selo', href: '#project-1' },
  { label: 'BLM', href: '#project-2' },
  { label: 'RNH', href: '#project-3' },
  { label: 'AGM', href: '#project-4' },
  { label: 'HS', href: '#project-5' },
  { label: 'USSS', href: '#project-6' },
  { label: 'LSBB', href: '#project-7' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const tone = useActivePanelTone(projects);
  const isLightText = tone === 'light';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex flex-col md:hidden"
          >
            {/* Dims the page behind the modal */}
            <button
              type="button"
              className="absolute inset-0 bg-black/55 backdrop-blur-sm"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            />

            {/* Light solid sheet — readable over any parallax panel */}
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative z-10 flex min-h-full w-full flex-col bg-[#f7f4ef] text-[#171717] shadow-2xl"
            >
              <div className="flex h-[72px] items-center justify-between border-b border-black/10 px-[4.5vw]">
                <span className="text-base font-extrabold uppercase tracking-[0.16em] text-[#171717]">
                  Menu
                </span>
                <button
                  type="button"
                  className="rounded-full border border-black/15 bg-white p-2 text-[#171717] shadow-sm"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-[4.5vw] py-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-black/5 bg-white px-5 py-4 text-xl font-bold uppercase tracking-[0.16em] text-[#171717] shadow-sm transition hover:bg-white hover:shadow-md active:scale-[0.99]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="border-t border-black/10 px-[4.5vw] py-6 text-sm uppercase tracking-[0.14em] text-black/50">
                Wonderland Song
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <header
        data-tone={tone}
        className={`sticky top-0 z-[100] flex h-[72px] items-center justify-between border-b px-[4.5vw] backdrop-blur-[10px] transition-colors duration-300 ${
          isLightText
            ? 'border-white/15 bg-black/25 text-white'
            : 'border-black/[0.06] bg-white/90 text-[#171717]'
        }`}
      >
        <Link
          to="/"
          className={`flex flex-col gap-0.5 transition-colors duration-300 ${
            isLightText ? 'text-white' : 'text-[#171717]'
          }`}
        >
          <span className="text-base font-extrabold uppercase tracking-[0.16em]">
            Wonderland Song
          </span>
          <span
            className={`text-[0.58rem] font-medium normal-case tracking-[0.04em] ${
              isLightText ? 'text-white/55' : 'text-[#171717]/50'
            }`}
          >
            {SITE_LAST_UPDATED_LABEL}
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-[1.8rem] text-[0.7rem] font-bold uppercase tracking-[0.1em] transition-colors duration-300 md:flex ${
            isLightText ? 'text-white' : 'text-[#171717]'
          }`}
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition ${isLightText ? 'hover:text-white/70' : 'hover:opacity-60'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`rounded-full border p-2 transition-colors duration-300 md:hidden ${
            isLightText
              ? 'border-white/30 text-white'
              : 'border-black/15 text-[#171717]'
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {mobileMenu}
    </>
  );
}

export default Header;
