import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { copy } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";

const extraLabels = {
  en: {
    benefitsEyebrow: "Why it helps",
    benefitsTitle: "What this product makes easier",
    audienceEyebrow: "Best for",
    previewEyebrow: "Content preview",
    previewTitle: "What you will actually see inside",
    galleryTitle: "Sample pages",
    samplesTitle: "Prompt preview",
    notesEyebrow: "Purchase notes",
    supportEmail: "Support email",
    formatLabel: "Format",
    categoryLabel: "Category",
    deliveryLabel: "Delivery",
    deliveryValue: "Instant download after checkout",
    fallbackCategory: "Digital product",
    fallbackFormat: "Download",
    summaryLabel: "Digital file bundle"
  },
  zh: {
    benefitsEyebrow: "为什么有用",
    benefitsTitle: "这份产品能帮你省下什么",
    audienceEyebrow: "适合谁",
    previewEyebrow: "内容预览",
    previewTitle: "你实际会看到什么",
    galleryTitle: "样张预览",
    samplesTitle: "Prompt 预览",
    notesEyebrow: "购买说明",
    supportEmail: "支持邮箱",
    formatLabel: "文件格式",
    categoryLabel: "产品分类",
    deliveryLabel: "交付方式",
    deliveryValue: "付款后立即下载",
    fallbackCategory: "数字产品",
    fallbackFormat: "数字下载",
    summaryLabel: "数字文件包"
  }
} as const;

