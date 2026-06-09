import { Product } from "@/types";

type Locale = "en" | "zh";
type ProductDictionary = Record<string, Product>;

const variantFallback = Number(process.env.LEMONSQUEEZY_VARIANT_ID || 0) || undefined;

const productMap: ProductDictionary = {
  "etsy-listing-prompt-pack": {
    id: "prod_etsy_prompt_pack",
    slug: "etsy-listing-prompt-pack",
    name: "Etsy Listing Prompt Pack",
    subtitle: "A downloadable file bundle for writing stronger Etsy titles, descriptions, tags, and promo copy.",
    description:
      "This is a digital download for Etsy sellers who want ready-to-use prompt files, a PDF guide, and editable text resources for drafting listing copy faster.",
    priceCents: 1900,
    currency: "usd",
    category: "Listing Copy",
    format: "PDF + TXT",
    tier: "Starter",
    lemonVariantId:
      Number(process.env.LEMONSQUEEZY_VARIANT_ID_ETSY_LISTING_PROMPT_PACK || 0) || variantFallback,
    previewImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Downloadable prompt templates for listing titles, descriptions, tags, offers, and FAQs",
      "A PDF guide with a repeatable workflow for turning rough notes into cleaner listing copy",
      "Reference examples across common Etsy categories",
      "Bonus text templates for promo captions and customer replies",
      "Editable TXT files delivered as part of the digital download"
    ],
    benefits: [
      "Write listing copy in less time",
      "Improve consistency across multiple products",
      "Reduce rewriting and blank-page friction",
      "Reuse the same prompt structure for future listings"
    ],
    audience: [
      "Etsy sellers launching new listings",
      "Print-on-demand shop owners",
      "Handmade product creators",
      "Side hustlers who want faster content production"
    ],
    faqs: [
      {
        question: "What happens after I pay?",
        answer:
          "You will be redirected to a confirmation page after checkout, and a secure download link for the file bundle will also be sent to your email."
      },
      {
        question: "Do I need ChatGPT Plus?",
        answer: "No. The downloaded prompts can be used with common AI chat tools, although stronger models may produce better results."
      },
      {
        question: "Is this a physical product?",
        answer: "No. This is a digital download only and nothing is shipped physically."
      },
      {
        question: "Do you offer refunds?",
        answer: "Because this is a digital product with immediate access, all sales are generally final unless required by law."
      }
    ]
  },
  "shop-launch-copy-kit": {
    id: "prod_shop_launch_copy_kit",
    slug: "shop-launch-copy-kit",
    name: "Shop Launch Copy Kit",
    subtitle: "A downloadable copy kit for homepage, offer, about page, and launch email writing.",
    description:
      "This is a digital download for creators and small digital stores that need prompt files and worksheets for a clearer launch message across key pages and emails.",
    priceCents: 2900,
    currency: "usd",
    category: "Storefront Copy",
    format: "Worksheet + TXT",
    tier: "Growth",
    lemonVariantId: Number(process.env.LEMONSQUEEZY_VARIANT_ID_SHOP_LAUNCH_COPY_KIT || 0) || variantFallback,
    previewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Downloadable prompt frameworks for homepage, offer, about page, and FAQ copy",
      "Launch email prompt files for pre-launch, open cart, and follow-up",
      "A concise messaging worksheet to tighten positioning before writing",
      "Editable text files for reuse across future products"
    ],
    benefits: [
      "Launch faster without writing every page from scratch",
      "Keep your store voice consistent across pages and emails",
      "Clarify what you sell and why it matters",
      "Reuse the same launch workflow for later offers"
    ],
    audience: [
      "Creators launching a new storefront",
      "Digital product founders validating a first offer",
      "Solo operators refreshing a weak homepage",
      "Small teams without a dedicated copywriter"
    ],
    faqs: [
      {
        question: "Is this only for new stores?",
        answer: "No. It also works for refreshing an existing store with clearer copy and a stronger offer."
      },
      {
        question: "What format do I receive?",
        answer: "You receive a digital download bundle with prompt files, frameworks, and a lightweight worksheet."
      },
      {
        question: "Can I adapt it to different niches?",
        answer: "Yes. The prompts are flexible enough for many digital product categories."
      },
      {
        question: "Is there a subscription?",
        answer: "No. This is a one-time purchase with instant digital delivery."
      }
    ]
  },
  "customer-reply-template-pack": {
    id: "prod_customer_reply_template_pack",
    slug: "customer-reply-template-pack",
    name: "Customer Reply Template Pack",
    subtitle: "A downloadable template bundle for refunds, updates, and common customer questions.",
    description:
      "This is a digital download that helps sellers respond faster and more consistently with reusable support templates and editable text files.",
    priceCents: 2400,
    currency: "usd",
    category: "Support Templates",
    format: "Templates + TXT",
    tier: "Operations",
    lemonVariantId:
      Number(process.env.LEMONSQUEEZY_VARIANT_ID_CUSTOMER_REPLY_TEMPLATE_PACK || 0) || variantFallback,
    previewImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Downloadable reply templates for shipping updates, refunds, delays, and common questions",
      "Tone-adjustment prompts for calm, concise, or more premium replies",
      "Escalation guidance for trickier conversations",
      "Reusable snippets for email and marketplace messaging in editable text format"
    ],
    benefits: [
      "Reduce time spent on repetitive replies",
      "Make support responses more consistent",
      "Lower the mental load of writing under pressure",
      "Handle edge cases with reusable prompts"
    ],
    audience: [
      "Marketplace sellers handling repetitive support",
      "Digital product creators answering inbox questions",
      "Small teams building a customer support baseline",
      "Operators who want less ad hoc writing"
    ],
    faqs: [
      {
        question: "Does this replace support software?",
        answer: "No. It is a downloadable content pack for writing better responses, not a ticketing platform or managed support service."
      },
      {
        question: "Can I customize the tone?",
        answer: "Yes. The pack includes prompts for adjusting tone to match your brand style."
      },
      {
        question: "Will it work for non-Etsy shops?",
        answer: "Yes. The templates are useful for many digital sellers and small ecommerce workflows."
      },
      {
        question: "How is it delivered?",
        answer: "As an instant digital download after payment."
      }
    ]
  },
  "ai-matte-primer-detail-page-blueprint": {
    id: "prod_ai_matte_primer_detail_page_blueprint",
    slug: "ai-matte-primer-detail-page-blueprint",
    name: "AI Matte Primer Detail Page Blueprint",
    subtitle: "A visual prompt blueprint for building a luxury matte primer product page with ad-ready beauty imagery.",
    description:
      "This product is a downloadable PDF blueprint for beauty sellers, designers, and prompt creators who want a stronger matte primer detail page with premium campaign-style visuals and structured image prompts.",
    priceCents: 990,
    currency: "usd",
    category: "Beauty Prompts",
    format: "PDF",
    tier: "Premium",
    lemonVariantId:
      Number(process.env.LEMONSQUEEZY_VARIANT_ID_AI_MATTE_PRIMER_DETAIL_PAGE_BLUEPRINT || 0) || variantFallback,
    previewImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    included: [
      "A PDF blueprint outlining a standard matte primer detail page image structure",
      "Luxury beauty prompt directions for hero visuals, product-only shots, and campaign-style compositions",
      "Multiple creative directions including Vogue-inspired, Dior-style, minimalist, and editorial layouts",
      "Conversion-focused prompt ideas for pore comparison, texture close-ups, before-and-after visuals, and long-wear tests",
      "Target-audience and ingredient-chart prompt concepts for a more complete product page presentation"
    ],
    benefits: [
      "Build a more premium-looking beauty detail page without starting from a blank canvas",
      "Speed up visual direction for product pages, ad creatives, and prompt-based mockups",
      "Create a more consistent image story across hero, benefits, comparison, and texture sections",
      "Use one structured blueprint across matte primer launches, beauty concept tests, or client work"
    ],
    audience: [
      "Beauty founders creating product detail pages",
      "Prompt sellers building beauty-focused visual products",
      "Designers making cosmetic landing pages or mockups",
      "Marketers testing luxury beauty ad directions"
    ],
    previewSections: [
      {
        sectionTitle: "Style directions inside",
        items: [
          "Vogue-inspired editorial beauty campaign",
          "Product-only luxury hero image",
          "Dior-style black and gold direction",
          "Minimalist premium composition",
          "Red-carpet and art-gallery beauty concepts"
        ]
      },
      {
        sectionTitle: "Detail page image plan",
        items: [
          "Main product visual",
          "Key selling point graphic",
          "Pore comparison image",
          "Texture demonstration shot",
          "Before-and-after makeup comparison",
          "Long-wear test timeline",
          "Ingredient presentation visual",
          "Target audience direction"
        ]
      },
      {
        sectionTitle: "Conversion-focused ideas",
        items: [
          "Oil-control and pore-blur benefit visuals",
          "Proof-style before-and-after concepts",
          "12-hour wear storytelling",
          "Texture-first close-ups for formula trust",
          "Clean infographic layouts for beauty claims"
        ]
      }
    ],
    promptSamples: [
      "Ultra-realistic luxury cosmetic advertisement poster for a matte makeup primer, vertical 4:5 format, premium beauty campaign aesthetic, dark moody black textured background with soft warm brown highlights.",
      "Luxury cosmetic infographic, glossy black primer tube in center, elegant icons surrounding product, oil control, pore blurring, matte finish, lightweight formula, premium typography, black and nude beige palette.",
      "Split-screen skincare comparison, left side visible enlarged pores and oily skin, right side smooth matte skin after primer application, premium beauty advertising style, clean scientific presentation.",
      "Extreme macro shot of creamy nude-beige primer texture, smooth velvet-like consistency, liquid silk appearance, luxury cosmetic laboratory photography, soft reflections."
    ],
    previewGallery: [
      {
        src: "/product-previews/ai-matte-primer/hero-direction.png",
        alt: "Preview page showing the luxury matte primer hero direction",
        title: "Hero direction"
      },
      {
        src: "/product-previews/ai-matte-primer/detail-structure.png",
        alt: "Preview page showing the standard product detail page structure",
        title: "Structure page"
      },
      {
        src: "/product-previews/ai-matte-primer/selling-points.png",
        alt: "Preview page showing the selling point image direction",
        title: "Selling points"
      },
      {
        src: "/product-previews/ai-matte-primer/comparison.png",
        alt: "Preview page showing the comparison image direction",
        title: "Comparison image"
      }
    ],
    faqs: [
      {
        question: "What do I receive after purchase?",
        answer: "You receive a digital PDF blueprint with structured prompt directions for building a matte primer detail page and related beauty visuals."
      },
      {
        question: "Does this include editable design files?",
        answer: "No. This product is a PDF guide and prompt blueprint, not a layered Figma, PSD, or coded template."
      },
      {
        question: "Who is this best for?",
        answer: "It is best for beauty sellers, designers, and prompt creators who want a clearer image plan for a premium cosmetic product page."
      },
      {
        question: "Can I use it for products beyond matte primer?",
        answer: "Yes. The structure is especially suited to matte primer, but many of the visual ideas can be adapted for adjacent beauty and skincare products."
      }
    ]
  }
};

