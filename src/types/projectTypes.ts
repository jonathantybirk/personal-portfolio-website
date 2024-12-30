export interface ProjectSummary {
  id: string;
  imagePath: string;
  title: string;
  developmentTools: string;
  shortDescription: string;
  period: string;
}

export interface ProjectDetail extends ProjectSummary {
  projectDescription: string;
}
