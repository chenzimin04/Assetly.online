"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, withLocale } from "@/lib/locale";

export function LocaleBrandLink() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const descriptor = locale === "zh" ? "数字产品商店" : "Digital Goods";

  return (
    <Link href={withLocale("/", locale)} className="group inline-flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/10 bg-white text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/68 transition group-hover:border-ink/20 group-hover:text-ink">
        PP
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold tracking-tight text-ink">PromptPocket</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink/42">{descriptor}</span>
      </span>
    </Link>
  );
}
