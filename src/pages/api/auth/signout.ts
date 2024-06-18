import type { APIRoute } from "astro";
import { supabase } from "lib/supabase.ts";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  // Sign out from Supabase
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out:", error);
    return new Response("Error signing out", { status: 500 });
  }

  // Clear cookies
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });

  // Redirect to the signin page
  return redirect("/signin");
};
