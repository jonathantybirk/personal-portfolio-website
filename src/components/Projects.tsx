import React, { useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import "./Projects.css";
import projects from './data/projectsData';
import ProjectPage from './ProjectPage';

interface ProjectSummary {
  id: string;
  image_path: string;
  title: string;
  developmentTools: string;
  shortDescription: string;
  dates: string;
}

const ProjectCard: React.FC<{ project: ProjectSummary; isLast: boolean }> = ({ project, isLast }) => (
  <div key={project.id}>
    <br />
    <img src={project.image_path} alt={project.title} />
    <h2><u><Link to={`/projects/${project.id}`}>{project.title}</Link></u></h2>
    <p><i>{project.developmentTools}</i></p>
    <p>{project.shortDescription}</p>
    <br />
    <p><i>{project.dates}</i></p>
    {!isLast && <hr />}
  </div>
);

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Projects | Portfolio";
  }, []);

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} isLast={index === projects.length - 1} />
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
