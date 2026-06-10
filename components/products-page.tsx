import { ProductCard } from "@/components/product-card";
import { Locale } from "@/lib/locale";
import { copy, getLocalizedProducts } from "@/lib/products";

export function ProductsPage({ locale }: { locale: Locale }) {
  const pageCopy = copy[locale].productsPage;
  const products = getLocalizedProducts(locale);

  return (
    <div className="section-gap">
      <div className="container-shell space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="section-kicker">{pageCopy.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight">{pageCopy.title}</h1>
          <p className="text-lg leading-8 text-ink/72">{pageCopy.subtitle}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
