// This script is written in JavaScript because it was the only approach
// that worked reliably for the Supabase insertion logic.
// I wish I remembered the exact issue but it is 6 months old now.

import supabase from '../supabaseClient.js';
import semesters from '../data/coursesData.js';

const insertData = async () => {
  try {
    // Insert Semesters Data
    for (const semester of semesters) {
      const { data: insertedSemester, error: semesterError } = await supabase
        .from('semesters')
        .insert({
          title: semester.title,
          period: semester.period
        })
        .select();

      if (semesterError) {
        console.error(`Error inserting semester ${semester.title}:`, semesterError);
        continue;
      }

      const semesterId = insertedSemester[0].id;

      // Insert Courses Data for the inserted semester
      for (const course of semester.courses) {
        const { data: insertedCourse, error: courseError } = await supabase
          .from('courses')
          .insert({
            code: course.code,
            ects: course.ects,
            name: course.name,
            period: semester.period,
            assessments: course.assessments,
            average: course.average,
            link: course.link,
            note: course.note ?? null,
            semesterId
          });

        if (courseError) {
          console.error(`Error inserting course ${course.name}:`, courseError);
        } else {
          console.log(`Course inserted:`, insertedCourse);
        }
      }
    }
  } catch (error) {
    console.error('Error running the insertion script:', error);
  }
};

insertData();
