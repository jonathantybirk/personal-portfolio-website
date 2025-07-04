import supabaseClient from '../supabaseClient';

export const fetchProjects = async () => {
  if (!supabaseClient) {
    console.warn('Supabase not initialized. Returning empty project list.');
    return [];
  }

  const { data: projectsData, error } = await supabaseClient
    .from('projects')
    .select('*');

  if (error || !projectsData) {
    throw new Error('Failed to load projects data.');
  }

  return projectsData;
};