const zhOverrides: Record<string, Partial<Product>> = {
  "etsy-listing-prompt-pack": {
    name: "Etsy 商品文案提示词包",
    subtitle: "适合撰写 Etsy 标题、描述、标签和推广文案的一套可下载提示词。",
    description: "这是一套面向 Etsy 卖家的数字提示词产品，帮助你更快整理 listing 文案并保持表达一致。",
    category: "商品文案",
    format: "PDF + 文本",
    tier: "入门版",
    included: [
      "适用于标题、描述、标签、优惠信息和 FAQ 的提示词模板",
      "把零散想法整理成清晰商品文案的可复用流程",
      "覆盖常见 Etsy 类目的真实示例",
      "额外附带推广短文案和客户回复模板",
      "可下载 PDF 指南与可编辑文本文件"
    ],
    benefits: ["更快完成商品文案", "多产品页面表达更统一", "减少反复重写和空白卡顿", "后续上新可复用同一套结构"],
    audience: ["准备上新商品的 Etsy 卖家", "按需打印店铺经营者", "手作商品创作者", "希望更高效产出内容的副业卖家"],
    faqs: [
      {
        question: "付款后会发生什么？",
        answer: "完成结账后你会跳转到确认页面，系统也会把安全下载链接发送到你的邮箱。"
      },
      {
        question: "需要 ChatGPT Plus 吗？",
        answer: "不需要。常见 AI 对话工具都能使用这些提示词，不过更强的模型通常会给出更好的结果。"
      },
      {
        question: "这是实体商品吗？",
        answer: "不是。这是纯数字下载产品，不会寄送任何实体物品。"
      },
      {
        question: "支持退款吗？",
        answer: "由于数字产品会在付款后立即提供访问权限，除非法律另有要求，销售通常为最终成交。"
      }
    ]
  },
  "shop-launch-copy-kit": {
    name: "店铺上线文案工具包",
    subtitle: "适合首页、主打卖点、关于页和发售邮件的一套数字文案工具包。",
    description: "适合刚上线的新店，或需要重新梳理品牌表达的数字产品站点使用。",
    category: "店铺文案",
    format: "工作表 + 文本",
    tier: "进阶版",
    included: [
      "用于首页、卖点页、关于页和 FAQ 的提示词框架",
      "适用于预热、开售和跟进邮件的发售邮件提示词",
      "帮助先收紧定位再开写的简明信息工作表",
      "可编辑文本文件，方便后续产品持续复用"
    ],
    benefits: ["更快搭好上线所需文案", "让页面与邮件语气保持一致", "更清楚地讲明你卖什么、为什么值得买", "后续发售仍可沿用同一套流程"],
    audience: ["准备上线新店铺的创作者", "验证首个数字产品的独立卖家", "想重写弱首页的单人经营者", "没有专职文案的小团队"],
    faqs: [
      {
        question: "只适合新店吗？",
        answer: "不是。它同样适合已有店铺，用来重写表达、强化卖点和梳理首页结构。"
      },
      {
        question: "会收到什么格式？",
        answer: "你会收到数字文件包，包含提示词文件、框架模板和轻量工作表。"
      },
      {
        question: "可以改成别的细分领域吗？",
        answer: "可以。这套提示词可以灵活适配多种数字产品类目。"
      },
      {
        question: "这是订阅制吗？",
        answer: "不是。这是一次性购买，付款后立即进行数字交付。"
      }
    ]
  },
  "customer-reply-template-pack": {
    name: "客户回复模板包",
    subtitle: "适合退款、订单更新和常见客户问题的一套可下载客服回复模板。",
    description: "这是一套帮助数字卖家更稳定处理高频客户消息的数字模板产品。",
    category: "客户支持",
    format: "模板 + 文本",
    tier: "运营版",
    included: [
      "适用于订单进度、退款、延迟和常见问题的回复模板",
      "可调成冷静、简洁或更高级语气的语气优化提示词",
      "面对复杂沟通时的升级处理建议",
      "可复用的邮件与平台私信片段"
    ],
    benefits: ["减少重复回复所花的时间", "让客服表达更一致", "降低压力下临时写回复的心智负担", "遇到边界问题也有可复用结构"],
    audience: ["经常处理重复咨询的平台卖家", "需要回复售前售后邮件的数字产品创作者", "正在建立客服基础模板的小团队", "希望摆脱临场写作的运营人员"],
    faqs: [
      {
        question: "这能替代客服软件吗？",
        answer: "不能。它是帮助你写出更好回复的内容包，不是工单系统。"
      },
      {
        question: "语气可以自定义吗？",
        answer: "可以。模板包附带了调整语气的提示词，方便贴合你的品牌风格。"
      },
      {
        question: "非 Etsy 店铺也能用吗？",
        answer: "可以。这些模板同样适用于许多数字卖家和小型电商流程。"
      },
      {
        question: "如何交付？",
        answer: "付款后会立即提供数字下载。"
      }
    ]
  }
  ,
  "ai-matte-primer-detail-page-blueprint": {
    name: "AI 哑光妆前乳详情页蓝图",
    subtitle: "一份适合打造高级美妆详情页的视觉提示词蓝图，聚焦哑光妆前乳场景与广告感画面。",
    description: "这是一份可下载的 PDF 蓝图，适合美妆卖家、设计师和提示词创作者，用来更快搭建一套更完整、更高级的哑光妆前乳详情页视觉方案。",
    category: "美妆提示词",
    format: "PDF",
    tier: "进阶版",
    included: [
      "一份围绕哑光妆前乳详情页结构整理好的 PDF 蓝图",
      "适用于主视觉、纯产品图和广告大片风格画面的美妆提示词方向",
      "包含 Vogue 风、Dior 深金风、极简风和高定杂志风等多种创意方向",
      "适合高转化详情页的毛孔对比图、质地图、妆前妆后图与持妆测试图提示词思路",
      "适用于成分展示和目标用户展示的补充画面方向"
    ],
    benefits: [
      "更快搭出一套像样的美妆详情页视觉框架",
      "减少主视觉、卖点图和对比图反复试错的时间",
      "让产品页从首图到细节图保持统一的高级感",
      "可复用到妆前乳、美妆护肤或相关视觉提案项目中"
    ],
    audience: [
      "正在做美妆详情页的品牌方或卖家",
      "想做美妆类提示词产品的创作者",
      "负责化妆品落地页或视觉提案的设计师",
      "测试高端美妆广告方向的营销人员"
    ],
    previewSections: [
      {
        sectionTitle: "内含风格方向",
        items: [
          "Vogue 杂志风美妆大片",
          "纯产品主视觉图方向",
          "Dior 式黑金高级感方向",
          "极简高端构图方向",
          "红毯风与艺术馆风美妆概念"
        ]
      },
      {
        sectionTitle: "详情页画面结构",
        items: [
          "首屏主视觉图",
          "核心卖点图",
          "毛孔对比图",
          "产品质地图",
          "妆前妆后对比图",
          "持妆测试图",
          "成分展示图",
          "目标用户图"
        ]
      },
      {
        sectionTitle: "更容易转化的画面思路",
        items: [
          "控油与隐匿毛孔的卖点表达",
          "妆前妆后型证据画面",
          "12 小时持妆叙事",
          "通过质地图建立配方信任感",
          "干净的信息图式卖点布局"
        ]
      }
    ],
    promptSamples: [
      "Ultra-realistic luxury cosmetic advertisement poster for a matte makeup primer, vertical 4:5 format, premium beauty campaign aesthetic, dark moody black textured background with soft warm brown highlights.",
      "Luxury cosmetic infographic, glossy black primer tube in center, elegant icons surrounding product, oil control, pore blurring, matte finish, lightweight formula, premium typography, black and nude beige palette.",
      "Split-screen skincare comparison, left side visible enlarged pores and oily skin, right side smooth matte skin after primer application, premium beauty advertising style, clean scientific presentation.",
      "Extreme macro shot of creamy nude-beige primer texture, smooth velvet-like consistency, liquid silk appearance, luxury cosmetic laboratory photography, soft reflections."
    ],
    previewGallery: [
      {
        src: "/product-previews/ai-matte-primer/hero-direction.png",
        alt: "哑光妆前乳主视觉预览页",
        title: "主视觉方向"
      },
      {
        src: "/product-previews/ai-matte-primer/detail-structure.png",
        alt: "详情页结构预览页",
        title: "结构页"
      },
      {
        src: "/product-previews/ai-matte-primer/selling-points.png",
        alt: "卖点图方向预览页",
        title: "卖点图"
      },
      {
        src: "/product-previews/ai-matte-primer/comparison.png",
        alt: "对比图方向预览页",
        title: "对比图"
      }
    ],
    faqs: [
      {
        question: "购买后会收到什么？",
        answer: "你会收到一份数字 PDF 蓝图，里面整理了哑光妆前乳详情页及相关美妆画面的提示词方向。"
      },
      {
        question: "里面包含可编辑设计源文件吗？",
        answer: "不包含。这款产品提供的是 PDF 蓝图与提示词思路，不包含 Figma、PSD 或前端模板文件。"
      },
      {
        question: "这份内容更适合谁使用？",
        answer: "更适合做美妆产品页、视觉提案、提示词商品或广告画面测试的人使用。"
      },
      {
        question: "只能用于哑光妆前乳吗？",
        answer: "不完全是。它最适合哑光妆前乳，但其中很多画面结构和提示词思路也可以迁移到相近的美妆与护肤产品。"
      }
    ]
  }
};

