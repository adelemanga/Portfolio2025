import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const locale = savedLocale === "en" ? "en" : "fr";
    url.pathname = `/${locale}`;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
