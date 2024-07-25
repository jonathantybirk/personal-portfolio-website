import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Project from './Project';
import Projects from './Projects';

const ProjectRoutes = () => (
    <Routes>
        <Route path="/" element={<Projects />} />
        <Route path=":projectId" element={<Project />} />
        <Route path="*" element={<Projects />} />
    </Routes>
);

export default ProjectRoutes;