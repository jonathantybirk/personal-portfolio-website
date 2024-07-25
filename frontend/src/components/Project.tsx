import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

const Project = () => {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} style={{ maxWidth: '20%', height: 'auto' }} />
            <p><strong>Development Tools: </strong>{project.developmentTools}</p>
            <p>{project.longDescription}</p>
            <p><small>{project.dates}</small></p>
        </div>
    );
};

export default Project;