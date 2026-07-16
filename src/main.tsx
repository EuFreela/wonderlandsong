import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

// StrictMode only in dev — avoids double effect work in production builds.
const root = createRoot(document.getElementById('root')!);
const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

root.render(import.meta.env.DEV ? <StrictMode>{tree}</StrictMode> : tree);
