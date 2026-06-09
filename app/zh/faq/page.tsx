import { FaqList } from "@/components/faq-list";
import { copy, getLocalizedProduct } from "@/lib/products";

export default function ChineseFaqPage() {
  const product = getLocalizedProduct("etsy-listing-prompt-pack", "zh");

  if (!product) {
    return null;
  }

  return (
    <div className="section-gap">
      <div className="container-shell max-w-4xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">{copy.zh.faq.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight">{copy.zh.faq.title}</h1>
          <p className="text-lg leading-8 text-ink/72">{copy.zh.faq.subtitle}</p>
        </div>
        <FaqList faqs={product.faqs} />
      </div>
    </div>
  );
}
