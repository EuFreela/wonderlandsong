import fs from 'node:fs';

const raw = fs.readFileSync('caution-lyrics.txt', 'utf8');

/** Split PDF dump by song titles (EN) and optional PT titles. */
const songOrder = [
  {
    title: 'The Gateway to Bunny Land (Intro)',
    enStart: /^Intro\n/m,
    ptStart: /^Introdução\n/m,
    enEnd: /^Introdução\n/m,
    ptEnd: /^Bunny Land\n/m,
  },
  {
    title: 'Bunny Land',
    enStart: /^Bunny Land\n/m,
    enEnd: /^Apocalipse In Me\n/m,
    instrumental: true,
  },
  {
    title: 'Apocalipse In Me',
    enStart: /^Apocalipse In Me\n/m,
    ptStart: /^Apocalipse em Mim\n/m,
    enEnd: /^Apocalipse em Mim\n/m,
    ptEnd: /^Synthetic Dreams\n/m,
  },
  {
    title: 'Synthetic Dreams',
    enStart: /^Synthetic Dreams\n/m,
    enEnd: /^Minerva\n/m,
    instrumental: true,
  },
  {
    title: 'Minerva',
    enStart: /^Minerva\n/m,
    enEnd: /^My Pulse\n/m,
    instrumental: true,
  },
  {
    title: 'My Pulse',
    enStart: /^My Pulse\n/m,
    ptStart: /^Meu Pulso\n/m,
    enEnd: /^Meu Pulso\n/m,
    ptEnd: /^Glitch In Time\n/m,
  },
  {
    title: 'Glitch In Time',
    enStart: /^Glitch In Time\n/m,
    ptStart: /^Falha no Tempo\n/m,
    enEnd: /^Falha no Tempo\n/m,
    ptEnd: /^Shattered Parallels\n/m,
  },
  {
    title: 'Shattered Parallels',
    enStart: /^Shattered Parallels\n/m,
    ptStart: /^Paralelos Estilhaçados\n/m,
    enEnd: /^Paralelos Estilhaçados\n/m,
    ptEnd: /^Veins of Autumn\n/m,
  },
  {
    title: 'Veins of Autumn',
    enStart: /^Veins of Autumn\n/m,
    ptStart: /^Veias do Outono\n/m,
    enEnd: /^Veias do Outono\n/m,
    ptEnd: /^Who I Was/m,
  },
  {
    title: 'Who I Was (Shadows of Who I Might Have Been)',
    enStart: /^Who I Was \(Shadows of Who I Might Have Been\)\n/m,
    ptStart: /^Quem Eu Fui/m,
    enEnd: /^Quem Eu Fui/m,
    ptEnd: /^Fragments of Light\n/m,
  },
  {
    title: 'Fragments of Light',
    enStart: /^Fragments of Light\n/m,
    enEnd: /^Welcome Home\n/m,
    instrumental: true,
  },
  {
    title: 'Welcome Home',
    enStart: /^Welcome Home\n/m,
    ptStart: /^Bem-vinda ao Lar\n/m,
    enEnd: /^Bem-vinda ao Lar\n/m,
    ptEnd: /^After The Fall\n/m,
  },
  {
    title: 'After the Fall',
    enStart: /^After The Fall\n/m,
    ptStart: /^Depois da Queda\n/m,
    enEnd: /^Depois da Queda\n/m,
    ptEnd: null,
  },
];

function sliceByRegex(text, startRe, endRe) {
  const sm = text.match(startRe);
  if (!sm) return '';
  const start = sm.index + sm[0].length;
  let end = text.length;
  if (endRe) {
    const em = text.slice(start).match(endRe);
    if (em) end = start + em.index;
  }
  return clean(text.slice(start, end));
}

function clean(s) {
  return s
    .replace(/\r\n/g, '\n')
    .replace(/-- \d+ of \d+ --\n?/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const tracks = songOrder.map((song) => {
  if (song.instrumental) {
    return {
      title: song.title,
      lyrics: '[Instrumental]',
      lyricsExplanation: {
        title: 'Faixa instrumental',
        message: 'Esta faixa é instrumental — a narrativa é contada pela música.',
        sections: [],
        verses: [],
      },
    };
  }

  const lyrics = sliceByRegex(raw, song.enStart, song.enEnd);
  const pt = song.ptStart ? sliceByRegex(raw, song.ptStart, song.ptEnd) : '';

  const sections = [];
  if (pt) {
    sections.push({
      title: 'Tradução (português)',
      content: pt,
    });
  }

  // Intro is narrative — label accordingly
  const isIntro = song.title.includes('Intro');
  return {
    title: song.title,
    lyrics,
    lyricsExplanation: {
      title: isIntro ? 'Narrativa de abertura' : pt ? 'Tradução e contexto' : undefined,
      message: isIntro
        ? 'Texto narrativo da introdução de Caution! Audio Gateway (EN no painel da letra; PT abaixo). Origem: projeto Reverse Universe, remixado para Dark EDM e Dark Pop.'
        : pt
          ? 'Letra em inglês no painel esquerdo; tradução em português abaixo. Origem Reverse Universe / Caution! Audio Gateway.'
          : undefined,
      sections,
      verses: [],
    },
  };
});

const out = `/** Chapter 1 · Caution! Audio Gateway lyrics (from Caution! Audio Gateway.pdf + Reverse Universe reference). */
import type { BunnyAlbumTrack } from '../types';

export const cautionAudioGatewayTracks: BunnyAlbumTrack[] = ${JSON.stringify(tracks, null, 2)};
`;

fs.writeFileSync('src/data/blm-chapter1-lyrics.ts', out, 'utf8');
console.log('tracks', tracks.length);
for (const t of tracks) {
  console.log('-', t.title, 'lyrics', t.lyrics.length, 'sections', t.lyricsExplanation?.sections?.length ?? 0);
}
