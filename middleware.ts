export { default } from "next-auth/middleware"; // = import middleware from "next-auth/middleware";

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
  ],
};
