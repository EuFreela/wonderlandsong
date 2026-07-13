/**
 * Public site origin for absolute SEO URLs (canonical, Open Graph, sitemap).
 * Override at build/deploy with VITE_SITE_URL (e.g. https://seudominio.com).
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL?.trim() || 'https://wonderlandsong.com'
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
