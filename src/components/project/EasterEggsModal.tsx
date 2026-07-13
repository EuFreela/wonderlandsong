import { useEffect, useId, useRef } from 'react';
import type { BunnyAlbumTrack } from '../../types';

type EasterEggContent = {
  title: string;
  subtitle?: string;
  intro: string;
  note?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  content: EasterEggContent;
  tracks: BunnyAlbumTrack[];
};

/**
 * Modal with album “Easter Eggs” / revelations map
 * (track → dedication), shown only after user opens it.
 */
function EasterEggsModal({ open, onClose, content, tracks }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const revelations = tracks.filter((track) => Boolean(track.dedication?.trim()));

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Fechar Easter Eggs"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[min(92dvh,880px)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-amber-300/25 bg-[#100c16] shadow-2xl sm:rounded-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-amber-200/70">
              Easter Eggs
            </p>
            <h2
              id={titleId}
              className="m-0 text-xl font-medium tracking-tight text-white sm:text-2xl"
            >
              {content.title}
            </h2>
            {content.subtitle ? (
              <p className="m-0 mt-1 text-sm text-white/50">{content.subtitle}</p>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-white/15 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Fechar
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <p className="m-0 text-base leading-relaxed text-white/80">{content.intro}</p>

          {revelations.length > 0 ? (
            <ol className="mt-6 list-none divide-y divide-white/10 border-y border-white/10 p-0">
              {revelations.map((track, index) => (
                <li key={`${track.title}-${index}`} className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="min-w-0 flex-1 text-[0.95rem] font-medium text-white/90">
                    {track.title}
                  </span>
                  <span className="shrink-0 text-sm text-amber-100/75">
                    → {track.dedication}
                  </span>
                </li>
              ))}
            </ol>
          ) : null}

          {content.note ? (
            <p className="mt-6 text-sm leading-relaxed text-white/40">{content.note}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EasterEggsModal;
