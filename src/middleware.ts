// import { NextRequest, NextResponse } from "next/server";

// export const middleware = (req: NextRequest) => {
//   const path = req.nextUrl.pathname;

//   const isPublicPath =
//     path === "/login" || path === "/register" || path === "/confirm-password";

//     const targetPath = "/login";
//     const token = req.cookies.get("access_token")?.value || "";
//     console.log("This is the tokens", token);

//   // if (!isPublicPath && token) {
//   //   return;
//   // }

//   if (path !== targetPath && !isPublicPath && !token) {
//     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   } else {
//     return;
//   }
// };


// export const config = {
//   matcher: ["/", "/profile", "/login", "/register", "/confirm-password"],
// };
import React from 'react'

const middleware = () => {}

export default middleware