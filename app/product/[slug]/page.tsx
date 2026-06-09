import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/product-detail-page";
import { getProductBySlug } from "@/lib/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const supportEmail = process.env.SUPPORT_EMAIL;

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} locale="en" supportEmail={supportEmail} />;
}
