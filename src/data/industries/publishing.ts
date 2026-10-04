import type { Industry } from "./types";

export const publishing: Industry = {
  title: "Publishing",
  slug: "publishing",
  tagline: "Publishing platforms built for speed, scale and revenue",
  description:
    "Developing content management systems, digital publishing platforms and subscription solutions for modern media organizations.",
  metaDescription:
    "BLACK VAVE CORPORATION builds modern publishing platforms — headless newsroom CMS, metered paywalls, archive search and audience analytics for media groups.",
  icon: "BookOpen",
  theme: {
    accent: "#A97BF0",
    accentLight: "#C29EFF",
    accentDark: "#8760D4",
    tint: "rgba(169, 123, 240, 0.08)",
  },

  hero: {
    headline: "Publishing Platforms Built For A Digital-Only Audience",
    subheadline:
      "We build newsroom CMS, paywall and distribution platforms that let editorial teams publish at the speed of the news cycle and turn readership into durable subscription revenue.",
  },

  stats: [
    { value: "WCAG 2.2", label: "AA Accessible By Default" },
    { value: "< 60 days", label: "To First Production Launch" },
    { value: "99.95%", label: "Platform Availability Target" },
    { value: "24/7", label: "Monitoring & Launch Support" },
  ],

  challenges: [
    {
      icon: "Layers",
      title: "Legacy CMS Accumulated Debt",
      description:
        "Most publishers run platforms assembled from custom plugins, forked themes and undocumented integrations. Every change carries regression risk, and the cost of routine editorial work climbs with each release that nobody fully understands.",
    },
    {
      icon: "DollarSign",
      title: "Subscription Revenue Under Pressure",
      description:
        "As digital advertising declines, publishers are expected to convert readers directly. Paywalls built on print-era assumptions offer the same access to a loyal subscriber and a casual visitor, so willing-to-pay readers cancel rather than pay.",
    },
    {
      icon: "Zap",
      title: "Publishing Speed During Breaking News",
      description:
        "When news breaks, the platform must support verification, live updates and an unexpected traffic surge at the same time. Slow authoring tools and rigid templates mean publishers lose the story to faster competitors while their own editors wait on the system.",
    },
    {
      icon: "Globe",
      title: "Multi-Channel Distribution Complexity",
      description:
        "A single story must be shaped for web, mobile apps, newsletters, syndication partners, social platforms and print, each with its own format, metadata, rights position and audience expectation. Most content systems duplicate that work manually.",
    },
    {
      icon: "ShieldAlert",
      title: "Rights, Licensing And Content Integrity",
      description:
        "Syndication contracts, image licensing, contributor agreements and text and data mining permissions are tracked in spreadsheets and inboxes. The result is contractual breach, blocked inventory and revenue that is earned but never collected.",
    },
  ],

  approach: [
    {
      title: "Editorial And Commercial Discovery",
      description:
        "We sit with editors, audience teams and commercial leads to establish what is published, who pays for it and where revenue leaks. Workflow, entitlements and monetisation rules are documented before any architecture decision is made.",
    },
    {
      title: "Structured Content Architecture",
      description:
        "We model articles as structured data with taxonomy, rights and distribution metadata attached, so the same story renders correctly for every channel without manual rework or duplicate entry.",
    },
    {
      title: "Composable Platform Build",
      description:
        "CMS, paywall, search, analytics and distribution are separated and integrated through deliberate interfaces. Each component stays replaceable, so a future vendor change never requires rebuilding the whole platform.",
    },
    {
      title: "Performance And Accessibility Engineering",
      description:
        "Core web vitals, image and video pipelines, ad slot behaviour and full WCAG conformance are engineered and tested under real traffic. Fast, accessible pages are also the pages that convert and that search and news platforms reward.",
    },
    {
      title: "Launch And Monetisation Iteration",
      description:
        "We launch to a measured cohort, then iterate on registration, offer, paywall and churn behaviour using analytics you own. Every change is reversible, so experimentation never puts the live site at risk.",
    },
  ],

  products: [
    {
      icon: "FileText",
      title: "Headless Newsroom CMS",
      description:
        "A structured editorial CMS that decouples content from presentation, giving journalists and editors a fast authoring environment and every downstream channel a clean, governed content API.",
      features: [
        "Structured article and media modelling with reusable blocks",
        "Live blogs and breaking news updates with instant publish",
        "Editorial workflow with roles, scheduling and embargoes",
        "Full revision history with diffing and one-click rollback",
      ],
    },
    {
      icon: "Monitor",
      title: "Reader-Facing Article And Section Experience",
      description:
        "A high-performance reading experience designed around page speed and accessibility, with layouts and modules that a newsroom can configure without engineering time.",
      features: [
        "Core Web Vitals budgets enforced in the build pipeline",
        "Configurable section pages, article templates and story modules",
        "WCAG 2.2 AA conformance across all reading surfaces",
        "AMP-compatible and lightweight fallback delivery paths",
      ],
    },
    {
      icon: "Key",
      title: "Metered Paywall And Subscription Engine",
      description:
        "A flexible access and entitlement layer supporting metered access, hard paywalls, tiered memberships and ad-supported free reading, with rules the commercial team can change without a deployment.",
      features: [
        "Metered, dynamic and hard paywall strategies by section",
        "Tiered plans with trials, discounts and gift subscriptions",
        "Identity integration with existing accounts and single sign-on",
        "Entitlement rules by device, product, geography and partner",
      ],
    },
    {
      icon: "Search",
      title: "Audience And Archive Search Platform",
      description:
        "Fast, accurate search across the full archive, with structured filtering by topic, date, author and series, so readers can reach deep content and teams stop rebuilding material that already exists.",
      features: [
        "Typo-tolerant ranking with editorial relevance boosting",
        "Faceted browsing by section, topic, date, author and series",
        "Zero-result reporting with trending and coverage-gap analysis",
        "Multilingual stemming with per-locale index weighting",
      ],
    },
    {
      icon: "ScanText",
      title: "Rights, Syndication And Licensing Manager",
      description:
        "A rights management system that records precisely what may be published where, for how long and by which partner, with automated expiry enforcement and royalty tracking.",
      features: [
        "Per-story territory, channel and duration entitlements",
        "Contract expiry alerts with automated takedown enforcement",
        "Partner syndication feeds with usage reporting",
        "Royalty calculation and reconciliation workflows",
      ],
    },
    {
      icon: "LineChart",
      title: "Audience Analytics And Revenue Intelligence",
      description:
        "A single analytics layer joining circulation, page performance, subscription and advertising data, so editorial and commercial decisions rest on the same reconciled numbers.",
      features: [
        "Story-level engagement and paywall conversion reporting",
        "Subscriber cohort, churn and lifetime value analysis",
        "Newsletter, app and web reporting in one view",
        "Advertising yield and page weight correlation dashboards",
      ],
    },
  ],

  services: [
    "software-engineering",
    "digital-transformation",
    "digital-experience",
    "cloud-devops",
    "data-analytics",
  ],

  useCases: [
    {
      icon: "RefreshCw",
      title: "Legacy CMS Migration",
      description:
        "Move off a two-decade-old platform without stopping the news cycle, migrating content, redirects and structured data in verifiable stages while the existing system keeps serving traffic.",
    },
    {
      icon: "FileStack",
      title: "Multi-Format Story Distribution",
      description:
        "Produce one canonical story and automatically derive web, app, newsletter, social, syndication and archive variants, each with correct metadata, attribution and rights.",
    },
    {
      icon: "Workflow",
      title: "Newsroom Workflow And Editorial Velocity",
      description:
        "Standardise commissioning, assignment, drafting, subbing and approval so editors see a live view of every story in flight and time to publish becomes predictable.",
    },
    {
      icon: "Users",
      title: "Audience Growth And Registration Conversion",
      description:
        "Reduce registration friction with progressive profiling, consent-aware identity, newsletters and lifecycle messaging that converts casual readers without alienating loyal ones.",
    },
    {
      icon: "Bot",
      title: "AI-Assisted Production And Translation",
      description:
        "Assist translation, tagging, headline variants, audio transcription and archive search with traceable provenance and human review before anything reaches publication.",
    },
    {
      icon: "Globe",
      title: "Multi-Locale And Multi-Currency Publishing",
      description:
        "Run editions across languages, markets and currencies with per-edition navigation, pricing, rights and content workflow, without forking the codebase each time.",
    },
  ],

  compliance: [
    "WCAG 2.2 AA and ADA digital accessibility requirements",
    "GDPR and ePrivacy rules on reader data and tracking consent",
    "CCPA / CPRA consumer privacy and rights obligations",
    "schema.org NewsArticle and Publisher structured data",
    "RSS 2.0, Atom and JSON Feed syndication standards",
    "Google AMP delivery and cache policies",
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
        "Go",
      ],
    },
    {
      category: "Content And Data",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Elasticsearch / OpenSearch",
        "Apache Kafka",
        "Cloudinary media pipelines",
        "Cloudflare Stream video delivery",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "AWS and Azure",
        "Docker and Kubernetes",
        "Terraform IaC",
        "Edge CDN and caching layers",
        "Automated CI/CD pipelines",
        "Traffic spike autoscaling",
      ],
    },
    {
      category: "Security And Compliance",
      items: [
        "GDPR-aligned consent architecture",
        "AES-256 and TLS 1.3 encryption",
        "OAuth 2.0 and OIDC",
        "Rights enforcement and geo-blocking",
        "Immutable audit logging",
        "SOC 2 monitoring",
      ],
    },
    {
      category: "Publishing Integration",
      items: [
        "WordPress and Ghost migration APIs",
        "Google Ad Manager and publisher tags",
        "Apple News and Google News feeds",
        "Chartbeat and Parse.ly analytics",
        "Muck Rack and Contently integrations",
        "RSS and XML sitemap generation",
      ],
    },
  ],

  outcomes: [
    {
      icon: "Zap",
      title: "Faster Editorial Output",
      description:
        "Fewer clicks from idea to published story, with automation handling the repetitive work that used to consume desk time.",
    },
    {
      icon: "TrendingUp",
      title: "Higher Subscription Conversion",
      description:
        "Access rules matched to reader intent, so casual readers are invited to register and committed readers are given reasons to stay.",
    },
    {
      icon: "Gauge",
      title: "Faster Pages, Stronger Distribution",
      description:
        "Performance budgets enforced at build time improve page experience, Core Web Vitals and eligibility for news and search placement.",
    },
    {
      icon: "Accessibility",
      title: "Accessible To Every Reader",
      description:
        "Conformance verified in build and testing, reducing legal exposure while widening the audience you can actually serve.",
    },
    {
      icon: "ShieldCheck",
      title: "Rights And Revenue Protection",
      description:
        "Entitlements enforced automatically rather than by memory, so licensed content stays compliant and royalties get collected.",
    },
    {
      icon: "RefreshCw",
      title: "Legacy Platform Debt Retired",
      description:
        "A maintainable stack your own engineers can extend, ending the pattern of custom plugins nobody wants to touch.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Discovery And Advisory",
      description:
        "An assessment engagement that audits your CMS, content model, performance and monetisation stack, and produces a prioritized modernization roadmap.",
    },
    {
      icon: "Code2",
      title: "Dedicated Product Team",
      description:
        "A cross-functional squad of engineers, designers and publishing domain specialists delivering an end-to-end platform on a predictable two-week cadence.",
    },
    {
      icon: "Puzzle",
      title: "Modular Build",
      description:
        "Incremental delivery of individual modules — starting with the newsroom CMS, article experience or paywall — so new capability reaches readers in stages.",
    },
  ],

  faqs: [
    {
      question: "Our CMS is twenty years old. Is a full migration realistic?",
      answer:
        "Usually yes, and the risk is lower than continuing to patch it. We migrate content, structure and redirects in stages, with the legacy platform running in parallel until the replacement proves itself in production. Most engagements deliver a live section, title or brand first and then widen, so your newsroom keeps publishing throughout and rollback remains available until you choose to retire the old system.",
    },
    {
      question: "How do you protect editorial independence in the platform design?",
      answer:
        "Content structure, entitlement rules and layout configuration are separated from presentation code, so the newsroom controls what appears and where without an engineering dependency. The workflow supports the roles, embargoes and approval gates your editorial constitution actually requires. We build the platform your editorial standards describe rather than imposing a generic newsroom model on your organization.",
    },
    {
      question: "Will the new platform hurt page speed and search rankings?",
      answer:
        "No, and we treat performance as a launch requirement rather than an optimization phase. Core Web Vitals budgets are enforced in the build pipeline, image and video delivery are handled properly, and ad slots load without blocking render. Every migration ships with a redirect map, validated structured data and a staged rollout, so rankings are protected through the transition rather than reset by it.",
    },
    {
      question: "Can we keep our existing identity and billing systems?",
      answer:
        "Yes. We build against standard interfaces, and in most engagements we integrate with the identity provider, payment processor and CRM you already run. We also deliver the full subscription and metered access engine when you want to replace aging paywall infrastructure. Either path is supported, and we help you choose the boundary that is cleanest for your operation and your team.",
    },
    {
      question: "How do you handle AI without creating legal or reputational risk?",
      answer:
        "AI is used for bounded, reviewable tasks such as translation, tagging, headline variants, transcription and archive search, with provenance and licensing rules enforced inside the workflow. Every output is traceable to its sources and passes through an editor before publication. We also document precisely how your content may be used for training and inference, since that is a contractual question your legal team should settle explicitly.",
    },
    {
      question: "What does a platform rebuild cost and how do you price it?",
      answer:
        "We do not quote a fixed price for a rebuild before we have seen your content volume, integrations, traffic profile and editorial requirements. Instead we produce a scoped plan with a cost model, a delivery sequence and explicit decision points, and you commit to the first phase only. If the numbers do not work for your business, you keep the assessment and owe nothing further for it.",
    },
  ],

  relatedIndustries: ["professional-services", "education", "enterprise-organizations"],
};