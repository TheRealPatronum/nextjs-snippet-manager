import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const publicRoutes = createRouteMatcher([
    // Add public routes here    
    "/sign-in",
    "/sign-up",
    "/api/snippet"
]);

// Apply Clerk middleware
export default clerkMiddleware((auth, req) => {
  if (publicRoutes(req)) {
    return;
}
    if (!publicRoutes(req)) {
        auth().protect();
    }
});

// Define the routes the middleware applies to
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};