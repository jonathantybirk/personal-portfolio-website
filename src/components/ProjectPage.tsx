import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import "./ProjectPage.css";
import projectsData from '../data/projectsData';
import { ProjectDetail } from '../types/projectTypes';

const ProjectPage: React.FC = () => {
  useEffect(() => {
    document.title = "Projects | Portfolio";
  }, []);

  const { projectId } = useParams<{ projectId: string }>();
  const project: ProjectDetail | undefined = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="project-page">
      <div key={project.id}>
        <br />
        <img src={project.imagePath} alt={project.title} />
        <div className="content">
          <h1>{project.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: project.projectDescription || '' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;