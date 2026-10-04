import type { Industry } from "./types";

export const realEstate: Industry = {
  title: "Real Estate",
  slug: "real-estate",
  tagline: "Property platforms, listings and transaction workflows",
  description:
    "Creating property management platforms, listing systems and digital solutions that modernize real estate operations.",
  metaDescription:
    "BLACK VAVE CORPORATION builds real estate technology — property management platforms, MLS and RESO integrations, listing portals and transaction automation.",
  icon: "Building",
  theme: {
    accent: "#CB9159",
    accentLight: "#E3AC7C",
    accentDark: "#A97341",
    tint: "rgba(203, 145, 89, 0.08)",
  },

  hero: {
    headline: "Real Estate Technology That Closes Deals Faster",
    subheadline:
      "We connect listings, property data, transaction workflows and tenant experience into one platform, so agents spend less time on administration and more time on clients.",
  },

  stats: [
    { value: "RESO", label: "Web API Standards Compliance" },
    { value: "MLS", label: "Listing Feed Integration" },
    { value: "Real-Time", label: "Availability & Pricing Updates" },
    { value: "Mobile-First", label: "Search And Listing Experience" },
  ],

  challenges: [
    {
      icon: "Database",
      title: "Fragmented Listing Data",
      description:
        "Property data lives in disconnected MLS systems, agency databases and spreadsheets, so the same listing appears in several places with inconsistent details and pricing.",
    },
    {
      icon: "RefreshCw",
      title: "Manual Transaction Workflow",
      description:
        "Offer handling, document collection, deposit tracking and status updates are handled across email and spreadsheets, creating delays and frequent errors late in a deal.",
    },
    {
      icon: "Users",
      title: "Fragmented Client Experience",
      description:
        "Prospects move between listing portals, agent email, phone calls and scheduling tools, giving them an inconsistent picture and making enquiries easy to lose.",
    },
    {
      icon: "FileStack",
      title: "Document And Contract Handling",
      description:
        "Agreements, disclosures, appraisals and inspection reports are exchanged as email attachments, leaving no single auditable record and exposing sensitive data.",
    },
    {
      icon: "TrendingUp",
      title: "Market And Portfolio Intelligence",
      description:
        "Owners and investors need pricing insight, portfolio performance and comparable sales data to make decisions, but most systems show current listings rather than real trends.",
    },
  ],

  approach: [
    {
      title: "Market And Data Audit",
      description:
        "We map how property, client and transaction data enters and moves through your business today, identifying the sources of duplication and manual rework.",
    },
    {
      title: "Standards-Based Integration",
      description:
        "We connect through RESO Web API and MLS feeds rather than screen-scraping, so your platform receives structured, current property data through documented interfaces.",
    },
    {
      title: "Workflow And Data Modelling",
      description:
        "We model listings, parties, offers and documents as connected entities, so status changes, commission tracking and reporting derive from one authoritative record.",
    },
    {
      title: "Client And Tenant Experience",
      description:
        "Search, scheduling, document signing and payments are designed around how buyers, tenants and owners actually behave, with mobile performance treated as the baseline.",
    },
    {
      title: "Iterative Rollout By Team",
      description:
        "We launch with the workflows causing the most admin pain, measure adoption and time saved, then extend the platform across the rest of the business.",
    },
  ],

  products: [
    {
      icon: "Search",
      title: "Property Listing And Search Platform",
      description:
        "A consumer-facing property portal with map search, advanced filtering, saved searches and rich media galleries, fed automatically from your listing sources.",
      features: [
        "Map, draw and polygon-based area search",
        "Saved searches with instant new-listing alerts",
        "Virtual tour, floor plan and gallery support",
        "Comparable listings and price history display",
      ],
    },
    {
      icon: "LayoutDashboard",
      title: "Real Estate CRM And Pipeline",
      description:
        "An agency CRM managing listings, buyers, landlords and vendors with automated follow-up, task assignment and commission forecasting.",
      features: [
        "Listing and contact pipeline management",
        "Automated drip campaigns and task triggers",
        "Commission and referral fee forecasting",
        "Shared team calendars and availability matching",
      ],
    },
    {
      icon: "Repeat",
      title: "Transaction And Closing Workflow",
      description:
        "A guided deal pipeline covering offer to close, with e-signature, document collection, deposit tracking and milestone status visible to every party.",
      features: [
        "Structured offer and counter-offer workflows",
        "E-signature and digital document vault",
        "Deposit and settlement milestone tracking",
        "Automated party notifications at each stage",
      ],
    },
    {
      icon: "Building",
      title: "Property Management Platform",
      description:
        "Landlord and portfolio management covering tenancies, rent schedules, maintenance requests, inspections and compliance documentation.",
      features: [
        "Tenancy agreements and rent scheduling",
        "Maintenance request and vendor dispatch",
        "Inspection scheduling with photo reports",
        "Portfolio performance and arrears tracking",
      ],
    },
    {
      icon: "LineChart",
      title: "Market Intelligence And Analytics",
      description:
        "Analytics that turn listing, sales and demographic data into pricing guidance, absorption rates and portfolio insight for owners and investors.",
      features: [
        "Automated comparative market pricing guidance",
        "Absorption rate and days-on-market trends",
        "Portfolio yield and expense analysis",
        "Area-level demand and supply reporting",
      ],
    },
    {
      icon: "Globe",
      title: "MLS And Reso Integration Layer",
      description:
        "A managed integration service that synchronizes listing data across MLS and RESO-compliant systems, eliminating duplicate entry and stale records.",
      features: [
        "RESO Web API and RETS feed connectivity",
        "Two-way listing synchronization",
        "Automated status and price change propagation",
        "Feed health monitoring with alerting",
      ],
    },
  ],

  services: [
    "software-engineering",
    "digital-experience",
    "data-analytics",
    "cloud-devops",
    "ai-automation",
  ],

  useCases: [
    {
      icon: "Search",
      title: "Portal And Website Listings",
      description:
        "Publish and syndicate property inventory across your website and portals from a single source, without duplicate entry or mismatched pricing.",
    },
    {
      icon: "Calendar",
      title: "Viewing And Scheduling Automation",
      description:
        "Let buyers and tenants book viewings directly against live agent availability, with confirmations and reminders sent automatically.",
    },
    {
      icon: "FileStack",
      title: "Digital Document And E-Signature",
      description:
        "Collect agreements, disclosures and inspection reports in one secure location, with signing, audit trails and expiry tracking.",
    },
    {
      icon: "DollarSign",
      title: "Rent Collection And Payments",
      description:
        "Automated rent invoicing, payment collection and receipts, with arrears escalation and reconciliation to owned properties.",
    },
    {
      icon: "Wrench",
      title: "Maintenance And Vendor Management",
      description:
        "Route maintenance requests to the right contractor, track job status and maintain vendor performance history across the portfolio.",
    },
    {
      icon: "Users",
      title: "Owner And Investor Reporting",
      description:
        "Scheduled performance and statement reporting for property owners, with income, costs and capital expenditure in one view.",
    },
  ],

  compliance: [
    "RESO Web API and RESO Data Dictionary",
    "RETA / NAR MLS feed standards",
    "Fair Housing Act and anti-discrimination compliance",
    "GDPR for tenant and applicant data",
    "WCAG 2.2 AA accessibility for public listings",
    "Regional real estate regulatory requirements (RERA and equivalents)",
    "PCI DSS for payment processing",
  ],

  technologyCategories: [
    {
      category: "Property Data Standards",
      items: [
        "RESO Web API",
        "RETS and RETS-P",
        "MLS Feed Integration",
        "Property Data Standards (PDS)",
        "Geospatial Search APIs",
        "Fuzzy Address Matching",
      ],
    },
    {
      category: "Core Platforms",
      items: [
        "Next.js and React",
        "Node.js",
        "Python",
        ".NET",
        "PostgreSQL and PostGIS",
        "Redis Caching",
      ],
    },
    {
      category: "Data And Analytics",
      items: [
        "Snowflake and BigQuery",
        "Apache Kafka",
        "dbt and Airflow",
        "Forecasting Models",
        "Pricing Models",
        "Geospatial Analytics",
      ],
    },
    {
      category: "Payments And Documents",
      items: [
        "Stripe and Razorpay",
        "DocuSign and Adobe Sign",
        "Secure Document Vault",
        "Digital Audit Trails",
        "Automated PDF Generation",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "AWS and Azure",
        "Docker and Kubernetes",
        "CDN and Edge Caching",
        "Image and Media Optimization",
        "Automated Backups",
      ],
    },
  ],

  outcomes: [
    {
      icon: "Search",
      title: "Faster Time To Market",
      description:
        "Listings go live and update across every channel within minutes of a change instead of waiting on manual re-entry.",
    },
    {
      icon: "Workflow",
      title: "Smoother Transactions",
      description:
        "A structured deal pipeline with clear milestones keeps agents, buyers, sellers and vendors aligned from offer to completion.",
    },
    {
      icon: "Users",
      title: "Improved Client Experience",
      description:
        "Self-service search, viewing booking and document exchange that work well on mobile, where most property search begins.",
    },
    {
      icon: "ShieldCheck",
      title: "Reduced Compliance Risk",
      description:
        "Complete, timestamped records of disclosures, agreements and data handling support regulatory and internal audit requirements.",
    },
    {
      icon: "LineChart",
      title: "Better Investment Decisions",
      description:
        "Market and portfolio analytics give owners and investors evidence for pricing, acquisitions and portfolio strategy.",
    },
    {
      icon: "Gauge",
      title: "Lower Administrative Load",
      description:
        "Automated scheduling, communications and reporting return agent and operations hours to client-facing work.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Discovery And Audit",
      description:
        "A focused study of your current systems, data flows and client journey, producing a prioritized roadmap before any build begins.",
    },
    {
      icon: "Code2",
      title: "Dedicated Product Team",
      description:
        "A cross-functional squad building your property platform, integrating with your existing MLS, CRM and payment systems as required.",
    },
    {
      icon: "Puzzle",
      title: "Modular Build",
      description:
        "Deliver in stages — listings and search first, then transactions or property management — so each release delivers measurable value.",
    },
  ],

  faqs: [
    {
      question: "Will this integrate with our MLS and existing listing systems?",
      answer:
        "Yes. We integrate through the RESO Web API, RETS and standard MLS feeds rather than scraping, so listing data arrives structured and current. We also connect existing agency CRM systems so your team keeps the tools and history it already relies on. Where a specific MLS has limited API coverage, we build a targeted adapter rather than asking you to replace what works.",
    },
    {
      question: "Can each of our branch offices keep its own branding and content?",
      answer:
        "Yes. We build multi-tenant architecture from the start, so each office can have its own domain, branding, listings and team permissions while sharing one platform and one integration layer. This is considerably cheaper to operate than maintaining separate sites per office, and it keeps reporting consolidated.",
    },
    {
      question: "How do you handle sensitive tenant and buyer data?",
      answer:
        "We apply encryption in transit and at rest, role-based access controls and immutable audit logging for document and payment activity. Data processing is scoped to what the service genuinely requires, retention periods are configurable, and we design for GDPR and regional requirements from the outset rather than adding compliance later.",
    },
    {
      question: "What about mobile, since most property searches start on a phone?",
      answer:
        "Mobile is our baseline rather than an afterthought. Listings, map search, viewing booking and document exchange are designed mobile-first and tested on real devices and real network conditions. We also optimise images, video and virtual tours heavily, because large media is usually what makes property sites slow on mobile data.",
    },
    {
      question: "Can you take over an existing website rather than build new?",
      answer:
        "Often that is the better path. We regularly build listing portals and transaction tooling that run alongside an existing brand website, or add headless listing capability to a site you already own. This reduces cost and risk while still delivering the functionality your team needs.",
    },
    {
      question: "How long until we see results?",
      answer:
        "Listing and search improvements can be live within the first quarter because the integration work is well understood. Transaction automation and analytics take longer to realize value, since they benefit from accumulated data. We set these expectations clearly during scoping so the roadmap is matched to genuine business timelines.",
    },
  ],

  relatedIndustries: [
    "financial-services",
    "professional-services",
    "retail-ecommerce",
  ],
};