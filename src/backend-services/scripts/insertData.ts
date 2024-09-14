import { supabase } from '../supabaseClient';
import { semesters } from '../../data/coursesData';
import { projects } from '../../data/projectsData';

const insertData = async () => {
  try {
    // Insert Courses Data
    for (const semester of semesters) {
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
            note: (course as any).note ?? null
          });

        if (courseError) {
          console.error(`Error inserting course ${course.name}:`, courseError);
        } else {
          console.log(`Course ${course.name} inserted successfully:`, courseData);
        }
      }
    }

    // Insert Projects Data
    for (const project of projects) {
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .insert({
          id: project.id,
          image: project.image,
          title: project.title,
          developmentTools: project.developmentTools,
          shortDescription: project.shortDescription,
          dates: project.dates,
          projectDescription: project.projectDescription,
        });

      if (projectError) {
        console.error(`Error inserting project ${project.title}:`, projectError);
      } else {
        console.log(`Project ${project.title} inserted successfully:`, projectData);
      }
    }

  } catch (error) {
    console.error('Error running the insertion script:', error);
  }
};

insertData();
