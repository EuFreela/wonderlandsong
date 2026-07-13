import type { Artist, Project, Release } from '../types';

/**
 * Homepage parallax panels (POFO-style fixed background sequence).
 * Images match the reference HTML (portfolio-item57–62).
 */
export const projects: Project[] = [
  {
    id: 'project-1',
    category: 'Record Label',
    title: 'Wonderland Song',
    image: '/images/wonderland2.png',
    video: '/videos/wonderland2.mp4',
    // Color tint over the media — change hex + opacity as needed
    // filterColor: '#fff782',
    // filterOpacity: 0.35,
    href: '/projects/wonderland-song',
    // buttonLabel: 'Abrir projeto',
    // spotifyUrl: 'https://open.spotify.com/',
    // spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-2',
    category: 'Dark EDM + Pop',
    title: 'Bunny Land Music',
    image: '/images/caution2.png',
    // video: '/videos/caution.mp4',
    // Color tint over the media — change hex + opacity as needed
    // filterColor: '#9cbfff',
    // filterOpacity: 0.35,
    href: '/projects/caution-audio-gateway',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/7sf7qPbN4BiUlbOfEwziza',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-3',
    category: 'MPB + Jazz + Poetry',
    title: 'Rosa Negra de Halfeti',
    image: '/images/rnh3.png',
    href: '/projects/rosa-negra-halfeti',
    buttonLabel: 'Abrir projeto',
  },
  {
    id: 'project-4',
    category: 'Gospel + TJ',
    title: 'A Grande Multidão',
    image: '/images/agm2.png',
    href: '/projects/wonderland-song-tv',
    buttonLabel: 'Abrir projeto',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/0nUtKTD6CkcADpjPYYCzHu',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-5',
    category: 'Grunge',
    title: 'Helena Son',
    image: '/images/hs2.png',
    href: '#artists',
    buttonLabel: 'Conhecer artistas',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/3w2iPAIrdoXXzJ38C59np8',
    spotifyLabel: 'Ouvir no Spotify',
  },
  {
    id: 'project-6',
    category: 'Hard Rock 1960',
    title: 'USS Shenandoah',
    image: '/images/usss.png',
    href: '#contact',
    buttonLabel: 'Continuar',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/008vDYJA7fvRWxchF8QN1F',
    spotifyLabel: 'Ouvir no Spotify',
  },
];

export const artists: Artist[] = [
  {
    id: 'maya',
    name: 'Maya Vale',
    role: 'Composer & Voice',
    image: '/images/artists/maya.svg',
    description: 'Shapes narrative songs with intimate textures and cinematic pacing.',
  },
  {
    id: 'joao',
    name: 'João Lumen',
    role: 'Producer & Sound Design',
    image: '/images/artists/joao.svg',
    description: 'Builds modular sound worlds that move between analogue and digital.',
  },
  {
    id: 'nora',
    name: 'Nora Sol',
    role: 'Visual Direction',
    image: '/images/artists/nora.svg',
    description: 'Creates dreamlike visual systems that echo the music’s emotional range.',
  },
];

export const releases: Release[] = [
  {
    id: 'silver-echo',
    title: 'Silver Echo',
    type: 'Single',
    year: '2026',
    image: '/images/releases/silver-echo.svg',
  },
  {
    id: 'night-archive',
    title: 'Night Archive',
    type: 'EP',
    year: '2025',
    image: '/images/releases/night-archive.svg',
  },
  {
    id: 'circuit-garden',
    title: 'Circuit Garden',
    type: 'Album',
    year: '2024',
    image: '/images/releases/circuit-garden.svg',
  },
];
