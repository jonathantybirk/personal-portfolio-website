import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

const Projects = () => {
    return (
        <div className="project-list">
            {projects.map(project => (
                <div key={project.id} className="project-summary">
                    <br />
                    <img src={project.image} alt={project.title} style={{ width: '20%', height: 'auto' }} />
                    <h2><u><Link to={`/projects/${project.id}`}>{project.title}</Link></u></h2>
                    <p>{project.developmentTools}</p>
                    <br />
                    <p>{project.shortDescription}</p>
                    <p><small>{project.dates}</small></p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Projects;
