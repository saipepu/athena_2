import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Training from './Pages/Training';
import WaterRising from './Games/WaterRising/WaterRising';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/training" element={<Training />} />
        <Route path="/water-rising" element={<WaterRising />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
