import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  // Placeholder data for now
  const projects = [
    { title: 'Boston Housing Analysis', description: 'Principal Component Analysis and Model Cross-Validation', date: 'March & April 2024', technologies: 'NumPy, pandas, scikit-learn, SciPy' },
    { title: 'Multi-Agent Pong Project', description: 'Multi-agent reinforcement learning', date: 'January 2024', technologies: 'NumPy, PyTorch, Pygame' }
  ];

  return (
    <div className="projects">
      {projects.map(project => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Date: {project.date}</p>
          <p>Technologies: {project.technologies}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
