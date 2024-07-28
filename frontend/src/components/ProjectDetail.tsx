import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import "./ProjectDetail.css";
import { projects } from '../data/projectsData';

const Project = () => {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="project-detail">
            <div key={project.id}>
                <br />
                <img src={project.image} alt={project.title} />
                <h1>{project.title}</h1>
            </div>
        </div>
    );
};

export default Project;