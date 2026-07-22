import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationLoading from './components/layout/NavigationLoading';
import PageLoading from './components/layout/PageLoading';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollToTopOnNavigate from './components/layout/ScrollToTopOnNavigate';
// Home is the critical path — eager load avoids a dynamic-import waterfall.
import HomePage from './pages/HomePage';

const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const BunnyAlbumPage = lazy(() => import('./pages/BunnyAlbumPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));

function App() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <NavigationLoading />
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects/:projectSlug/albums/:albumSlug"
            element={<BunnyAlbumPage />}
          />
          <Route path="/projects/:projectSlug" element={<ProjectDetailPage />} />
          {/* Any missing page route shows the bunny-at-work fallback */}
          <Route path="*" element={<ComingSoonPage />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
    </>
  );
}

export default App;
