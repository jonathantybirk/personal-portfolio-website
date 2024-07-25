import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

const Projects = () => {
    return (
        <div className="project-list">
            {projects.map(project => (
                <div key={project.id} className="project-summary">
                    <h2>{project.title}</h2>
                    <img src={project.image} alt={project.title} style={{ width: '20%', height: 'auto' }} />
                    <p>{project.shortDescription}</p>
                    <p><small>{project.dates}</small></p>
                    <Link to={`/projects/${project.id}`}>Learn more</Link>
                </div>
            ))}
        </div>
    );
};

export default Projects;
