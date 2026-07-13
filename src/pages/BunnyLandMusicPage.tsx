import { bunnyLandAlbums, bunnyLandMusic } from '../data/content';
import { ProjectDetailView } from './ProjectDetailPage';

/**
 * @deprecated Prefer `/projects/:projectSlug` via ProjectDetailPage.
 * Kept for direct imports / compatibility.
 */
function BunnyLandMusicPage() {
  return <ProjectDetailView project={bunnyLandMusic} albums={bunnyLandAlbums} />;
}

export default BunnyLandMusicPage;
