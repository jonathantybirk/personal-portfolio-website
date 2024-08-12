import { Request, Response } from 'express';
import { pool } from '../config/db';
import { semesters } from '../data/coursesData';

interface Course {
  code: string;
  ects: number;
  name: string;
  link: string;
  assessments: { name: string; grade: string }[];
  average: string;
  note?: string;
}

export const insertCourses = async (req: Request, res: Response) => {
  const query = `
      INSERT INTO Courses (title, period, course_code, ects, course_name, link, assessments, average, note)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  for (const semester of semesters) {
      for (const course of semester.courses as Course[]) {
          await pool.query(query, [
              semester.title,
              semester.period,
              course.code,
              course.ects,
              course.name,
              course.link,
              JSON.stringify(course.assessments),
              course.average,
              course.note || null
          ]);
      }
  }

  res.send('Courses inserted successfully');
};

export const getCourses = (req: Request, res: Response) => {
  res.json(semesters);
};
