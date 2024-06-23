import { createClerkClient } from "@clerk/backend";
var secretKey = "sk_test_p0o1YVmaNUCSs2nPei3FeaE1rw8L6BsM7ozF40u8gF";
var signInUrl = "/sign-in";
var signUpUrl = "/sign-up";
var SECRET_KEY = secretKey;
var API_VERSION = { "PUBLIC_SUPABASE_URL": "https://gvcpyhkcnsqchooabnez.supabase.co", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Y3B5aGtjbnNxY2hvb2FibmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MTc0MDksImV4cCI6MjAzMzM5MzQwOX0.5wgArzHHIsCnsf8dzroOjTLzIeMASUaTmyt5pHGvNGQ", "PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY": "pk_test_aW1tdW5lLWVsZXBoYW50LTc2LmNsZXJrLmFjY291bnRzLmRldiQ", "PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL": "/sign-in", "PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL": "/sign-up", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://skyfusion.dev", "ASSETS_PREFIX": void 0 }.CLERK_API_VERSION || "v1";
var API_URL = { "PUBLIC_SUPABASE_URL": "https://gvcpyhkcnsqchooabnez.supabase.co", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Y3B5aGtjbnNxY2hvb2FibmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MTc0MDksImV4cCI6MjAzMzM5MzQwOX0.5wgArzHHIsCnsf8dzroOjTLzIeMASUaTmyt5pHGvNGQ", "PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY": "pk_test_aW1tdW5lLWVsZXBoYW50LTc2LmNsZXJrLmFjY291bnRzLmRldiQ", "PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL": "/sign-in", "PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL": "/sign-up", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://skyfusion.dev", "ASSETS_PREFIX": void 0 }.CLERK_API_URL || "https://api.clerk.dev";
var clerkClient = createClerkClient({ secretKey: SECRET_KEY, apiVersion: API_VERSION, apiUrl: API_URL });
export {
  signUpUrl as a,
  clerkClient as c,
  signInUrl as s
};
