import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Courses from './components/Courses';
import Projects, { ProjectRoutes } from './components/Projects';
import Interests from './components/extras/Interests';
import Resume from './components/extras/Resume';
import OrbiterDemo from './components/extras/OrbiterDemo';
import './App.css';


const App: React.FC = () => {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<><Header /><Home /></>} />
          <Route path="/projects/orbiter/demo" element={<OrbiterDemo />} />
          <Route path="/projects/*" element={<><Header /><ProjectRoutes /></>} />
          <Route path="/courses" element={<><Header /><Courses /></>} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/resume" element={<Resume />} />          
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
