// import { authMiddleware } from '@clerk/nextjs';

// export default authMiddleware({
//   publicRoutes: [
//     '/', 
//     '/profile', 
//     '/register', 
//     '/api/webhooks/clerk', 
//     '/api/test-insert', 
//     '/api/hello',
//     '/api/users',
//     '/api/gmail',
//     '/api/chat',
//   ] as const,
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    publicRoutes:[
        '/',
        '/profile',
    ]as const,
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};