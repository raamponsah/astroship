import { s as supabase } from "./supabase_BM11cvQ4.mjs";
const POST = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const phoneNumber = formData.get("phoneNumber")?.toString();
    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      return new Response("All fields are required", { status: 400 });
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          phoneNumber
        }
      }
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
const GET = () => {
  return new Response("This endpoint only accepts POST requests.", { status: 405 });
};
export {
  GET,
  POST
};
