"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy } from "@/lib/products";
import { getLocaleFromPathname, withLocale } from "@/lib/locale";

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const footerCopy = copy[locale].footer;

  return (
    <footer className="border-t border-ink/10 bg-white/70 py-14 backdrop-blur-sm">
      <div className="container-shell space-y-10 text-sm text-ink/65">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr]">
          <div className="max-w-sm space-y-3">
            <p className="text-sm font-semibold tracking-tight text-ink">Assetly</p>
            <p>{footerCopy.description}</p>
            <p className="text-xs uppercase tracking-[0.14em] text-ink/45">{footerCopy.meta}</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">{footerCopy.catalog}</p>
            <div className="grid gap-2">
              <Link href={withLocale("/products", locale)}>{copy[locale].nav.products}</Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">{footerCopy.company}</p>
            <div className="grid gap-2">
              <Link href={withLocale("/about", locale)}>{copy[locale].nav.about}</Link>
              <Link href={withLocale("/contact", locale)}>{copy[locale].nav.contact}</Link>
              <Link href={withLocale("/faq", locale)}>{copy[locale].nav.faq}</Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">{footerCopy.policies}</p>
            <div className="grid gap-2">
              <Link href={withLocale("/delivery", locale)}>{copy[locale].nav.delivery}</Link>
              <Link href={withLocale("/refund", locale)}>{copy[locale].nav.refund}</Link>
              <Link href={withLocale("/terms", locale)}>{copy[locale].nav.terms}</Link>
              <Link href={withLocale("/privacy", locale)}>{copy[locale].nav.privacy}</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/10 pt-5 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerCopy.digitalOnly}</p>
          <p>{footerCopy.currency}</p>
        </div>
      </div>
    </footer>
  );
}
