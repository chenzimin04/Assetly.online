import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/product-detail-page";
import { getLocalizedProduct } from "@/lib/products";

export default function ChineseProductPage({ params }: { params: { slug: string } }) {
  const product = getLocalizedProduct(params.slug, "zh");
  const supportEmail = process.env.SUPPORT_EMAIL;

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} locale="zh" supportEmail={supportEmail} />;
}
