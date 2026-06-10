import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { ProductCard } from "@/components/product-card";
import { Locale } from "@/lib/locale";
import { copy, featuredProductSlug, getLocalizedProduct, getLocalizedProducts } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

const homeLabels = {
  en: {
    pricingEyebrow: "Pricing",
    pricingTitle: "Clear one-time pricing for each digital product.",
    pricingBody:
      "Each product is sold separately, delivered instantly after payment, and includes the exact files described on its product page.",
    productColumn: "Product",
    categoryColumn: "Category",
    formatColumn: "Format",
    priceColumn: "Price",
    positioningTitle: "Positioning",
    positioningBody: "Standalone digital downloads built for creators, online sellers, and small digital teams.",
    deliveryTitle: "Delivery",
    deliveryBody: "Instant digital access after payment, with a secure download link sent by email.",
    purchaseTypeTitle: "Purchase type",
    purchaseTypeBody: "Separate one-time purchases with no subscription, custom service, or physical shipment.",
    steps: [
      {
        title: "1. Choose a product",
        body: "Review the scope, included files, format, and one-time price before purchase."
      },
      {
        title: "2. Complete payment",
        body: "Checkout is handled securely through Lemon Squeezy for individual digital product purchases."
      },
      {
        title: "3. Receive the files",
        body: "After payment, the buyer receives a secure download link and order confirmation by email for the digital file bundle."
      }
    ],
    deliverySectionEyebrow: "Delivery",
    deliverySectionTitle: "All products are delivered as digital downloads.",
    deliverySectionBody: [
      "Each product page describes the file format and included materials before checkout.",
      "Delivery happens after payment through a secure download link and order email.",
      "No physical goods, managed services, or subscription plans are sold on this website."
    ],
    supportEyebrow: "Refund policy and contact",
    supportTitle: "Support is available for delivery or access issues.",
    supportBody: [
      "Because products are delivered digitally, purchases are generally final unless required by law.",
      "If a buyer has trouble accessing purchased files, they can contact support for help with delivery or link issues."
    ],
    supportEmail: "Support email",
    supportFallback: "Support contact details are available on the contact page."
  },
  zh: {
    pricingEyebrow: "价格",
    pricingTitle: "每个数字产品都采用清晰的一次性定价。",
    pricingBody: "所有产品单独出售，付款后即时交付，并会在产品页明确说明你会收到哪些文件。",
    productColumn: "产品",
    categoryColumn: "分类",
    formatColumn: "格式",
    priceColumn: "价格",
    positioningTitle: "定位",
    positioningBody: "面向创作者、线上商家与小团队的独立数字下载产品。",
    deliveryTitle: "交付",
    deliveryBody: "付款后即时开通访问，并通过邮件发送安全下载链接。",
    purchaseTypeTitle: "购买方式",
    purchaseTypeBody: "产品单独售卖，一次性购买，无订阅、无代做、无实体发货。",
    steps: [
      {
        title: "1. 选择产品",
        body: "先确认产品范围、包含内容、文件格式和一次性价格，再决定是否购买。"
      },
      {
        title: "2. 完成付款",
        body: "结账通过 Lemon Squeezy 安全完成，适用于单个数字产品购买。"
      },
      {
        title: "3. 获取文件",
        body: "付款成功后，买家会收到安全下载链接和订单确认邮件。"
      }
    ],
    deliverySectionEyebrow: "交付说明",
    deliverySectionTitle: "本站所有产品均以数字下载形式交付。",
    deliverySectionBody: [
      "每个产品页都会在结账前说明文件格式和包含内容。",
      "付款后会通过安全下载链接和订单邮件完成交付。",
      "本站不销售实体商品，也不提供托管服务或订阅计划。"
    ],
    supportEyebrow: "退款与联系",
    supportTitle: "如果遇到交付或访问问题，可以联系支持。",
    supportBody: [
      "由于产品为数字交付，除非法律另有要求，购买通常为最终成交。",
      "如果买家在接收或访问文件时遇到问题，可以联系支持协助处理。"
    ],
    supportEmail: "支持邮箱",
    supportFallback: "支持联系方式可在联系页查看。"
  }
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const homeCopy = copy[locale].home;
  const labels = homeLabels[locale];
  const featured = getLocalizedProduct(featuredProductSlug, locale);
  const library = getLocalizedProducts(locale);
  const pricing = [...library].sort((a, b) => a.priceCents - b.priceCents);
  const supportEmail = process.env.SUPPORT_EMAIL;
  const productsHref = locale === "zh" ? "/zh/products" : "/products";

  if (!featured) {
    return null;
  }

  return (
    <>
      <section className="section-gap">
        <div className="container-shell space-y-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-7">
              <span className="eyebrow-chip">{homeCopy.eyebrow}</span>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{homeCopy.title}</h1>
                <p className="max-w-2xl text-lg leading-8 text-ink/68">{homeCopy.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={productsHref} className="cta-primary">
                  {homeCopy.primaryCta}
                </Link>
                <Link href={locale === "zh" ? `/zh/product/${featured.slug}` : `/product/${featured.slug}`} className="cta-secondary">
                  {homeCopy.secondaryCta}
                </Link>
              </div>
            </div>
            <div className="surface-panel grid gap-3 p-5 text-sm text-ink/60 sm:grid-cols-3 lg:grid-cols-1 lg:p-6">
              {homeCopy.stats.map((item) => (
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
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">{homeCopy.featuredEyebrow}</p>
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
                  <p className="section-kicker">{homeCopy.featuredEyebrow}</p>
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
                  <p className="section-kicker">{labels.positioningTitle}</p>
                  <p className="mt-2 text-ink/72">{labels.positioningBody}</p>
                </div>
                <div>
                  <p className="section-kicker">{labels.deliveryTitle}</p>
                  <p className="mt-2 text-ink/72">{labels.deliveryBody}</p>
                </div>
                <div>
                  <p className="section-kicker">{labels.purchaseTypeTitle}</p>
                  <p className="mt-2 text-ink/72">{labels.purchaseTypeBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell space-y-8">
          <div className="space-y-3">
            <p className="section-kicker">{homeCopy.collectionEyebrow}</p>
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h2 className="text-3xl font-semibold tracking-tight">{homeCopy.collectionTitle}</h2>
              <p className="max-w-2xl text-lg leading-8 text-ink/72">{homeCopy.collectionSubtitle}</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {library.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="section-kicker">{labels.pricingEyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight">{labels.pricingTitle}</h2>
            <p className="text-lg leading-8 text-ink/72">{labels.pricingBody}</p>
          </div>
          <div className="surface-panel overflow-hidden">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-paper/75 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                <tr>
                  <th className="px-5 py-4">{labels.productColumn}</th>
                  <th className="px-5 py-4">{labels.categoryColumn}</th>
                  <th className="px-5 py-4">{labels.formatColumn}</th>
                  <th className="px-5 py-4">{labels.priceColumn}</th>
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
          {labels.steps.map((step) => (
            <div key={step.title} className="surface-panel p-6">
              <p className="section-kicker">{step.title}</p>
              <p className="mt-3 text-sm leading-6 text-ink/72">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          <div className="surface-panel p-6">
            <p className="section-kicker">{labels.deliverySectionEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{labels.deliverySectionTitle}</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-ink/72">
              {labels.deliverySectionBody.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="surface-panel p-6">
            <p className="section-kicker">{labels.supportEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{labels.supportTitle}</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-ink/72">
              {labels.supportBody.map((item) => (
                <p key={item}>{item}</p>
              ))}
              {supportEmail ? <p>{labels.supportEmail}: {supportEmail}</p> : <p>{labels.supportFallback}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-ink/10">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">{homeCopy.faqEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{homeCopy.faqTitle}</h2>
          </div>
          <FaqList faqs={featured.faqs} />
        </div>
      </section>
    </>
  );
}
