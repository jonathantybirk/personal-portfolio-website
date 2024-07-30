import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Courses from './components/Courses';
import Projects, { ProjectRoutes } from './components/Projects';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects/*" element={<ProjectRoutes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
