import React, {useEffect} from 'react';
import { useParams, Navigate } from 'react-router-dom';
import "./ProjectPage.css";
import projects from './data/projectsData';

const Project = () => {
    useEffect(() => {
        document.title = "Projects | Portfolio";
      }, []);

    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    // useEffect(() => {
    //     document.title = `${project.title} | Portfolio`;
    //   }, []);

    return (
        <div className="project-page">
            <div key={project.id}>
                <br />
                <img src={project.image_path} alt={project.title} />
                <div className="content">
                    <h1>{project.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: project.projectDescription }}></div>
                </div>
            </div>
        </div>
    );
};

export default Project;