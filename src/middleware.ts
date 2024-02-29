// import { NextRequest, NextResponse } from "next/server";
// import { store } from "./redux/store";

// export const middleware = (req: NextRequest) => {
//   const path = req.nextUrl.pathname;

//   const isPublicPath =
//     path === "/login" || path === "/register" || path === "/confirm-password";

//   const targetPath = "/login";

//   const isLoggedIn = store.getState().authReducer.value.isLoggedIn;

//   const token = req.cookies.get("access_token")?.value || "";
//   console.log("This is the tokens", isLoggedIn);

//   if (path !== targetPath && !isPublicPath && !isLoggedIn) {
//     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   } else {
//     if (!isPublicPath && token) {
//       return;
//     }
//   }
// };

// export const config = {
//   matcher: ["/", "/profile", "/login", "/register", "/confirm-password"],
// };


export const middleware = () => {}