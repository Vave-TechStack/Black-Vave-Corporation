import type { Industry } from "./types";

export const professionalServices: Industry = {
  title: "Professional Services",
  slug: "professional-services",
  tagline: "Secure technology built for high-stakes client work",
  description:
    "Building technology solutions for consulting firms, law practices, accounting firms and other professional service organizations, from matter management and document automation to client portals and AI-assisted workflows.",
  metaDescription:
    "BLACK VAVE CORPORATION builds compliance-grade software for professional service firms: practice management, AI document automation and secure client portals.",
  icon: "Briefcase",
  theme: {
    accent: "#93A7BC",
    accentLight: "#AFBECD",
    accentDark: "#73869C",
    tint: "rgba(147, 167, 188, 0.08)",
  },

  hero: {
    headline: "Firm-Grade Software For Work That Cannot Slip",
    subheadline:
      "We engineer matter management, document automation and client delivery systems that fit how your firm actually operates, with the controls, auditability and security your partners and clients expect.",
  },

  stats: [
    { value: "GDPR", label: "Privacy And Data Protection By Design" },
    { value: "< 12 weeks", label: "To First Module In Production" },
    { value: "24/7", label: "Platform Monitoring And Support" },
    { value: "99.9%", label: "Availability Target For Hosted Platforms" },
  ],

  challenges: [
    {
      icon: "Scale",
      title: "Client Confidentiality And Privilege Risk",
      description:
        "Firms hold commercially sensitive and privileged material across matters that may never overlap. A single mis-scoped permission, shared workspace or data residency failure can breach contractual confidentiality and regulatory obligations.",
    },
    {
      icon: "Repeat",
      title: "Billable Work Leaks Into Administration",
      description:
        "Partners and senior staff lose hours each week to timesheet reminders, document formatting, engagement letters and status updates. Capacity is the scarcest resource in a professional firm, and administrative load directly reduces it.",
    },
    {
      icon: "Layers",
      title: "Fragmented Practice Systems",
      description:
        "Matter records are typically spread across a practice management system, a document management platform, shared drives, email and bespoke spreadsheets. Firms lose time reconciling versions and lose confidence in what the system of record actually holds.",
    },
    {
      icon: "Gauge",
      title: "Limited Real-Time Visibility On Performance",
      description:
        "Utilisation, realisation, write-offs and project margin are usually visible only after the fact, in a monthly report. By the time a partner sees a matter running over budget, the rework and unbilled time have already been incurred.",
    },
    {
      icon: "Bot",
      title: "Automation Without Professional Oversight",
      description:
        "Generative tooling is already touching contracts, due diligence and research, but applied without review checkpoints, version control or a defensible audit trail, it becomes a liability rather than a productivity gain.",
    },
  ],

  approach: [
    {
      title: "Partner-Led Process Discovery",
      description:
        "We start with the people who carry the file. Time is spent with partners, associates and operations staff to document how a matter actually moves from intake to invoice, and where value is lost along the way.",
    },
    {
      title: "Security And Privilege Architecture",
      description:
        "Matter-level access control, encryption, ethical walls, immutable audit trails and data residency patterns are defined before any feature is built, so confidentiality is structural rather than a policy document.",
    },
    {
      title: "Integration With The Firm's Existing Estate",
      description:
        "We connect to practice management, document management, identity and finance systems through supported APIs and migration tooling, so your current investment becomes the foundation rather than an obstacle.",
    },
    {
      title: "Controlled Automation With Human Checkpoints",
      description:
        "Automation is introduced where it removes low-value effort, and every generated artefact passes defined review and version control before it reaches a client. We never put unreviewed model output in front of a client.",
    },
    {
      title: "Phased Rollout And Measured Adoption",
      description:
        "Delivery starts with one module in one practice group, adoption and quality metrics are tracked against baseline, and rollout expands only once the earlier stage is proven. Partners see value before the firm-wide change is asked for.",
    },
  ],

  products: [
    {
icon: "Briefcase",
      title: "Matter And Practice Management Platform",
      description:
        "A central system of record for matters, deadlines, workflow stages, staffing and document versions. Built for firms that need one authoritative view of every engagement rather than a folder tree maintained by hand.",
      features: [
        "Matter-centric workspace with deadline and obligation tracking",
        "Configurable workflow stages per practice group and matter type",
        "Template-driven document and version control with full change history",
        "Matter-level permissions with ethical wall and conflict screening",
      ],
    },
    {
      icon: "FileText",
      title: "Document Automation And Review Suite",
      description:
        "Automation for the documents that consume the most senior time: engagement letters, contracts, due diligence packs and standardised schedules. Clause extraction, comparison and first-draft generation happen inside a controlled review flow.",
      features: [
        "Clause and obligation extraction with obligation deadline alerts",
        "Redline comparison against firm precedent and fallback positions",
        "First-draft generation from approved templates with mandatory human sign-off",
        "Version lineage and reviewer attribution retained for every output",
      ],
    },
    {
      icon: "Users",
      title: "Secure Client Portal And Collaboration Hub",
      description:
        "A white-label client experience for matter status, secure file exchange, approvals and billing queries. Clients get visibility without your team absorbing another inbox, and every interaction stays on the matter record.",
      features: [
        "Matter-scoped workspaces with granular client and guest permissions",
        "Secure file exchange with expiring links and download logging",
        "Approval and sign-off flows for scopes, fees and deliverables",
        "Branded portal with your identity, domain and client support model",
      ],
    },
    {
      icon: "Clock",
      title: "Time, Expense And Revenue Intelligence Platform",
      description:
        "Real-time capture and analysis of time, realisation, write-offs and matter profitability. Partners see which engagements earn their staffing before the quarter closes, not after the accounts are prepared.",
      features: [
        "Contextual time capture linked to matters, tasks and rate cards",
        "Realisation, write-off and budget variance tracking per matter",
        "Matter and practice profitability with full cost allocation",
        "Automated billing pre-checks for narrative quality and rate compliance",
      ],
    },
    {
      icon: "BookOpen",
      title: "Knowledge And Precedent Management System",
      description:
        "A firm-wide knowledge layer that makes institutional memory searchable. Precedents, positions, clauses and internal know-how surface at the point of drafting instead of being rediscovered from scratch on each matter.",
      features: [
        "Precedent and clause library with versioning and withdrawal marking",
        "Semantic search across firm knowledge, matters and external sources",
        "Drafting assistant that cites the source of every retrieved position",
        "Contribution workflow with review approval before publication",
      ],
    },
    {
      icon: "ShieldCheck",
      title: "Risk, Compliance And Assurance Platform",
      description:
        "Continuous assurance across conflicts, information security and regulatory obligations. Registers, reviews and evidence collection are managed as a workflow, so audits and client security questionnaires are answered from the system.",
      features: [
        "Conflict and conflict-check workflow with approval and clearance records",
        "Regulatory obligation register with owners, evidence and review dates",
        "Information security policy workflows and staff attestation tracking",
        "Audit-ready export of access, change and approval evidence",
      ],
    },
  ],

  services: [
    "software-engineering",
    "ai-automation",
    "digital-transformation",
    "enterprise-applications",
    "data-analytics",
  ],

  useCases: [
    {
      icon: "PenTool",
      title: "Contract Review And Negotiation Support",
      description:
        "Extract obligations, flag deviations from firm standard positions and track every negotiated change across a contract, so review time goes to judgement rather than to reading.",
    },
    {
      icon: "FileSearch",
      title: "Due Diligence And Document Production",
      description:
        "Structured review of large document populations with indexing, privilege tagging, issue lists and query management, producing a defensible work product at a fraction of the manual effort.",
    },
    {
      icon: "DollarSign",
      title: "Engagement Economics And Pricing",
      description:
        "Model fees, staffing plans and margin scenarios before an engagement is signed, and monitor realisation against plan while the work is still in progress.",
    },
    {
      icon: "RefreshCw",
      title: "Compliance And Regulatory Change Management",
      description:
        "Map new regulatory requirements to affected policies, controls and client deliverables, then assign owners and evidence so the firm responds on a schedule rather than under pressure.",
    },
    {
      icon: "Headphones",
      title: "Knowledge Transfer And Onboarding",
      description:
        "Structured onboarding paths, precedent playbooks and guided matter review that shorten the time a new hire reaches productive contribution on regulated work.",
    },
    {
      icon: "Lock",
      title: "Client Data Protection And Segregation",
      description:
        "Matter-level isolation, residency controls and auditable access that satisfy the contractual and regulatory commitments firms make to their clients about where client data lives and who can see it.",
    },
  ],

  compliance: [
    "GDPR and UK GDPR obligations for client and personal data",
    "Data residency and localization requirements for client-confidential matter files",
    "SOC 2 Type II controls for security, availability and confidentiality",
    "ISO 27001 information security management systems",
    "Records retention and legal hold obligations, including ABA Formal Opinion 512",
    "WCAG 2.2 AA accessibility conformance for client-facing systems",
  ],

  technologyCategories: [
    {
      category: "Core Platforms",
      items: [
        "React and Next.js",
        "Node.js",
        "Python",
        "Java / Spring Boot",
        ".NET",
        "TypeScript",
      ],
    },
    {
      category: "Document And Data Intelligence",
      items: [
        "OCR and Document AI Pipelines",
        "Natural Language Search",
        "Large Language Model Assistants",
        "Contract Clause Extraction",
        "Knowledge Graph and Precedent Store",
      ],
    },
    {
      category: "Data And Analytics",
      items: [
        "PostgreSQL",
        "Elasticsearch",
        "Snowflake",
        "dbt and Airflow",
        "Power BI and Embedded Analytics",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "AWS, Azure and Google Cloud",
        "Docker and Kubernetes",
        "Terraform IaC",
        "Regional Data Residency Zones",
        "Encrypted Object Storage and Backup",
      ],
    },
    {
      category: "Security And Compliance",
      items: [
        "SAML 2.0 and OIDC Single Sign-On",
        "AES-256 and TLS 1.3 Encryption",
        "Matter-Level RBAC and Ethical Walls",
        "Immutable Audit Logging",
        "ISO 27001-aligned SDLC Controls",
      ],
    },
  ],

  outcomes: [
    {
      icon: "TrendingUp",
      title: "Higher Partner And Associate Utilisation",
      description:
        "Administrative load drops and captured time reaches the matter it belongs to, converting non-billable hours into recoverable capacity.",
    },
    {
      icon: "FileStack",
      title: "Faster, More Consistent Document Work",
      description:
        "Drafting, comparison and review move from manual assembly to controlled automation, reducing turnaround on standard documents without diluting partner judgement.",
    },
    {
      icon: "ShieldCheck",
      title: "Audit-Ready Compliance Posture",
      description:
        "Evidence for security reviews, client questionnaires and regulatory examinations is produced from the system instead of reconstructed under deadline.",
    },
    {
      icon: "Globe",
      title: "Secure Global Client Delivery",
      description:
        "Matter-level isolation and residency controls let the firm serve clients across jurisdictions without building a separate stack for each region.",
    },
    {
      icon: "BarChart3",
      title: "Clearer Profitability Visibility",
      description:
        "Realisation, write-off and margin performance are visible while matters are live, giving practice leaders time to correct course before revenue is lost.",
    },
    {
      icon: "Search",
      title: "Institutional Knowledge That Compounds",
      description:
        "Precedent and know-how become searchable and reusable, so every matter leaves the firm more capable than it found it.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Diagnostic And Roadmap",
      description:
        "A time-boxed assessment of practice systems, data flows and process friction that produces a prioritized build plan with effort and risk estimates before any commitment is made.",
    },
    {
      icon: "Code2",
      title: "Dedicated Delivery Team",
      description:
        "A cross-functional squad of engineers, designers and security specialists delivering an end-to-end platform on a predictable cadence, with partner-level steering reviews.",
    },
    {
      icon: "Puzzle",
      title: "Modular Build",
      description:
        "Individual modules delivered incrementally, starting with the highest-value component such as the client portal or time capture, so the firm sees measurable gain early.",
    },
  ],

  faqs: [
    {
      question: "How do you protect client-confidential and privileged material?",
      answer:
        "Confidentiality is built into the architecture rather than the policy document. Every record is scoped to a matter, access is granted by role and never inherited by default, and ethical walls are enforced between matter teams. Access, change and approval events are logged immutably, encryption is applied at rest and in transit, and data residency can be constrained to the jurisdictions your clients require. We are also able to operate in your own cloud environment if your confidentiality commitments demand it.",
    },
    {
      question: "Our partners will not adopt software that slows down billable work. How do you prove value?",
      answer:
        "We start by measuring the baseline before we build. During discovery we quantify where time goes, how much is lost to administrative work and how much of it is unbilled, then agree on specific targets with the partners who will use the system. Delivery begins with one practice group so the result is visible inside the firm quickly, and adoption is tracked as a project metric alongside functionality.",
    },
    {
      question: "Can this work with our existing practice and document management systems?",
      answer:
        "Yes, and we plan around the systems you already own. We integrate with practice management platforms, document management systems such as the major enterprise DMS products, Microsoft 365, identity providers and accounting packages through their supported APIs, and we build targeted migration tooling where legacy data needs to move. The goal is a coherent layer across your estate, not a rip and replace exercise.",
    },
    {
      question: "How do you introduce AI into work where professional judgement carries liability?",
      answer:
        "We use models as drafting and review assistants, never as autonomous decision makers on client work. Output is confined to approved templates, every generation passes through defined review and version control, and a named professional signs off before anything reaches a client. The system records what was generated, what was changed and who approved it, which means our client can show how a deliverable was produced if it is ever challenged.",
    },
    {
      question: "How long does a typical engagement take and how is it priced?",
      answer:
        "Most engagements produce a working first module within twelve weeks, and we structure delivery in phases so scope can be adjusted at each milestone rather than locked up front. After a fixed-fee diagnostic we propose milestone-based pricing against agreed acceptance criteria. Ongoing changes are handled through a time and materials model at transparent senior rates, so you always know what a change will cost before it starts.",
    },
    {
      question: "What happens to our data and our systems if the engagement ends?",
      answer:
        "You retain full ownership and there is no proprietary lock-in. We document the architecture and configuration in full, provide data export in open standard formats, and support an orderly migration to your internal team or another provider. Where we hold environments, we hand over credentials and provide a defined transition period so nothing depends on our continued involvement.",
    },
  ],

  relatedIndustries: ["financial-services", "real-estate", "enterprise-organizations"],
};