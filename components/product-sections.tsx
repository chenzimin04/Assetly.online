import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

export function ProductSections({ product, locale = "en" }: { product: Product; locale?: "en" | "zh" }) {
  const checkoutHref = locale === "zh" ? `/zh/checkout/${product.slug}` : `/checkout/${product.slug}`;
  const labels =
    locale === "zh"
      ? {
          includedEyebrow: "包含内容",
          includedTitle: "你购买后会收到的内容",
          benefitsEyebrow: "适用价值",
          benefitsTitle: "为什么这个产品对实际业务有帮助",
          audienceEyebrow: "适合对象",
          audienceTitle: "更适合这些使用场景",
          ctaTitle: "准备购买这个数字产品？",
          ctaBody: "这是一次性购买的数字下载产品，付款完成后即可获取文件内容。",
          ctaButton: "立即购买"
        }
      : {
          includedEyebrow: "Included",
          includedTitle: "What the buyer receives after purchase",
          benefitsEyebrow: "Value",
          benefitsTitle: "Why this product is useful in a real workflow",
          audienceEyebrow: "Best for",
          audienceTitle: "Common use cases for this product",
          ctaTitle: "Ready to purchase this digital product?",
          ctaBody: "This is a one-time digital purchase. After payment, the buyer receives access to the files described on this page.",
          ctaButton: "Buy now"
        };

  return (
    <>
      <section id="included" className="section-gap border-t border-ink/10">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">{labels.includedEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{labels.includedTitle}</h2>
          </div>
          <div className="space-y-3">
            {product.included.map((item) => (
              <div key={item} className="rounded-md border border-ink/10 bg-white px-4 py-4 text-sm leading-6 shadow-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-ink/10">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">{labels.benefitsEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{labels.benefitsTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.benefits.map((item) => (
              <div key={item} className="rounded-md border border-ink/10 bg-white p-5 text-sm leading-6 shadow-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-ink/10">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">{labels.audienceEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{labels.audienceTitle}</h2>
          </div>
          <div className="space-y-3">
            {product.audience.map((item) => (
              <div key={item} className="rounded-md border border-ink/10 bg-sage/55 px-4 py-4 text-sm font-medium text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-b border-ink/10">
        <div className="container-shell rounded-lg bg-ink px-6 py-10 text-white sm:px-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">{labels.ctaTitle}</h2>
            <p className="max-w-2xl text-white/72">{labels.ctaBody}</p>
            <Link href={checkoutHref} className="inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink">
              {labels.ctaButton} {formatPrice(product.priceCents)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
