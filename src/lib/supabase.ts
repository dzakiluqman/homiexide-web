import { createClient } from '@supabase/supabase-js';

console.log("Cek URL:", import.meta.env.PUBLIC_SUPABASE_URL);
console.log("Cek Key:", import.meta.env.PUBLIC_SUPABASE_ANON_KEY);

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);