import type { ReactNode } from 'react';
import Interests from './components/extras/Interests';
import Resume from './components/extras/Resume';
import './App.css';

type Link = { label: string; href: string };

type Project = {
  id: string;
  title: string;
  tools: string;
  period: string;
  start: string;
  end: string;
  summary: string;
  image?: string;
  imageCredit?: string;
  description: string[];
  links?: Link[];
};

type Experience = {
  organisation: string;
  role: string;
  start: string;
  end: string;
  description: string;
};

// Paths that render standalone pages without the site chrome, so they open in a new tab.
const standalonePaths = ['/projects/orbiter/demo'];
const sections = [
  { label: 'Home', path: '/home' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
] as const;

function isExternal(href: string) {
  return /^[a-z][a-z0-9+.-]*:/i.test(href) || standalonePaths.includes(href);
}

function OutboundAware({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const external = isExternal(href);
  return <a className={className} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
    {children}{external ? ' ↗' : ''}
  </a>;
}

// '2026-08' beats '2026-04' beats a bare '2026', so a generic period sorts below a specific one.
function dateKey(value: string) {
  if (value === 'present') return Number.MAX_SAFE_INTEGER;
  const [year, month] = value.split('-');
  return Number(year) * 100 + (month ? Number(month) : 0);
}

type Dated = { start: string; end: string };

function byEndThenStart(a: Dated, b: Dated) {
  return dateKey(b.end) - dateKey(a.end) || dateKey(b.start) - dateKey(a.start);
}

function byStartThenEnd(a: Dated, b: Dated) {
  return dateKey(b.start) - dateKey(a.start) || dateKey(b.end) - dateKey(a.end);
}

const projects: Project[] = [
  {
    id: 'minecraft-rl',
    title: 'Deep Reinforcement Learning in Minecraft',
    tools: 'Dreamer 4, world models, reinforcement learning',
    period: 'August 2026 – present',
    start: '2026-08',
    end: 'present',
    summary: 'My BSc thesis: working from Dreamer 4 to train Minecraft agents on less compute.',
    image: '/assets/minecraft-rl.webp',
    imageCredit: 'Minecraft cube by Albin Olsson, CC BY-SA 3.0, via Wikimedia Commons. Source and licence: /assets/minecraft-rl-credit.txt',
    description: [
      'More info coming soon.',
    ],
  },
  {
    id: 'flow-matching',
    title: 'World Action Model for 3D View Prediction',
    tools: 'PyTorch, flow matching, LiDAR',
    period: 'June – August 2026',
    start: '2026-06',
    end: '2026-08',
    summary: 'A generative world model that predicts what a scene looks like from a viewpoint it has not seen.',
    image: '/assets/flow-matching.webp',
    description: [
      'Summer research at the Hong Kong University of Science and Technology.',
      'I trained a flow matching model on vehicle LiDAR scans to predict how a partially observed scene appears from a novel angle. Conditioned on the current scan and the movement, the model generates the point cloud seen from the new viewpoint.',
      'The project covered the simulated multi-view data pipeline, model training and rollout evaluation.',
    ],
    links: [{ label: 'Source code', href: 'https://github.com/jonathantybirk/lidar-flow-matching' }],
  },
  {
    id: 'electricity-forecasting',
    title: 'Electricity Forecasting and Trading',
    tools: 'Time-series forecasting, LoRA, electricity markets',
    period: 'March 2026',
    start: '2026-03',
    end: '2026-03',
    summary: 'Forecasting electricity spot prices and bidding on cross-border transmission capacity for the InCommodities Case Crunch.',
    description: [
      'In a team of two, I placed fourth in the InCommodities Case Crunch, a live market simulation using virtual capital.',
      'We forecast hourly UK and French electricity spot prices and bid on physical cross-border transmission capacity. Our model topped the validation leaderboard on RMSE after fine-tuning a time-series foundation model with LoRA on two years of hourly data and roughly 120 covariates.',
    ],
  },
  {
    id: 'audio-explorers',
    title: 'Audio Explorers 2026',
    tools: 'Python, source separation, signal processing',
    period: 'April 2026',
    start: '2026-04',
    end: '2026-04',
    summary: 'My winning solution to Demant’s software challenge, separating seven speakers talking over each other.',
    image: '/assets/audio-explorers.webp',
    description: [
      'The case involved a mixture of seven speakers recorded through four hearing-aid microphones.',
      'I separated and identified the speakers, estimated their directions of arrival, selected the talker of interest and produced an enhanced output. The solution won the software case and a place in the Audio Explorers programme in Toronto.',
    ],
    links: [{ label: 'Source code', href: 'https://github.com/jonathantybirk/Audio-Explorers-2026' }],
  },
  {
    id: 'mario-rl',
    title: 'MarI/O vs. Modern Reinforcement Learning',
    tools: 'PyTorch, PPO, NEAT, BizHawk',
    period: '2026',
    start: '2026',
    end: '2026',
    summary: 'Putting SethBling’s old MarI/O against modern reinforcement learning in Super Mario World.',
    image: '/assets/mario-rl.webp',
    description: [
      'More info coming soon.',
    ],
  },
  {
    id: 'healthcare-ai',
    title: 'Danish National Student Championship in AI',
    tools: 'Ollama, information retrieval, HPC',
    period: 'August 2025',
    start: '2025-08',
    end: '2025-08',
    summary: 'Winning team Powered by SmartFridge, earning the win in the medical information retrieval subchallenge.',
    image: '/assets/healthcare-rag.webp',
    description: [
      'My team, Powered by SmartFridge, won the 2025 Danish National Student Championship in Artificial Intelligence.',
      'I built our medical information retrieval solution, which evaluates medical statements under strict runtime, memory and offline-inference limits. It took first place in its subchallenge.',
    ],
    links: [
      { label: 'Announcement', href: 'https://www.linkedin.com/posts/jonathantybirk_we-are-the-2025-danish-national-student-champions-activity-7367586906336907264-uOr7/' },
      { label: 'Source code', href: 'https://github.com/bforbanks/dm-i-ai-2025' },
    ],
  },
  {
    id: 'equivariant-lidar',
    title: 'Equivariance in LiDAR Point Clouds',
    tools: 'PyTorch, e3nn, trimesh',
    period: 'February – June 2025',
    start: '2025-02',
    end: '2025-06',
    summary: 'Comparing architectural equivariance with data augmentation on LiDAR scans of furniture.',
    image: '/assets/equivariant-graph-neural-network.webp',
    description: [
      'We built graph neural networks to predict an object’s centre of mass from sparse LiDAR scans of furniture meshes.',
      'The project compared an SE(3)-equivariant model with a conventional model trained with and without rotational data augmentation.',
    ],
    links: [{ label: 'Source code', href: 'https://github.com/jonathantybirk/equivariant-mesh-centroid-estimation' }],
  },
  {
    id: 'llm-bias',
    title: 'Prompt-Induced Bias in GPT-4o Moral Evaluations',
    tools: 'GPT-4o, SciPy, statistical analysis',
    period: 'June 2024',
    start: '2024-06',
    end: '2024-06',
    summary: 'Testing how sentiment and first-person framing affected GPT-4o\'s moral judgments.',
    image: '/assets/llm-bias-analysis.webp',
    description: [
      'For a group project in statistical evaluation, we collected 99 recent interpersonal-conflict posts and evaluated each using six controlled prompt variants, producing 594 GPT-4o responses.',
      'We varied the stated sentiment and whether the conflict was presented in the first or third person. The results showed systematic framing effects: negative sentiment lowered the model\'s scores, while first-person framing produced harsher judgments in some conditions.',
    ],
    links: [{ label: 'Report', href: 'https://github.com/jonathantybirk/Individual-Assignment-02445-course-DTU/blob/main/Group-Assignment.pdf' }],
  },
  {
    id: 'multi-agent-pong',
    title: 'Multi-Agent Deep Q-Learning in Pong',
    tools: 'PyTorch, NumPy, Pygame',
    period: 'January 2024',
    start: '2024-01',
    end: '2024-01',
    summary: 'Investigating how information and reward asymmetry affect two cooperating reinforcement learning Pong agents.',
    image: '/assets/multi-agent-pong-project.webp',
    description: [
      'For a first-year group project, we trained pairs of Deep Q-learning agents to control one paddle each in a cooperative Pong game.',
      'We compared four setups that varied whether agents could observe the other paddle and whether they received a small reward when the other agent returned the ball.',
    ],
    links: [{ label: 'Source code and report', href: 'https://github.com/jonathantybirk/multi-agent-DQL-pong' }],
  },
  {
    id: 'university-application-projects',
    title: 'University Application Projects',
    tools: 'Python, JavaScript, Pygame, scikit-learn',
    period: 'December 2022',
    start: '2022-12',
    end: '2022-12',
    summary: 'A red-wine quality classifier, a spaceflight game and a physics simulation.',
    image: '/assets/orbiter.webp',
    description: [
      'I made these three projects for my university application: a decision-tree classifier for wine quality, a browser-based spaceflight game with orbital mechanics, and a Pygame simulation of elastic collisions.',
      'They were the first programming projects I presented publicly.',
    ],
    links: [
      { label: 'Presentation', href: 'https://youtu.be/2n58APJq_Ik' },
      { label: 'Source code', href: 'https://github.com/jonathantybirk/DTU-application-projects' },
      { label: 'Play the spaceflight game', href: '/projects/orbiter/demo' },
    ],
  },
].sort(byEndThenStart);

const experience: Experience[] = [
  {
    organisation: 'HIVE Robots',
    role: 'Robotics Machine Learning Engineer',
    start: '2026-01',
    end: 'present',
    description: 'Develop humanoid-robot manipulation systems, including teleoperation data collection and the training and evaluation of vision-language-action models.',
  },
  {
    organisation: 'DTU RAVEN',
    role: 'Autonomous Systems Software Engineer',
    start: '2025-12',
    end: 'present',
    description: 'Develop autonomous area-coverage and target-localisation missions for unmanned aircraft. We won the 2026 California Unmanned Aerial Systems Competition.',
  },
  {
    organisation: 'Technical University of Denmark',
    role: 'Teaching Assistant',
    start: '2024-01',
    end: '2026-05',
    description: 'Taught programming, statistics, machine learning and symbolic artificial intelligence, and supervised student projects.',
  },
  {
    organisation: 'Danish Student Association for Rocketry',
    role: 'Software Team Member; Treasurer and Board Member',
    start: '2024-09',
    end: '2026-04',
    description: 'Developed mission-control software and served as treasurer and a member of the board.',
  },
  {
    organisation: 'Netcompany',
    role: 'Software Engineer',
    start: '2025-05',
    end: '2026-02',
    description: 'Worked across backend services, system interfaces and frontend pages on the modernisation of Denmark’s national payment-account system.',
  },
].sort(byStartThenEnd);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function label(value: string) {
  if (value === 'present') return 'present';
  const [year, month] = value.split('-');
  return month ? `${months[Number(month) - 1]} ${year}` : year;
}

function experiencePeriod({ start, end }: Experience) {
  if (start === end) return label(start);
  const sameYear = end !== 'present' && start.split('-')[0] === end.split('-')[0];
  return `${sameYear ? months[Number(start.split('-')[1]) - 1] : label(start)} – ${label(end)}`;
}

function Header() {
  return <header className="site-header">
    <nav aria-label="Main navigation">
      {sections.map(({ label, path }) =>
        <a href={path} key={path}>{label}</a>
      )}
    </nav>
  </header>;
}

function Home() {
  return <main className="home">
    <div className="home-top">
      <img src="/assets/profile-photo.webp" alt="Photo of Jonathan Tybirk" decoding="async" fetchPriority="high" />
      <div className="contact">
        <p><strong>Email:</strong><br /><a href="mailto:contact@jonathantybirk.com">contact@jonathantybirk.com</a></p>
        <p><strong>LinkedIn:</strong><br /><a href="https://www.linkedin.com/in/jonathantybirk/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jonathantybirk/</a></p>
        <p><strong>GitHub:</strong><br /><a href="https://github.com/jonathantybirk/" target="_blank" rel="noopener noreferrer">github.com/jonathantybirk/</a></p>
      </div>
    </div>
    <p className="home-description">I am a BSc Artificial Intelligence and Data student at the Technical University of Denmark. This site is where I showcase (and host) some of my personal projects.</p>
  </main>;
}

function thumb(image: string) {
  return image.replace(/\.webp$/, '-thumb.webp');
}

function Projects() {
  return <main className="projects">
    {projects.map(project => <article className={`project-row${project.image ? '' : ' project-row-text'}`} key={project.id}>
      {project.image && <a className="project-image" href={`/projects/${project.id}`} aria-label={project.title}>
        <img src={thumb(project.image)} alt="" title={project.imageCredit} loading="lazy" decoding="async" />
      </a>}
      <div className="project-summary">
        <h2><a href={`/projects/${project.id}`}>{project.title}</a></h2>
        <p className="tools">{project.tools}</p>
        <p>{project.summary}</p>
        <p className="period">{project.period}</p>
      </div>
    </article>)}
  </main>;
}

function ProjectPage({ project }: { project: Project }) {
  return <main className="project-page">
    {project.image && <div className="project-figure"><img src={project.image} alt="" title={project.imageCredit} decoding="async" fetchPriority="high" /></div>}
    <p className="project-meta">{project.tools}<span className="separator"> · </span>{project.period}</p>
    <div className="project-content">
      <h1>{project.title}</h1>
      {project.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {project.links && <div className="project-links">
        {project.links.map(link => <OutboundAware key={link.href} href={link.href}>{link.label}</OutboundAware>)}
      </div>}
    </div>
  </main>;
}

function ExperiencePage() {
  return <main className="experience">
    {experience.map(item => <article className="experience-row" key={item.organisation}>
      <p className="experience-period">{experiencePeriod(item)}</p>
      <div>
        <h2>{item.organisation}</h2>
        <p className="experience-role">{item.role}</p>
        <p>{item.description}</p>
      </div>
    </article>)}
  </main>;
}

// Unlinked pages are reachable only by typing the URL.
const knownPaths = new Set([
  ...sections.map(({ path }) => path),
  '/projects/orbiter',
  '/projects/orbiter/demo',
  '/work',
  '/interests',
  '/resume',
  ...projects.map(project => `/projects/${project.id}`),
]);

// An unknown URL falls back to its nearest known ancestor, so /projects/nonsense lands on
// /projects and /projects/orbiter/nonsense lands on the demo. Stripping everything leaves home.
function resolve(path: string) {
  let candidate = path;
  while (candidate) {
    if (knownPaths.has(candidate)) return candidate;
    candidate = candidate.slice(0, candidate.lastIndexOf('/'));
  }
  return '/home';
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  const resolved = resolve(path);
  if (resolved !== path) {
    window.location.replace(resolved);
    return null;
  }

  const isOrbiter = resolved === '/projects/orbiter' || resolved === '/projects/orbiter/demo';
  const sectionPath = resolved === '/work'
    ? '/experience'
    : resolved.startsWith('/projects/') ? '/projects' : resolved;
  const section = sections.find(({ path }) => path === sectionPath);
  document.title = isOrbiter ? 'Orbiter' : section ? `${section.label} | Jonathan Tybirk` : 'Jonathan Tybirk';

  if (isOrbiter) {
    return <iframe title="Orbiter" src="/website-components/orbiter-demo/index.html" className="fullscreen-frame" />;
  }
  if (resolved === '/interests') return <Interests />;
  if (resolved === '/resume') return <Resume />;
  if (resolved === '/home') return <><Header /><Home /></>;
  if (resolved === '/projects') return <><Header /><Projects /></>;
  if (resolved === '/experience' || resolved === '/work') return <><Header /><ExperiencePage /></>;
  const project = projects.find(item => item.id === resolved.slice('/projects/'.length));
  return <><Header />{project && <ProjectPage project={project} />}</>;
}
