import { render, screen } from '@testing-library/react';
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
});
