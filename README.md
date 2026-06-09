# AI Digital Product Store MVP

A conversion-focused MVP for selling downloadable AI prompt packs with:

- Next.js App Router
- Tailwind CSS
- Lemon Squeezy Checkout
- Supabase Postgres + private Storage
- Resend email delivery
- Secure expiring download links
- GA4 + TikTok Pixel hooks
- English + Chinese storefront copy

## Main routes

- `/`
- `/product/etsy-listing-prompt-pack`
- `/checkout/etsy-listing-prompt-pack`
- `/faq`
- `/terms`
- `/privacy`
- `/zh`
- `/zh/product/etsy-listing-prompt-pack`
- `/zh/checkout/etsy-listing-prompt-pack`
- `/zh/faq`
- `/zh/terms`
- `/zh/privacy`
- `/download/[token]`
- `/admin/orders?token=YOUR_ADMIN_TOKEN`

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_TIKTOK_PIXEL_ID=XXXXXXXXXXXX

LEMONSQUEEZY_API_KEY=lsq_xxx
LEMONSQUEEZY_STORE_ID=12345
LEMONSQUEEZY_VARIANT_ID=12345
LEMONSQUEEZY_VARIANT_ID_ETSY_LISTING_PROMPT_PACK=12345
LEMONSQUEEZY_WEBHOOK_SECRET=whsec_xxx

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_STORAGE_BUCKET=digital-products

RESEND_API_KEY=re_xxx
SUPPORT_EMAIL=support@example.com
FROM_EMAIL=Your Brand <deliveries@example.com>

ADMIN_TOKEN=change-this-admin-token
```

## Lemon Squeezy setup

1. Create your product and variant in Lemon Squeezy.
2. Put the variant ID into `LEMONSQUEEZY_VARIANT_ID_ETSY_LISTING_PROMPT_PACK` or `LEMONSQUEEZY_VARIANT_ID`.
3. Create a webhook endpoint at:

```txt
https://your-domain.com/api/lemonsqueezy/webhook
```

4. Subscribe the webhook to `order_created`.
5. Copy the webhook signing secret into `LEMONSQUEEZY_WEBHOOK_SECRET`.

The purchase flow is:

1. User enters email on checkout page.
2. App creates a Lemon Squeezy checkout link.
3. User pays on Lemon Squeezy.
4. Lemon Squeezy calls the webhook.
5. System creates the order in Supabase.
6. System creates a secure download link.
7. System emails the customer the link.

## Supabase notes

Run `sql/schema.sql` and `sql/seed.sql` in the Supabase SQL editor.

`sql/schema.sql` now includes generic payment fields on `orders`:

- `payment_provider`
- `provider_order_id`
- `provider_payment_id`

and an optional `lemon_variant_id` field on `products`.

## Local development

```bash
npm install
npm run build
npm run start
```

Then open [http://localhost:3000](http://localhost:3000).
