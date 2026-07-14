import { useEffect, useId, useRef } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
};

/**
 * Lightbox for album cover art — large centered image for appreciation.
 */
function AlbumCoverModal({ open, onClose, src, alt, title }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
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
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Fechar capa ampliada"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-full w-full max-w-[min(92vw,720px)] flex-col items-center">
        <div className="mb-3 flex w-full items-center justify-between gap-4">
          <p
            id={titleId}
            className="m-0 min-w-0 truncate text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/50"
          >
            {title ? `Capa · ${title}` : 'Capa do álbum'}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/85 transition hover:border-white/45 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Fechar
          </button>
        </div>

        <img
          src={src}
          alt={alt}
          className="max-h-[min(82dvh,720px)] w-full rounded-xl border border-white/15 object-contain shadow-2xl shadow-black/60"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default AlbumCoverModal;
