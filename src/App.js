import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Training from './Pages/Training';
import WaterRising from './Games/WaterRising/WaterRising';
import StoryBased from './Games/StoryBased/StoryBased';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Avatar from './Pages/Avatar';
import Rewards from './Pages/Rewards';
import CourseDetail from './Pages/CourseDetail';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training" element={<Training />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/water-rising" element={<WaterRising />} />
          <Route path="/story-based" element={<StoryBased />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
