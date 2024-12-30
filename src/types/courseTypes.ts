export interface Assessment {
  name: string;
  grade: string;
}

export interface Course {
  id: number;
  code: string;
  ects: number;
  name: string;
  assessments: Assessment[];
  average: string;
  link?: string;
}

export interface Semester {
  id: number;
  title: string;
  period: string;
  courses: Course[];
}
