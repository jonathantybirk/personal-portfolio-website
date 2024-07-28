import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import Projects from './Projects';

const ProjectRoutes = () => (
    <Routes>
        <Route path="/" element={<Projects />} />
        <Route path=":projectId" element={<ProjectDetail />} />
        <Route path="*" element={<Projects />} />
    </Routes>
);

export default ProjectRoutes;