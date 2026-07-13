import { Helmet } from 'react-helmet-async';
import {
  absoluteUrl,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '../../config/site';

type Props = {
  title: string;
  description?: string;
  /** Path only, e.g. `/projects/bunny-land-music` */
  path?: string;
  /** Site-relative image path (e.g. `/images/hs2.webp`) */
  image?: string;
  /** When true, asks crawlers not to index (404 / coming soon). */
  noIndex?: boolean;
  /** Optional JSON-LD object or array (serialized as application/ld+json). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Shared document head for titles, description, canonical, Open Graph and Twitter.
 */
function Seo({
  title,
  description = SITE_DEFAULT_DESCRIPTION,
  path = '/',
  image = SITE_DEFAULT_IMAGE,
  noIndex = false,
  jsonLd,
}: Props) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLdList.map((data, index) => (
        <script key={`ld-${index}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
export { SITE_URL, SITE_NAME, absoluteUrl };
