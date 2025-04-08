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

  if (!accessToken) {
    if (isProfilePage || isConfirmingPage || isCoursesPage || isSchedulePage) {
      let url = new URL("/auth", request.url);
      url.searchParams.set("from", request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  } else {
    if (isAuthPage || isConfirmPage || isResetPasswordPage) {
      let url = new URL(
        decodeURIComponent(nextUrl.search.slice(6)),
        nextUrl.origin
      );
      console.log(url.href);
      return NextResponse.redirect(new URL(url));
    }
    // if(isAdminpanelPage &&)
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
