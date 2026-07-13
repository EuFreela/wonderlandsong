import { getProjectAlbums, projectDetailsBySlug } from './content';

/** All public indexable paths for sitemap / SEO (leading slash, no domain). */
export function getPublicSitePaths(): string[] {
  const paths = new Set<string>(['/']);

  for (const slug of Object.keys(projectDetailsBySlug)) {
    paths.add(`/projects/${slug}`);
    for (const album of getProjectAlbums(slug)) {
      paths.add(`/projects/${slug}/albums/${album.slug}`);
    }
  }

  return [...paths].sort((a, b) => a.localeCompare(b));
}
