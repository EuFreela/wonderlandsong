import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import AlbumClipsGallery from '../components/project/AlbumClipsGallery';
import EasterEggsModal from '../components/project/EasterEggsModal';
import SpotifyIcon from '../components/ui/SpotifyIcon';
import YouTubeIcon from '../components/ui/YouTubeIcon';
import { getBunnyAlbumBySlug, bunnyLandAlbums } from '../data/content';

/**
 * Detail page for a single Bunny Land Music album.
 * Route: /projects/bunny-land-music/albums/:slug
 */
function BunnyAlbumPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const album = getBunnyAlbumBySlug(slug);
  const [easterEggsOpen, setEasterEggsOpen] = useState(false);

  if (!album) {
    return <Navigate to="/projects/bunny-land-music" replace />;
  }

  const currentIndex = bunnyLandAlbums.findIndex((item) => item.slug === album.slug);
  const prevAlbum = currentIndex > 0 ? bunnyLandAlbums[currentIndex - 1] : undefined;
  const nextAlbum =
    currentIndex >= 0 && currentIndex < bunnyLandAlbums.length - 1
      ? bunnyLandAlbums[currentIndex + 1]
      : undefined;

  const displayTitle = album.chapter ? `${album.chapter}: ${album.title}` : album.title;
  /** Dedications stay inside Easter Eggs modal when that content exists. */
  const hideTrackDedications = Boolean(album.easterEgg);

  const spotifyClassName =
    'inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full bg-[#1DB954] px-6 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-md transition duration-200 hover:scale-[1.02] hover:bg-[#1ed760] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1DB954]';

  const youtubeClassName =
    'inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full bg-[#FF0000] px-6 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-md transition duration-200 hover:scale-[1.02] hover:bg-[#ff2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF0000]';

  const secondaryLinkClassName =
    'inline-flex min-h-[44px] items-center justify-center border border-white/20 px-6 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/50 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

  const easterEggClassName =
    'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/15 px-6 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-amber-100 shadow-md transition duration-200 hover:scale-[1.02] hover:border-amber-200/60 hover:bg-amber-400/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300';

  return (
    <div className="min-w-[320px] bg-[#05030a] text-[#f7f5fa]">
      <Helmet>
        <title>
          {displayTitle} — Bunny Land Music
        </title>
        <meta name="description" content={album.summary} />
      </Helmet>

      <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-white/10 bg-black/40 px-[4.5vw] backdrop-blur-[10px]">
        <Link
          to="/"
          className="text-base font-extrabold uppercase tracking-[0.16em] text-white transition hover:text-white/70"
        >
          Wonderland Song
        </Link>
        <Link
          to="/projects/bunny-land-music"
          className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
        >
          ← Bunny Land Music
        </Link>
      </header>

      <main>
        <section className="px-[5vw] pb-10 pt-12 sm:pt-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-14">
            <div className="mx-auto w-full max-w-xs lg:mx-0">
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50">
                <img
                  src={album.cover}
                  alt={`Capa de ${displayTitle}`}
                  className="aspect-square w-full object-cover"
                  decoding="async"
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col">
              <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
                {album.type} · {album.year}
                {album.trackCount ? ` · ${album.trackCount} faixas` : ''}
                {album.duration ? ` · ${album.duration}` : ''}
              </p>
              {album.chapter ? (
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-white/55">
                  {album.chapter}
                </p>
              ) : null}
              <h1 className="m-0 text-[clamp(1.85rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight text-white">
                {album.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {album.summary}
              </p>

              {album.warning ? (
                <p
                  role="note"
                  className="mt-5 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm leading-relaxed text-amber-100/90"
                >
                  {album.warning}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                {album.spotifyUrl ? (
                  <a
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={spotifyClassName}
                  >
                    <SpotifyIcon size={20} />
                    Ouvir no Spotify
                  </a>
                ) : null}
                {album.youtubeUrl ? (
                  <a
                    href={album.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={youtubeClassName}
                  >
                    <YouTubeIcon size={20} />
                    YouTube
                  </a>
                ) : null}
                {album.bandcampUrl ? (
                  <a
                    href={album.bandcampUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryLinkClassName}
                  >
                    Reverve Universe Demo
                  </a>
                ) : null}
                {album.lyricsUrl ? (
                  <a
                    href={album.lyricsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryLinkClassName}
                  >
                    {album.lyricsLabel?.trim() || 'Letras'}
                  </a>
                ) : null}
                {album.easterEgg ? (
                  <button
                    type="button"
                    onClick={() => setEasterEggsOpen(true)}
                    className={easterEggClassName}
                  >
                    Easter Eggs
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-[5vw] py-14 sm:py-16">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
                Sobre o álbum
              </p>
              <div className="flex flex-col gap-5">
                {album.description.map((paragraph, index) => (
                  <p
                    key={`${album.slug}-d-${index}`}
                    className="m-0 text-base leading-[1.75] text-white/70 sm:text-[1.05rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
                Faixas
              </p>
              {album.tracks.length > 0 ? (
                <ol className="m-0 list-none divide-y divide-white/10 border-y border-white/10 p-0">
                  {album.tracks.map((track, index) => (
                    <li
                      key={`${album.slug}-t-${index}`}
                      className="flex items-baseline gap-4 py-3.5"
                    >
                      <span className="w-7 shrink-0 text-right text-[0.7rem] font-bold tabular-nums tracking-wider text-white/30">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="m-0 text-[0.95rem] font-medium text-white/90">{track.title}</p>
                        {!hideTrackDedications && track.dedication ? (
                          <p className="m-0 mt-0.5 text-sm text-white/40">→ {track.dedication}</p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-base leading-relaxed text-white/50">
                  Tracklist em breve — este álbum é apresentado aqui pela narrativa e pelo conceito.
                </p>
              )}
            </div>
          </div>
        </section>

        <AlbumClipsGallery clips={album.clips} albumTitle={displayTitle} />

        <nav
          className="border-t border-white/10 px-[5vw] py-10"
          aria-label="Outros álbuns"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {prevAlbum ? (
              <Link
                to={`/projects/bunny-land-music/albums/${prevAlbum.slug}`}
                className="group text-sm text-white/55 transition hover:text-white"
              >
                <span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/30">
                  ← Anterior
                </span>
                <span className="font-medium group-hover:underline">
                  {prevAlbum.chapter ? `${prevAlbum.chapter}: ` : ''}
                  {prevAlbum.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {nextAlbum ? (
              <Link
                to={`/projects/bunny-land-music/albums/${nextAlbum.slug}`}
                className="group text-left text-sm text-white/55 transition hover:text-white sm:text-right"
              >
                <span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/30">
                  Próximo →
                </span>
                <span className="font-medium group-hover:underline">
                  {nextAlbum.chapter ? `${nextAlbum.chapter}: ` : ''}
                  {nextAlbum.title}
                </span>
              </Link>
            ) : null}
          </div>
        </nav>
      </main>

      <footer className="border-t border-white/10 px-[5vw] py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <strong className="uppercase tracking-[0.14em] text-white/80">Wonderland Song</strong>
          <Link
            to="/projects/bunny-land-music#albums"
            className="text-sm text-white/45 transition hover:text-white/80"
          >
            Voltar à galeria de álbuns
          </Link>
        </div>
      </footer>

      {album.easterEgg ? (
        <EasterEggsModal
          open={easterEggsOpen}
          onClose={() => setEasterEggsOpen(false)}
          content={album.easterEgg}
          tracks={album.tracks}
        />
      ) : null}
    </div>
  );
}

export default BunnyAlbumPage;
