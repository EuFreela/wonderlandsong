type Props = {
  /** Full-screen (lazy route) or top progress bar (in-app navigation). */
  variant?: 'page' | 'bar';
};

/**
 * Shared loading UI for lazy routes and navigation.
 * Full-page uses public/boy.webp; bar keeps the thin top progress.
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
      <img
        src="/boy.webp"
        alt=""
        width={140}
        height={140}
        decoding="async"
        className="page-loading-boy h-[8.75rem] w-[8.75rem] object-contain"
        aria-hidden
      />
    </div>
  );
}

export default PageLoading;
