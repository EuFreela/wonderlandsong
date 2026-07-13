import fs from 'node:fs';

const tracks = JSON.parse(fs.readFileSync('agm-lyrics.json', 'utf8'));

const data = tracks.map((t) => ({
  title: t.title,
  lyrics: t.lyrics,
  lyricsExplanation: {
    title: t.explanation.title,
    verse: t.explanation.verse,
    quote: t.explanation.quote,
    message: t.explanation.message,
    sections: t.explanation.sections,
    verses: t.explanation.verses,
  },
}));

const out = `/** Lyrics + explanations for A Verdade Ainda Chama (from agrandemultidao.vercel.app). */
import type { BunnyAlbumTrack } from '../types';

export const aVerdadeAindaChamaTracks: BunnyAlbumTrack[] = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync('src/data/agm-lyrics.ts', out, 'utf8');
console.log('wrote', data.length, 'tracks');
