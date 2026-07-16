type Props = {
  /** Full-screen (lazy route) or top progress bar (in-app navigation). */
  variant?: 'page' | 'bar';
};

/**
 * Shared loading UI for lazy routes and navigation.
 * Visual only (spinner / bar) — no “Carregando…” copy.
 */
function PageLoading({ variant = 'page' }: Props) {
  if (variant === 'bar') {
    return (
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[400] h-0.5 overflow-hidden"
        role="status"
        aria-live="polite"
        aria-label="Carregando"
      >
        <div className="page-loading-bar h-full w-1/3 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />
      </div>
    );
  }

  return (
    <div
      className="flex min-h-screen min-w-[320px] flex-col items-center justify-center gap-6 bg-[#05030a] px-6 text-center"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Carregando"
    >
      <div className="flex flex-col items-center gap-5">
        <div
          className="page-loading-spinner h-11 w-11 rounded-full border-2 border-white/15 border-t-white/85"
          aria-hidden
        />
        <p className="m-0 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-white/90">
          Wonderland Song
        </p>
      </div>
    </div>
  );
}

export default PageLoading;
