import { NextRequest, NextResponse } from "next/server";
import { store } from "./redux/store";

export const middleware = (req: NextRequest) => {
  const path = req.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/register" || path === "/confirm-password";

  const tokenCookie = req.cookies.get("isLoggedIn");
  const token = tokenCookie?.value || "";
  console.log("tokenCookie:", tokenCookie);
  console.log("token:", token);

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  } else if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  } else if (!isPublicPath && token) {
    return;
  }
};

export const config = {
  matcher: ["/", "/profile", "/login", "/register", "/confirm-password"],
};
