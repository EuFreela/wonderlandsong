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
  it('renders the fixed parallax homepage shell', () => {
    renderAt('/');

    expect(screen.getByRole('link', { name: /Wonderland Song/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Wonderland Song/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Bunny Land Music/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Rosa Negra de Halfeti/i })).toBeInTheDocument();
  });

  it('shows bunny-at-work page for unknown routes', () => {
    renderAt('/projects/does-not-exist');

    expect(screen.getByRole('img', { name: /Bunny at work/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Estamos trabalhando nesta página/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Voltar ao site/i })).toHaveAttribute('href', '/');
  });

  it('opens Bunny Land Music project page from Abrir projeto route', () => {
    renderAt('/projects/bunny-land-music');

    expect(screen.getByRole('heading', { name: /^Bunny Land Music$/i })).toBeInTheDocument();
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

  it('shows album gallery links on Bunny Land Music page', () => {
    renderAt('/projects/bunny-land-music');

    expect(
      screen.getByRole('link', { name: /Ver álbum.*Caution! Audio Gateway/i }),
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

  it('opens a dedicated album page for Chapter 3', () => {
    renderAt('/projects/bunny-land-music/albums/chapter-3-in-time-with-your-heart');

    expect(screen.getByRole('heading', { name: /^In Time With Your Heart$/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Álbum conceitual sobre o tempo emocional/i),
    ).toBeInTheDocument();
    expect(screen.getByText('Velvet Ruin')).toBeInTheDocument();
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

  it('opens Easter Eggs modal with revelations map on Chapter 3', () => {
    renderAt('/projects/bunny-land-music/albums/chapter-3-in-time-with-your-heart');

    fireEvent.click(screen.getByRole('button', { name: /^Easter Eggs$/i }));

    expect(screen.getByRole('dialog', { name: /Revelations/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Cada música expressa uma relação amorosa/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/→ Scabbia/i)).toBeInTheDocument();
    expect(screen.getByText(/→ Josi/i)).toBeInTheDocument();
  });

  it('shows music clip gallery on Chapter 1 album page', () => {
    renderAt('/projects/bunny-land-music/albums/chapter-1-caution-audio-gateway');

    expect(screen.getByRole('heading', { name: /^Caution! Audio Gateway$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Clips musicais/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Apocalipse In Me \(Remix\)/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('The Gateway to Bunny Land (Intro)')).toBeInTheDocument();
    expect(screen.getByText('After the Fall')).toBeInTheDocument();
  });

  it('redirects unknown album slugs back to the project page', () => {
    renderAt('/projects/bunny-land-music/albums/does-not-exist');

    expect(screen.getByRole('heading', { name: /^Bunny Land Music$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Álbuns lançados/i })).toBeInTheDocument();
  });
});
