export type Project = {
  id: string;
  category: string;
  title: string;
  /** Poster / fallback image (also used when reduced motion is preferred). */
  image: string;
  /** Optional full-bleed background video (same frame as the image). */
  video?: string;
  /**
   * Optional color overlay on top of image/video.
   * Hex color, e.g. `#000000` or `#1a0a2e`.
   */
  filterColor?: string;
  /**
   * Overlay opacity for `filterColor` (0–1).
   * Example: `0.4` = 40% tint.
   */
  filterOpacity?: number;
  /**
   * Header text contrast over this panel.
   * - `light` → white text (use on dark images)
   * - `dark` → black text (use on light images)
   * Omit to auto-detect from the image (and filter).
   */
  headerTone?: 'light' | 'dark';
  href: string;
  buttonLabel?: string;
};

export type Artist = {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
};

export type Release = {
  id: string;
  title: string;
  type: string;
  year: string;
  image: string;
};
