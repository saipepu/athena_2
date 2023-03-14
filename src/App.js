import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Training from './Pages/Training';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
