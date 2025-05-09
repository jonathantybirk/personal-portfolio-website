import { ProjectDetail } from '../types/projectTypes';

const projects: ProjectDetail[] = [
    {
        id: 'equivariant-graph-neural-network',
        imagePath: '/assets/equivariant-graph-neural-network.png',
        title: 'Equivariance in LIDAR Point Clouds',
        developmentTools: "PyTorch, trimesh",
        shortDescription: "Predicting object center of mass from synthetic LiDAR scans using equivariant GNNs",
        period: 'February - June 2025',
        projectDescription: `
            We are training an E(n)-Equivariant Graph Neural Network (EGNN) to predict the center of mass of objects from simulated LiDAR scans.
            <br /><br />
            Point clouds are generated from realistic 3D meshes scanned by 1-5 virtual LiDAR sensors. True centers of mass are computed assuming uniform density.
            <br /><br />
            The EGNN enforces equivariance to 3D translations and rotations. We compare it to a standard GNN, with and without data augmentation, as well as geometric baselines based on point centroids and convex hulls.
            <br /><br />
            Evaluation includes prediction error and how well predictions transform under rotated inputs.
        `
    },    
    {
        id: 'dnd-world-wiki',
        imagePath: '/assets/temporary.png',
        title: 'D&D World Wiki',
        developmentTools: "Node.js, TypeScript, Next.js, React",
        shortDescription: "Full-stack wiki website for my friend's D&D world",
        period: 'From February 2025',
        projectDescription: `
            Building a wiki website with my friend for his D&D world. We are building with Next.js and TypeScript, using a PostgreSQL database.
            <br /> 
            <br /> <a href="https://github.com/philippzhuravlev/wiki-site/" target="_blank" rel="noopener noreferrer">See the source code on GitHub</a>↗
            `
    },
    {
        id: 'music-classifier',
        imagePath: '/assets/instrument-classifier.png',
        title: 'Instrument Classifier',
        developmentTools: "Docker, Google Cloud, GitHub Actions, PyTorch",
        shortDescription: 'Practical MLOps with CI/CD, data versioning, reproducibility, and scalable ML deployment.',
        period: 'January 2025',
        projectDescription: `
            Project for the beloved <a href="https://skaftenicki.github.io/dtu_mlops/" target="_blank" rel="noopener noreferrer">Machine Learning Operations course</a>↗ at DTU.
            <br /> 
            <br /> <a href="https://github.com/jonathantybirk/instrument-classifier" target="_blank" rel="noopener noreferrer">See the source code on GitHub</a>↗
            `
    },
    {
        id: 'rocketry-mission-control-system',
        imagePath: '/assets/rocketry-mission-control-system.jpg',
        title: 'Rocketry Mission Control System at DanSTAR',
        developmentTools: ".NET, C#, TCP",
        shortDescription: 'Mission Control System to integrate with the Rocket Flight Computer',
        period: 'From September 2024',
        projectDescription: `
            Developing the Mission Control System for the <a href="https://www.danstar.dk/" target="_blank" rel="noopener noreferrer">Danish Student Association for Rocketry</a>↗.
            <br />
            <br /> Implementing unit testing, logging, and TCP-based communication with the flight computer. 
            <br /> In collaboration with my Team Lead, I've prepared the system for integration with the new flight computer, which is being developed in parallel.
            <br />
            <br /> As a Board Member, I contribute to the organization's strategic direction.
            `
    },
    {
        id: 'unity-game',
        imagePath: '/assets/unity-game.png',
        title: 'Isometric Turn-Based Strategy Game',
        developmentTools: "C#, Design Patterns",
        shortDescription: '2D isometric turn-based tactical RPG',
        period: 'July & August 2024',
        projectDescription: `
            Working with a friend through the Summer to get closer to the C family of languages and improve my object-oriented programming.
            <br /> <br />
            Extensive use of inheritance and interfaces, and balanced application (and sometimes avoidance) of the Singleton design pattern. 
            `
    },
    {
        id: 'portfolio-website',
        imagePath: '/assets/portfolio-website.png',
        title: 'Dynamic Portfolio Website',
        developmentTools: "React, TypeScript, Node.js, SQL",
        shortDescription: 'Portfolio website with React frontend and PostgreSQL',
        period: 'July & August 2024',
        projectDescription: `
            Website to showcase my portfolio with a React and TypeScript frontend and a PostgreSQL database.
            <br /> Deployed with Vercel and Supabase.
            <br />
            <br /> You are here.
            `
    },
    {
        id: 'llm-bias-analysis',
        imagePath: '/assets/llm-bias-analysis.png',
        title: 'Examination of bias in Large Language Models',
        developmentTools: "LangChain, SciPy, Matplotlib",
        shortDescription: 'ChatGPT weighs in on r/AmItheAsshole',
        period: 'June 2024',
        projectDescription: `
            We fed the GPT-4o API (n=99) posts from the r/AmItheAsshole with six combinations of prompts 
            to examine the effect of user sentiment and point of view on the model's moral evaluations.
            <br /> <br />
            <a href="https://github.com/jonathantybirk/Individual-Assignment-02445-course-DTU/blob/main/Group-Assignment.pdf" target="_blank" rel="noopener noreferrer">Read the report</a>↗
            `
    },
    {
        id: 'boston-housing-analysis',
        imagePath: '/assets/boston-housing-model.png',
        title: 'Boston Housing Analysis',
        developmentTools: "NumPy, pandas, scikit-learn, SciPy",
        shortDescription: 'Principal Component Analysis and Model Validation',
        period: 'March & April 2024',
        projectDescription: `
            We extensively analyzed the Boston Housing dataset, including feature correlations and a principal component analysis. 
            In a following report, we evaluated models on regression and classification on the Boston Housing dataset with two-level 10-fold cross-validation with complexity-controlling parameters.
            <br /> <br />
            <a href="https://github.com/jonathantybirk/Boston-Housing-Statistical-Analysis/blob/main/Data%20Analysis%20Report.pdf" target="_blank" rel="noopener noreferrer">Read the PCA report</a>↗
            <br /> <br />
            <a href="https://github.com/jonathantybirk/Boston-Housing-Statistical-Analysis/blob/main/Modelling%20Report.pdf" target="_blank" rel="noopener noreferrer">Read the Model Evaluation Report</a>↗
            `
    },
    {
        id: 'self-operating-computer',
        imagePath: '/assets/self-operating-computer.png',
        title: 'Self-Operating Computer',
        developmentTools: "Python, LangChain",
        shortDescription: 'We gave GPT-4V a mouse and keyboard',
        period: 'February - May 2024',
        projectDescription: `
            I helped build a program to automatically perceive a computer screen and navigate around using keyboard and mouse with LangChain agents based on GPT-4V.
            <br /> This was done for the startup Symbolik.ai to make more generalizable RPA.
            `
    },
    {
        id: 'multi-agent-pong-project',
        imagePath: '/assets/multi-agent-pong-project.png',
        title: 'Multi-Agent Pong Project',
        developmentTools: "NumPy, PyTorch, Pygame",
        shortDescription: 'Report on multi-agent cooperation and deep Q-learning',
        period: 'January 2024',
        projectDescription: `
            We trained and tested four pairs of agents playing a cooperative implementation of Pong, the classic Atari game. 
            The agents valued game states using Deep Q-networks trained with reinforcement learning.
            <br /> <br />
            <a href="https://github.com/jonathantybirk/Multi-Agent-Pong-Project/blob/main/Report.pdf" target="_blank" rel="noopener noreferrer">Read the report</a>↗
            `
    },
    {
        id: 'wordpress-blog',
        imagePath: '/assets/wordpress-blog.png',
        title: 'WordPress Blog',
        developmentTools: "WordPress, Google Cloud Platform",
        shortDescription: 'Self-hosted WordPress website',
        period: 'August 2023',
        projectDescription: `
            During the summer, I decided to move my personal blog from wordpress.com to a self-hosted site. 
            I hosted the site on an Ubuntu server using Google Cloud Services, gaining some experience in managing a full stack environment. The site is currently offline due to costs.
            <br /> <br />
            <strike><b>Visit the site</b></strike>↗ (currently unavailable)
            `
    },
    {
        id: 'legacy-static-portfolio-website',
        imagePath: '/assets/legacy-static-portfolio-website.png',
        title: 'Static Portfolio Website (Legacy)',
        developmentTools: "HTML, CSS",
        shortDescription: 'Static portfolio website hosted on GitHub Pages',
        period: 'July 2023',
        projectDescription: `
                Beginning the hunt for a student job, I've made this portfolio site to showcase my coding experience.
                <br /> <br />
                It's a static website coded with HTML and CSS. I host it through GitHub Pages, where the source code is avaliable.
                <br /> <br />
                <a href="https://github.com/jonathantybirk/jonathantybirk.github.io" target="_blank" rel="noopener noreferrer">See the source code on GitHub</a>↗
            `
    },
    {
        id: 'red-wine-classifer',
        imagePath: '/assets/red-wine-classifier.png',
        title: 'Red Wine Classifier',
        developmentTools: "Python, pandas, scikit-learn",
        shortDescription: 'Decision Tree Classifer trained to determine wine quality',
        period: 'December 2022',
        projectDescription: `
            This project is one of 3 I coded for my university application. I showcased these projects in a short YouTube video.
            <br /> <br />
            <a href="https://youtu.be/2n58APJq_Ik?si=mgQEZBPz_z0alnus" target="_blank" rel="noopener noreferrer">Watch the YouTube video presentation</a>↗
            <br /> <br />
            <a href="https://github.com/jonathantybirk/DTU-application-projects" target="_blank" rel="noopener noreferrer">See the source code on GitHub</a>↗
            `
    },
    {
        id: 'orbiter',
        imagePath: '/assets/orbiter.png',
        title: 'Orbiter',
        developmentTools: "JavaScript",
        shortDescription: '2D solar system simulation with orbital mechanics',
        period: 'December 2022',
        projectDescription: `
            This project is one of 3 I coded for my university application. I showcased these projects in a short YouTube video.
            <br /> <br />
            <a href="https://youtu.be/2n58APJq_Ik?si=mgQEZBPz_z0alnus" target="_blank" rel="noopener noreferrer">Watch the YouTube video presentation</a>↗
            <br /> <br />
            <a href="https://github.com/jonathantybirk/DTU-application-projects" target="_blank" rel="noopener noreferrer">See the source code on GitHub</a>↗
            <br /> <br />
            <a href="/projects/orbiter/demo" target="_blank" rel="noopener noreferrer">Try out the demo</a>↗
            `
    },
    {
        id: 'bouncy-balls',
        imagePath: '/assets/bouncy-balls.png',
        title: 'Bouncy Balls',
        developmentTools: "Python, Pygame",
        shortDescription: '2D simulation of elastic collisions',
        period: 'December 2022',
        projectDescription: `
            This project is one of 3 I coded for my university application. I showcased these projects in a short YouTube video.
            <br /> <br />
            <a href="https://youtu.be/2n58APJq_Ik?si=mgQEZBPz_z0alnus" target="_blank" rel="noopener noreferrer">Watch the YouTube video presentation</a>↗
            <br /> <br />
            <a href="https://github.com/jonathantybirk/DTU-application-projects" target="_blank" rel="noopener noreferrer">See the source code on GitHub</a>↗
            `
    },
];

export default projects;
