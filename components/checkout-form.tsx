"use client";

import { useState } from "react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

export function CheckoutForm({ product, locale = "en" }: { product: Product; locale?: "en" | "zh" }) {
  const [email, setEmail] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/checkout/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productSlug: product.slug,
          email,
          couponCode: couponCode || undefined,
          locale
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout link.");
      }

      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const copy =
    locale === "zh"
      ? {
          title: "安全结账",
          email: "邮箱地址",
          coupon: "优惠码（可选）",
          note: "付款完成后你会立即看到下载页面，系统也会把安全访问链接发送到你的邮箱。",
          button: `立即支付 ${formatPrice(product.priceCents)}`,
          loading: "正在跳转到结账页面...",
          support: "一次性付款，数字内容即时交付"
        }
      : {
          title: "Secure checkout",
          email: "Email address",
          coupon: "Coupon code (optional)",
          note: "You will see your download page immediately after payment, and a secure access link will also be emailed to you.",
          button: `Pay ${formatPrice(product.priceCents)} now`,
          loading: "Redirecting to checkout...",
          support: "One-time payment, instant digital delivery"
        };

  return (
    <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-card">
      <div className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold">{copy.title}</h2>
          <p className="mt-2 text-sm leading-6 text-ink/70">{copy.note}</p>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium">{copy.email}</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-md border border-ink/15 px-4 py-3 text-sm outline-none ring-0 transition focus:border-ink/35"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium">{copy.coupon}</span>
          <input
            type="text"
            value={couponCode}
            onChange={(event) => setCouponCode(event.target.value)}
            className="w-full rounded-md border border-ink/15 px-4 py-3 text-sm outline-none ring-0 transition focus:border-ink/35"
            placeholder="SAVE10"
          />
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading || !email}
          className="cta-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? copy.loading : copy.button}
        </button>

        <p className="text-xs leading-5 text-ink/55">{copy.support}</p>
      </div>
    </div>
  );
}
