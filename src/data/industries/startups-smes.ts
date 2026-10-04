import type { Industry } from "./types";

export const startupsSmes: Industry = {
  title: "Startups & SMEs",
  slug: "startups-smes",
  tagline: "Ship the product fast, keep the architecture cheap to change",
  description:
    "Building scalable technology foundations for startups and small-to-medium enterprises that support growth from day one.",
  metaDescription:
    "BLACK VAVE CORPORATION helps startups and SMEs ship MVPs in weeks, build cloud-native foundations and scale to real load without an expensive rewrite.",
  icon: "Rocket",
  theme: {
    accent: "#B4D93B",
    accentLight: "#CDE96C",
    accentDark: "#95B428",
    tint: "rgba(180, 217, 59, 0.08)",
  },

  hero: {
    headline: "Get To Market In Weeks, Not Quarters",
    subheadline:
      "We build the smallest version of your product that can prove the business, on foundations engineered to absorb ten times the load without being rewritten.",
  },

  stats: [
    { value: "2-6 weeks", label: "From Scoping To MVP Release" },
    { value: "99.95%", label: "Production Uptime Design Target" },
    { value: "24/48h", label: "Defect Response Commitment" },
    { value: "100%", label: "Code And Infrastructure Ownership Transfer" },
  ],

  challenges: [
    {
      icon: "Clock",
      title: "Runway Pressure On Every Decision",
      description:
        "Early-stage companies compete on speed. When engineering cycles take a quarter, a product hypothesis goes untested, a launch window closes and the money behind it is spent without evidence.",
    },
    {
      icon: "DollarSign",
      title: "Limited Budget, Constant Reprioritization",
      description:
        "Small teams cannot absorb enterprise-scale fixed overhead. Engineering spend has to be adjustable, and every month of infrastructure cost is a month of runway that never reaches product work.",
    },
    {
      icon: "Layers",
      title: "Technical Debt From The First Sprint",
      description:
        "The shortcuts that get an MVP out the door, such as hard-coded configuration, one oversized service and no test coverage, become the ceiling at the first real growth spike, when rewriting is least affordable.",
    },
    {
      icon: "Repeat",
      title: "Operations That Scale Linearly With Customers",
      description:
        "Order handling, onboarding, invoicing and support are done by hand until headcount breaks the margin model. Manual work is the first thing that breaks when customer volume multiplies.",
    },
    {
      icon: "Target",
      title: "Building The Wrong Product Faster",
      description:
        "Without product instrumentation, teams cannot distinguish engagement from indifference. Features ship on founder conviction instead of evidence, and capital follows opinions rather than results.",
    },
  ],

  approach: [
    {
      title: "Outcome-Led Scoping",
      description:
        "We agree the single metric the release must move, then cut scope to the smallest build that moves it. Everything that does not serve that metric is deferred explicitly rather than quietly absorbed.",
    },
    {
      title: "Architecture Built For The Next Order Of Magnitude",
      description:
        "We design a modular monolith with enforced module boundaries, documented seams and stateless services, so scaling later is a deployment and configuration change rather than a rewrite project.",
    },
    {
      title: "Build, Ship, Measure",
      description:
        "Two-week increments go to production behind feature flags, each with analytics instrumentation and a tested rollback path. You hold a working release at every point in the engagement, not at the end of it.",
    },
    {
      title: "Cost And Infrastructure Discipline",
      description:
        "Infrastructure is code, environments are disposable, and cost per active user is tracked from week one. Autoscaling, right-sized environments and cached data paths keep the bill proportional to revenue.",
    },
    {
      title: "Harden, Then Hand Over",
      description:
        "Before we leave we run a security and reliability review, document the system to the level your team can operate it, and transfer ownership of every repository, environment and credential.",
    },
  ],

  products: [
    {
      icon: "Rocket",
      title: "MVP Build And Validation Release",
      description:
        "A scoped six-week engagement that takes a validated problem statement to a production release serving real users, with instrumentation and a feedback loop designed to prove or disprove the thesis.",
      features: [
        "Weekly production releases behind feature flags with tested rollback",
        "Event and analytics instrumentation wired in from the first sprint",
        "Backlog prioritized against one agreed target metric",
        "Handover pack with runbook, repository and architecture decision records",
      ],
    },
    {
      icon: "Layers",
      title: "Cloud-Native SaaS Application Foundation",
      description:
        "A production-ready application skeleton, covering containerised services, infrastructure as code, CI/CD, observability and a tenancy-ready data model, so your team starts from a solid base instead of assembling one.",
      features: [
        "Docker and Kubernetes deployment with zero-downtime rollouts",
        "Terraform infrastructure as code across staging and production",
        "Multi-tenant data model designed in from the first migration",
        "Structured logging, metrics, tracing and alerting wired to a dashboard",
      ],
    },
    {
      icon: "Store",
      title: "Subscription Billing And Account Management Hub",
      description:
        "Revenue-side plumbing that most MVPs get wrong: plans, trials, metered usage, invoices, payment recovery and self-serve account management, integrated with your product rather than bolted beside it.",
      features: [
        "Stripe subscriptions, metered usage and mid-cycle plan changes",
        "Automated trials, upgrades, dunning and failed-payment recovery",
        "Self-serve portal for customers to manage plans, seats and invoices",
        "Revenue, churn and expansion metrics exported to your analytics stack",
      ],
    },
    {
      icon: "Workflow",
      title: "Back-Office And Operations Automation Hub",
      description:
        "Event-driven automation for the manual work around your product: lead and order intake, customer onboarding, invoicing, scheduled reporting and exception queues with human override.",
      features: [
        "Workflow automation for onboarding, billing and renewals",
        "Document and invoice generation with approval and audit trail",
        "Scheduled report delivery to customers and internal stakeholders",
        "Retry, dead-letter and manual-override handling for failed jobs",
      ],
    },
    {
      icon: "Bot",
      title: "In-Product AI Assistant And Support Automation",
      description:
        "A retrieval-grounded assistant that answers from your own product documentation and ticket history, and can execute bounded actions such as lookups and refunds with a defined approval threshold.",
      features: [
        "Retrieval over product docs, changelogs and historical tickets",
        "Tool use for lookups, account changes and refund requests",
        "Confidence thresholds with human handoff carrying full context",
        "Token, latency and cost controls with per-model routing",
      ],
    },
    {
      icon: "LineChart",
      title: "Growth Analytics And Unit Economics Pipeline",
      description:
        "The measurement layer a seed or Series A story depends on: a governed event pipeline from product to warehouse, plus dashboards for activation, retention and the economics your investors will ask about.",
      features: [
        "Event pipeline from application to warehouse with schema governance",
        "Activation, retention cohort and churn analysis dashboards",
        "Unit economics tracking including CAC payback and gross margin",
        "Scheduled board and investor reporting packs in one click",
      ],
    },
  ],

  services: [
    "software-engineering",
    "cloud-devops",
    "ai-automation",
    "digital-experience",
    "data-analytics",
  ],

  useCases: [
    {
      icon: "Rocket",
      title: "First Release In Weeks, Not Quarters",
      description:
        "Move from validated idea to a production system serving real users inside a single quarter, with the scope, the stack and the timeline agreed in writing before build starts.",
    },
    {
      icon: "DollarSign",
      title: "Runway And Infrastructure Cost Control",
      description:
        "Track cost per active user from week one, right-size environments as you learn real usage patterns and remove idle infrastructure before it consumes a meaningful share of your funding.",
    },
    {
      icon: "Gauge",
      title: "Load And Scale Validation Before Growth Arrives",
      description:
        "Model expected traffic, run load and soak tests against production-like infrastructure, and fix the bottlenecks you find while they are still a configuration change rather than an incident.",
    },
    {
      icon: "Repeat",
      title: "Automating Manual Operations",
      description:
        "Replace hand-run onboarding, invoicing and reporting with monitored, auditable workflows so headcount scales with revenue instead of with ticket volume.",
    },
    {
      icon: "Store",
      title: "Self-Serve Onboarding, Expansion And Retention",
      description:
        "Let customers sign up, upgrade and manage their own account so acquisition, expansion and churn are instrumented events rather than email threads handled by a founder.",
    },
    {
      icon: "ShieldCheck",
      title: "Technical Diligence And Enterprise Sales Readiness",
      description:
        "Pass the security, architecture and operational review that enterprise buyers and investors run before signing, with documented controls, penetration-test summaries and an architecture that holds up to scrutiny.",
    },
  ],

  compliance: [
    "GDPR for customer, prospect and employee data",
    "PCI DSS for any environment touching cardholder data",
    "SOC 2 Type I and Type II readiness for enterprise sales",
    "CCPA and other US state data privacy statutes",
    "WCAG 2.2 AA accessibility conformance for public interfaces",
    "Open-source licence compliance with dependency and SBOM tracking",
  ],

  technologyCategories: [
    {
      category: "Core Platforms",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Go",
      ],
    },
    {
      category: "Data And AI",
      items: [
        "PostgreSQL",
        "Redis",
        "Snowflake",
        "dbt",
        "pgvector",
        "OpenAI API",
      ],
    },
    {
      category: "Cloud And Infrastructure",
      items: [
        "AWS",
        "Vercel",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
      ],
    },
    {
      category: "Payments And Integrations",
      items: [
        "Stripe Billing and Connect",
        "Twilio",
        "SendGrid",
        "REST and GraphQL APIs",
        "Webhooks",
        "Zapier",
      ],
    },
    {
      category: "Security And Compliance",
      items: [
        "SOC 2 aligned controls",
        "AES-256 and TLS 1.3 encryption",
        "OAuth 2.0 and OIDC",
        "SBOM and licence scanning",
        "Secrets management",
        "Least-privilege IAM",
      ],
    },
  ],

  outcomes: [
    {
      icon: "Clock",
      title: "Materially Faster Time To Market",
      description:
        "A production release serving real users inside weeks, with the ability to ship improvements every two weeks from that point forward.",
    },
    {
      icon: "TrendingUp",
      title: "Predictable, Controlled Spend",
      description:
        "Fixed-price or capped sprint scopes, transparent resourcing and infrastructure cost tied to actual usage instead of assumption.",
    },
    {
      icon: "Layers",
      title: "Architecture That Survives Scale",
      description:
        "Module boundaries, stateless services and a tenancy-ready data model that absorb ten times the traffic without a ground-up rewrite.",
    },
    {
      icon: "Gauge",
      title: "Production Reliability",
      description:
        "Observability, alerting, automated rollback and tested recovery paths that keep small teams off midnight pages during their busiest growth periods.",
    },
    {
      icon: "ShieldCheck",
      title: "Investor And Enterprise Readiness",
      description:
        "Documented controls, security posture and measurement that stand up to technical due diligence and enterprise vendor review.",
    },
    {
      icon: "Users",
      title: "Genuine Team Ownership",
      description:
        "Your engineers own the codebase, the infrastructure and the roadmap. We leave a system your team runs, not one they depend on us to run.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Technical Discovery And Scoping",
      description:
        "A fixed short engagement that pressure-tests the plan, prices the MVP honestly, recommends the stack and produces a sequenced delivery roadmap before you commit to build.",
    },
    {
      icon: "Rocket",
      title: "Fixed-Price MVP Sprint",
      description:
        "A defined scope, a fixed date and an agreed release: the smallest product that proves the business, delivered by a dedicated squad with weekly production increments.",
    },
    {
      icon: "Puzzle",
      title: "Embedded Engineering Partner",
      description:
        "An ongoing technical partnership acting as fractional CTO and delivery team, running architecture, roadmap, hiring support and code review alongside your internal engineers.",
    },
  ],

  faqs: [
    {
      question: "We are pre-seed. Is it worth bringing in an engineering partner now?",
      answer:
        "It is, if you want to avoid the two most expensive mistakes in the first eighteen months: building the wrong product and building it in a way that cannot be changed cheaply. Early engagement is typically a short scoping engagement that gets the architecture and measurement in place before the team grows, which costs a fraction of what the same decisions cost after a launch. The value is not outsourced capacity, it is fewer expensive reversals.",
    },
    {
      question: "How much does an MVP cost, and how do you keep the budget under control?",
      answer:
        "We scope to a fixed outcome and a fixed number of sprints rather than selling you a team on an open-ended hourly basis, so the budget is known before we start. If discovery shows the plan needs more than the available runway, we tell you in the first week and offer a smaller release that still tests the hypothesis. Infrastructure cost is tracked per environment from day one so it never appears as a surprise on the invoice.",
    },
    {
      question: "Will we have to rewrite the MVP when we hit our first growth spike?",
      answer:
        "Not if it is designed for it. We build a modular monolith with enforced boundaries, stateless services and a multi-tenant data model from the start, which is the point where most early architecture can absorb a tenfold increase through caching, horizontal scaling and read replicas. Some components will legitimately be replaced as requirements change, but the seams we define up front mean those replacements are contained rather than platform-wide.",
    },
    {
      question: "Can you take over a codebase another agency or an in-house developer built?",
      answer:
        "Yes, and we do it regularly. The first step is a technical audit: we document what exists, identify genuine risk, and separate code that is fine to keep from code that is quietly expensive. You get an honest assessment and a remediation plan before any rewrite is proposed, because a rewrite is rarely the answer and we will say so if the current system is sound.",
    },
    {
      question: "Our enterprise buyers and investors ask about security. Can you get us to SOC 2?",
      answer:
        "Yes. SOC 2 readiness is mostly engineering discipline rather than paperwork, so we build the controls in: access management, change control, logging, backup and recovery testing, vulnerability management and vendor review. We map the controls, automate evidence collection where possible and support your auditor through the observation period. Several of our clients reach Type I within a single quarter and Type II without a re-architecture.",
    },
    {
      question: "What does handover look like, and can our team run this without you?",
      answer:
        "Handover is a deliverable, not an email. You receive the repositories, the infrastructure as code, the environment credentials, runbooks, architecture decision records and a walkthrough of every operational procedure. We then work alongside your engineers until they are deploying and on-call independently, which is the point at which the engagement is genuinely finished and you are no longer paying for us to be a dependency.",
    },
  ],

  relatedIndustries: ["enterprise-organizations", "retail-ecommerce", "financial-services"],
};