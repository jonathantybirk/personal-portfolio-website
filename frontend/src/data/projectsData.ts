import bostonHousingImage from '../assets/boston-housing-analysis.png';
import multiAgentPongImage from '../assets/multi-agent-pong-project.png';

export const projects = [
    {
        id: 'boston-housing-analysis',
        title: 'Boston Housing Analysis',
        developmentTools: "NumPy, pandas, scikit-learn, SciPy",
        shortDescription: 'Principal Component Analysis and Model Cross-Validation',
        longDescription: 'We extensively analyzed the Boston Housing dataset, including feature correlations and a principal component analysis. In a following report, we evaluated models on regression and classification on the dataset with two-level 10-fold cross-validation with complexity-controlling parameters.',
        image: bostonHousingImage,
        dates: 'March & April 2024'
    },
    {
        id: 'multi-agent-pong-project',
        title: 'Multi-Agent Pong Project',
        developmentTools: "NumPy, PyTorch, Pygame",
        shortDescription: 'Report on multi-agent cooperation and deep Q-learning',
        longDescription: 'We trained and tested four pairs of agents playing a cooperative implementation of Pong, the classic Atari game. The agents valued game states using Deep Q-networks trained with reinforcement learning.',
        image: multiAgentPongImage,
        dates: 'January 2024'
    },
];