import { NextRequest, NextResponse } from "next/server";
import { createCheckout } from "@/lib/lemonsqueezy";
import { getProductBySlug } from "@/lib/products";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productSlug, email, couponCode, locale } = body as {
      productSlug?: string;
      email?: string;
      couponCode?: string;
      locale?: "en" | "zh";
    };

    if (!productSlug || !email) {
      return NextResponse.json({ error: "Missing productSlug or email." }, { status: 400 });
    }

    const product = getProductBySlug(productSlug);

    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    if (!product.lemonVariantId) {
      return NextResponse.json({ error: "Missing Lemon Squeezy variant ID for this product." }, { status: 500 });
    }

    const checkoutUrl = await createCheckout({
      variantId: product.lemonVariantId,
      email,
      productSlug: product.slug,
      couponCode,
      locale: locale === "zh" ? "zh" : "en"
    });

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create checkout session." },
      { status: 500 }
    );
  }
}
