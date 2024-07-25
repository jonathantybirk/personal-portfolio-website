import React, {useEffect} from 'react';
import './Courses.css';
import semesters from '../data/coursesData';

const Courses = () => {
  useEffect(() => {
    document.title = "Courses | Portfolio";
  }, []);

  return (
    <div className="courses-container">
      {semesters.map((semester, index) => (
        <div key={index}>
          <br />
          <h2>{semester.title}</h2>
          <p className="center-text"><i>{semester.period}</i></p>
          <br />
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>ECTS</th>
                <th>Course Name</th>
                <th>Assessment</th>
                <th><u><a href={semesters[0].gradeLink} target="_blank" rel="noopener noreferrer">Grade</a></u>↗</th>
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
