import { FaqList } from "@/components/faq-list";
import { products } from "@/lib/products";

export default function FaqPage() {
  return (
    <div className="section-gap">
      <div className="container-shell max-w-4xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">FAQ</p>
          <h1 className="text-4xl font-semibold tracking-tight">Frequently asked questions</h1>
          <p className="text-lg leading-8 text-ink/72">
            Everything customers usually want to know before buying a digital product.
          </p>
        </div>
        <FaqList faqs={products[0].faqs} />
      </div>
    </div>
  );
}
