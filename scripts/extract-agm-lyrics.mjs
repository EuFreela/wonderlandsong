import fs from 'node:fs';
import https from 'node:https';

const url = 'https://agrandemultidao.vercel.app/assets/index-C_rxzRWi.js';

function fetchText(u) {
  return new Promise((resolve, reject) => {
    https
      .get(u, (res) => {
        let d = '';
        res.on('data', (c) => (d += c));
        res.on('end', () => resolve(d));
      })
      .on('error', reject);
  });
}

function cleanLyrics(raw) {
  return raw
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.replace(/^[ \t]{2,}/, '').trimEnd())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Unique refs preserving order. */
function uniqueRefs(list) {
  const seen = new Set();
  const out = [];
  for (const item of list) {
    const t = item.trim();
    if (!t || seen.has(t)) continue;
    seen.add(t);
    out.push(t);
  }
  return out;
}

const d = await fetchText(url);
const start = d.indexOf('number:`01`');
if (start < 0) {
  console.error('start not found');
  process.exit(1);
}

const end = d.indexOf('Quando Os Conflitos Terminarem');
const end2 = d.indexOf(']}', end + 500);
const chunk = d.slice(start, end2 > end ? end2 + 2 : start + 120000);

const headerRe = /number:`(\d+)`,title:`([^`]+)`,lyrics:`/g;
const headers = [...chunk.matchAll(headerRe)];
const tracks = [];

for (let i = 0; i < headers.length; i++) {
  const h = headers[i];
  const number = h[1];
  const title = h[2];
  const lyricsStart = h.index + h[0].length;
  const nextStart = i + 1 < headers.length ? headers[i + 1].index : chunk.length;
  const body = chunk.slice(lyricsStart, nextStart);

  const explIdx = body.indexOf('`,explanation:{');
  let lyrics = '';
  let afterLyrics = body;
  if (explIdx >= 0) {
    lyrics = cleanLyrics(body.slice(0, explIdx));
    afterLyrics = body.slice(explIdx + '`,explanation:{'.length);
  }

  const explTitle = afterLyrics.match(/title:`([^`]*)`/)?.[1] ?? '';
  const explVerse = afterLyrics.match(/verse:`([^`]*)`/)?.[1] ?? '';
  const explQuote = afterLyrics.match(/quote:`([\s\S]*?)`/)?.[1] ?? '';
  const explMessage = afterLyrics.match(/message:`([\s\S]*?)`/)?.[1] ?? '';

  const sections = [];
  const secRe = /\{title:`([^`]+)`,content:`([\s\S]*?)`\}/g;
  let m;
  while ((m = secRe.exec(afterLyrics)) !== null) {
    sections.push({ title: m[1], content: m[2].trim() });
  }

  // Primary biblical references list: references:[`a`,`b`]
  let references = [];
  const refMatch = afterLyrics.match(/references:\[((?:`[^`]+`,?\s*)*)\]/);
  if (refMatch) {
    references = [...refMatch[1].matchAll(/`([^`]+)`/g)].map((x) => x[1]);
  }

  // Fallback: verses:[...]
  const versesMatch = afterLyrics.match(/verses:\[((?:`[^`]+`,?\s*)*)\]/);
  if (versesMatch) {
    references = [
      ...references,
      ...[...versesMatch[1].matchAll(/`([^`]+)`/g)].map((x) => x[1]),
    ];
  }

  // Always include primary verse first
  const allRefs = uniqueRefs([explVerse, ...references].filter(Boolean));

  tracks.push({
    number,
    title,
    lyrics,
    explanation: {
      title: explTitle,
      verse: explVerse,
      quote: explQuote,
      message: explMessage,
      sections,
      verses: allRefs,
    },
  });
}

fs.writeFileSync('agm-lyrics.json', JSON.stringify(tracks, null, 2), 'utf8');
console.log('tracks', tracks.length);
for (const t of tracks) {
  console.log(
    t.number,
    t.title,
    '→',
    t.explanation.verses.length,
    'refs:',
    t.explanation.verses.join(' · '),
  );
}
