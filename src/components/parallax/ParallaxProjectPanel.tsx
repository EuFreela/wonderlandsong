import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useMobileParallax } from '../../hooks/useMobileParallax';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import type { Project } from '../../types';
import SpotifyIcon from '../ui/SpotifyIcon';
import YouTubeIcon from '../ui/YouTubeIcon';

type Props = {
  project: Project;
  /** First homepage panel: eager image + high fetch priority for LCP. */
  priority?: boolean;
};

/** Matches CSS mobile parallax breakpoint — no heavy background video on phones. */
const DESKTOP_MEDIA = '(min-width: 901px)';

/**
 * Fixed-background parallax panel.
 * Desktop: CSS position:fixed + clip (no JS).
 * Mobile: shared rAF loop with integer translate3d (same window effect, less jitter).
 *
 * Performance:
 * - Poster/image paints first (LCP-friendly).
 * - Background video only on desktop, after idle (skips ~2MB webm on mobile).
 * - Non-priority panels use loading="lazy".
 */
function ParallaxProjectPanel({ project, priority = false }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const panelRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  const isHashLink = project.href.startsWith('#');
  const label = project.buttonLabel?.trim();
  const showButton = Boolean(label);
  const spotifyUrl = project.spotifyUrl?.trim();
  const showSpotify = Boolean(spotifyUrl);
  const spotifyLabel = project.spotifyLabel?.trim() || 'Spotify';
  const youtubeUrl = project.youtubeUrl?.trim();
  const showYouTube = Boolean(youtubeUrl);
  const youtubeLabel = project.youtubeLabel?.trim() || 'YouTube';
  const wantsVideo =
    Boolean(project.video) && !prefersReducedMotion && isDesktop;
  const filterOpacity = Math.min(1, Math.max(0, project.filterOpacity ?? 0));
  const hasColorFilter = Boolean(project.filterColor) && filterOpacity > 0;
  const showActions = showButton || showSpotify || showYouTube;

  /** object-position: desktop + mobile focal points for better framing. */
  const mediaStyle = {
    ...(project.imagePosition ? { '--media-pos': project.imagePosition } : {}),
    ...(project.imagePositionMobile
      ? { '--media-pos-mobile': project.imagePositionMobile }
      : {}),
  } as CSSProperties;

  useMobileParallax(panelRef, mediaRef);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MEDIA);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Defer video so poster/image can become LCP without competing with ~2MB webm.
  useEffect(() => {
    if (!wantsVideo) {
      setLoadVideo(false);
      return;
    }

    const enable = () => setLoadVideo(true);
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof win.requestIdleCallback === 'function') {
      const id = win.requestIdleCallback(enable, { timeout: 2500 });
      return () => win.cancelIdleCallback?.(id);
    }

    const t = window.setTimeout(enable, 1200);
    return () => window.clearTimeout(t);
  }, [wantsVideo]);

  useEffect(() => {
    if (!loadVideo || !videoRef.current) return;
    const el = videoRef.current;
    const play = () => {
      void el.play().catch(() => {
        /* autoplay may be blocked; poster remains visible */
      });
    };
    if (el.readyState >= 2) play();
    else el.addEventListener('loadeddata', play, { once: true });
  }, [loadVideo]);

  const buttonClassName =
    'inline-flex min-h-[38px] items-center justify-center gap-2 bg-[#111] px-5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white transition duration-200 hover:bg-white hover:text-[#111] focus-visible:bg-white focus-visible:text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]';

  const iconButtonBase =
    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-md transition duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const spotifyClassName = `${iconButtonBase} bg-[#1DB954] hover:bg-[#1ed760] focus-visible:outline-[#1DB954]`;
  const youtubeClassName = `${iconButtonBase} bg-[#FF0000] hover:bg-[#ff2a2a] focus-visible:outline-[#FF0000]`;

  return (
    <section
      ref={panelRef}
      id={project.id}
      className="parallax-panel"
      aria-label={project.title}
    >
      <div className="parallax-media" aria-hidden>
        <div className="parallax-media__clip">
          <div ref={mediaRef} className="parallax-media__layer">
            {/* Poster always present — LCP candidate; video layers on top when ready. */}
            <img
              className="parallax-media__asset"
              style={mediaStyle}
              src={project.image}
              srcSet={
                project.image.includes('wonderland2')
                  ? '/images/wonderland2-sm.webp 800w, /images/wonderland2.webp 1600w'
                  : undefined
              }
              sizes={project.image.includes('wonderland2') ? '100vw' : undefined}
              alt=""
              width={priority ? 1600 : undefined}
              height={priority ? 900 : undefined}
              decoding="async"
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'auto'}
              draggable={false}
            />
            {wantsVideo && loadVideo ? (
              <video
                ref={videoRef}
                className="parallax-media__asset parallax-media__video"
                style={mediaStyle}
                src={project.video}
                muted
                loop
                playsInline
                preload="none"
                autoPlay
              />
            ) : null}
          </div>
        </div>
      </div>

      {hasColorFilter ? (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ backgroundColor: project.filterColor, opacity: filterOpacity }}
          aria-hidden
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/[0.03] via-black/[0.06] to-black/30"
        aria-hidden
      />

      <div className="panel-content relative z-10 w-full px-[5vw] pb-[60px] max-md:px-5 max-md:pb-[34px]">
        <span className="mb-3.5 block w-fit max-w-full bg-white/95 px-3 py-1.5 text-[0.67rem] font-bold uppercase tracking-[0.14em] text-black/70">
          {project.category}
        </span>

        <h2 className="m-0 block w-fit max-w-full bg-white/95 px-3 py-2 text-[clamp(1.6rem,3vw,2.8rem)] font-medium leading-[1.08] text-[#222]">
          {project.title}
        </h2>

        {project.message?.trim() ? (
          <p className="mt-3 m-0 block w-fit max-w-xl bg-white/95 px-3 py-2 text-[0.9rem] leading-snug text-black/75 sm:text-base">
            {project.message.trim()}
          </p>
        ) : null}

        {showActions ? (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {showButton ? (
              isHashLink ? (
                <a href={project.href} className={buttonClassName}>
                  {label}
                </a>
              ) : (
                <Link to={project.href} className={buttonClassName}>
                  {label}
                </Link>
              )
            ) : null}

            {showSpotify ? (
              <a
                href={spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={spotifyClassName}
                aria-label={spotifyLabel}
                title={spotifyLabel}
              >
                <SpotifyIcon size={22} />
              </a>
            ) : null}

            {showYouTube ? (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={youtubeClassName}
                aria-label={youtubeLabel}
                title={youtubeLabel}
              >
                <YouTubeIcon size={22} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ParallaxProjectPanel;
