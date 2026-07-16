import type { Project } from '../types';

/**
 * Homepage parallax panels only.
 * Kept free of album/lyrics imports so the home route stays light.
 *
 * `headerTone: 'light'` = white header text (dark full-bleed art).
 * Static tones avoid canvas image sampling on the main thread.
 */
export const projects: Project[] = [
  {
    id: 'project-1',
    category: 'Record Label',
    title: 'Wonderland Song',
    image: '/images/wonderland2.webp',
    video: '/videos/wonderland2.webm',
    headerTone: 'light',
    href: '/projects/wonderland-song',
    message: 'Ajudando a construir música boa no Brasil e no mundo',
    youtubeUrl: 'https://www.youtube.com/@wonderlandsong/videos',
    youtubeLabel: 'YouTube',
  },
  {
    id: 'project-2',
    category: 'Dark EDM + Pop',
    title: 'Bunny Land Music',
    image: '/images/caution2.webp',
    imagePositionMobile: 'center 30%',
    headerTone: 'light',
    href: '/projects/bunny-land-music',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/7sf7qPbN4BiUlbOfEwziza',
    spotifyLabel: 'Ouvir no Spotify',
    youtubeUrl: 'https://www.youtube.com/@bunnylandmusic',
    youtubeLabel: 'YouTube',
  },
  {
    id: 'project-3',
    category: 'MPB · Experimental · Atmosférico',
    title: 'Rosa Negra de Halfeti',
    image: '/images/rnh3.webp',
    imagePositionMobile: 'center 28%',
    headerTone: 'light',
    href: '/projects/rosa-negra-halfeti',
    buttonLabel: 'Abrir projeto',
  },
  {
    id: 'project-4',
    category: 'Gospel + TJ',
    title: 'A Grande Multidão',
    image: '/images/agm2.webp',
    headerTone: 'light',
    href: '/projects/a-grande-multidao',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/0nUtKTD6CkcADpjPYYCzHu',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-5',
    category: 'Grunge',
    title: 'Helena Son',
    image: '/images/hs2.webp',
    imagePositionMobile: 'center 22%',
    headerTone: 'light',
    href: '/projects/helena-son',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/3w2iPAIrdoXXzJ38C59np8',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-6',
    category: 'Hard Rock 1960',
    title: 'USS Shenandoah',
    image: '/images/usss.webp',
    imagePositionMobile: 'center 32%',
    headerTone: 'light',
    href: '/projects/uss-shenandoah',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/008vDYJA7fvRWxchF8QN1F',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-7',
    category: 'Blues',
    title: 'Lameck & Southern Birds Band',
    image: '/images/lsbb.webp',
    headerTone: 'light',
    href: '/projects/lameck-southern-birds-band',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/6jZsG3waoXclu0mC2tv4eX',
    spotifyLabel: 'Ouvir no Spotify',
  },
];
