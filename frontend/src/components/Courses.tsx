import React from 'react';
import './Courses.css'; // Assuming your CSS is properly set up to handle the styles

const Courses = () => {
  const semesters = [
    {
      title: "First Semester Courses and Grades",
      period: "August 2023 - January 2024",
      courses: [
        {
          code: "01001",
          ects: 10,
          name: "Mathematics 1a",
          link: "https://kurser.dtu.dk/course/2023-2024/01001",
          assessments: [
            { name: "Assignments (33%)", grade: "12 (A)" },
            { name: "Exam (67%)", grade: "12 (A)" }
          ],
          average: "8.2"
        },
        {
          code: "02002",
          ects: 5,
          name: "Computer Programming",
          link: "https://kurser.dtu.dk/course/2023-2024/02002",
          assessments: [{ name: "Exam", grade: "12 (A)" }],
          average: "5.7",
          note: "Employed as Class Instructor and Teaching Assistant for 02002 Computer Programming in Autumn 2025."
        },
        {
          code: "02402",
          ects: 5,
          name: "Statistics",
          link: "https://kurser.dtu.dk/course/2023-2024/02402",
          assessments: [{ name: "Exam", grade: "12 (A)" }],
          average: "6.0",
          note: "Employed as Teaching Assistant for 02402 Statistics in Spring 2024. Employed to help transition course programming language from R to Python in Summer 2024."
        },
        {
          code: "02461",
          ects: 10,
          name: "Introduction to Intelligent Systems",
          link: "https://kurser.dtu.dk/course/2023-2024/02461",
          assessments: [
            { name: "Exam (40%)", grade: "12 (A)" },
            { name: "Group Project (60%)", grade: "10 (B)" }
          ],
          average: "8.1",
          note: "Employed as Teaching Assistant for 02461 Introduction to Intelligent Systems in Autumn 2025 and January 2026."
        }
      ],
      gradeLink: "https://campusnet.dtu.dk/cnnet/Grades/Public.aspx?Id=ZTDNHK7TTA"
    },
    // Add other semesters similarly
  ];

  return (
    <div className="courses-container">
      {semesters.map((semester, index) => (
        <div key={index}>
          <h2>{semester.title}</h2>
          <p className="center-text"><i>{semester.period}</i></p>
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>ECTS</th>
                <th>Course Name</th>
                <th>Assessment</th>
                <th><a href={semester.gradeLink} target="_blank" rel="noopener noreferrer"><u>Grade</u></a>↗</th>
                <th>Class Avg</th>
              </tr>
            </thead>
            <tbody>
              {semester.courses.map((course, courseIndex) => (
                <React.Fragment key={courseIndex}>
                  {course.assessments.map((assessment, assessmentIndex) => (
                    <tr key={assessmentIndex} className={courseIndex % 2 === 0 ? "row-gray-light" : "row-gray-dark"}>
                      {assessmentIndex === 0 && (
                        <>
                          <td rowSpan={course.assessments.length}><a href={course.link} target="_blank" rel="noopener noreferrer"><u>{course.code}</u></a>↗</td>
                          <td rowSpan={course.assessments.length}>{course.ects}</td>
                          <td rowSpan={course.assessments.length}>{course.name}</td>
                        </>
                      )}
                      <td>{assessment.name}</td>
                      <td>{assessment.grade}</td>
                      {assessmentIndex === 0 && <td rowSpan={course.assessments.length}>{course.average}</td>}
                    </tr>
                  ))}
                  {course.note && <tr className="note"><td colSpan={6}>{course.note}</td></tr>}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Courses;
