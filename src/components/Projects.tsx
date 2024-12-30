import React, { useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import "./Projects.css";
import projectsData from '../data/projectsData';
import ProjectPage from './ProjectPage';
import { ProjectSummary } from '../types/projectTypes';

const ProjectCard: React.FC<{ project: ProjectSummary; isLast: boolean }> = ({ project, isLast }) => (
  <div key={project.id}>
    <br />
    <img src={project.imagePath} alt={project.title} />
    <h2><u><Link to={`/projects/${project.id}`}>{project.title}</Link></u></h2>
    <p><i>{project.developmentTools}</i></p>
    <p>{project.shortDescription}</p>
    <br />
    <p><i>{project.period}</i></p>
    {!isLast && <hr />}
  </div>
);

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Projects | Portfolio";
  }, []);

  return (
    <div className="projects">
      {projectsData.map((project, index) => (
        <ProjectCard key={project.id} project={project} isLast={index === projectsData.length - 1} />
      ))}
    </div>
  );
};

const ProjectRoutes: React.FC = () => (
  <Routes>
    <Route path="/:projectId" element={<ProjectPage />} />
    <Route path="/:projectId/*" element={<Navigate to="" replace />} />
    <Route path="/*" element={<Projects />} />
  </Routes>
);

export default Projects;
export { ProjectRoutes };