export const products = Object.values(productMap);

export function getProductBySlug(slug: string) {
  return productMap[slug];
}

export function getLocalizedProduct(slug: string, locale: Locale) {
  const product = getProductBySlug(slug);
  if (!product) return undefined;
  if (locale === "en") return product;
  return {
    ...product,
    ...(zhOverrides[slug] || {})
  };
}

export function getLocalizedProducts(locale: Locale) {
  return products.map((product) => getLocalizedProduct(product.slug, locale) || product);
}

export const featuredProductSlug = "shop-launch-copy-kit";

export const copy = {
  en: {
    nav: {
      products: "Products",
      about: "About",
      contact: "Contact",
      faq: "FAQ",
      terms: "Terms",
      privacy: "Privacy",
      delivery: "Delivery",
      refund: "Refund"
    },
    home: {
      eyebrow: "Downloadable digital products",
      title: "Ready-to-download files for storefront copy, launch messaging, and customer support.",
      subtitle:
        "Each product is sold separately with a clear file description, transparent one-time pricing, and instant digital delivery after checkout.",
      primaryCta: "Browse Products",
      secondaryCta: "View Featured Product",
      stats: ["One-time pricing", "Secure checkout", "Download link by email"],
      featuredEyebrow: "Featured digital product",
      collectionEyebrow: "Catalog",
      collectionTitle: "A focused catalog of standalone digital downloads with defined file deliverables.",
      collectionSubtitle: "Every listing includes a dedicated product page, file format details, pricing information, and post-purchase delivery terms.",
      faqEyebrow: "FAQ",
      faqTitle: "Short answers to common questions before purchase."
    },
    product: {
      eyebrow: "Digital download",
      includedTitle: "What is included",
      useTitle: "Who this product is for",
      faqTitle: "Frequently asked questions",
      purchaseLabel: "One-time purchase",
      buyButton: "Buy now",
      purchaseNotes: [
        "Instant digital delivery after payment",
        "Secure download link sent by email",
        "One-time purchase with no subscription or recurring fee"
      ],
      refundNote: "Because this is a digital product with immediate access, all sales are generally final unless required by law.",
      purchaseSummaryTitle: "What you are buying",
      purchaseSummaryBody:
        "This product is sold as a digital download. After payment, the buyer receives access to the file bundle described on this page. No physical item or custom service is included.",
      supportTitle: "Delivery and support",
      supportBody:
        "If you have trouble receiving or opening your files, contact support and include the email used at checkout."
    },
    productsPage: {
      eyebrow: "Catalog",
      title: "Standalone digital downloads with defined file deliverables and transparent one-time pricing.",
      subtitle: "Each listing explains exactly what files the buyer receives after payment, how delivery works, and what is not included.",
      viewLabel: "View product"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Everything customers usually want to know before buying a digital product."
    },
    terms: {
      title: "Terms of Service",
      body: [
        "By purchasing from this site, you agree that this is a digital product sale with instant delivery.",
        "You may use the purchased files for your own business or personal workflow unless otherwise stated.",
        "You may not resell, redistribute, sublicense, or share the files, prompts, or download links.",
        "Due to the nature of digital products and immediate access, all sales are final unless required by law.",
        "We reserve the right to revoke access in cases of suspected abuse, fraud, or unauthorized sharing."
      ]
    },
    privacy: {
      title: "Privacy Policy",
      body: [
        "We collect information needed to process your payment, deliver your purchase, and improve site performance.",
        "This may include your email address, order details, device data, and analytics event data.",
        "Payments are processed by Lemon Squeezy. We do not store your full card information on this site.",
        "We may use analytics tools such as GA4 and TikTok Pixel to measure traffic and conversion performance.",
        "If you need help with access or data-related requests, contact the support email listed in your order email."
      ]
    },
    checkout: {
      eyebrow: "Checkout",
      title: "Complete your purchase",
      subtitle: "One-time payment. Secure checkout with Lemon Squeezy. Instant digital delivery after payment."
    },
    footer: {
      description: "Digital products for creators, online sellers, and small teams buying ready-to-use assets.",
      meta: "Secure checkout. Instant digital delivery. One-time pricing.",
      catalog: "Catalog",
      company: "Company",
      policies: "Policies",
      digitalOnly: "Assetly sells digital downloads only. No physical goods are shipped.",
      currency: "All product pricing is shown in USD."
    }
  },
  zh: {
    nav: {
      products: "产品",
      about: "关于",
      contact: "联系",
      faq: "常见问题",
      terms: "条款",
      privacy: "隐私",
      delivery: "交付",
      refund: "退款"
    },
    home: {
      eyebrow: "精选数字产品",
      title: "为店铺文案、上线表达与客户沟通准备的一组清晰数字产品。",
      subtitle: "每个产品单独售卖，说明直接、定价透明，付款后即可完成数字交付。",
      primaryCta: "查看产品",
      secondaryCta: "查看主推产品",
      stats: ["一次性定价", "安全结账", "即时数字交付"],
      featuredEyebrow: "本周主推",
      collectionEyebrow: "产品目录",
      collectionTitle: "每个产品都定义了交付内容、价格边界和购买后的访问方式。",
      collectionSubtitle: "你可以先读清楚内容结构，再决定是否购买；不会被打包叙事或模糊承诺带着走。",
      faqEyebrow: "常见问题",
      faqTitle: "购买前最常被问到的几件事。"
    },
    product: {
      eyebrow: "数字下载产品",
      includedTitle: "包含内容",
      useTitle: "适合谁用",
      faqTitle: "常见问题",
      purchaseLabel: "一次性购买",
      buyButton: "立即购买",
      purchaseNotes: ["付款后即时交付", "下载链接会发送到邮箱", "一次性购买，无订阅费用"],
      refundNote: "由于数字产品会在付款后立即提供访问权限，除非法律另有要求，销售通常为最终成交。",
      purchaseSummaryTitle: "你将获得什么",
      purchaseSummaryBody: "这是数字下载产品。完成付款后，买家将获得本页所列文件包的访问权限。",
      supportTitle: "交付与支持",
      supportBody: "如果你在接收或打开文件时遇到问题，请联系支持，并附上结账时使用的邮箱。"
    },
    productsPage: {
      eyebrow: "产品目录",
      title: "交付边界明确、一次性定价透明的数字产品。",
      subtitle: "每个产品页面都会直接说明买家付款后究竟会收到什么。",
      viewLabel: "查看产品"
    },
    faq: {
      eyebrow: "常见问题",
      title: "常见问题",
      subtitle: "这里整理了买家在购买数字产品前最常问到的内容。"
    },
    terms: {
      title: "服务条款",
      body: [
        "当你在本站购买产品时，即表示你同意这是一笔带有即时数字交付的数字产品交易。",
        "除非另有说明，你可以将购买内容用于自己的业务或个人工作流程。",
        "你不得转售、再分发、再授权，或分享这些文件、提示词和下载链接。",
        "由于数字产品会在付款后立即提供访问权限，除非法律另有要求，所有销售通常为最终成交。",
        "如存在滥用、欺诈或未经授权的分享行为，我们保留撤销访问权限的权利。"
      ]
    },
    privacy: {
      title: "隐私政策",
      body: [
        "我们会收集处理付款、交付产品和优化站点表现所需的信息。",
        "这些信息可能包括你的邮箱地址、订单详情、设备数据和分析事件数据。",
        "支付由 Lemon Squeezy 处理，我们不会在本站存储你的完整银行卡信息。",
        "我们可能会使用 GA4、TikTok Pixel 等分析工具来衡量流量和转化表现。",
        "如果你需要处理访问权限或数据相关请求，请通过订单邮件中的支持邮箱联系我们。"
      ]
    },
    checkout: {
      eyebrow: "结账",
      title: "完成购买",
      subtitle: "一次性付款。通过 Lemon Squeezy 安全结账。付款后即时交付数字内容。"
    },
    footer: {
      description: "用于店铺文案、上线表达与客户沟通流程的数字产品。",
      meta: "安全结账，即时交付，一次性定价。",
      catalog: "产品目录",
      company: "品牌信息",
      policies: "政策说明",
      digitalOnly: "Assetly 仅销售数字下载内容，不寄送任何实体商品。",
      currency: "所有产品价格均以美元显示。"
    }
  }
} as const;
