import type { Industry } from "./types";

export const financialServices: Industry = {
  title: "Financial Services",
  slug: "financial-services",
  tagline: "Secure, compliant technology for modern financial institutions",
  description:
    "Engineering secure, compliant technology solutions for banking, insurance, fintech and financial advisory organizations.",
  metaDescription:
    "BLACK VAVE CORPORATION builds secure financial technology: banking, payments, KYC and AML screening, lending platforms and risk analytics for regulators.",
  icon: "DollarSign",
  theme: {
    accent: "#2FBE9C",
    accentLight: "#5AD9BB",
    accentDark: "#1F9A7E",
    tint: "rgba(47, 190, 156, 0.08)",
  },

  hero: {
    headline: "Financial Technology Built To Survive Examination",
    subheadline:
      "We engineer banking, payments and risk platforms that clear audit, absorb peak volume and stay available when markets move, without adding operational fragility to your critical path.",
  },

  stats: [
    { value: "PCI DSS 4.0", label: "Payment Security Alignment" },
    { value: "99.99%", label: "Availability For Critical Systems" },
    { value: "24/7", label: "Transaction Monitoring" },
    { value: "120 days", label: "To First Regulatory-Ready Release" },
  ],

  challenges: [
    {
      icon: "ShieldAlert",
      title: "Regulatory And Compliance Burden",
      description:
        "Financial institutions operate under overlapping regimes such as PCI DSS, SOX, GDPR, BSA/AML and, across markets, RBI, SEBI and DORA. Every material change must be evidenced to a supervisor, and non-compliance produces fines, remediation orders and licence risk.",
    },
    {
      icon: "Layers",
      title: "Aging Core Banking Platforms",
      description:
        "Core systems frequently run on vendor mainframes with batch windows, brittle interfaces and release cycles measured in quarters. Modern customer expectations collide with architecture that was designed for a different era of banking entirely.",
    },
    {
      icon: "Lock",
      title: "Fraud And Financial Crime Exposure",
      description:
        "As transaction volume and attack sophistication rise, account takeover, payment fraud, mule networks and trade-based laundering expand faster than manual review can absorb. Losses are direct, but the regulatory and reputational cost of a control failure is larger still.",
    },
    {
      icon: "Globe",
      title: "Multi-Jurisdiction Expansion Risk",
      description:
        "Entering a new market means new licensing, data residency, reporting and consumer protection obligations simultaneously. A platform designed for one jurisdiction rarely ports cleanly, and each new country multiplies compliance surface area.",
    },
    {
      icon: "Clock",
      title: "Slow Release And Audit Cycles",
      description:
        "Change control, segregation of duties and evidence requirements lengthen release cycles to the point where teams ship infrequently and batch multiple risks into a single deployment. When something does fail, mean time to detection and recovery becomes the limiting factor.",
    },
  ],

  approach: [
    {
      title: "Domain And Risk Discovery",
      description:
        "We map the value chain, the control environment and the specific regulatory obligations that attach to each product and jurisdiction. Findings land in a risk register with a prioritized remediation roadmap, so engineering effort is directed at real exposure.",
    },
    {
      title: "Security And Controls Architecture",
      description:
        "Key custody, encryption, tokenization, segregation of duties and immutable audit trails are designed in from the first sprint. Controls are mapped to requirements up front, which is what makes an examination a documentation exercise instead of an investigation.",
    },
    {
      title: "Integration And Reconciliation",
      description:
        "We integrate with core banking, card networks and payment rails using ISO 20022, SWIFT and open banking APIs, with idempotent posting and automated reconciliation built in. Money movement is designed so that a retried or duplicated instruction cannot create a duplicate entry.",
    },
    {
      title: "Resilience And Performance Engineering",
      description:
        "We test to peak rather than average: load, soak, failover and dependency failure scenarios against defined latency and recovery budgets, followed by a disaster recovery exercise with your operations team. Availability claims are demonstrated, not asserted.",
    },
    {
      title: "Regulated Pilot And Progressive Migration",
      description:
        "New capability runs in parallel with the incumbent, with automated reconciliation proving correctness before any cutover. Migration proceeds in reversible increments with documented rollback paths, and production releases follow your change governance throughout.",
    },
  ],

  products: [
    {
icon: "DollarSign",
      title: "Unified Retail Banking And Payments Platform",
      description:
        "An end-to-end retail banking layer covering accounts, payments, cards and servicing, designed for multi-rail transaction processing with a real-time, correctly reconciled ledger at its core.",
      features: [
        "ISO 20022 and card-network ready payment messaging",
        "Real-time double-entry ledger with idempotent posting",
        "Multi-rail payment routing with automatic failover",
        "Tokenized card data and a minimized PCI DSS scope",
      ],
    },
    {
      icon: "ShieldCheck",
      title: "KYC, AML And Sanctions Screening Engine",
      description:
        "Onboarding, monitoring and screening in one regulated platform, combining deterministic rules and behavioral models with a full case-management workflow for analysts and reporting.",
      features: [
        "Digital onboarding with eKYC and liveness verification",
        "Transaction monitoring with tunable rules and risk scoring",
        "Sanctions and PEP screening with fuzzy name matching",
        "SAR and STR case workflow with immutable audit trail",
      ],
    },
    {
      icon: "TrendingUp",
      title: "Digital Lending And Credit Underwriting Platform",
      description:
        "An origination and decisioning platform that turns policy into executable logic, from application intake through pricing, approval and ongoing portfolio monitoring.",
      features: [
        "Configurable scorecard and policy decision engine",
        "Bureau, alternative and transactional data integration",
        "Automated decisions with regulatory decline reason codes",
        "Vintage and roll-rate performance monitoring",
      ],
    },
    {
      icon: "Briefcase",
      title: "Wealth And Advisory Client Platform",
      description:
        "A digital advisory platform for onboarding, portfolio tracking, reporting and secure client collaboration, giving advisors a single view of every household relationship.",
      features: [
        "Client onboarding with suitability and risk profiling",
        "Model portfolio and rebalancing engine",
        "Performance, fee and mandate reporting",
        "Secure client portal with encrypted document exchange",
      ],
    },
    {
      icon: "FileStack",
      title: "Regulatory Reporting And Compliance Automation",
      description:
        "Automated regulatory returns and continuous control monitoring that keep finance, risk and compliance teams working from the same reconciled numbers rather than manual extracts.",
      features: [
        "Automated COREP, CCAR and local return generation",
        "Data lineage from source system to filed report",
        "Control testing with exception and remediation workflow",
        "Exportable audit evidence with change history",
      ],
    },
    {
      icon: "LineChart",
      title: "Fraud Detection And Risk Analytics Platform",
      description:
        "Real-time and behavioral fraud detection that scores every event against device, identity and network context, with an analyst workbench built on confirmed outcomes.",
      features: [
        "Real-time behavioral anomaly scoring on every transaction",
        "Device, geolocation and network graph signals",
        "Analyst workbench with case-to-outcome feedback loop",
        "Chargeback, recovery and loss ratio analytics",
      ],
    },
  ],

  services: [
    "software-engineering",
    "enterprise-applications",
    "cloud-devops",
    "data-analytics",
    "ai-automation",
  ],

  useCases: [
    {
      icon: "Bot",
      title: "Virtual Advisory And Self-Service Servicing",
      description:
        "Guided self-service that resolves routine servicing requests without an agent, while handing complex cases to a human with full context already attached.",
    },
    {
      icon: "Smartphone",
      title: "Mobile Banking And Instant Payments",
      description:
        "Native mobile banking with real-time payment initiation, tokenized card provisioning and strong customer authentication aligned to regional mandates.",
    },
    {
      icon: "Network",
      title: "Open Banking And Account Aggregation",
      description:
        "Consent management and standardized APIs that let customers connect external accounts, with a properly scoped permission model and revocation flow.",
    },
    {
      icon: "Gauge",
      title: "Real-Time Risk And Liquidity Monitoring",
      description:
        "Consolidated exposure, limit utilization and liquidity position updated continuously, with threshold alerts routed to the desk that owns the decision.",
    },
    {
      icon: "Workflow",
      title: "Insurance Policy And Claims Servicing",
      description:
        "Policy administration, claims intake, adjudication and payout automation with document handling built in, reducing manual touches on routine claims.",
    },
    {
      icon: "RefreshCw",
      title: "Lending Origination And Servicing Automation",
      description:
        "Straight-through processing from application to disbursement and ongoing servicing, with document handling, decisioning and status tracking in one flow.",
    },
  ],

  compliance: [
    "PCI DSS 4.0 payment card data security",
    "Sarbanes-Oxley (SOX) IT general controls",
    "GDPR and data subject rights for customer data",
    "BSA/AML, FATF standards and FFIEC KYC examination guidance",
    "ISO 27001 information security management systems",
    "SOC 2 Type II attestation for critical service providers",
  ],

  technologyCategories: [
    {
      category: "Core Platforms",
      items: [
        "Java / Spring Boot",
        ".NET",
        "Node.js",
        "Python",
        "Event-driven services on Apache Kafka",
      ],
    },
    {
      category: "Data And AI",
      items: [
        "PostgreSQL",
        "Apache Kafka",
        "Flink and Spark streaming",
        "Snowflake",
        "dbt and Airflow",
        "PyTorch for fraud and risk models",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "AWS and Azure",
        "Docker and Kubernetes",
        "Terraform IaC",
        "HSM-backed key management",
        "Multi-AZ active-active deployment",
      ],
    },
    {
      category: "Security And Compliance",
      items: [
        "HSM and KMS key custody",
        "AES-256 and TLS 1.3 encryption",
        "Tokenization and network tokenization",
        "Immutable audit logging",
        "Zero-trust network design",
        "SOX and SOC 2 control mapping",
      ],
    },
    {
      category: "Integration And Standards",
      items: [
        "ISO 20022",
        "SWIFT MT and MX messaging",
        "Card network APIs",
        "Open banking and consent APIs",
        "FIX and FpML protocols",
        "Core banking and ledger adapters",
      ],
    },
  ],

  outcomes: [
    {
      icon: "TrendingUp",
      title: "Faster Time To Market For New Products",
      description:
        "Reusable platform services and automated controls shorten the path from product proposal to production launch, without trading away governance.",
    },
    {
      icon: "ShieldCheck",
      title: "Reduced Fraud And Financial Crime Loss",
      description:
        "Real-time detection and stronger identity controls cut preventable loss while reducing manual review load on operations teams.",
    },
    {
      icon: "Gauge",
      title: "Lower Cost Of Ownership And Operations",
      description:
        "Retirement of duplicated systems, batch processing and manual reconciliation reduces infrastructure spend and the headcount tied to routine work.",
    },
    {
      icon: "Scale",
      title: "A Stronger Regulatory And Audit Posture",
      description:
        "Mapped controls, complete audit trails and reproducible evidence turn examinations into a documented review rather than a search.",
    },
    {
      icon: "Users",
      title: "Higher Customer Satisfaction And Digital Adoption",
      description:
        "Reliable digital journeys, faster settlement and fewer service failures drive customers away from branch and phone channels entirely.",
    },
    {
      icon: "Database",
      title: "A Unified, Trusted Customer View",
      description:
        "One governed data model across products and channels, so risk, service and reporting teams stop working from conflicting extracts.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Regulatory And Architecture Assessment",
      description:
        "A time-boxed engagement that maps systems, controls and regulatory obligations, identifies the highest-exposure gaps and produces a costed modernization roadmap.",
    },
    {
      icon: "Code2",
      title: "Dedicated Engineering Squad",
      description:
        "A specialist team owning a defined domain or product area end to end, with security and compliance engineers embedded rather than consulted after the fact.",
    },
    {
      icon: "Puzzle",
      title: "Incremental Migration With Parallel Run",
      description:
        "Replacement capability runs alongside the incumbent with automated reconciliation until equivalence is proven, then traffic shifts in reversible, measurable steps.",
    },
  ],

  faqs: [
    {
      question: "How do you handle PCI DSS scope without slowing down delivery?",
      answer:
        "Scope reduction is an architectural outcome, not a compliance exercise. We tokenize card data at the point of capture, keep the cardholder data environment isolated and as small as possible, and route all processing through managed payment services where that suits the business. Encryption, key management and segmentation are built in from the first sprint, so you enter each examination with a small, documented scope instead of a large, defended one.",
    },
    {
      question: "How do you modernize core banking without risking daily operations?",
      answer:
        "We never run a big-bang cutover. New capability runs in parallel with the incumbent and automated reconciliation proves ledger and payment equivalence before any traffic moves. Migration then proceeds in reversible increments with documented rollback paths and scheduled cutover windows, while key staff from your operations team observe and rehearse the new runbook with us beforehand.",
    },
    {
      question: "Will your systems pass our regulator's examination?",
      answer:
        "They are built to be examinable. Controls are mapped to specific requirements up front, every material action is written to an immutable audit trail, and change management, segregation of duties and evidence generation follow your existing governance rather than a parallel process. We also work alongside your second and third line functions and external auditors so the documentation package exists before the examination starts, not during it.",
    },
    {
      question: "How do you build transaction systems that perform at peak volume?",
      answer:
        "We define latency and throughput budgets from your historical peaks, then test against projected scenarios including promotional and settlement days. That work covers idempotent posting so retries are safe, load and soak testing to find degradation curves, and multi-region failover with recovery objectives validated by an actual disaster recovery exercise rather than a documented intention.",
    },
    {
      question: "Can you work with our existing risk, security and compliance teams?",
      answer:
        "Yes, and it is the normal arrangement. We operate inside your cloud accounts and follow your change management, access control and release approval processes, with security engineers participating in design and code review from the start. Nothing reaches production without passing the gates your teams already own, and we document systems thoroughly enough that they can operate and extend the platform after handover.",
    },
    {
      question: "Who owns the intellectual property, and what happens at the end?",
      answer:
        "You own it. Source code, infrastructure definitions, data models and documentation are delivered into your repositories and accounts from the first sprint, with no proprietary runtime or license dependency in the critical path. We also design for a clean exit: full data export in open standard formats, documented exit runbooks, and a handover structured so your internal engineering organization can carry the platform forward independently.",
    },
  ],

  relatedIndustries: [
    "enterprise-organizations",
    "professional-services",
    "startups-smes",
  ],
};