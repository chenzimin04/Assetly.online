import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { copy } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product, locale = "en" }: { product: Product; locale?: "en" | "zh" }) {
  const href = locale === "zh" ? `/zh/product/${product.slug}` : `/product/${product.slug}`;
  const viewLabel = copy[locale].productsPage.viewLabel;
  const includedPreview = product.included.slice(0, 2);
  const deliveryLabel = locale === "zh" ? "数字下载" : "Digital download";
  const deliveryNote = locale === "zh" ? "付款后即时开通访问，并通过邮件发送下载链接。" : "Instant access after checkout, with the download link sent by email.";

  return (
    <article className="surface-panel overflow-hidden transition duration-300 hover:-translate-y-[2px] hover:border-ink/16">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-ink/8 bg-sand/45">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.04),rgba(17,17,17,0.18))]" />
        <Image
          src={product.previewImage}
          alt={product.name}
          fill
          className="object-cover object-center saturate-[0.82] contrast-[1.02] brightness-[0.98] transition duration-500 hover:scale-[1.02]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <div className="rounded-full border border-white/35 bg-white/78 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/65 backdrop-blur">
            {product.category || "Digital"}
          </div>
          {product.format ? (
            <div className="rounded-full border border-white/20 bg-ink/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/88 backdrop-blur">
              {product.format}
            </div>
          ) : null}
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/45">
            {product.tier ? <span className="rounded-full border border-ink/10 px-2 py-1">{product.tier}</span> : null}
          </div>
          <span className="text-sm font-semibold text-ink/72">{formatPrice(product.priceCents)}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight">{product.name}</h3>
          <p className="text-sm leading-6 text-ink/68">{product.subtitle}</p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-paper/55 px-4 py-3">
          <p className="section-kicker">{deliveryLabel}</p>
          <p className="mt-2 text-sm leading-6 text-ink/72">{deliveryNote}</p>
        </div>
        <div className="space-y-2 border-t border-ink/8 pt-4 text-sm text-ink/68">
          {includedPreview.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <Link href={href} className="inline-flex items-center text-sm font-semibold text-ink/85 transition hover:text-ink">
          {viewLabel}
        </Link>
      </div>
    </article>
  );
}
