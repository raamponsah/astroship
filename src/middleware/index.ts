import { clerkMiddleware, createRouteMatcher } from "astro-clerk-auth/server";

// Only protect /user routes
const isProtectedPage = createRouteMatcher(['/user(.*)','/dashboard(.*)']);

// Mark /training routes as public
const isPublicRoute = createRouteMatcher(['/training(.*)']);

export const onRequest = clerkMiddleware((auth, context, next) => {
  // Skip auth check for public routes
  if (isPublicRoute(context.request)) {
    return next();
  }

  // Check authentication for protected routes
  if (isProtectedPage(context.request) && !auth().userId) {
    return auth().redirectToSignIn();
  }
  return next();
});