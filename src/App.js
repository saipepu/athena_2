import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Training from './Pages/Training';
import WaterRising from './Games/WaterRising/WaterRising';
import StoryBased from './Games/StoryBased/StoryBased';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training" element={<Training />} />
          <Route path="/water-rising" element={<WaterRising />} />
          <Route path="/story-based" element={<StoryBased />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
