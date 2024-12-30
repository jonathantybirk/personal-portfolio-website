import supabase from '../supabaseClient';
import { Semester } from '../../types/courseTypes';

export async function fetchCoursesData(): Promise<Semester[]> {
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

  if (semestersError || !semesters) {
    throw new Error('Failed to load courses data.');
  }

  return semesters.map((semester: Semester) => ({
    ...semester,
    courses: semester.courses.sort((a, b) => a.id - b.id),
  }));
}