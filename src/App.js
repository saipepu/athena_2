import './App.css';
import { Routes, Route, HashRouter, Navigate, useParams } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Training from './Pages/Training';
import WaterRising from './Games/WaterRising/WaterRising';
import StoryBased from './Games/StoryBased/StoryBased';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Avatar from './Pages/Avatar';
import Rewards from './Pages/Rewards';
import CourseDetail from './Pages/CourseDetail';
import { TimerContext } from './context/TimerContext';
import { useState } from 'react';

function App() {
  const [stopTimer, setStopTimer] = useState(false)

  return (
    <div className="App">
      <TimerContext.Provider value={{ stopTimer, setStopTimer }}>
        <HashRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/dashboard/:role/:id" element={<Dashboard />} />
            <Route path="/course-detail/:course_id/:role/:id" element={<CourseDetail />} />
            <Route path="/avatar/:role/:id" element={<Avatar />} />
            <Route path="/rewards/:role/:id" element={<Rewards />} />
            <Route path="/training/:role/:id" element={<Training />} />
            <Route path="/:role/:id/water-rising" element={<WaterRising />} />
            <Route path="/:role/:id/story-based" element={<StoryBased />} />
          </Routes>
        </HashRouter>
        </TimerContext.Provider>
    </div>
  );
}

export default App;
