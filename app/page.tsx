import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { ProductCard } from "@/components/product-card";
import { copy, featuredProductSlug, getProductBySlug, products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export default function HomePage() {
  const featured = getProductBySlug(featuredProductSlug) || products[0];
  const library = products;
  const pricing = [...products].sort((a, b) => a.priceCents - b.priceCents);
  const supportEmail = process.env.SUPPORT_EMAIL;

  return (
    <>
      <section className="section-gap">
        <div className="container-shell space-y-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-7">
              <span className="eyebrow-chip">{copy.en.home.eyebrow}</span>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {copy.en.home.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-ink/68">{copy.en.home.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/products" className="cta-primary">
                  {copy.en.home.primaryCta}
                </Link>
                <Link href={`/product/${featured.slug}`} className="cta-secondary">
                  {copy.en.home.secondaryCta}
                </Link>
              </div>
            </div>
            <div className="surface-panel grid gap-3 p-5 text-sm text-ink/60 sm:grid-cols-3 lg:grid-cols-1 lg:p-6">
              {copy.en.home.stats.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/8 bg-paper/50 px-4 py-4 lg:px-5">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="surface-panel overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[16px] border border-ink/10 bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={featured.previewImage} alt={featured.name} fill className="object-cover" priority />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 via-ink/8 to-transparent p-5 sm:p-6">
                  <div className="flex flex-wrap items-end justify-between gap-4 text-white">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">
                        {copy.en.home.featuredEyebrow}
                      </p>
                      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{featured.name}</h2>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                      {formatPrice(featured.priceCents)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-panel p-6">
              <div className="flex items-start justify-between gap-4 border-b border-ink/8 pb-5">
                <div className="space-y-2">
                  <p className="section-kicker">{copy.en.home.featuredEyebrow}</p>
                  <p className="max-w-md text-base leading-7 text-ink/72">{featured.subtitle}</p>
                </div>
                <span className="hidden text-sm font-semibold text-ink/55 sm:inline">{featured.category}</span>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/45">
                {featured.tier ? <span className="rounded-full border border-ink/10 px-2 py-1">{featured.tier}</span> : null}
                {featured.format ? <span>{featured.format}</span> : null}
              </div>

              <div className="mt-6 space-y-3">
                {featured.included.slice(0, 3).map((item) => (
                  <div key={item} className="rounded-2xl border border-ink/10 bg-paper/55 px-4 py-3 text-sm leading-6 text-ink/78">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 border-t border-ink/8 pt-5 text-sm text-ink/65 sm:grid-cols-3">
                <div>
                  <p className="section-kicker">Positioning</p>
                  <p className="mt-2 text-ink/72">Standalone digital downloads built for solo founders and small digital storefronts.</p>
                </div>
                <div>
                  <p className="section-kicker">Delivery</p>
                  <p className="mt-2 text-ink/72">Instant digital access after payment, with a secure download link sent by email.</p>
                </div>
                <div>
                  <p className="section-kicker">Purchase type</p>
                  <p className="mt-2 text-ink/72">Separate one-time purchases with no subscription, custom service, or physical shipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell space-y-8">
          <div className="space-y-3">
            <p className="section-kicker">{copy.en.home.collectionEyebrow}</p>
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h2 className="text-3xl font-semibold tracking-tight">{copy.en.home.collectionTitle}</h2>
              <p className="max-w-2xl text-lg leading-8 text-ink/72">{copy.en.home.collectionSubtitle}</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {library.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="section-kicker">Pricing</p>
            <h2 className="text-3xl font-semibold tracking-tight">Clear one-time pricing for each digital product.</h2>
            <p className="text-lg leading-8 text-ink/72">
              Each product is sold separately, delivered instantly after payment, and includes the exact files described on its product page.
            </p>
          </div>
          <div className="surface-panel overflow-hidden">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-paper/75 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                <tr>
                  <th className="px-5 py-4">Product</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Format</th>
                  <th className="px-5 py-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((product) => (
                  <tr key={product.slug} className="border-t border-ink/8">
                    <td className="px-5 py-4">
                      <div className="space-y-1">
                        <p className="font-semibold text-ink">{product.name}</p>
                        <p className="text-ink/60">{product.subtitle}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-ink/68">{product.category}</td>
                    <td className="px-5 py-4 text-ink/68">{product.format}</td>
                    <td className="px-5 py-4 font-semibold text-ink">{formatPrice(product.priceCents)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          <div className="surface-panel p-6">
            <p className="section-kicker">1. Choose a product</p>
            <p className="mt-3 text-sm leading-6 text-ink/72">
              Review the scope, included files, format, and one-time price before purchase.
            </p>
          </div>
          <div className="surface-panel p-6">
            <p className="section-kicker">2. Complete payment</p>
            <p className="mt-3 text-sm leading-6 text-ink/72">
              Checkout is handled securely through Lemon Squeezy for individual digital product purchases.
            </p>
          </div>
          <div className="surface-panel p-6">
            <p className="section-kicker">3. Receive the files</p>
            <p className="mt-3 text-sm leading-6 text-ink/72">
              After payment, the buyer receives a secure download link and order confirmation by email for the digital file bundle.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          <div className="surface-panel p-6">
            <p className="section-kicker">Delivery</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">All products are delivered as digital downloads.</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-ink/72">
              <p>Each product page describes the file format and included materials before checkout.</p>
              <p>Delivery happens after payment through a secure download link and order email.</p>
              <p>No physical goods, managed services, or subscription plans are sold on this website.</p>
            </div>
          </div>

          <div className="surface-panel p-6">
            <p className="section-kicker">Refund policy and contact</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Support is available for delivery or access issues.</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-ink/72">
              <p>Because products are delivered digitally, purchases are generally final unless required by law.</p>
              <p>If a buyer has trouble accessing purchased files, they can contact support for help with delivery or link issues.</p>
              {supportEmail ? <p>Support email: {supportEmail}</p> : <p>Support contact details are available on the contact page.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-ink/10">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">{copy.en.home.faqEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{copy.en.home.faqTitle}</h2>
          </div>
          <FaqList faqs={featured.faqs} />
        </div>
      </section>
    </>
  );
}
