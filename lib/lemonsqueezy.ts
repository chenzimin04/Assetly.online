import crypto from "crypto";
import { absoluteUrl } from "@/lib/utils";

type CheckoutLocale = "en" | "zh";

type CheckoutInput = {
  variantId: number;
  email: string;
  productSlug: string;
  couponCode?: string;
  locale: CheckoutLocale;
};

export type LemonOrderWebhook = {
  meta?: {
    event_name?: string;
    custom_data?: {
      product_slug?: string;
      locale?: CheckoutLocale;
      coupon_code?: string;
    };
  };
  data: {
    id: string;
    attributes: {
      identifier?: string;
      user_email?: string;
      total?: number | string;
      currency?: string;
      currency_rate?: string;
      first_order_item?: {
        variant_id?: number;
        product_name?: string;
      };
    };
  };
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function getApiHeaders() {
  return {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: `Bearer ${getRequiredEnv("LEMONSQUEEZY_API_KEY")}`
  };
}

export async function createCheckout(input: CheckoutInput) {
  const storeId = Number(getRequiredEnv("LEMONSQUEEZY_STORE_ID"));

  const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers: getApiHeaders(),
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email: input.email,
            discount_code: input.couponCode || undefined,
            custom: {
              product_slug: input.productSlug,
              locale: input.locale,
              coupon_code: input.couponCode || ""
            }
          },
          checkout_options: {
            embed: false,
            media: true,
            logo: true,
            desc: true,
            discount: true,
            dark: false,
            subscription_preview: false,
            button_color: "#111827"
          },
          product_options: {
            enabled_variants: [input.variantId],
            redirect_url: absoluteUrl("/thank-you")
          }
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: String(storeId)
            }
          },
          variant: {
            data: {
              type: "variants",
              id: String(input.variantId)
            }
          }
        }
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Lemon Squeezy checkout creation failed: ${errorText}`);
  }

  const payload = (await response.json()) as {
    data?: {
      attributes?: {
        url?: string;
      };
    };
  };

  const checkoutUrl = payload.data?.attributes?.url;

  if (!checkoutUrl) {
    throw new Error("Lemon Squeezy checkout response did not include a URL.");
  }

  return checkoutUrl;
}

export function verifyWebhookSignature(rawBody: string, signature: string) {
  const secret = getRequiredEnv("LEMONSQUEEZY_WEBHOOK_SECRET");
  const digest = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  const received = Buffer.from(signature, "utf8");
  const expected = Buffer.from(digest, "utf8");

  if (received.length !== expected.length) {
    return false;
  }

  return crypto.timingSafeEqual(received, expected);
}

export function parseOrderWebhook(payload: LemonOrderWebhook) {
  const productSlug = payload.meta?.custom_data?.product_slug;
  const email = payload.data.attributes.user_email;
  const providerOrderId = payload.data.attributes.identifier || payload.data.id;
  const amountValue = Number(payload.data.attributes.total || 0);
  const amountCents = Number.isFinite(amountValue) ? Math.round(amountValue) : 0;
  const currency = (payload.data.attributes.currency || "USD").toLowerCase();
  const couponCode = payload.meta?.custom_data?.coupon_code || null;

  return {
    productSlug,
    email,
    providerOrderId,
    providerPaymentId: payload.data.id,
    amountCents,
    currency,
    couponCode
  };
}
