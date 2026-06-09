import { getSupabaseAdmin } from "@/lib/supabase";

export async function upsertCustomerByEmail(email: string) {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("customers")
    .upsert(
      {
        email
      },
      { onConflict: "email" }
    )
    .select("id")
    .single();

  if (error || !data) {
    throw new Error(`Failed to upsert customer: ${error?.message || "unknown error"}`);
  }

  return data.id as string;
}

export async function createPaidOrder(input: {
  email: string;
  paymentProvider: "lemonsqueezy";
  providerOrderId: string;
  providerPaymentId?: string | null;
  productSlug: string;
  amountCents: number;
  currency: string;
  couponCode?: string | null;
}) {
  const supabase = getSupabaseAdmin();
  const customerId = await upsertCustomerByEmail(input.email);

  const { data: product, error: productError } = await supabase
    .from("products")
    .select("id")
    .eq("slug", input.productSlug)
    .single();

  if (productError || !product) {
    throw new Error(`Product not found in DB for slug ${input.productSlug}`);
  }

  const { data: existing } = await supabase
    .from("orders")
    .select("id")
    .eq("payment_provider", input.paymentProvider)
    .eq("provider_order_id", input.providerOrderId)
    .maybeSingle();

  if (existing?.id) {
    return existing.id as string;
  }

  const { data, error } = await supabase
    .from("orders")
    .insert({
      order_number: `PP-${Date.now()}`,
      customer_id: customerId,
      product_id: product.id,
      payment_provider: input.paymentProvider,
      provider_order_id: input.providerOrderId,
      provider_payment_id: input.providerPaymentId || null,
      amount_cents: input.amountCents,
      currency: input.currency,
      status: "paid",
      coupon_code: input.couponCode || null,
      paid_at: new Date().toISOString()
    })
    .select("id")
    .single();

  if (error || !data) {
    throw new Error(`Failed to create order: ${error?.message || "unknown error"}`);
  }

  return data.id as string;
}

export async function markOrderEmailSent(orderId: string) {
  const supabase = getSupabaseAdmin();
  await supabase
    .from("orders")
    .update({
      status: "fulfilled",
      email_sent_at: new Date().toISOString()
    })
    .eq("id", orderId);
}
