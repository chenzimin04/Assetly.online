alter table products
  add column if not exists lemon_variant_id bigint;

alter table orders
  add column if not exists payment_provider text,
  add column if not exists provider_order_id text,
  add column if not exists provider_payment_id text;

create unique index if not exists orders_provider_order_id_key
  on orders(provider_order_id)
  where provider_order_id is not null;

update products
set lemon_variant_id = null
where lemon_variant_id is null;

comment on column products.lemon_variant_id is 'Lemon Squeezy variant id used to create checkout links.';
comment on column orders.payment_provider is 'Payment provider name, e.g. lemonsqueezy.';
comment on column orders.provider_order_id is 'External provider order identifier.';
comment on column orders.provider_payment_id is 'External provider payment identifier.';
