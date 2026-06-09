import Image from "next/image";
import Link from "next/link";
import { copy } from "@/lib/products";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

export function Hero({ product, locale = "en" }: { product: Product; locale?: "en" | "zh" }) {
  const homeCopy = copy[locale].home;
  const productHref = locale === "zh" ? `/zh/product/${product.slug}` : `/product/${product.slug}`;
  const productLabel = locale === "zh" ? "查看产品" : "View Product";
  const includedLabel = locale === "zh" ? "包含内容" : "Included";

  return (
    <section className="section-gap">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink/70">
            {homeCopy.eyebrow}
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{homeCopy.title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-ink/72">{product.subtitle || homeCopy.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href={productHref} className="cta-primary">
              {productLabel} {formatPrice(product.priceCents)}
            </Link>
            <Link href={locale === "zh" ? "/zh/products" : "/products"} className="cta-secondary">
              {homeCopy.primaryCta}
            </Link>
          </div>
          <ul className="grid gap-3 text-sm text-ink/72 sm:grid-cols-3">
            {homeCopy.stats.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-card">
          <div className="overflow-hidden rounded-md border border-ink/10">
            <div className="relative aspect-[4/3] w-full">
              <Image src={product.previewImage} alt={product.name} fill className="object-cover" priority />
            </div>
          </div>
          <div className="mt-4 rounded-md bg-sand p-5">
            <div className="rounded-md border border-ink/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{includedLabel}</p>
              <div className="mt-4 space-y-3">
                {product.included.map((item) => (
                  <div key={item} className="rounded-md border border-ink/10 px-4 py-3 text-sm text-ink/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
