import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/auth-token.service";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { cookies, nextUrl } = request;

  const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isAuthPage = nextUrl.pathname.startsWith("/auth");
  const isCoursesPage = nextUrl.pathname.startsWith("/courses");
  const isProfilePage = nextUrl.pathname.startsWith("/profile");
  const isConfirmingPage = nextUrl.pathname.startsWith("/cart/confirming");
  const isSchedulePage = nextUrl.pathname.startsWith("/schedule");
  const isConfirmPage = nextUrl.pathname.startsWith("/email/confirm");
  const isResetPasswordPage = nextUrl.pathname.startsWith("/email/reset");

  if (
    (isProfilePage || isConfirmingPage || isCoursesPage || isSchedulePage) &&
    !accessToken
  )
    return NextResponse.redirect(new URL("/auth", request.url));
  if ((isAuthPage || isConfirmPage || isResetPasswordPage) && accessToken)
    return NextResponse.redirect(new URL("/profile", request.url));

  // if(isAdminpanelPage &&)

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
