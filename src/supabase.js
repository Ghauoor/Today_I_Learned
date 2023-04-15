import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pkcimkypbafgqvphlvky.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrY2lta3lwYmFmZ3F2cGhsdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MTA0NDAsImV4cCI6MTk5NTE4NjQ0MH0.8je_GT6bJJWMc1RzCFdKKoL-WuffsfnsXYUrOGRIQc8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
