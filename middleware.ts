import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';
import { LOCALES } from "./i18n";


const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,
 
  // Used when no locale matches
  defaultLocale: 'en'
});


// Define public routes
const isPublicRoutes = createRouteMatcher([    
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/api/snippet",
    "/api/snippet/(.*)",
    "/:locales/sign-in(.*)",
    "/:locales/sign-up(.*)",
    "/api/:path*",    
    "/:locales"
]);

// Apply Clerk middleware
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoutes(req)) {
    auth().protect();
}
  return intlMiddleware(req);
});

// Define the routes the middleware applies to
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};