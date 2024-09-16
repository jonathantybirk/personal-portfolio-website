import supabase from '../supabaseClient.js';
import semesters from '../data/coursesData.js';

const insertData = async () => {
  try {
    // Insert Semesters Data
    for (const semester of semesters) {
      const { data: semesterData, error: semesterError } = await supabase
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

      const semesterId = semesterData[0].id;

      // Insert Courses Data for the inserted semester
      for (const course of semester.courses) {
        const { data: courseData, error: courseError } = await supabase
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
            semesterId: semesterId
          });

        if (courseError) {
          console.error(`Error inserting course ${course.name}:`, courseError);
        } else {
          console.log(`Course ${course.name} inserted successfully:`, courseData);
        }
      }
    }

  } catch (error) {
    console.error('Error running the insertion script:', error);
  }
};

insertData();
