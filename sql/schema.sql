create extension if not exists "pgcrypto";

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  subtitle text not null,
  description text not null,
  price_cents integer not null,
  currency text not null default 'usd',
  stripe_price_id text,
  lemon_variant_id bigint,
  preview_image_url text,
  file_bundle_path text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  stripe_customer_id text,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  customer_id uuid references customers(id),
  product_id uuid references products(id),
  payment_provider text,
  provider_order_id text unique,
  provider_payment_id text,
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text,
  amount_cents integer not null,
  currency text not null default 'usd',
  status text not null default 'pending',
  coupon_code text,
  upsell_1_accepted boolean not null default false,
  upsell_2_accepted boolean not null default false,
  email_sent_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists download_links (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  max_downloads integer not null default 3,
  download_count integer not null default 0,
  last_downloaded_at timestamptz,
  is_revoked boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists download_events (
  id uuid primary key default gen_random_uuid(),
  download_link_id uuid not null references download_links(id) on delete cascade,
  ip_address text,
  user_agent text,
  downloaded_at timestamptz not null default now()
);

create table if not exists coupons (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  discount_type text not null,
  discount_value integer not null,
  is_active boolean not null default true,
  max_uses integer,
  used_count integer not null default 0,
  expires_at timestamptz,
  stripe_coupon_id text,
  created_at timestamptz not null default now()
);

create or replace function increment_download_count(link_id uuid)
returns void
language sql
as $$
  update download_links
  set
    download_count = download_count + 1,
    last_downloaded_at = now()
  where id = link_id;
$$;
