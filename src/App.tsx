import { Routes, Route } from 'react-router-dom';
import ScrollToTopOnNavigate from './components/layout/ScrollToTopOnNavigate';
import BunnyAlbumPage from './pages/BunnyAlbumPage';
import ComingSoonPage from './pages/ComingSoonPage';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <>
      <ScrollToTopOnNavigate />
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
    </>
  );
}

export default App;
