const projects = [
    {
        id: 'unity-game',
        image_path: '/assets/unity-game.png',
        title: 'Isometric Turn-Based Strategy Game (in progress)',
        developmentTools: "C#, Design Patterns",
        shortDescription: '2D isometric turn-based tactical RPG',
        dates: 'From July 2024',
        projectDescription: `
            Working with a friend through the Summer to get closer to the C family of languages and improve my object-oriented programming.
            <br /> <br />
            Extensive use of inheritance and interfaces, and balanced application (and sometimes avoidance) of the Singleton design pattern. 
            `
    },
    {
        id: 'portfolio-website',
        image_path: '/assets/portfolio-website.png',
        title: 'Dynamic Portfolio Website',
        developmentTools: "React, TypeScript, Node.js, SQL",
        shortDescription: 'Portfolio website with React frontend and PostgreSQL',
        dates: 'July & August 2024',
        projectDescription: `
            Website to showcase my portfolio with a React and TypeScript frontend and a PostgreSQL database.
            <br /> Deployed with Vercel and Supabase.
            `
    },
    {
        id: 'llm-bias-analysis',
        image_path: '/assets/llm-bias-analysis.png',
        title: 'Examination of bias in Large Language Models',
        developmentTools: "LangChain, SciPy, Matplotlib",
        shortDescription: 'ChatGPT weighs in on r/AmItheAsshole',
        dates: 'June 2024',
        projectDescription: `
            We fed the GPT-4o API (n=99) posts from the r/AmItheAsshole with six combinations of prompts 
            to examine the effect of user sentiment and point of view on the model's moral evaluations.
            <br /> <br />
            <a href="https://github.com/jonathantybirk/Individual-Assignment-02445-course-DTU/blob/main/Group-Assignment.pdf" target="_blank" rel="noopener noreferrer">Read the report</a>↗
            `
    },
    {
        id: 'boston-housing-analysis',
        image_path: '/assets/boston-housing-model.png',
        title: 'Boston Housing Analysis',
        developmentTools: "NumPy, pandas, scikit-learn, SciPy",
        shortDescription: 'Principal Component Analysis and Model Validation',
        dates: 'March & April 2024',
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
        id: 'multi-agent-pong-project',
        image_path: '/assets/multi-agent-pong-project.png',
        title: 'Multi-Agent Pong Project',
        developmentTools: "NumPy, PyTorch, Pygame",
        shortDescription: 'Report on multi-agent cooperation and deep Q-learning',
        dates: 'January 2024',
        projectDescription: `
            We trained and tested four pairs of agents playing a cooperative implementation of Pong, the classic Atari game. 
            The agents valued game states using Deep Q-networks trained with reinforcement learning.
            <br /> <br />
            <a href="https://github.com/jonathantybirk/Multi-Agent-Pong-Project/blob/main/Report.pdf" target="_blank" rel="noopener noreferrer">Read the report</a>↗
            `
    },
    {
        id: 'wordpress-blog',
        image_path: '/assets/wordpress-blog.png',
        title: 'WordPress Blog',
        developmentTools: "WordPress, Google Cloud Platform",
        shortDescription: 'Self-hosted WordPress website',
        dates: 'August 2023',
        projectDescription: `
            During the summer, I decided to move my personal blog from wordpress.com to a self-hosted site. 
            I hosted the site on an Ubuntu server using Google Cloud Services, gaining some experience in managing a full stack environment. The site is currently offline due to costs.
            <br /> <br />
            <strike><b>Visit the site</b></strike>↗ (currently unavailable)
            `
    },
    {
        id: 'legacy-static-portfolio-website',
        image_path: '/assets/legacy-static-portfolio-website.png',
        title: 'Static Portfolio Website (Legacy)',
        developmentTools: "HTML, CSS",
        shortDescription: 'Static portfolio website hosted on GitHub Pages',
        dates: 'July 2023',
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
        image_path: '/assets/red-wine-classifier.png',
        title: 'Red Wine Classifier',
        developmentTools: "Python, pandas, scikit-learn",
        shortDescription: 'Decision Tree Classifer trained to determine wine quality',
        dates: 'December 2022',
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
        image_path: '/assets/orbiter.png',
        title: 'Orbiter',
        developmentTools: "JavaScript",
        shortDescription: '2D solar system simulation with orbital mechanics',
        dates: 'December 2022',
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
        image_path: '/assets/bouncy-balls.png',
        title: 'Bouncy Balls',
        developmentTools: "Python, Pygame",
        shortDescription: '2D simulation of elastic collisions',
        dates: 'December 2022',
        projectDescription: `
            This project is one of 3 I coded for my university application. I showcased these projects in a short YouTube video.
            <br /> <br />
            <a href="https://youtu.be/2n58APJq_Ik?si=mgQEZBPz_z0alnus" target="_blank" rel="noopener noreferrer">Watch the YouTube video presentation</a>↗
            <br /> <br />
            <a href="https://github.com/jonathantybirk/DTU-application-projects" target="_blank" rel="noopener noreferrer">See the source code on GitHub</a>↗
            `
    },
];

export default projects