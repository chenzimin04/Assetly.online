export type Locale = "en" | "zh";

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/zh") {
    return "/";
  }

  if (pathname.startsWith("/zh/")) {
    return pathname.slice(3);
  }

  return pathname;
}

export function withLocale(pathname: string, locale: Locale): string {
  const normalized = stripLocalePrefix(pathname);

  if (locale === "zh") {
    return normalized === "/" ? "/zh" : `/zh${normalized}`;
  }

  return normalized;
}
