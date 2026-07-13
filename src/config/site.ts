/**
 * Public site origin for absolute SEO URLs (canonical, Open Graph, sitemap).
 * Set at build/deploy with VITE_SITE_URL to the real hosting URL
 * (e.g. https://your-app.vercel.app). There is no owned .com domain yet.
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL?.trim() || 'https://localhost'
).replace(/\/$/, '');

export const SITE_NAME = 'Wonderland Song';

export const SITE_DEFAULT_DESCRIPTION =
  'Wonderland Song — selo e universo musical: projetos, álbuns e histórias. Ajudando a construir música boa no Brasil e no mundo.';

export const SITE_DEFAULT_IMAGE = '/images/wonderland2.png';

/** Absolute URL for a site path or asset. */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
