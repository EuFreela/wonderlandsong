import Header from '../components/layout/Header';
import ScrollToTop from '../components/layout/ScrollToTop';
import ParallaxProjectPanel from '../components/parallax/ParallaxProjectPanel';
import Seo from '../components/seo/Seo';
import { absoluteUrl, SITE_DEFAULT_DESCRIPTION, SITE_NAME } from '../config/site';
import { projects } from '../data/content';

/**
 * Homepage: fixed-background parallax panel sequence
 * (inspired by POFO portfolio parallax structure, original implementation).
 */
function HomePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
      description: SITE_DEFAULT_DESCRIPTION,
      logo: absoluteUrl('/images/wonderland2.png'),
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
    <div className="min-w-[320px] bg-white text-[#171717]">
      <Seo
        title={SITE_NAME}
        description={SITE_DEFAULT_DESCRIPTION}
        path="/"
        image="/images/wonderland2.png"
        jsonLd={jsonLd}
      />

      <Header />

      <main id="home">
        {projects.map((project) => (
          <ParallaxProjectPanel key={project.id} project={project} />
        ))}
      </main>

      <footer
        id="contact"
        className="flex min-h-[150px] flex-col items-start justify-between gap-5 px-[4.5vw] py-10 sm:flex-row sm:items-center"
      >
        <strong className="uppercase tracking-[0.14em]">Wonderland Song</strong>
        <span>Music, stories and imagined worlds.</span>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default HomePage;
