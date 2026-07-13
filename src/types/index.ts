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
  /** Spotify page/playlist/artist URL — shows a Spotify button when set. */
  spotifyUrl?: string;
  /** Label for the Spotify button (default: "Spotify"). */
  spotifyLabel?: string;
  /** YouTube channel/video/playlist URL — shows a YouTube button when set. */
  youtubeUrl?: string;
  /** Label for the YouTube button (default: "YouTube"). */
  youtubeLabel?: string;
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

export type BunnyAlbumTrack = {
  title: string;
  /** Optional dedication / character linked to the track (Chapter 3). */
  dedication?: string;
};

/** Music video / clip linked to an album chapter. */
export type BunnyAlbumClip = {
  id: string;
  title: string;
  /** YouTube video id (e.g. j4Zi3IXLOKM). */
  youtubeId: string;
  /** Optional short label under the title. */
  subtitle?: string;
  /** When true, opens as youtube.com/shorts/:id (Shorts format). */
  isShort?: boolean;
};

export type BunnyAlbum = {
  slug: string;
  title: string;
  /** Short chapter label, e.g. "Chapter 2". */
  chapter?: string;
  year: string;
  type: 'Album' | 'EP' | 'Single' | 'Demo';
  cover: string;
  /** One-line summary for gallery cards. */
  summary: string;
  /** Full description paragraphs for the album page. */
  description: string[];
  /** Optional content warning. */
  warning?: string;
  duration?: string;
  trackCount?: number;
  spotifyUrl?: string;
  bandcampUrl?: string;
  youtubeUrl?: string;
  /** Lyrics page (e.g. Genius album page). */
  lyricsUrl?: string;
  /** Label for the lyrics button (default: "Letras"). */
  lyricsLabel?: string;
  /**
   * Easter Eggs / revelations modal content.
   * When set, the album page shows an “Easter Eggs” button that opens a modal.
   */
  easterEgg?: {
    title: string;
    subtitle?: string;
    intro: string;
    /** Optional note under the list. */
    note?: string;
  };
  tracks: BunnyAlbumTrack[];
  /** Music video clips for this chapter/album. */
  clips: BunnyAlbumClip[];
};
