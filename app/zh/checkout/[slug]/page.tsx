import { notFound } from "next/navigation";
import { CheckoutForm } from "@/components/checkout-form";
import { copy, getLocalizedProduct } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export default function ChineseCheckoutPage({ params }: { params: { slug: string } }) {
  const product = getLocalizedProduct(params.slug, "zh");

  if (!product) {
    notFound();
  }

  return (
    <div className="section-gap">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">{copy.zh.checkout.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight">{copy.zh.checkout.title}</h1>
          <p className="text-lg leading-8 text-ink/72">{copy.zh.checkout.subtitle}</p>

          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-card">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm leading-6 text-ink/72">{product.subtitle}</p>
              <p className="text-3xl font-semibold">{formatPrice(product.priceCents)}</p>
            </div>
          </div>
        </div>

        <CheckoutForm product={product} locale="zh" />
      </div>
    </div>
  );
}
