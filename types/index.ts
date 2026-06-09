export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  priceCents: number;
  currency: "usd";
  previewImage: string;
  included: string[];
  benefits: string[];
  audience: string[];
  faqs: { question: string; answer: string }[];
  lemonVariantId?: number;
  category?: string;
  format?: string;
  tier?: string;
  previewSections?: {
    sectionTitle: string;
    items: string[];
  }[];
  promptSamples?: string[];
  previewGallery?: {
    src: string;
    alt: string;
    title?: string;
  }[];
};

export type OrderRecord = {
  id: string;
  order_number: string;
  customer_email: string;
  product_slug: string;
  amount_cents: number;
  status: string;
  created_at: string;
};
