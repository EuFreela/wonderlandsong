export type Project = {
  id: string;
  category: string;
  title: string;
  /** Poster / fallback image (also used when reduced motion is preferred). */
  image: string;
  /**
   * CSS object-position for the panel media (desktop).
   * Example: `center top`, `center 30%`, `left center`.
   */
  imagePosition?: string;
  /**
   * object-position on small screens (portrait crop).
   * Defaults to a slight upward bias so faces/subjects stay framed.
   */
  imagePositionMobile?: string;
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
  /** Optional short message under the title (homepage panel only). */
  message?: string;
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

/** Optional YouTube highlight under a history chapter (lazy embed). */
export type ProjectHistoryFeaturedVideo = {
  youtubeId: string;
  title: string;
  subtitle?: string;
};

/** History chapter on a project detail page. */
export type ProjectHistorySection = {
  id: string;
  title: string;
  paragraphs: string[];
  /** Small “quick access” player shown under the chapter text. */
  featuredVideo?: ProjectHistoryFeaturedVideo;
};

/**
 * Shared content model for individual project pages
 * (Bunny Land Music, Rosa Negra de Halfeti, etc.).
 */
export type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  image: string;
  /** CSS object-position for the hero image (desktop). */
  imagePosition?: string;
  /** object-position on small screens for better framing. */
  imagePositionMobile?: string;
  tagline: string;
  /** H2 above the history lead, e.g. "Como nasceu o …". */
  historyTitle: string;
  historyLead: string;
  pullQuote?: string;
  historySections: ProjectHistorySection[];
  historyClosing?: string;
  historySourceUrl?: string;
  historySourceLabel?: string;
  spotifyUrl?: string;
  spotifyLabel?: string;
  youtubeUrl?: string;
  youtubeLabel?: string;
  /** Footer line under Wonderland Song. */
  footerNote?: string;
  /** Shown when the albums gallery is empty. */
  albumsEmptyMessage?: string;
};

export type Release = {
  id: string;
  title: string;
  type: string;
  year: string;
  image: string;
};

export type TrackLyricSection = {
  title: string;
  content: string;
};

export type TrackLyricsExplanation = {
  title?: string;
  /** Bible verse reference, e.g. "João 14:6". */
  verse?: string;
  quote?: string;
  message?: string;
  sections?: TrackLyricSection[];
  /** Optional related scripture list. */
  verses?: string[];
};

export type BunnyAlbumTrack = {
  title: string;
  /** Optional dedication / character linked to the track (Chapter 3). */
  dedication?: string;
  /** Full lyrics text (shown in track modal). */
  lyrics?: string;
  /** Explanation / study notes shown with the lyrics. */
  lyricsExplanation?: TrackLyricsExplanation;
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

/** Album / release card + detail for a project discography. */
export type ProjectAlbum = {
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
  /**
   * Optional “Demo” status block above “Sobre o álbum”
   * (e.g. WIP note and current demo track).
   */
  demoInfo?: string[];
  /**
   * Optional decorative preview video on the album page
   * (muted loop, shown under “Sobre o álbum”).
   */
  previewVideo?: string;
  /** Optional content warning. */
  warning?: string;
  duration?: string;
  trackCount?: number;
  spotifyUrl?: string;
  bandcampUrl?: string;
  /** Label for the Bandcamp button (default: "Bandcamp"). */
  bandcampLabel?: string;
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
  /**
   * Optional bonus / unreleased tracks shown under “Faixas extras”
   * (e.g. New Day Genesis extras not on the Spotify album).
   */
  extraTracks?: BunnyAlbumTrack[];
  /** Label for the extras section (default: "Faixas extras"). */
  extraTracksLabel?: string;
  /** Music video clips for this chapter/album. */
  clips: BunnyAlbumClip[];
};

/** @deprecated Use ProjectAlbum — kept as alias for existing imports. */
export type BunnyAlbum = ProjectAlbum;
