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

/**
 * Manual “last updated” stamp shown in site footers.
 * Bump this when you ship content or code changes.
 */
export const SITE_LAST_UPDATED = '14 de julho de 2026, 00:55';

/** Compact header stamp under the logo. */
export const SITE_LAST_UPDATED_LABEL = `Last update ${SITE_LAST_UPDATED}`;

/** Absolute URL for a site path or asset. */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
