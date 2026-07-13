import https from 'node:https';
import fs from 'node:fs';

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

const d = await fetchText('https://agrandemultidao.vercel.app/assets/index-C_rxzRWi.js');
const start = d.indexOf('number:`01`');
const end = d.indexOf('Quando Os Conflitos Terminarem');
const end2 = d.indexOf(']}', end + 800);
const chunk = d.slice(start, end2 > end ? end2 + 50 : start + 120000);

const headerRe = /number:`(\d+)`,title:`([^`]+)`/g;
const headers = [...chunk.matchAll(headerRe)];

const out = [];
for (let i = 0; i < headers.length; i++) {
  const h = headers[i];
  const next = i + 1 < headers.length ? headers[i + 1].index : chunk.length;
  const body = chunk.slice(h.index, next);

  const primaryVerse = body.match(/verse:`([^`]*)`/)?.[1] ?? '';

  let verses = [];
  const vm = body.match(/verses:\[((?:`[^`]+`,?\s*)*)\]/);
  if (vm) {
    verses = [...vm[1].matchAll(/`([^`]+)`/g)].map((x) => x[1]);
  }

  // Also capture any verses: that might use different spacing
  const vm2 = body.match(/verses:\s*\[([^\]]+)\]/);
  if (vm2 && verses.length === 0) {
    verses = [...vm2[1].matchAll(/`([^`]+)`/g)].map((x) => x[1]);
  }

  out.push({
    number: h[1],
    title: h[2],
    primaryVerse,
    verses,
    bodySnippet: body.slice(body.indexOf('sections:'), body.indexOf('sections:') + 400),
  });

  console.log(h[1], h[2]);
  console.log('  primary:', primaryVerse);
  console.log('  verses:', verses.length ? verses.join(' · ') : '(empty)');
  // show raw verses match area
  const vi = body.indexOf('verses:');
  if (vi >= 0) console.log('  raw:', body.slice(vi, vi + 200).replace(/\n/g, ' '));
  console.log('---');
}

fs.writeFileSync('agm-verses-debug.json', JSON.stringify(out, null, 2));
