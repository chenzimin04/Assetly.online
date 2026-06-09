import { ProductCard } from "@/components/product-card";
import { copy, products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="section-gap">
      <div className="container-shell space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="section-kicker">{copy.en.productsPage.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight">{copy.en.productsPage.title}</h1>
          <p className="text-lg leading-8 text-ink/72">{copy.en.productsPage.subtitle}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
