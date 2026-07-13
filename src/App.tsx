import { Routes, Route } from 'react-router-dom';
import ComingSoonPage from './pages/ComingSoonPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Any missing project / page route shows the bunny-at-work fallback */}
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
}

export default App;
