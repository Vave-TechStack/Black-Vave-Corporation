import type { Industry } from "./types";

export const retailEcommerce: Industry = {
  title: "Retail & E-commerce",
  slug: "retail-ecommerce",
  tagline: "Commerce technology that converts shoppers and protects margin",
  description:
    "Building digital commerce platforms, inventory systems and customer experience solutions for modern retail businesses.",
  metaDescription:
    "BLACK VAVE CORPORATION builds enterprise retail platforms — headless storefronts, order management, inventory sync and secure checkout that lift conversion.",
  icon: "ShoppingBag",
  theme: {
    accent: "#F0933F",
    accentLight: "#FFB169",
    accentDark: "#CE7329",
    tint: "rgba(240, 147, 63, 0.08)",
  },

  hero: {
    headline: "Commerce Technology That Holds Up On The Biggest Day Of The Year",
    subheadline:
      "We engineer storefronts, order management and inventory systems that stay fast under real trading load, connecting the platforms your business already runs so merchandising can move at market speed.",
  },

  stats: [
    { value: "PCI DSS", label: "Aligned Checkout Engineering" },
    { value: "< 90 days", label: "To First Production Release" },
    { value: "99.95%", label: "Peak-Season Availability Target" },
    { value: "24/7", label: "Peak-Season Monitoring & Support" },
  ],

  challenges: [
    {
      icon: "Gauge",
      title: "Peak Season Traffic Spikes",
      description:
        "Black Friday and promotional events concentrate demand that would otherwise take a quarter into a few hours. Slow pages, timeouts and payment failures during that window translate directly into lost revenue and permanent damage to how customers view your brand.",
    },
    {
      icon: "Boxes",
      title: "Disconnected Commerce Systems",
      description:
        "Storefront, ERP, PIM, warehouse and marketplace listings frequently hold separate records of the same SKU. Merchandising teams reconcile spreadsheets, and customers see products marked out of stock that are physically sitting on a shelf.",
    },
    {
      icon: "DollarSign",
      title: "Payment And Fraud Exposure",
      description:
        "Every checkout is an attack surface. Weak tokenization, incomplete strong customer authentication handling and unmonitored fraud signals put cardholder data at risk and generate chargebacks that erode margin on exactly the highest-value orders.",
    },
    {
      icon: "Smartphone",
      title: "A Fragmented Customer Journey",
      description:
        "Shoppers move between mobile web, native apps, marketplaces and physical stores. Most retail technology stacks treat each channel as a separate system, so personalization, loyalty credit and service quality break down at the seams between them.",
    },
    {
      icon: "Repeat",
      title: "Returns And Margin Leakage",
      description:
        "High return rates, plus manual reconciliation of promotions, shipping subsidies and marketplace fees, quietly consume the margin that merchandising and buying decisions were designed to protect.",
    },
  ],

  approach: [
    {
      title: "Commerce And Category Discovery",
      description:
        "We work alongside digital, merchandising and supply-chain teams to map the real customer journey and the operational constraints behind it. Peak trading windows, fulfilment service levels and margin targets are documented before any architecture decision is taken.",
    },
    {
      title: "Composable Architecture And Integration",
      description:
        "We design around your existing ERP, PIM and order management systems rather than replacing them wholesale. APIs, event streams and targeted adapters mean a price or stock change propagates once and appears everywhere it should.",
    },
    {
      title: "Performance And Checkout Engineering",
      description:
        "Core web vitals, cart latency, search relevance and payment authorization paths are engineered against measured targets. We load-test to a multiple of forecast peak volume with real carts and real gateway calls in the path, so the numbers are proven before launch.",
    },
    {
      title: "Compliance And Security By Design",
      description:
        "Tokenization, strong customer authentication, role-based access controls and immutable audit trails are built in from the first line of code. Scoping cardholder data out of the platform reduces your PCI DSS assessment surface and audit burden.",
    },
    {
      title: "Pilot, Measure And Scale Season",
      description:
        "We release in controlled stages against a single category, brand or region, measure conversion, latency and support volume against the agreed baseline, then extend. Peak trading is never the venue for your first production experiment.",
    },
  ],

  products: [
    {
      icon: "Store",
      title: "Headless Commerce Storefront Platform",
      description:
        "A fast, accessible storefront built on a composable architecture and decoupled from the commerce engine, so merchandising can ship experience changes without waiting on a monolithic release cycle.",
      features: [
        "Next.js and React storefront with server-side rendering",
        "Edge-cached catalogue and CDN-optimized product media pipeline",
        "Core Web Vitals budgets enforced in continuous integration",
        "WCAG 2.2 AA accessible templates across every listing page",
      ],
    },
    {
      icon: "Search",
      title: "Product Discovery And Merchandising Platform",
      description:
        "Search, filtering and merchandising tooling that surfaces the right products at the top of every query, with rules your merchandisers can change directly without an engineering release.",
      features: [
        "Typo-tolerant, synonym and attribute-weighted search ranking",
        "Visual, voice and natural language product queries",
        "Business rules editor for promoted, pinned and hidden SKUs",
        "Search analytics with zero-result and query-gap reporting",
      ],
    },
    {
      icon: "Boxes",
      title: "Order Management And Fulfilment Orchestration",
      description:
        "A unified OMS that consolidates orders from web, app, marketplace and contact centre, then routes them for picking, packing and despatch with real-time status returned to the customer.",
      features: [
        "Multi-source order intake with cross-channel deduplication",
        "Split shipment, hold and backorder handling rules",
        "Integration with WMS, ERP and carrier tracking APIs",
        "Returns and exchange workflows with automated restocking",
      ],
    },
    {
      icon: "Database",
      title: "Inventory And Availability Synchronization Service",
      description:
        "A near real-time inventory service that reconciles stock across ERP, warehouse, stores and marketplaces, so a customer only ever sees availability that can actually be fulfilled.",
      features: [
        "Event-driven stock propagation across every sales channel",
        "Per-channel safety stock and oversell protection rules",
        "Store-level pickup and ship-from-store availability",
        "Cart reservations with timed expiry and automatic release",
      ],
    },
    {
      icon: "Bot",
      title: "Commerce Copilot And Catalogue Intelligence",
      description:
        "Applied artificial intelligence where retail teams actually lose hours: enriching product data, generating and translating content, forecasting demand and answering service questions in context.",
      features: [
        "Product description and attribute enrichment at catalogue scale",
        "Demand forecasting by SKU, location, channel and season",
        "Conversational support grounded in your own help content",
        "Human approval workflows for all AI-generated content",
      ],
    },
    {
      icon: "BarChart3",
      title: "Retail Analytics And Margin Intelligence",
      description:
        "A governed analytics layer that unifies point of sale, e-commerce, marketing and returns data, so trading decisions are made against one version of the numbers.",
      features: [
        "Product, basket and channel profitability analysis",
        "Promotion and discount performance with attribution",
        "Cohort, recency-frequency-monetization and lifetime value segmentation",
        "Automated merchandising and finance reporting pipelines",
      ],
    },
  ],

  services: [
    "software-engineering",
    "digital-experience",
    "cloud-devops",
    "ai-automation",
    "data-analytics",
  ],

  useCases: [
    {
      icon: "LayoutDashboard",
      title: "Headless Storefront Migration",
      description:
        "Move off a monolithic commerce platform onto a composable architecture without disrupting trading, migrating catalogue, content and customer accounts in verifiable stages.",
    },
    {
      icon: "Globe",
      title: "Marketplace And Social Commerce Expansion",
      description:
        "List, price, fulfil and reconcile inventory across Amazon, eBay, TikTok Shop and Instagram with one source of truth for stock, content and margin.",
    },
    {
      icon: "Map",
      title: "Click And Collect And Ship From Store",
      description:
        "Live store-level availability, reservation and collection slot management that turns the estate into fulfilment capacity and cuts abandoned baskets.",
    },
    {
      icon: "Users",
      title: "Personalization And Loyalty",
      description:
        "Unified customer profiles across channels, with recommendation, segmentation and loyalty redemption that behave consistently on web, in app and in store.",
    },
    {
      icon: "TrendingUp",
      title: "Dynamic Pricing And Promotion Automation",
      description:
        "Rule-based and demand-aware pricing that respects margin floors, brand guardrails and clearance objectives across markets, currencies and time zones.",
    },
    {
      icon: "Boxes",
      title: "Warehouse And Logistics Visibility",
      description:
        "Order tracking, carrier performance and despatch analytics that give operations teams early warning when fulfilment starts to slip.",
    },
  ],

  compliance: [
    "PCI DSS 4.0 for payment data and cardholder environments",
    "GDPR and ePrivacy rules on customer data and marketing consent",
    "CCPA / CPRA consumer privacy and rights requirements",
    "WCAG 2.2 AA accessibility for storefronts, checkout and account areas",
    "Google Merchant Center product data and schema.org structured data",
    "Automated tax, VAT and GST calculation, reporting and record keeping",
  ],

  technologyCategories: [
    {
      category: "Core Platforms",
      items: [
        "Next.js and React",
        "Node.js",
        "TypeScript",
        "Python",
        "Java / Spring Boot",
        "GraphQL",
      ],
    },
    {
      category: "Commerce And Data",
      items: [
        "PostgreSQL",
        "Redis",
        "Elasticsearch / OpenSearch",
        "Apache Kafka",
        "Stripe and Adyen payment APIs",
        "Algolia and commercetools APIs",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "AWS and Azure",
        "Docker and Kubernetes",
        "Terraform IaC",
        "Edge CDN and Cloudflare Workers",
        "Managed CI/CD pipelines",
        "Autoscaling and load-shedding patterns",
      ],
    },
    {
      category: "Security And Compliance",
      items: [
        "PCI DSS-aligned controls",
        "AES-256 and TLS 1.3 encryption",
        "Tokenized payment storage",
        "OAuth 2.0 and OIDC",
        "Bot and fraud detection",
        "Immutable audit logging",
      ],
    },
    {
      category: "Integration",
      items: [
        "SAP S/4HANA and Oracle NetSuite connectors",
        "Shopify and commercetools APIs",
        "Stripe, Adyen and PayPal gateways",
        "Google Merchant and product feeds",
        "ShipStation and carrier tracking APIs",
        "Legacy EDI and SFTP adapters",
      ],
    },
  ],

  outcomes: [
    {
      icon: "TrendingUp",
      title: "Higher Conversion And Basket Value",
      description:
        "Faster pages, more relevant search results and fewer checkout failures translate directly into completed orders and larger baskets.",
    },
    {
      icon: "Activity",
      title: "Peak Season Stability",
      description:
        "Load-tested architecture, autoscaling and rehearsed failover plans mean the highest-traffic days of the year are the days you are least worried about.",
    },
    {
      icon: "ShieldCheck",
      title: "Protected Payment Data",
      description:
        "Tokenization, strong customer authentication and monitored fraud signals reduce breach exposure, chargebacks and the scope of your annual assessment.",
    },
    {
      icon: "Boxes",
      title: "Accurate Availability, Fewer Oversells",
      description:
        "One inventory truth across warehouse, stores and channels, with reservation holds that protect stock without stranding it in unsold carts.",
    },
    {
      icon: "DollarSign",
      title: "Recovered Margin",
      description:
        "Better promotion attribution, return management and channel profitability reporting surface the leakage that discount decisions usually create.",
    },
    {
      icon: "Rocket",
      title: "Faster Time To Market For New Assortment",
      description:
        "Merchandising and engineering work from the same platform, so new collections, bundles and markets launch without a full platform project.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Discovery And Advisory",
      description:
        "An assessment engagement that audits your commerce stack, quantifies performance and margin opportunity, and produces a sequenced roadmap before any build begins.",
    },
    {
      icon: "Code2",
      title: "Dedicated Product Team",
      description:
        "A cross-functional squad of engineers, designers and commerce domain specialists delivering an end-to-end platform on a predictable two-week cadence.",
    },
    {
      icon: "Puzzle",
      title: "Modular Build",
      description:
        "Incremental delivery of individual modules — starting with the storefront, availability service or analytics layer — so value arrives in stages rather than all at once.",
    },
  ],

  faqs: [
    {
      question: "Will this handle our peak trading volume?",
      answer:
        "Yes, and we prove it before launch rather than during your sale. We model your historical traffic curves, then load-test to a multiple of forecast peak with realistic carts, search traffic and payment authorization in the path. You receive the test report and the monitoring configuration, so your operations team knows precisely where the limits sit before customers find them for you.",
    },
    {
      question: "Do we have to replace our existing ERP and PIM?",
      answer:
        "Usually not. The majority of our engagements integrate rather than rip out. We build a thin orchestration layer over the systems you already run and connect the storefront, order management and analytics layers to it through APIs and event streams. Where a specific component genuinely cannot meet your roadmap, we tell you early and support a staged migration rather than presenting it as the only option.",
    },
    {
      question: "How do you handle PCI DSS compliance at checkout?",
      answer:
        "We scope cardholder data out of our systems wherever the gateway allows it. Payments are tokenized through your existing provider, sensitive fields are never persisted, and the residual scope stays small enough to make your annual assessment quicker and cheaper. Strong customer authentication and 3DS challenge flows are built in, and we document the technical controls your assessor will ask to see.",
    },
    {
      question: "What does a replatform actually cost and how long does it take?",
      answer:
        "Cost depends on integration count, catalogue size, traffic profile and the number of markets involved, so we will not quote a number before we understand those variables. What we commit to is a phased plan where the first measurable release ships inside the first 90 days, plus a full cost and timeline model before you commit to a build. Discovery is delivered as a document you own, not an invoice that doubles as an implementation quote.",
    },
    {
      question: "Can your engineers work alongside our in-house developers?",
      answer:
        "Yes, and we prefer it. Several clients run blended teams with our engineers embedded in their sprint process, repositories and release tooling. We document decisions as we go, keep the codebase conventional and hand over modules incrementally, so your developers own the code at every stage rather than receiving an unfamiliar system at the end of the project.",
    },
    {
      question: "What happens to our data and integrations if the engagement ends?",
      answer:
        "Your data is yours throughout. We build on open standards, provide full export in usable formats, and document every interface we introduce so nothing is held hostage by a proprietary connector. Source code, infrastructure definitions and operational runbooks are handed over continuously rather than as a final transfer, and we support migration to your team or another provider.",
    },
  ],

  relatedIndustries: ["manufacturing", "enterprise-organizations", "professional-services"],
};