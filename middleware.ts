import { headers as nextHeaders } from "next/headers";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales: string[] = ["en-GB", "hi-IN"];

function getLocale(request: any): string {
    let languages = new Negotiator({
        headers: {
      "accept-language": nextHeaders().get("Accept-Language") as any
    }}).languages();
    
    let defaultLocale = "en-GB";

    return match(languages, locales, defaultLocale);
}

export function middleware(request: any) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;
    
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
