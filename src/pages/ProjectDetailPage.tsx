import { Link, useParams } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import SpotifyIcon from '../components/ui/SpotifyIcon';
import YouTubeIcon from '../components/ui/YouTubeIcon';
import { absoluteUrl } from '../config/site';
import {
  getProjectAlbums,
  getProjectDetailBySlug,
} from '../data/content';
import type { ProjectAlbum, ProjectDetail } from '../types';
import ComingSoonPage from './ComingSoonPage';

type ProjectDetailViewProps = {
  project: ProjectDetail;
  albums: ProjectAlbum[];
};

const spotifyClassName =
  'inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full bg-[#1DB954] px-6 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-md transition duration-200 hover:scale-[1.02] hover:bg-[#1ed760] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1DB954]';

const youtubeClassName =
  'inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full bg-[#FF0000] px-6 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-md transition duration-200 hover:scale-[1.02] hover:bg-[#ff2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF0000]';

/**
 * Shared project layout: hero, album gallery, history, listen links.
 * Used by every “Abrir projeto” page (Bunny Land, Rosa Negra, …).
 */
export function ProjectDetailView({ project, albums }: ProjectDetailViewProps) {
  const {
    slug,
    title,
    category,
    image,
    tagline,
    historyTitle,
    historyLead,
    pullQuote,
    historySections,
    historyClosing,
    historySourceUrl,
    historySourceLabel,
    spotifyUrl,
    spotifyLabel,
    youtubeUrl,
    youtubeLabel,
    footerNote,
    albumsEmptyMessage,
  } = project;

  const basePath = `/projects/${slug}`;

  const path = basePath;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: title,
    description: tagline,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    genre: category,
  };

  return (
    <div className="min-w-[320px] bg-[#05030a] text-[#f7f5fa]">
      <Seo
        title={title}
        description={tagline}
        path={path}
        image={image}
        jsonLd={jsonLd}
      />

      <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-white/10 bg-black/40 px-[4.5vw] backdrop-blur-[10px]">
        <Link
          to="/"
          className="text-base font-extrabold uppercase tracking-[0.16em] text-white transition hover:text-white/70"
        >
          Wonderland Song
        </Link>
        <Link
          to="/"
          className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
        >
          ← Voltar
        </Link>
      </header>

      <main>
        <section className="relative min-h-[70vh] min-h-[70dvh] overflow-hidden" aria-label={title}>
          <div className="absolute inset-0" aria-hidden>
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover object-center"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05030a] via-[#05030a]/55 to-black/30" />
          </div>

          <div className="relative z-10 flex min-h-[70vh] min-h-[70dvh] flex-col justify-end px-[5vw] pb-14 pt-28 max-md:pb-10">
            <span className="mb-4 block w-fit max-w-full bg-white/95 px-3 py-1.5 text-[0.67rem] font-bold uppercase tracking-[0.14em] text-black/70">
              {category}
            </span>
            <h1 className="m-0 max-w-3xl text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.05] tracking-tight text-white">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {tagline}
            </p>
          </div>
        </section>

        <section
          id="albums"
          className="border-t border-white/10 px-[5vw] py-16 sm:py-20"
          aria-labelledby="albums-heading"
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
              Discografia
            </p>
            <h2
              id="albums-heading"
              className="m-0 mb-3 text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-white"
            >
              Álbuns lançados
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/60">
              {albums.length > 0
                ? 'Clique em um álbum para abrir a página dedicada — capa, história e lista de faixas.'
                : albumsEmptyMessage ||
                  'Os álbuns e lançamentos deste projeto serão adicionados em breve.'}
            </p>

            {albums.length > 0 ? (
              <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                {albums.map((album) => {
                  const label = album.chapter
                    ? `${album.chapter}: ${album.title}`
                    : album.title;

                  return (
                    <li key={album.slug}>
                      <Link
                        to={`${basePath}/albums/${album.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-200 hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <div className="relative aspect-square overflow-hidden bg-black/40">
                          <img
                            src={album.cover}
                            alt=""
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                            decoding="async"
                            loading="lazy"
                          />
                          <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"
                            aria-hidden
                          />
                        </div>
                        <div className="flex flex-1 flex-col px-4 py-4">
                          <span className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40">
                            {album.type} · {album.year}
                          </span>
                          {album.chapter ? (
                            <span className="mb-0.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/55">
                              {album.chapter}
                            </span>
                          ) : null}
                          <span className="text-base font-medium leading-snug text-white group-hover:underline">
                            {album.title}
                          </span>
                          <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/50">
                            {album.summary}
                          </span>
                          <span className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/45 transition group-hover:text-white/80">
                            Ver álbum →
                            <span className="sr-only">: {label}</span>
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </section>

        <section className="border-t border-white/10 px-[5vw] py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)] lg:items-start lg:gap-16">
            <article>
              <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
                A história
              </p>
              <h2 className="m-0 mb-6 text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-white">
                {historyTitle}
              </h2>
              <p className="text-lg leading-relaxed text-white/90 sm:text-xl">{historyLead}</p>

              {pullQuote ? (
                <blockquote className="mt-10 mb-2 border-l-2 border-white/25 pl-5">
                  <p className="text-[clamp(1.15rem,2.4vw,1.45rem)] font-medium leading-snug tracking-tight text-white/95">
                    “{pullQuote}”
                  </p>
                </blockquote>
              ) : null}

              <div className="mt-10 flex flex-col gap-12">
                {historySections.map((section, index) => (
                  <section key={section.id} aria-labelledby={`history-${section.id}`}>
                    <div className="mb-4 flex items-baseline gap-3">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/35">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3
                        id={`history-${section.id}`}
                        className="m-0 text-base font-bold uppercase tracking-[0.12em] text-white/85 sm:text-[0.95rem]"
                      >
                        {section.title}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-white/10 pt-5">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={`${section.id}-${paragraphIndex}`}
                          className="m-0 text-base leading-[1.75] text-white/70 sm:text-[1.05rem]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {historyClosing ? (
                <p className="mt-12 text-lg font-medium italic text-white/80">{historyClosing}</p>
              ) : null}

              {historySourceUrl ? (
                <p className="mt-8 text-sm text-white/40">
                  Fonte:{' '}
                  <a
                    href={historySourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/25 underline-offset-4 transition hover:text-white/70 hover:decoration-white/50"
                  >
                    {historySourceLabel || historySourceUrl}
                  </a>
                </p>
              ) : null}
            </article>

            <aside className="lg:sticky lg:top-24">
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="mb-1 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
                  Ouça e assista
                </p>

                {spotifyUrl ? (
                  <a
                    href={spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={spotifyClassName}
                  >
                    <SpotifyIcon size={20} />
                    {spotifyLabel || 'Spotify'}
                  </a>
                ) : null}

                {youtubeUrl ? (
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={youtubeClassName}
                  >
                    <YouTubeIcon size={20} />
                    {youtubeLabel || 'YouTube'}
                  </a>
                ) : null}

                <Link
                  to="/"
                  className="mt-2 inline-flex min-h-[44px] items-center justify-center border border-white/20 px-6 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/50 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Voltar à home
                </Link>
              </div>

              <nav className="mt-6 hidden flex-col gap-2 lg:flex" aria-label="Navegação da página">
                <p className="mb-1 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/35">
                  Nesta página
                </p>
                <a
                  href="#albums"
                  className="text-sm text-white/50 transition hover:text-white/90"
                >
                  Álbuns lançados
                </a>
                {historySections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#history-${section.id}`}
                    className="text-sm text-white/50 transition hover:text-white/90"
                  >
                    <span className="mr-2 text-white/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-[5vw] py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <strong className="uppercase tracking-[0.14em] text-white/80">Wonderland Song</strong>
          <span className="text-sm text-white/45">{footerNote || `${title} · ${category}`}</span>
        </div>
      </footer>
    </div>
  );
}

/**
 * Route page: `/projects/:projectSlug`
 * Looks up project detail data; unknown slugs show the bunny-at-work fallback.
 */
function ProjectDetailPage() {
  const { projectSlug = '' } = useParams<{ projectSlug: string }>();
  const project = getProjectDetailBySlug(projectSlug);

  if (!project) {
    return <ComingSoonPage />;
  }

  return <ProjectDetailView project={project} albums={getProjectAlbums(project.slug)} />;
}

export default ProjectDetailPage;
