import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      return new Response("Email and password are required", { status: 400 });
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      if (error.status === 429) {
        return new Response("Too many requests. Please wait a moment and try again.", { status: 429 });
      }
      console.error("Supabase error:", error);
      return new Response(error.message, { status: 500 });
    }

    return redirect("/signin");
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response("Unexpected error occurred", { status: 500 });
  }
};

export const GET: APIRoute = () => {
  return new Response("This endpoint only accepts POST requests.", { status: 405 });
};
