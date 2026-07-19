import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import AlbumClipsGallery from '../components/project/AlbumClipsGallery';
import AlbumCoverModal from '../components/project/AlbumCoverModal';
import EasterEggsModal from '../components/project/EasterEggsModal';
import TrackLyricsModal from '../components/project/TrackLyricsModal';
import Seo from '../components/seo/Seo';
import SpotifyIcon from '../components/ui/SpotifyIcon';
import YouTubeIcon from '../components/ui/YouTubeIcon';
import { absoluteUrl, SITE_LAST_UPDATED_LABEL } from '../config/site';
import {
  getProjectAlbum,
  getProjectAlbums,
  getProjectDetailBySlug,
} from '../data/content';
import type { BunnyAlbumTrack } from '../types';

/**
 * Detail page for a single project album.
 * Route: /projects/:projectSlug/albums/:albumSlug
 */
function BunnyAlbumPage() {
  const { projectSlug = '', albumSlug = '' } = useParams<{
    projectSlug: string;
    albumSlug: string;
  }>();
  const resolvedAlbumSlug = albumSlug;

  const project = getProjectDetailBySlug(projectSlug);
  const albums = getProjectAlbums(projectSlug);
  const album = getProjectAlbum(projectSlug, resolvedAlbumSlug);
  const [easterEggsOpen, setEasterEggsOpen] = useState(false);
  const [coverOpen, setCoverOpen] = useState(false);
  const [lyricsTrack, setLyricsTrack] = useState<{
    track: BunnyAlbumTrack;
    number: number;
  } | null>(null);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  if (!album) {
    return <Navigate to={`/projects/${projectSlug}`} replace />;
  }

  const projectBase = `/projects/${projectSlug}`;
  const currentIndex = albums.findIndex((item) => item.slug === album.slug);
  const prevAlbum = currentIndex > 0 ? albums[currentIndex - 1] : undefined;
  const nextAlbum =
    currentIndex >= 0 && currentIndex < albums.length - 1
      ? albums[currentIndex + 1]
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

  const path = `${projectBase}/albums/${album.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicAlbum',
    name: album.title,
    description: album.summary,
    url: absoluteUrl(path),
    image: absoluteUrl(album.cover),
    datePublished: album.year,
    byArtist: {
      '@type': 'MusicGroup',
      name: project.title,
      url: absoluteUrl(projectBase),
    },
    numTracks: album.trackCount ?? album.tracks.length,
  };

  return (
    <div className="min-w-[320px] bg-[#05030a] text-[#f7f5fa]">
      <Seo
        title={`${displayTitle} — ${project.title}`}
        description={album.summary}
        path={path}
        image={album.cover}
        jsonLd={jsonLd}
      />

      <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-white/10 bg-black px-[4.5vw]">
        <Link
          to="/"
          className="flex flex-col gap-0.5 text-white transition hover:text-white/70"
        >
          <span className="text-base font-extrabold uppercase tracking-[0.16em]">
            Wonderland Song
          </span>
          <span className="text-[0.58rem] font-medium normal-case tracking-[0.04em] text-white/50">
            {SITE_LAST_UPDATED_LABEL}
          </span>
        </Link>
        <Link
          to={projectBase}
          className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
        >
          ← {project.title}
        </Link>
      </header>

      <main>
        <section className="px-[5vw] pb-10 pt-12 sm:pt-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-14">
            <div className="mx-auto w-full max-w-xs lg:mx-0">
              <button
                type="button"
                onClick={() => setCoverOpen(true)}
                className="group relative w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50 transition duration-200 hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={`Ampliar capa de ${displayTitle}`}
              >
                <img
                  src={album.cover}
                  alt={`Capa de ${displayTitle}`}
                  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-3 pb-3 pt-10 text-center text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/80 opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Ampliar capa
                </span>
              </button>
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
                    {album.bandcampLabel?.trim() || 'Bandcamp'}
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
                  {album.tracks.map((track, index) => {
                    const hasLyricsContent = Boolean(
                      track.lyrics?.trim() || track.lyricsExplanation,
                    );
                    const number = index + 1;

                    return (
                      <li
                        key={`${album.slug}-t-${index}`}
                        className="flex items-baseline gap-4 py-3.5"
                      >
                        <span className="w-7 shrink-0 text-right text-[0.7rem] font-bold tabular-nums tracking-wider text-white/30">
                          {String(number).padStart(2, '0')}
                        </span>
                        <div className="min-w-0 flex-1">
                          {hasLyricsContent ? (
                            <button
                              type="button"
                              onClick={() => setLyricsTrack({ track, number })}
                              className="group m-0 block w-full text-left text-[0.95rem] font-medium text-white/90 transition hover:text-white"
                            >
                              <span className="group-hover:underline">{track.title}</span>
                              {!hideTrackDedications && track.dedication ? (
                                <span className="ml-2 font-normal text-white/40">
                                  · {track.dedication}
                                </span>
                              ) : null}
                              <span className="mt-0.5 block text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/35 transition group-hover:text-white/60">
                                Ver letra e explicação →
                              </span>
                            </button>
                          ) : (
                            <p className="m-0 text-[0.95rem] font-medium text-white/90">
                              {track.title}
                              {!hideTrackDedications && track.dedication ? (
                                <span className="ml-2 font-normal text-white/40">
                                  · {track.dedication}
                                </span>
                              ) : null}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              ) : (
                <p className="text-base leading-relaxed text-white/50">
                  Tracklist em breve — este álbum é apresentado aqui pela narrativa e pelo conceito.
                </p>
              )}

              {album.extraTracks && album.extraTracks.length > 0 ? (
                <div className="mt-10">
                  <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
                    {album.extraTracksLabel?.trim() || 'Faixas extras'}
                  </p>
                  <ol className="m-0 list-none divide-y divide-white/10 border-y border-white/10 p-0">
                    {album.extraTracks.map((track, index) => {
                      const hasLyricsContent = Boolean(
                        track.lyrics?.trim() || track.lyricsExplanation,
                      );
                      const number = album.tracks.length + index + 1;

                      return (
                        <li
                          key={`${album.slug}-extra-${index}`}
                          className="flex items-baseline gap-4 py-3.5"
                        >
                          <span className="w-7 shrink-0 text-right text-[0.7rem] font-bold tabular-nums tracking-wider text-white/30">
                            {String(number).padStart(2, '0')}
                          </span>
                          <div className="min-w-0 flex-1">
                            {hasLyricsContent ? (
                              <button
                                type="button"
                                onClick={() => setLyricsTrack({ track, number })}
                                className="group m-0 block w-full text-left text-[0.95rem] font-medium text-white/90 transition hover:text-white"
                              >
                                <span className="group-hover:underline">{track.title}</span>
                                <span className="mt-0.5 block text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/35 transition group-hover:text-white/60">
                                  Ver letra e explicação →
                                </span>
                              </button>
                            ) : (
                              <p className="m-0 text-[0.95rem] font-medium text-white/90">
                                {track.title}
                              </p>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ) : null}
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
                to={`${projectBase}/albums/${prevAlbum.slug}`}
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
                to={`${projectBase}/albums/${nextAlbum.slug}`}
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
            to={`${projectBase}#albums`}
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

      <AlbumCoverModal
        open={coverOpen}
        onClose={() => setCoverOpen(false)}
        src={album.cover}
        alt={`Capa de ${displayTitle}`}
        title={album.title}
      />

      <TrackLyricsModal
        open={Boolean(lyricsTrack)}
        onClose={() => setLyricsTrack(null)}
        track={lyricsTrack?.track ?? null}
        trackNumber={lyricsTrack?.number}
      />
    </div>
  );
}

export default BunnyAlbumPage;
