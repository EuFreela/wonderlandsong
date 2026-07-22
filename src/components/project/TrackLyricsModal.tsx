import { useEffect, useId, useRef } from 'react';
import type { BunnyAlbumTrack } from '../../types';

type Props = {
  open: boolean;
  onClose: () => void;
  track: BunnyAlbumTrack | null;
  trackNumber?: number;
};

/**
 * Modal with full lyrics + explanation for a single album track.
 */
function TrackLyricsModal({ open, onClose, track, trackNumber }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const expl = track?.lyricsExplanation;

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

  if (!open || !track) return null;

  const hasLyrics = Boolean(track.lyrics?.trim());
  const hasExpl =
    Boolean(expl?.message?.trim()) ||
    Boolean(expl?.sections && expl.sections.length > 0) ||
    Boolean(expl?.title?.trim());

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
        aria-label="Fechar letra"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[min(92dvh,900px)] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-white/15 bg-[#100c16] shadow-2xl sm:rounded-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/40">
              {trackNumber != null ? `Faixa ${String(trackNumber).padStart(2, '0')} · ` : ''}
              Letra e explicação
            </p>
            <h2
              id={titleId}
              className="m-0 text-xl font-medium tracking-tight text-white sm:text-2xl"
            >
              {track.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-white/15 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Fechar
          </button>
        </div>

        <div className="grid min-h-0 flex-1 gap-0 overflow-y-auto lg:grid-cols-2">
          <section className="border-b border-white/10 px-5 py-5 sm:px-6 lg:border-b-0 lg:border-r">
            <p className="mb-4 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
              Letra
            </p>
            {hasLyrics ? (
              <pre className="m-0 whitespace-pre-wrap font-sans text-[0.95rem] leading-[1.7] text-white/80">
                {track.lyrics}
              </pre>
            ) : (
              <p className="m-0 text-sm text-white/45">Letra em breve.</p>
            )}
          </section>

          <section className="px-5 py-5 sm:px-6">
            <p className="mb-4 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-white/45">
              Explicação
            </p>
            {hasExpl ? (
              <div className="flex flex-col gap-5">
                {expl?.title ? (
                  <h3 className="m-0 text-lg font-medium text-white">{expl.title}</h3>
                ) : null}

                {expl?.verse || expl?.quote ? (
                  <blockquote className="m-0 border-l-2 border-amber-300/40 pl-4">
                    {expl.verse ? (
                      <p className="m-0 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-amber-100/70">
                        Texto-base · {expl.verse}
                      </p>
                    ) : null}
                    {expl.quote ? (
                      <p className="m-0 mt-2 text-sm leading-relaxed italic text-white/75">
                        “{expl.quote}”
                      </p>
                    ) : null}
                  </blockquote>
                ) : null}

                {expl?.verses && expl.verses.length > 0 ? (
                  <div>
                    <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40">
                      Textos bíblicos · base da explicação
                    </p>
                    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                      {expl.verses.map((v) => (
                        <li
                          key={v}
                          className={`rounded-full border px-3 py-1 text-xs ${
                            v === expl.verse
                              ? 'border-amber-300/40 bg-amber-400/10 text-amber-50'
                              : 'border-white/10 bg-white/[0.04] text-white/65'
                          }`}
                        >
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {expl?.message ? (
                  <p className="m-0 text-justify text-base leading-relaxed text-white/80 hyphens-auto">
                    {expl.message}
                  </p>
                ) : null}

                {expl?.sections?.map((section) => {
                  const isTranslation =
                    /tradu/i.test(section.title) || /\(pt\)|portugu/i.test(section.title);
                  return (
                    <div key={section.title}>
                      <h4 className="m-0 mb-1.5 text-sm font-bold uppercase tracking-[0.1em] text-white/55">
                        {section.title}
                      </h4>
                      {/* Keep line breaks/spacing like the lyrics panel (esp. PT translations). */}
                      <pre
                        className={`m-0 whitespace-pre-wrap font-sans text-white/70 ${
                          isTranslation
                            ? 'text-[0.95rem] leading-[1.7]'
                            : 'text-sm leading-[1.7]'
                        }`}
                      >
                        {section.content}
                      </pre>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="m-0 text-sm text-white/45">Explicação em breve.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default TrackLyricsModal;
