import supabase from '../supabaseClient';

export const fetchCourses = async () => {
  const { data: coursesData, error } = await supabase
    .from('courses')
    .select('*');

  if (error) {
    console.error('Error fetching courses:', error);
    return [];
  }

  return coursesData;
};
