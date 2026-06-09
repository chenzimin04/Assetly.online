insert into products (
  slug,
  name,
  subtitle,
  description,
  price_cents,
  currency,
  preview_image_url,
  file_bundle_path,
  is_active
) values (
  'etsy-listing-prompt-pack',
  'Etsy Listing Prompt Pack',
  'Ready-to-use AI prompts for faster Etsy titles, descriptions, tags, and promos.',
  'A conversion-focused digital toolkit for Etsy sellers who want better listing copy without spending hours writing from scratch.',
  1900,
  'usd',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  'etsy-listing-prompt-pack/etsy-listing-prompt-pack.zip',
  true
)
on conflict (slug) do nothing;
