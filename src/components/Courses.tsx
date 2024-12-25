import React, { useEffect, useState } from 'react';
import './Courses.css';
import supabase from '../database-services/supabaseClient';

const gradesLink: string = "https://campusnet.dtu.dk/cnnet/Grades/Public.aspx?Id=EM852B4WCN";

interface Assessment {
  name: string;
  grade: string;
}

interface Course {
  id: number;
  code: string;
  ects: number;
  name: string;
  assessments: Assessment[];
  average: string;
  link?: string;
}

interface Semester {
  id: number;
  title: string;
  period: string;
  courses: Course[];
}

const Courses: React.FC = () => {
  const [coursesData, setCoursesData] = useState<Semester[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Courses | Portfolio";
    fetchCoursesData();
  }, []);

  const fetchCoursesData = async (): Promise<void> => {
    try {
      const { data: semesters, error: semestersError } = await supabase
        .from('semesters')
        .select(`
          id,
          title,
          period,
          courses (
            id,
            code,
            ects,
            name,
            assessments,
            average,
            link,
            note
          )
        `)
        .order('id', { ascending: true });

      if (semestersError) {
        setError("Failed to load courses data :(");
      } else {
        const sortedSemesters = semesters.map((semester: Semester) => ({
          ...semester,
          courses: semester.courses.sort((a, b) => a.id - b.id),
        }));
        setCoursesData(sortedSemesters);
      }
    } catch (fetchError) {
      setError("An unexpected error occurred while loading courses :(");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="courses">
      {coursesData.map((semester) => (
        <SemesterSection key={semester.id} semester={semester} />
      ))}
    </div>
  );
};

const SemesterSection: React.FC<{ semester: Semester }> = ({ semester }) => (
  <div>
    <br />
    <h2>{semester.title}</h2>
    <p className="center-text"><i>{semester.period}</i></p>
    <br />
    <CourseTable courses={semester.courses} />
    <br />
  </div>
);

const CourseTable: React.FC<{ courses: Course[] }> = ({ courses }) => (
  <table>
    <thead>
      <tr>
        <th>Course Code</th>
        <th>ECTS</th>
        <th>Course Name</th>
        <th>Assessment</th>
        <th><u><a href={gradesLink} target="_blank" rel="noopener noreferrer">Grade</a></u>↗</th>
        <th>Class Avg</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course, courseIndex) => (
        <CourseRow key={course.id} course={course} courseIndex={courseIndex} />
      ))}
    </tbody>
  </table>
);

const CourseRow: React.FC<{ course: Course, courseIndex: number }> = ({ course, courseIndex }) => (
  <>
    {course.assessments.map((assessment, assessmentIndex) => (
      <tr key={assessmentIndex} className={courseIndex % 2 === 0 ? "row-gray-light" : "row-gray-dark"}>
        {assessmentIndex === 0 && (
          <>
            <td rowSpan={course.assessments.length}>
              {course.link ? (
                <><u><a href={course.link} target="_blank" rel="noopener noreferrer">{course.code}</a></u>↗</>
              ) : (
                course.code
              )}
            </td>
            <td rowSpan={course.assessments.length}>{course.ects}</td>
            <td rowSpan={course.assessments.length}>{course.name}</td>
          </>
        )}
        <td>{assessment.name}</td>
        <td>{assessment.grade}</td>
        {assessmentIndex === 0 && <td rowSpan={course.assessments.length}>{course.average}</td>}
      </tr>
    ))}
  </>
);

export default Courses;
