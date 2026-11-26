import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import { absoluteUrl, SITE_DEFAULT_DESCRIPTION, SITE_NAME } from '../config/site';
import { projects } from '../data/home-projects';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
      description: SITE_DEFAULT_DESCRIPTION,
      logo: absoluteUrl('/images/wonderland2.webp'),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: absoluteUrl('/'),
      description: SITE_DEFAULT_DESCRIPTION,
      inLanguage: 'pt-BR',
    },
  ];

  return (
    <div className="ws-site">
      <Seo
        title={SITE_NAME}
        description={SITE_DEFAULT_DESCRIPTION}
        path="/"
        image="/images/wonderland2.webp"
        jsonLd={jsonLd}
      />

      <header className="ws-header">
        <Link to="/" className="ws-brand" aria-label="Wonderland Song — início">
          <span className="ws-brand-mark">W.</span>
          <span className="ws-brand-name">Wonderland <i>Music</i></span>
        </Link>

        <button
          className="ws-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="ws-navigation"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav id="ws-navigation" className={`ws-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <a href="#manifesto" onClick={() => setMenuOpen(false)}>O universo</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      </header>

      <main id="home">
        <section className="ws-hero" aria-labelledby="ws-hero-title">
          <img className="ws-hero-image" src="/images/wonderland2.webp" alt="" fetchPriority="high" />
          <div className="ws-hero-shade" />
          <div className="ws-hero-content">
            <p className="ws-eyebrow"><span /> Um universo. Muitas formas de sentir.</p>
            <h1 id="ws-hero-title">A música é<br /><em>outro mundo.</em></h1>
            <p className="ws-hero-copy">
              Histórias, ideias e sonoridades que atravessam gêneros.
              Um espaço independente para criar sem fronteiras.
            </p>
            <a className="ws-button ws-button-light" href="#projects">
              Explore os projetos <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="ws-hero-bottom">
            <span>Independent music universe</span>
            <a href="#manifesto" aria-label="Descer para conhecer o universo">↓</a>
            <span>Brasil · Desde sempre em movimento</span>
          </div>
        </section>

        <section className="ws-manifesto" id="manifesto">
          <div className="ws-section-kicker">01 / Nossa essência</div>
          <div className="ws-manifesto-content">
            <h2>Não seguimos<br />um só <em>caminho.</em></h2>
            <div className="ws-manifesto-text">
              <p>
                Wonderland Song é um universo de projetos musicais independentes.
                Cada projeto tem sua própria identidade, linguagem e história — do
                rock à música eletrônica, da poesia à experimentação.
              </p>
              <p>
                Não existe uma fórmula sonora. Existe curiosidade, liberdade criativa
                e a vontade de transformar ideias em experiências que merecem ser ouvidas.
              </p>
              <a className="ws-text-link" href="#projects">Conheça nossos universos <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="ws-projects" id="projects">
          <div className="ws-projects-heading">
            <div>
              <div className="ws-section-kicker">02 / O catálogo</div>
              <h2>Universos <em>sonoros.</em></h2>
            </div>
            <p>Projetos diferentes. Identidades próprias.<br />Uma mesma inquietação criativa.</p>
          </div>

          <div className="ws-project-grid">
            {projects.slice(1).map((project, index) => (
              <article className="ws-project-card" key={project.id}>
                <Link to={project.href} className="ws-project-image-link" aria-label={`Conheça ${project.title}`}>
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={project.imagePositionMobile ? { objectPosition: project.imagePositionMobile } : undefined}
                  />
                  <span className="ws-project-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="ws-project-arrow" aria-hidden="true">↗</span>
                </Link>
                <div className="ws-project-meta">{project.category}</div>
                <div className="ws-project-title-row">
                  <h3><Link to={project.href}>{project.title}</Link></h3>
                  <Link className="ws-project-open" to={project.href}>Explorar <span>↗</span></Link>
                </div>
                {project.message ? <p className="ws-project-description">{project.message}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="ws-quote">
          <span className="ws-quote-mark">“</span>
          <p>O extraordinário começa quando a gente se permite explorar.</p>
          <span className="ws-quote-caption">Wonderland Song · Manifesto criativo</span>
        </section>
      </main>

      <footer className="ws-footer" id="contact">
        <div className="ws-footer-top">
          <div>
            <span className="ws-footer-kicker">Entre nesse universo</span>
            <h2>O próximo som<br /><em>pode ser seu.</em></h2>
          </div>
          <a className="ws-button ws-button-dark" href="https://www.youtube.com/@wonderlandsong/videos" target="_blank" rel="noreferrer">
            Ouça no YouTube <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="ws-footer-bottom">
          <Link to="/" className="ws-footer-brand">Wonderland <i>Music</i></Link>
          <span>Independent music universe · Brasil</span>
          <a href="#home" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
