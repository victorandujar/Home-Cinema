import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.endsWith("/")) {
    const response = NextResponse.redirect(new URL(`/page/1`, req.url));
    return response;
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
