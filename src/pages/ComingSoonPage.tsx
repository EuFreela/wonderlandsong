import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';

/**
 * Fallback for routes / project pages that are not built yet.
 */
function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#000000] px-6 py-16 text-center text-[#ffffff]">
      <Seo
        title="Em construção"
        description="Esta página ainda está em construção no Wonderland Song."
        path="/"
        image="/images/bunnyatwork.webp"
        noIndex
      />

      <img
        src="/images/bunnyatwork.webp"
        alt="Bunny at work — página em construção"
        className="mb-10 max-h-[min(70vh,560px)] w-full max-w-xl object-contain"
      />

      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/50">
        Em breve
      </p>
      <h1 className="mb-8 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
        Estamos trabalhando nesta página
      </h1>

      <Link
        to="/"
        className="inline-flex min-h-[44px] items-center justify-center bg-[#171717] px-7 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
      >
        Voltar ao site
      </Link>
    </div>
  );
}

export default ComingSoonPage;
