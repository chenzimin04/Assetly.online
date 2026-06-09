import { ProductCard } from "@/components/product-card";
import { copy, getLocalizedProducts } from "@/lib/products";

export default function ChineseProductsPage() {
  const products = getLocalizedProducts("zh");

  return (
    <div className="section-gap">
      <div className="container-shell space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">{copy.zh.productsPage.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight">{copy.zh.productsPage.title}</h1>
          <p className="text-lg leading-8 text-ink/72">{copy.zh.productsPage.subtitle}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} locale="zh" />
          ))}
        </div>
      </div>
    </div>
  );
}
