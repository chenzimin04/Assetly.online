import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { ProductCard } from "@/components/product-card";
import { copy, featuredProductSlug, getLocalizedProduct, getLocalizedProducts } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export default function ChineseHomePage() {
  const chineseFeaturedSlug = "ai-matte-primer-detail-page-blueprint";
  const featured = getLocalizedProduct(chineseFeaturedSlug, "zh") || getLocalizedProduct(featuredProductSlug, "zh");
  const library = getLocalizedProducts("zh");
  const pricing = [...library].sort((a, b) => a.priceCents - b.priceCents);

  if (!featured) {
    return null;
  }

  return (
    <>
      <section className="section-gap">
        <div className="container-shell space-y-10">
          <div className="grid gap-8 border-b border-ink/10 pb-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{copy.zh.home.eyebrow}</p>
              <div className="space-y-4">
                <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {copy.zh.home.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-ink/70">{copy.zh.home.subtitle}</p>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-ink/60 sm:grid-cols-3 lg:grid-cols-1">
              {copy.zh.home.stats.map((item) => (
                <div key={item} className="border-l border-ink/12 pl-4 lg:pl-5">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Link href="/zh/products" className="cta-primary">
                  {copy.zh.home.primaryCta}
                </Link>
                <Link href={`/zh/product/${featured.slug}`} className="cta-secondary">
                  {copy.zh.home.secondaryCta}
                </Link>
              </div>

              <div className="overflow-hidden rounded-xl border border-ink/10 bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={featured.previewImage} alt={featured.name} fill className="object-cover" priority />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 border-b border-ink/8 pb-5">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                    {copy.zh.home.featuredEyebrow}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight">{featured.name}</h2>
                </div>
                <span className="text-sm font-semibold text-ink/55">{formatPrice(featured.priceCents)}</span>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/45">
                <span>{featured.category}</span>
                {featured.tier ? <span className="rounded-full border border-ink/10 px-2 py-1">{featured.tier}</span> : null}
                {featured.format ? <span>{featured.format}</span> : null}
              </div>

              <p className="mt-5 text-sm leading-7 text-ink/72">{featured.subtitle}</p>

              <div className="mt-6 space-y-3">
                {featured.included.slice(0, 3).map((item) => (
                  <div key={item} className="rounded-lg border border-ink/10 bg-paper/55 px-4 py-3 text-sm leading-6 text-ink/78">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 border-t border-ink/8 pt-5 text-sm text-ink/65 sm:grid-cols-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40">定位</p>
                  <p className="mt-2 text-ink/72">面向独立创作者、小团队和数字产品小店。</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40">交付</p>
                  <p className="mt-2 text-ink/72">付款后即时开通访问，并通过邮箱补发安全链接。</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40">购买方式</p>
                  <p className="mt-2 text-ink/72">产品分别售卖，一次性购买，没有额外订阅层。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell space-y-8">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">{copy.zh.home.collectionEyebrow}</p>
              <h2 className="text-3xl font-semibold tracking-tight">{copy.zh.home.collectionTitle}</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/72">{copy.zh.home.collectionSubtitle}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {library.map((product) => (
              <ProductCard key={product.slug} product={product} locale="zh" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">价格</p>
            <h2 className="text-3xl font-semibold tracking-tight">每个数字产品都采用清晰的一次性定价。</h2>
            <p className="text-lg leading-8 text-ink/72">
              所有产品单独售卖，付款后即时交付，并且会在产品页明确说明包含内容与交付格式。
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-paper/75 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                <tr>
                  <th className="px-5 py-4">产品</th>
                  <th className="px-5 py-4">分类</th>
                  <th className="px-5 py-4">格式</th>
                  <th className="px-5 py-4">价格</th>
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
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">1. 选择产品</p>
            <p className="mt-3 text-sm leading-6 text-ink/72">先确认产品范围、文件格式、包含内容和一次性价格，再决定是否购买。</p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">2. 完成付款</p>
            <p className="mt-3 text-sm leading-6 text-ink/72">结账通过 Lemon Squeezy 安全完成，适用于单个数字产品购买。</p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">3. 获取文件</p>
            <p className="mt-3 text-sm leading-6 text-ink/72">付款成功后，买家会收到安全下载链接以及订单确认邮件。</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 sm:py-20">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">交付说明</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">所有产品均以数字下载形式交付。</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-ink/72">
              <p>每个产品页面都会在结账前说明文件格式和包含材料。</p>
              <p>付款后会通过安全下载链接和订单邮件完成交付。</p>
              <p>本站不寄送任何实体商品。</p>
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">退款与联系</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">如果遇到交付或访问问题，可以联系支持。</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-ink/72">
              <p>由于产品为数字交付，除非法律另有要求，购买通常为最终成交。</p>
              <p>如果买家在访问文件时遇到问题，可以联系支持处理交付或链接异常。</p>
              <p>支持邮箱可在联系页面或订单邮件中查看。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-ink/10">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">{copy.zh.home.faqEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{copy.zh.home.faqTitle}</h2>
          </div>
          <FaqList faqs={featured.faqs} />
        </div>
      </section>
    </>
  );
}
