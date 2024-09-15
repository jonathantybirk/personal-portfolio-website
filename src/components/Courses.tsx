import React, { useEffect, useState } from 'react';
import './Courses.css';
import supabase from '../database-services/supabaseClient';

const gradesLink: string = "https://campusnet.dtu.dk/cnnet/Grades/Public.aspx?Id=EM852B4WCN";

const Courses: React.FC = () => {
  const [coursesData, setCoursesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Courses | Portfolio";
    
    const fetchCoursesData = async () => {
      try {
        const { data: semesters, error: semestersError } = await supabase
          .from('semesters')
          .select(`
            id,
            title,
            period,
            courses (
              code,
              ects,
              name,
              assessments,
              average,
              link,
              note
            )
          `);

        if (semestersError) {
          console.error("Error fetching semesters:", semestersError);
        } else {
          console.log("Fetched semesters and courses data:", semesters);
          setCoursesData(semesters);
        }
      } catch (error) {
        console.error("Error fetching courses data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoursesData();
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div className="courses">
      {coursesData.map((semester, semesterIndex) => (
        <div key={semester.id}>
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
                <th><u><a href={gradesLink} target="_blank" rel="noopener noreferrer">Grade</a></u>↗</th>
                <th>Class Avg</th>
              </tr>
            </thead>
            <tbody>
              {semester.courses.map((course: any, courseIndex: number) => (
                <React.Fragment key={courseIndex}>
                  {course.assessments.map((assessment: any, assessmentIndex: number) => (
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