export function ProductDetailPage({
  product,
  locale,
  supportEmail
}: {
  product: Product;
  locale: "en" | "zh";
  supportEmail?: string;
}) {
  const productCopy = copy[locale].product;
  const labels = extraLabels[locale];
  const checkoutHref = locale === "zh" ? `/zh/checkout/${product.slug}` : `/checkout/${product.slug}`;

  return (
    <div className="section-gap">
      <div className="container-shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="space-y-6">
            <span className="eyebrow-chip">{productCopy.eyebrow}</span>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{product.name}</h1>
              <p className="max-w-3xl text-lg leading-8 text-ink/70">{product.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/45">
              {product.category ? <span className="rounded-full border border-ink/10 px-3 py-1">{product.category}</span> : null}
              {product.tier ? <span className="rounded-full border border-ink/10 px-3 py-1">{product.tier}</span> : null}
              {product.format ? <span>{product.format}</span> : null}
            </div>
          </div>

          <div className="surface-panel grid gap-3 p-5 text-sm text-ink/62 sm:grid-cols-3">
            <div className="rounded-2xl border border-ink/8 bg-paper/55 px-4 py-4">
              <p className="section-kicker">{labels.categoryLabel}</p>
              <p className="mt-2 text-ink/78">{product.category || labels.fallbackCategory}</p>
            </div>
            <div className="rounded-2xl border border-ink/8 bg-paper/55 px-4 py-4">
              <p className="section-kicker">{labels.formatLabel}</p>
              <p className="mt-2 text-ink/78">{product.format || labels.fallbackFormat}</p>
            </div>
            <div className="rounded-2xl border border-ink/8 bg-paper/55 px-4 py-4">
              <p className="section-kicker">{labels.deliveryLabel}</p>
              <p className="mt-2 text-ink/78">{labels.deliveryValue}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="space-y-6">
            <div className="surface-panel overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[16px] border border-ink/10 bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={product.previewImage} alt={product.name} fill className="object-cover" priority />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 via-ink/12 to-transparent p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4 text-white">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">{productCopy.includedTitle}</p>
                      <p className="max-w-xl text-sm leading-6 text-white/80">{product.subtitle}</p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                      {formatPrice(product.priceCents)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-panel p-6 sm:p-7">
              <p className="section-kicker">{productCopy.includedTitle}</p>
              <div className="mt-5 grid gap-3">
                {product.included.map((item) => (
                  <div key={item} className="rounded-2xl border border-ink/10 bg-paper/58 px-4 py-4 text-sm leading-6 text-ink/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="surface-panel p-6">
                <p className="section-kicker">{labels.benefitsEyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">{labels.benefitsTitle}</h2>
                <div className="mt-5 space-y-3">
                  {product.benefits.map((item) => (
                    <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-4 text-sm leading-6 text-ink/78">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-panel p-6">
                <p className="section-kicker">{labels.audienceEyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">{productCopy.useTitle}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {product.audience.map((item) => (
                    <div key={item} className="rounded-2xl border border-ink/10 bg-paper/55 px-4 py-4 text-sm leading-6 text-ink/78">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {product.previewSections?.length ? (
              <div className="surface-panel p-6 sm:p-7">
                <div className="space-y-2">
                  <p className="section-kicker">{labels.previewEyebrow}</p>
                  <h2 className="text-2xl font-semibold tracking-tight">{labels.previewTitle}</h2>
                </div>
                {product.previewGallery?.length ? (
                  <div className="mt-6 space-y-4">
                    <p className="section-kicker">{labels.galleryTitle}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {product.previewGallery.map((image) => (
                        <div key={image.src} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                          <div className="relative aspect-[4/5] w-full">
                            <Image src={image.src} alt={image.alt} fill className="object-cover object-top" />
                          </div>
                          {image.title ? (
                            <div className="border-t border-ink/8 px-4 py-3">
                              <p className="text-sm font-semibold tracking-tight text-ink">{image.title}</p>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {product.previewSections.map((section) => (
                    <div key={section.sectionTitle} className="rounded-2xl border border-ink/10 bg-paper/55 p-4">
                      <h3 className="text-base font-semibold tracking-tight text-ink">{section.sectionTitle}</h3>
                      <div className="mt-4 space-y-2 text-sm leading-6 text-ink/76">
                        {section.items.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {product.promptSamples?.length ? (
                  <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-5">
                    <p className="section-kicker">{labels.samplesTitle}</p>
                    <div className="mt-4 space-y-3">
                      {product.promptSamples.map((sample) => (
                        <div key={sample} className="rounded-2xl border border-ink/10 bg-paper/50 px-4 py-4 text-sm leading-6 text-ink/78">
                          {sample}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="section-kicker">{productCopy.faqTitle}</p>
                <h2 className="text-2xl font-semibold tracking-tight">{productCopy.faqTitle}</h2>
              </div>
              <FaqList faqs={product.faqs} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="surface-panel p-6 sm:p-7">
              <div className="space-y-6">
                <div className="border-b border-ink/8 pb-5">
                  <p className="text-sm text-ink/55">{productCopy.purchaseLabel}</p>
                  <p className="mt-2 text-4xl font-semibold tracking-tight">{formatPrice(product.priceCents)}</p>
                </div>

                <div className="rounded-[18px] border border-ink/10 bg-paper/70 p-5 text-sm leading-6 text-ink/74">
                  <p className="section-kicker">{labels.summaryLabel}</p>
                  <p className="font-semibold text-ink">{productCopy.purchaseSummaryTitle}</p>
                  <p className="mt-2">{productCopy.purchaseSummaryBody}</p>
                </div>

                <div className="space-y-3">
                  <p className="section-kicker">{labels.notesEyebrow}</p>
                  <div className="space-y-3 text-sm leading-6 text-ink/72">
                    {productCopy.purchaseNotes.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>

                <Link href={checkoutHref} className="cta-primary w-full">
                  {productCopy.buyButton}
                </Link>

                <div className="rounded-[18px] border border-ink/10 bg-white p-5 text-sm leading-6 text-ink/72">
                  <p className="font-semibold text-ink">{productCopy.supportTitle}</p>
                  <p className="mt-2">{productCopy.supportBody}</p>
                  {supportEmail ? (
                    <p className="mt-2">
                      {labels.supportEmail}: {supportEmail}
                    </p>
                  ) : null}
                </div>

                <p className="text-xs leading-5 text-ink/55">{productCopy.refundNote}</p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
