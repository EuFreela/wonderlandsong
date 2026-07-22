import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

function renderAt(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe('App', () => {
  it('renders the fixed parallax homepage shell', async () => {
    renderAt('/');

    // Lazy route + heavy content data can take a moment in jsdom.
    expect(
      await screen.findByRole('heading', { name: /Bunny Land Music/i }, { timeout: 5000 }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Wonderland Song/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /Wonderland Song/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Rosa Negra de Halfeti/i })).toBeInTheDocument();
  });

  it('shows bunny-at-work page for unknown routes', async () => {
    renderAt('/projects/does-not-exist');

    expect(await screen.findByRole('img', { name: /Bunny at work/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Estamos trabalhando nesta página/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Voltar ao site/i })).toHaveAttribute('href', '/');
  });

  it('opens Bunny Land Music project page from Abrir projeto route', async () => {
    renderAt('/projects/bunny-land-music');

    expect(await screen.findByRole('heading', { name: /^Bunny Land Music$/i })).toBeInTheDocument();
    expect(screen.getByText('Dark EDM + Pop')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Álbuns lançados/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Como nasceu o Bunny Land Music/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Por que um coelho/i })).toBeInTheDocument();
    expect(screen.getByText(/Tudo se resume ao Twitch/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ouvir no Spotify/i })).toHaveAttribute(
      'href',
      expect.stringContaining('spotify.com'),
    );
    expect(screen.getByRole('link', { name: /^YouTube$/i })).toHaveAttribute(
      'href',
      expect.stringContaining('youtube.com'),
    );
    expect(screen.getByRole('link', { name: /Voltar à home/i })).toHaveAttribute('href', '/');
  });

  it('opens Rosa Negra de Halfeti project page with the shared project layout', async () => {
    renderAt('/projects/rosa-negra-halfeti');

    expect(await screen.findByRole('heading', { name: /^Rosa Negra de Halfeti$/i })).toBeInTheDocument();
    expect(screen.getByText('MPB · Experimental · Atmosférico')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Álbuns lançados/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Sobre a Rosa Negra de Halfeti/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/Simplesmente eu: literalmente, aos pedaços/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText(/Demo de 16 faixas líricas/i)).toBeInTheDocument();
    expect(screen.getByText(/Demo · 2025/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^O projeto$/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Site Rosa Negra de Halfeti/i }),
    ).toHaveAttribute('href', 'https://agencylk7.wixsite.com/halfeti');
    expect(screen.queryByRole('link', { name: /^YouTube$/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Voltar à home/i })).toHaveAttribute('href', '/');
  });

  it('opens Resonance project page with shared layout', async () => {
    renderAt('/projects/resonance');

    expect(await screen.findByRole('heading', { name: /^Resonance$/i })).toBeInTheDocument();
    expect(screen.getByText('Post-Grunge / Alternative Rock')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Sobre Resonance/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Álbuns lançados/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Ver álbum.*Echoes of Redemption/i }),
    ).toHaveAttribute('href', '/projects/resonance/albums/echoes-of-redemption');
    expect(screen.getByRole('link', { name: /Voltar à home/i })).toHaveAttribute('href', '/');
  });

  it("opens Heretic's Fork project page with shared layout", async () => {
    renderAt('/projects/heretics-fork');

    expect(await screen.findByRole('heading', { name: /^Heretic's Fork$/i })).toBeInTheDocument();
    expect(screen.getByText('Metal Moderno · Nu Metal · Groove')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Sobre Heretic's Fork/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^O nome$/i })).toBeInTheDocument();
    expect(screen.getByText(/nome do projeto faz referência/i)).toBeInTheDocument();
    expect(screen.getByText(/visual do projeto representam/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Álbuns lançados/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Ver álbum.*Heretic's Fork/i }),
    ).toHaveAttribute('href', '/projects/heretics-fork/albums/heretics-fork');
    expect(screen.getByRole('link', { name: /Voltar à home/i })).toHaveAttribute('href', '/');
  });

  it('opens AEVUM project page with shared layout', async () => {
    renderAt('/projects/aevum');

    expect(await screen.findByRole('heading', { name: /^AEVUM$/i })).toBeInTheDocument();
    expect(screen.getByText('Progressive Metal · New Prog')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Sobre o Projeto AEVUM/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Estilo musical/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Conceito/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /O significado de AEVUM/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Álbuns lançados/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Ver álbum.*Levels of Consciousness/i }),
    ).toHaveAttribute('href', '/projects/aevum/albums/aevum');
    expect(screen.getByRole('link', { name: /Voltar à home/i })).toHaveAttribute('href', '/');
  });

  it('opens AEVUM album with demo track The Unanswered Geometry', async () => {
    renderAt('/projects/aevum/albums/aevum');

    expect(
      await screen.findByRole('heading', { name: /^Levels of Consciousness$/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/demo é The Unanswered Geometry/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Easter Eggs$/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /The Unanswered Geometry.*Ver letra/i }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/frightened architecture of belief/i)).toBeInTheDocument();
    expect(screen.getByText(/without mistaking/i)).toBeInTheDocument();
    expect(screen.queryByText(/^Lord/i)).not.toBeInTheDocument();
    expect(screen.getByText(/^Tradução \(português\)$/i)).toBeInTheDocument();
    expect(screen.getByText(/A Geometria Sem Resposta/i)).toBeInTheDocument();
    expect(screen.getByText(/temerosa arquitetura da crença/i)).toBeInTheDocument();
    expect(screen.getByText(/sem confundir/i)).toBeInTheDocument();
  });

  it('opens AEVUM Easter Eggs with freemasonry revelation map', async () => {
    renderAt('/projects/aevum/albums/aevum');

    fireEvent.click(await screen.findByRole('button', { name: /^Easter Eggs$/i }));

    expect(screen.getByRole('dialog', { name: /Revelations/i })).toBeInTheDocument();
    expect(screen.getByText(/experiência do autor com a maçonaria/i)).toBeInTheDocument();
    expect(screen.getByText(/não foi o suficiente para libertá-lo da fome espiritual/i)).toBeInTheDocument();
    expect(screen.getByText(/→ O Grande Arquiteto do Universo/i)).toBeInTheDocument();
  });

  it("opens Heretic's Fork album with EN lyrics and PT translation", async () => {
    renderAt('/projects/heretics-fork/albums/heretics-fork');

    expect(
      await screen.findByRole('heading', { name: /^Heretic's Fork$/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /← Heretic's Fork/i })).toHaveAttribute(
      'href',
      '/projects/heretics-fork',
    );

    fireEvent.click(screen.getByRole('button', { name: /No Hope Left.*Ver letra/i }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getAllByText(/FALSE FACE/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/^Tradução \(português\)$/i)).toBeInTheDocument();
    expect(screen.getAllByText(/FALSA FACE/i).length).toBeGreaterThan(0);
  });

  it('opens Echoes of Redemption album with EN lyrics and PT translation', async () => {
    renderAt('/projects/resonance/albums/echoes-of-redemption');

    expect(
      await screen.findByRole('heading', { name: /^Echoes of Redemption$/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /← Resonance/i })).toHaveAttribute(
      'href',
      '/projects/resonance',
    );

    fireEvent.click(
      screen.getByRole('button', { name: /Breaking Point.*Ver letra/i }),
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getAllByText(/This is my breaking point/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/^Tradução \(português\)$/i)).toBeInTheDocument();
    expect(screen.getAllByText(/ponto de ruptura/i).length).toBeGreaterThan(0);
  });

  it('opens A Grande Multidão project page with shared layout', async () => {
    renderAt('/projects/a-grande-multidao');

    expect(await screen.findByRole('heading', { name: /^A Grande Multidão$/i })).toBeInTheDocument();
    expect(screen.getByText('Gospel + TJ')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Sobre A Grande Multidão/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^O projeto$/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Idealizado e composto por Lameck S\. Fernandes/i),
    ).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Discografia/i })).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Em um mundo cheio de vozes conflitantes, a verdade continua chamando/i),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Ver álbum.*A Verdade Ainda Chama/i }),
    ).toHaveAttribute(
      'href',
      '/projects/a-grande-multidao/albums/a-verdade-ainda-chama',
    );
    expect(screen.getByRole('link', { name: /Ouvir no Spotify/i })).toHaveAttribute(
      'href',
      expect.stringContaining('spotify.com'),
    );
    expect(screen.getByRole('link', { name: /Voltar à home/i })).toHaveAttribute('href', '/');
  });

  it('opens A Verdade Ainda Chama album page under A Grande Multidão', async () => {
    renderAt('/projects/a-grande-multidao/albums/a-verdade-ainda-chama');

    expect(await screen.findByRole('heading', { name: /^A Verdade Ainda Chama$/i })).toBeInTheDocument();
    expect(
      screen.getAllByText(/álbum de A Grande Multidão/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /← A Grande Multidão/i })).toHaveAttribute(
      'href',
      '/projects/a-grande-multidao',
    );
  });

  it('opens Rosa Negra album page with clickable track lyrics', async () => {
    renderAt(
      '/projects/rosa-negra-halfeti/albums/simplesmente-eu-literalmente-aos-pedacos-em-frases-e-achados',
    );

    expect(
      await screen.findByRole('heading', {
        name: /Simplesmente eu: literalmente, aos pedaços/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /← Rosa Negra de Halfeti/i })).toHaveAttribute(
      'href',
      '/projects/rosa-negra-halfeti',
    );

    fireEvent.click(screen.getByRole('button', { name: /Um Beijo Teu/i }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getAllByText(/Tu exalas amor, tu és/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/^Mediatário do amor$/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Caleidoscópio/i })).toBeInTheDocument();
  });

  it('opens album cover lightbox from the album detail page', async () => {
    renderAt(
      '/projects/rosa-negra-halfeti/albums/simplesmente-eu-literalmente-aos-pedacos-em-frases-e-achados',
    );

    expect(
      await screen.findByRole('heading', {
        name: /Simplesmente eu: literalmente, aos pedaços/i,
      }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Ampliar capa/i }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Capa · Simplesmente eu/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Fechar$/i })).toBeInTheDocument();
  });

  it('shows album gallery links on Bunny Land Music page', async () => {
    renderAt('/projects/bunny-land-music');

    expect(
      await screen.findByRole('link', { name: /Ver álbum.*Caution! Audio Gateway/i }),
    ).toHaveAttribute(
      'href',
      '/projects/bunny-land-music/albums/chapter-1-caution-audio-gateway',
    );
    expect(
      screen.getByRole('link', { name: /Ver álbum.*In The Forest/i }),
    ).toHaveAttribute('href', '/projects/bunny-land-music/albums/chapter-2-in-the-forest');
    expect(
      screen.getByRole('link', { name: /Ver álbum.*In Time With Your Heart/i }),
    ).toHaveAttribute(
      'href',
      '/projects/bunny-land-music/albums/chapter-3-in-time-with-your-heart',
    );
  });

  it('opens a dedicated album page for Chapter 3', async () => {
    renderAt('/projects/bunny-land-music/albums/chapter-3-in-time-with-your-heart');

    expect(await screen.findByRole('heading', { name: /^In Time With Your Heart$/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Álbum conceitual sobre o tempo emocional/i),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Velvet Ruin').length).toBeGreaterThan(0);
    expect(screen.queryByText(/→ Scabbia/i)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ouvir no Spotify/i })).toHaveAttribute(
      'href',
      expect.stringContaining('spotify.com'),
    );
    expect(screen.getByRole('button', { name: /^Easter Eggs$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /← Bunny Land Music/i })).toHaveAttribute(
      'href',
      '/projects/bunny-land-music',
    );
  });

  it('opens Easter Eggs modal with revelations map on Chapter 3', async () => {
    renderAt('/projects/bunny-land-music/albums/chapter-3-in-time-with-your-heart');

    fireEvent.click(await screen.findByRole('button', { name: /^Easter Eggs$/i }));

    expect(screen.getByRole('dialog', { name: /Revelations/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Cada música expressa uma relação amorosa/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/→ Scabbia/i)).toBeInTheDocument();
    expect(screen.getByText(/→ Josi/i)).toBeInTheDocument();
  });

  it('shows music clip gallery on Chapter 1 album page', async () => {
    renderAt('/projects/bunny-land-music/albums/chapter-1-caution-audio-gateway');

    expect(await screen.findByRole('heading', { name: /^Caution! Audio Gateway$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Clips musicais/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Apocalipse In Me \(Remix\)/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('The Gateway to Bunny Land (Intro)')).toBeInTheDocument();
    expect(screen.getByText('After the Fall')).toBeInTheDocument();
  });

  it('redirects unknown album slugs back to the project page', async () => {
    renderAt('/projects/bunny-land-music/albums/does-not-exist');

    expect(await screen.findByRole('heading', { name: /^Bunny Land Music$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Álbuns lançados/i })).toBeInTheDocument();
  });
});
