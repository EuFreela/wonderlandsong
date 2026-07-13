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
fs.writeFileSync('agm-bundle.js', d);

// Show structure for track 02 Deus and track 01
for (const title of ['Saiam Dela, Povo Meu', 'Deus', 'Não Podemos Nos Calar']) {
  const i = d.indexOf(`title:\`${title}\``);
  console.log('\n========', title, 'idx', i);
  if (i < 0) continue;
  console.log(d.slice(i, i + 3500));
}
