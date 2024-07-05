import React from 'react';
import './Courses.css';

const Courses: React.FC = () => {
  // Placeholder data for now
  const courses = [
    { courseCode: '01001', courseName: 'Mathematics 1a', grade: '12 (A)', classAvg: '8.2' },
    { courseCode: '02002', courseName: 'Computer Programming', grade: '12 (A)', classAvg: '5.7' },
    { courseCode: '02402', courseName: 'Statistics', grade: '12 (A)', classAvg: '6.0' },
    { courseCode: '02461', courseName: 'Introduction to Intelligent Systems', grade: '10 (B)', classAvg: '8.1' }
  ];

  return (
    <div className="courses">
      <h2>First Semester Courses and Grades</h2>
      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grade</th>
            <th>Class Avg</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.courseCode}>
              <td>{course.courseCode}</td>
              <td>{course.courseName}</td>
              <td>{course.grade}</td>
              <td>{course.classAvg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
