"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy } from "@/lib/products";
import { getLocaleFromPathname, stripLocalePrefix, withLocale } from "@/lib/locale";

export function LocaleNav() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const switchLocale = locale === "en" ? "zh" : "en";
  const navCopy = copy[locale].nav;
  const normalizedPath = stripLocalePrefix(pathname);
  const navItems = [
    { href: "/products", label: navCopy.products },
    { href: "/about", label: navCopy.about },
    { href: "/contact", label: navCopy.contact }
  ];

  function isActive(href: string) {
    if (href === "/") {
      return normalizedPath === "/";
    }

    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  }

  return (
    <div className="flex items-center gap-1.5">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={withLocale(item.href, locale)}
          className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
      <div className="mx-1 h-4 w-px bg-ink/10" />
      <Link href={withLocale(pathname, switchLocale)} className="nav-link nav-link-accent">
        {locale === "en" ? "\u4e2d\u6587" : "English"}
      </Link>
    </div>
  );
}
