import { NextRequest, NextResponse } from "next/server";
import { store } from "./redux/store";

export const middleware = (req: NextRequest) => {
  const path = req.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/sign-up" || path === "/change-password";

  const tokenCookie = req.cookies.get("isLoggedIn");
  
  const isLoggedIn = tokenCookie && tokenCookie.value === "true";
  
  if (!isPublicPath && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  } else if (isPublicPath && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  } else if (!isPublicPath && isLoggedIn) {
    return;
  }
};

export const config = {
  matcher: ["/", "/profile", "/login", "/sign-up", "/change-password"],
};
