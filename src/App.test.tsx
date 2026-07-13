import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

describe('App', () => {
  it('renders the fixed parallax homepage shell', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByRole('link', { name: /Wonderland Song/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Bunny Land Music/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Caution! Audio Gateway/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Rosa Negra de Halfeti/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Wonderland Song TV/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Abrir projeto/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Music, stories and imagined worlds/i)).toBeInTheDocument();
  });
});
