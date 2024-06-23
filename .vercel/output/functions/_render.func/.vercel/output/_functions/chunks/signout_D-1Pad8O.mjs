import { s as supabase } from "./supabase_BM11cvQ4.mjs";
const GET = async ({ cookies, redirect }) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
    return new Response("Error signing out", { status: 500 });
  }
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  return redirect("/signin");
};
export {
  GET
};
