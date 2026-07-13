import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTopOnNavigate from './components/layout/ScrollToTopOnNavigate';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const BunnyAlbumPage = lazy(() => import('./pages/BunnyAlbumPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));

function RouteFallback() {
  return (
    <div
      className="flex min-h-screen min-w-[320px] items-center justify-center bg-[#05030a] text-sm text-white/50"
      role="status"
      aria-live="polite"
    >
      Carregando…
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Suspense fallback={<RouteFallback />}>
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
    </>
  );
}

export default App;
