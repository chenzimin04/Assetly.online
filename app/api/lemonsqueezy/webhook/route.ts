import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createDownloadLink } from "@/lib/downloads";
import { sendDownloadEmail } from "@/lib/email";
import { LemonOrderWebhook, parseOrderWebhook, verifyWebhookSignature } from "@/lib/lemonsqueezy";
import { createPaidOrder, markOrderEmailSent } from "@/lib/orders";
import { getLocalizedProduct, getProductBySlug } from "@/lib/products";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = headers().get("X-Signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Lemon Squeezy webhook signature." }, { status: 400 });
  }

  if (!verifyWebhookSignature(body, signature)) {
    return NextResponse.json({ error: "Invalid Lemon Squeezy webhook signature." }, { status: 400 });
  }

  try {
    const payload = JSON.parse(body) as LemonOrderWebhook;

    if (payload.meta?.event_name !== "order_created") {
      return NextResponse.json({ received: true });
    }

    const parsed = parseOrderWebhook(payload);

    if (!parsed.productSlug || !parsed.email) {
      throw new Error("Webhook missing product slug or customer email.");
    }

    const product = getProductBySlug(parsed.productSlug);

    if (!product) {
      throw new Error(`Unknown product slug: ${parsed.productSlug}`);
    }

    const orderId = await createPaidOrder({
      email: parsed.email,
      paymentProvider: "lemonsqueezy",
      providerOrderId: parsed.providerOrderId,
      providerPaymentId: parsed.providerPaymentId,
      productSlug: parsed.productSlug,
      amountCents: parsed.amountCents || product.priceCents,
      currency: parsed.currency || product.currency,
      couponCode: parsed.couponCode
    });

    const localizedProduct = getLocalizedProduct(
      parsed.productSlug,
      payload.meta?.custom_data?.locale === "zh" ? "zh" : "en"
    );

    const link = await createDownloadLink(orderId);
    await sendDownloadEmail({
      to: parsed.email,
      productName: localizedProduct?.name || product.name,
      downloadUrl: link.url,
      expiresAt: link.expiresAt
    });
    await markOrderEmailSent(orderId);

    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Webhook handling failed." },
      { status: 400 }
    );
  }
}
