import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;
// loading variables from .env file does not work in dist/ for some reason.
// temporary solution is to just manually set the variables, as the file is in .gitignore anyway

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
