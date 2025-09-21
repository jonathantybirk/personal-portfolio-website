import { ProjectDetail } from '../types/projectTypes';

const projects: ProjectDetail[] = [
    {
        id: 'healthcare-rag',
        imagePath: '/assets/healthcare-rag.jpg',
        title: 'Emergency Healthcare RAG - DM in AI 2025',
        developmentTools: "Ollama, HPC cluster",
        shortDescription: "National champion solution for evaluating medical statements under speed and memory constraints",
        period: 'August 2025',
        projectDescription: `
            Competition task for the <a href="https://dmiai.dk/" target="_blank" rel="noopener noreferrer">Danish National Student Championship in AI 2025</a>↗. 
            The goal was to classify medical statements both by truthfulness (binary) and by one of 115 medical topics (multi-class), 
            within tight runtime, offline inference, and VRAM limits.
            <br /><br />
            I developed a retrieval-augmented system where BM25 indexing identifies the most relevant chunk from medical documentation. 
            The topic classification uses the source document, while the LLM (Gemma3:27B) evaluates truthfulness based on the retrieved chunk and statement.
            <br /><br />
            My teammate and I optimized the solution on a high-performance computing cluster, achieving 0.91 evaluation accuracy,
            the highest in the competition for this task. Together with outstanding performances from my teammates on the other tasks,
            our team 'Powered by SmartFridge' went on to <a href="https://www.linkedin.com/posts/jonathantybirk_we-are-the-2025-danish-national-student-champions-activity-7367586906336907264-uOr7/" target="_blank" rel="noopener noreferrer">win the competition</a>↗.
        `
    },
    {
        id: 'equivariant-graph-neural-network',
        imagePath: '/assets/equivariant-graph-neural-network.png',
        title: 'Equivariance in LiDAR Point Clouds',
        developmentTools: "PyTorch, e3nn, trimesh",
        shortDescription: "Predicting object center of mass from synthetic LiDAR scans using SE(3)-equivariant GNNs",
        period: 'February - June 2025',
        projectDescription: `
            We trained an SE(3)-Equivariant Graph Neural Network (GNN) to predict the center of mass of objects from simulated LiDAR scans.
            <br /><br />
            Point clouds were generated from realistic 3D meshes scanned by 1-5 virtual LiDAR sensors. True centers of mass were computed assuming uniform density.
            <br /><br />
            The SE(3)-Equivariant GNN enforced invariance to 3D translations and rotations. We compared it to a standard GNN, with and without data augmentation, as well as geometric baselines based on point centroids and convex hulls.
            <br /><br />
            The equivariant model matched the best baseline in accuracy while guaranteeing perfect rotational and translational symmetry, at the cost of higher inference time.
            <br /><br />
            <a href="https://github.com/jonathantybirk/equivariant-mesh-centroid-estimation" target="_blank" rel="noopener noreferrer">See the source code on GitHub</a>↗
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
        id: 'self-operating-computer',
        imagePath: '/assets/self-operating-computer.png',
        title: 'Self-Operating Computer',
        developmentTools: "Python, LangChain",
        shortDescription: 'We gave GPT-4V a mouse and keyboard',
        period: 'February - May 2024',
        projectDescription: `
            I implemented LLM agents and tools in Python and LangChain for a self-operating computer, able to perceive a screen and navigate with mouse and keyboard. 
            <br /> This was done at our startup Symbolik.ai. The startup did not succeed, but I learned a lot from the experience.
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
        id: 'membrane-degradation-modeling',
        imagePath: '/assets/membrane-degradation-modeling.png',
        title: 'Membrane Degradation Modeling',
        developmentTools: "NumPy, pandas, SciPy, scikit-learn",
        shortDescription: 'Contract work for Singapore start-up using classical machine learning for environmental services',
        period: 'March 2024',
        projectDescription: `
            Paid contract work for <a href="https://www.aprisium.com/" target="_blank" rel="noopener noreferrer">Aprisium Pte. Ltd.</a>↗, 
            a Singapore-based environmental services start-up.
            <br /><br />
            I developed a data model to predict membrane degradation using regression and statistical analysis based on laws of chemistry.
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
