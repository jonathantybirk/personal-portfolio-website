import React from 'react';
import { Link } from 'react-router-dom';
import "./Projects.css";
import { projects } from '../data/projectsData';

const Projects = () => {
    return (
        <div className="projects">
            {projects.map(project => (
                <div key={project.id}>
                    <br />
                    <img src={project.image} alt={project.title} />
                    <h2><u><Link to={`/projects/${project.id}`}>{project.title}</Link></u></h2>
                    <p><i>{project.developmentTools}</i></p>
                    <p>{project.shortDescription}</p>
                    <br />
                    <p><i>{project.dates}</i></p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Projects;
