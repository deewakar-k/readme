import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/signin"));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:user*"],
};
