import React, { useEffect, useState } from 'react';
import './Courses.css';
import { fetchCoursesData } from '../database-services/api/fetchCoursesData';
import { Semester, Course, Assessment } from '../types/courseTypes';

const gradesLink: string = "https://campusnet.dtu.dk/cnnet/Grades/Public.aspx?Id=EM852B4WCN";

const Courses: React.FC = () => {
  const [coursesData, setCoursesData] = useState<Semester[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Courses | Portfolio";
    (async () => {
      try {
        const data = await fetchCoursesData();
        setCoursesData(data);
      } catch (fetchError) {
        setError("Failed to load courses data :(");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
    {course.assessments.map((assessment: Assessment, assessmentIndex: number) => (
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
