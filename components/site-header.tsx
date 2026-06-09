import { LocaleBrandLink } from "@/components/locale-brand-link";
import { LocaleNav } from "@/components/locale-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/8 bg-paper/84 backdrop-blur-xl">
      <div className="container-shell flex min-h-[72px] items-center justify-between gap-6 py-3">
        <LocaleBrandLink />
        <nav className="flex items-center gap-5 text-sm text-ink/70">
          <LocaleNav />
        </nav>
      </div>
    </header>
  );
}
