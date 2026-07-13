import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/content';
import { useActivePanelTone } from '../../hooks/useActivePanelTone';

const navItems = [
  { label: 'Selo', href: '#project-1' },
  { label: 'BLM', href: '#project-2' },
  { label: 'RNH', href: '#project-3' },
  { label: 'AGM', href: '#project-4' },
  { label: 'HS', href: '#project-5' },
  { label: 'USSS', href: '#project-6' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const tone = useActivePanelTone(projects);
  const isLightText = tone === 'light';

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

  return (
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
        className={`text-base font-extrabold uppercase tracking-[0.16em] transition-colors duration-300 ${
          isLightText ? 'text-white' : 'text-[#171717]'
        }`}
      >
        Wonderland Song
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
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex flex-col bg-white p-6 text-[#171717] md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-extrabold uppercase tracking-[0.16em] text-[#171717]">
                Menu
              </span>
              <button
                type="button"
                className="rounded-full border border-black/15 p-2 text-[#171717]"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="mt-12 flex flex-1 flex-col gap-6 text-2xl font-bold uppercase tracking-[0.16em] text-[#171717]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:opacity-60"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Header;
