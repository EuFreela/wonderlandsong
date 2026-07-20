import { useState } from 'react';
import type { ProjectHistoryFeaturedVideo } from '../../types';
import { IconPlay } from '../ui/Icons';

type Props = {
  video: ProjectHistoryFeaturedVideo;
};

/**
 * Compact “quick access” YouTube player under a history chapter.
 * Thumbnail + play first; iframe loads only after click.
 */
function HistoryFeaturedVideo({ video }: Props) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
  const embed = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
  const watch = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <figure className="mt-6 max-w-xl overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.75)]">
      <div className="relative aspect-video w-full bg-black">
        {playing ? (
          <iframe
            title={video.title}
            src={embed}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Assistir: ${video.title}`}
          >
            <img
              src={thumb}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
            <span
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10"
              aria-hidden
            />
            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-black shadow-lg transition duration-200 group-hover:scale-105">
              <IconPlay size={22} className="ml-0.5" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <p className="m-0 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/40">
            Acesso rápido
          </p>
          <p className="m-0 mt-0.5 truncate text-sm font-medium text-white/90">
            {video.title}
          </p>
          {video.subtitle ? (
            <p className="m-0 mt-0.5 text-xs text-white/45">{video.subtitle}</p>
          ) : null}
        </div>
        <a
          href={watch}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#9eb8ff] underline decoration-[#9eb8ff]/50 underline-offset-2 transition hover:text-[#c4d4ff]"
        >
          YouTube ↗
        </a>
      </figcaption>
    </figure>
  );
}

export default HistoryFeaturedVideo;
