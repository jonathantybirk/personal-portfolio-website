import React, {useEffect} from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import "./Projects.css";
import { projects } from '../data/projectsData';
import Project from './ProjectPage';

const Projects: React.FC = () => {
    useEffect(() => {
        document.title = "Projects | Portfolio";
      }, []);

    return (
        <div className="projects">
            {projects.map((project, index) => (
                <div key={project.id}>
                    <br />
                    <img src={project.image} alt={project.title} />
                    <h2><u><Link to={`/projects/${project.id}`}>{project.title}</Link></u></h2>
                    <p><i>{project.developmentTools}</i></p>
                    <p>{project.shortDescription}</p>
                    <br />
                    <p><i>{project.dates}</i></p>
                    {index !== projects.length - 1 ? <hr /> : <br />}
                </div>
            ))}
        </div>
    );
};

export const ProjectRoutes = () => (
    <Routes>
        <Route path="/:projectId" element={<Project />} />
        <Route path="/:projectId/*" element={<Navigate to="" replace />} />
        <Route path="/*" element={<Projects />} />
    </Routes>
);

export default Projects;
