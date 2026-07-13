import { Routes, Route } from 'react-router-dom';
import ScrollToTopOnNavigate from './components/layout/ScrollToTopOnNavigate';
import BunnyAlbumPage from './pages/BunnyAlbumPage';
import BunnyLandMusicPage from './pages/BunnyLandMusicPage';
import ComingSoonPage from './pages/ComingSoonPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/bunny-land-music" element={<BunnyLandMusicPage />} />
        <Route
          path="/projects/bunny-land-music/albums/:slug"
          element={<BunnyAlbumPage />}
        />
        {/* Any missing project / page route shows the bunny-at-work fallback */}
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>
    </>
  );
}

export default App;
