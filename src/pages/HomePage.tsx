import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import ScrollToTop from '../components/layout/ScrollToTop';
import ParallaxProjectPanel from '../components/parallax/ParallaxProjectPanel';
import { projects } from '../data/content';

/**
 * Homepage: fixed-background parallax panel sequence
 * (inspired by POFO portfolio parallax structure, original implementation).
 */
function HomePage() {
  return (
    <div className="min-w-[320px] bg-white text-[#171717]">
      <Helmet>
        <title>Wonderland Song</title>
        <meta
          name="description"
          content="Wonderland Song — music, stories and imagined worlds."
        />
      </Helmet>

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
