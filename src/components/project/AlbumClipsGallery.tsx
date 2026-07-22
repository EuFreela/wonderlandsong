import { useCallback, useEffect, useId, useState } from 'react';
import type { BunnyAlbumClip } from '../../types';
import { IconPlay } from '../ui/Icons';
import YouTubeIcon from '../ui/YouTubeIcon';

type Props = {
  clips: BunnyAlbumClip[];
  albumTitle: string;
};

function youtubeWatchUrl(youtubeId: string, isShort?: boolean) {
  if (isShort) {
    return `https://www.youtube.com/shorts/${youtubeId}`;
  }
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

function youtubeThumbUrl(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

function youtubeEmbedUrl(youtubeId: string) {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;
}

/**
 * Gallery of music video clips for an album chapter.
 * YouTube iframe loads only after the user chooses a clip (no auto-embed).
 */
function AlbumClipsGallery({ clips, albumTitle }: Props) {
  const titleId = useId();
  const [activeClipId, setActiveClipId] = useState<string | null>(null);

  const activeClip = clips.find((clip) => clip.id === activeClipId) ?? null;

  const closePlayer = useCallback(() => setActiveClipId(null), []);

  useEffect(() => {
    if (!activeClip) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePlayer();
      }
    };

    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeClip, closePlayer]);

  if (clips.length === 0) {
    return (
      <section
        id="clips"
        className="border-t border-white/10 px-[5vw] py-14 sm:py-16"
        aria-labelledby={titleId}
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
            Videoclipes
          </p>
          <h2
            id={titleId}
            className="m-0 mb-3 text-[clamp(1.35rem,2.5vw,1.75rem)] font-medium leading-tight tracking-tight text-white"
          >
            Clips musicais
          </h2>
          <p className="max-w-2xl text-justify text-base leading-relaxed text-white/50 hyphens-auto">
            Os clips deste capítulo serão adicionados em breve.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="clips"
      className="border-t border-white/10 px-[5vw] py-14 sm:py-16"
      aria-labelledby={titleId}
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
          Videoclipes
        </p>
        <h2
          id={titleId}
          className="m-0 mb-3 text-[clamp(1.35rem,2.5vw,1.75rem)] font-medium leading-tight tracking-tight text-white"
        >
          Clips musicais
        </h2>
        <p className="mb-10 max-w-2xl text-justify text-base leading-relaxed text-white/60 hyphens-auto">
          Série visual de {albumTitle}. Clique em um clip para assistir.
        </p>

        <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip) => (
            <li key={clip.id}>
              <button
                type="button"
                onClick={() => setActiveClipId(clip.id)}
                className="group flex w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left transition duration-200 hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <div className="relative aspect-video overflow-hidden bg-black/50">
                  <img
                    src={youtubeThumbUrl(clip.youtubeId)}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                    aria-hidden
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg transition duration-200 group-hover:scale-110">
                      <IconPlay size={22} className="ml-0.5" />
                    </span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 px-4 py-4">
                  <span className="text-base font-medium leading-snug text-white">
                    {clip.title}
                  </span>
                  {clip.subtitle ? (
                    <span className="text-sm text-white/45">{clip.subtitle}</span>
                  ) : null}
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40 transition group-hover:text-white/70">
                    <YouTubeIcon size={14} />
                    Assistir
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeClip ? (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeClip.title}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Fechar player"
            onClick={closePlayer}
          />

          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-xl border border-white/15 bg-[#0a0810] shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="m-0 truncate text-sm font-medium text-white sm:text-base">
                  {activeClip.title}
                </p>
                {activeClip.subtitle ? (
                  <p className="m-0 mt-0.5 truncate text-xs text-white/45">{activeClip.subtitle}</p>
                ) : null}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={youtubeWatchUrl(activeClip.youtubeId, activeClip.isShort)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/55 transition hover:text-white sm:inline"
                >
                  Abrir no YouTube
                </a>
                <button
                  type="button"
                  onClick={closePlayer}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/40 hover:bg-white/5"
                >
                  Fechar
                </button>
              </div>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                title={activeClip.title}
                src={youtubeEmbedUrl(activeClip.youtubeId)}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default AlbumClipsGallery;
