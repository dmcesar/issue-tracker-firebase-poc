export { default } from "next-auth/middleware"; // = import middleware from "next-auth/middleware";

// import { withAuth } from "next-auth/middleware";
// import { NextResponse, NextRequest } from "next/server";
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.rewrite(new URL("/about-2", request.url));
//   }

//   if (request.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.rewrite(new URL("/dashboard/user", request.url));
//   }
//}

// Routes protected by authentication
// Middleware function (exported from next-auth) is executed on every request performed
// next-auth/middleware protects routes via authentication only
// For custom requests, define export default middleware(request: NextRequest): NextResponse
export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: [
    //"users/:id*"
    "/dashboard/",
    "/api/auth/signout",
  ],
};
