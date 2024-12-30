import supabaseClient from '../supabaseClient';

export const fetchProjects = async () => {
  const { data: projectsData, error } = await supabaseClient
    .from('projects')
    .select('*');

  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return projectsData;
};
