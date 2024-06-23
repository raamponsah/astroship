import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gvcpyhkcnsqchooabnez.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Y3B5aGtjbnNxY2hvb2FibmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MTc0MDksImV4cCI6MjAzMzM5MzQwOX0.5wgArzHHIsCnsf8dzroOjTLzIeMASUaTmyt5pHGvNGQ";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export {
  supabase as s
};
