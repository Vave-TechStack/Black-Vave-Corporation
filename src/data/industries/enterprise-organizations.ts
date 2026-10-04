import type { Industry } from "./types";

export const enterpriseOrganizations: Industry = {
  title: "Enterprise Organizations",
  slug: "enterprise-organizations",
  tagline: "Modernization, integration and governance at enterprise scale",
  description:
    "Delivering large-scale technology transformations, custom enterprise systems and strategic digital initiatives for complex organizations.",
  metaDescription:
    "BLACK VAVE CORPORATION delivers enterprise transformation: legacy modernization, system integration, custom platforms and governance for complex organizations.",
  icon: "Globe",
  theme: {
    accent: "#5A93E8",
    accentLight: "#84AEF0",
    accentDark: "#3F6FBD",
    tint: "rgba(90, 147, 232, 0.08)",
  },

  hero: {
    headline: "Modernize The Estate Without Stopping The Business",
    subheadline:
      "We retire legacy risk in controlled tranches, integrate the systems your operation actually runs on, and leave behind governance and capability that outlast the programme.",
  },

  stats: [
    { value: "30-40%", label: "Target Legacy Run-Cost Reduction" },
    { value: "99.99%", label: "Core System Availability Target" },
    { value: "ISO 27001", label: "Aligned Control Frameworks" },
    { value: "6-18 mo", label: "Typical Programme Horizon" },
  ],

  challenges: [
    {
      icon: "Layers",
      title: "Legacy Systems Without A Modernization Path",
      description:
        "Mainframes, on-premises monoliths and unsupported runtimes carry the business, with vendor end-of-life dates already set. Every year without a documented path increases cost, risk and the difficulty of hiring anyone who can maintain them.",
    },
    {
      icon: "Plug",
      title: "Integration Debt Across Systems That Do Not Talk",
      description:
        "ERP, CRM, data warehouse, plant systems and partner platforms are connected by batch jobs, spreadsheets and one-off interfaces. Duplicate masters, silent failures and reconciliation disputes consume specialist capacity permanently.",
    },
    {
      icon: "Gauge",
      title: "Change Resistance Across Business Units",
      description:
        "Transformation programmes are judged on go-live, not adoption. When business units are not involved in design, they retain shadow spreadsheets and parallel processes, and the promised benefit never reaches the P&L.",
    },
    {
      icon: "ShieldAlert",
      title: "Governance, Audit And Regulatory Burden",
      description:
        "SOX, ISO 27001, GDPR and sector-specific obligations demand continuous evidence across systems that were never designed to produce it. Evidence collection absorbs delivery capacity and arrives as an audit finding when it is late.",
    },
    {
      icon: "Hourglass",
      title: "Delivery Capacity Contention",
      description:
        "Internal teams split between business-as-usual and transformation run out of the same architects and integration engineers on both tracks. Critical-path work queues behind operational incidents, and the roadmap slips by quarters.",
    },
  ],

  approach: [
    {
      title: "Estate Discovery And Target Architecture",
      description:
        "We inventory applications, interfaces, data flows, licences and operational risk, then define a target architecture with an explicit disposition per system: retain, re-platform, refactor, replace or retire. Nothing stays by default.",
    },
    {
      title: "Value-Linked Tranching And Sequencing",
      description:
        "Delivery is ordered by business value and risk reduction rather than technical preference. Each tranche has an accountable business owner, a measurable outcome and an independent go-live decision.",
    },
    {
      title: "Incremental Migration And Integration",
      description:
        "We work through strangler-facade migration, parallel running with automated data reconciliation, and reversible cutovers. Legacy and modern systems coexist deliberately for as long as the evidence requires it.",
    },
    {
      title: "Governance, Security And Compliance By Design",
      description:
        "Control frameworks, segregation of duties, data classification, residency rules and immutable audit logging are engineered into the delivery pipeline, so compliance evidence is produced continuously rather than reconstructed before an audit.",
    },
    {
      title: "Change Enablement And Capability Transfer",
      description:
        "We establish the operating model, product ownership on the business side, and DevSecOps practice, then coach internal teams through to independent delivery. The programme must still be improving a year after we leave.",
    },
  ],

  products: [
    {
      icon: "Layers",
      title: "Legacy Modernization And Migration Programme",
      description:
        "A staged programme that wraps, re-platforms or replaces critical legacy systems one capability at a time, keeping the operation running while maintenance cost, vendor dependency and delivery risk come down measurably.",
      features: [
        "Reverse-engineered documentation and interface maps for undocumented systems",
        "Strangler-facade pattern with incremental traffic cutover per capability",
        "Parallel run periods with automated data reconciliation and sign-off gates",
        "Per-tranche run-cost and risk reporting for business and finance review",
      ],
    },
    {
      icon: "Plug",
      title: "Enterprise Integration And API Platform",
      description:
        "A governed integration layer that replaces point-to-point interfaces with a canonical data model, an API gateway and event streaming, so adding a new system is configuration work rather than a new integration project.",
      features: [
        "API gateway with versioning, quotas, throttling and consumer contracts",
        "Adapters for SAP, Oracle, Salesforce and Microsoft enterprise stacks",
        "Event streaming and change data capture for real-time master propagation",
        "Full message replay, dead-letter queues and failure alerting",
      ],
    },
    {
      icon: "Building2",
      title: "Enterprise Workflow And Operations Platform",
      description:
        "A cross-department operations platform for cases, approvals, service levels and records, configured to the way your divisions actually work and instrumented so cycle time and backlog become manageable quantities.",
      features: [
        "Configurable workflow and rules engine spanning multiple departments",
        "Role-based segregation of duties enforced on every approval step",
        "Immutable audit trail aligned to records retention policy",
        "Operational dashboards for cycle time, backlog and SLA breach",
      ],
    },
    {
      icon: "Database",
      title: "Enterprise Data Platform And Governance Fabric",
      description:
        "A lakehouse architecture with master data management, quality rules, lineage and residency tagging, giving the business one version of every core entity and a defensible answer to where each number came from.",
      features: [
        "Lakehouse architecture with governed, reusable data products",
        "Master data management with golden-record and stewardship workflow",
        "Automated lineage, retention and data residency tagging",
        "Financial, regulatory and executive reporting pipelines on one model",
      ],
    },
    {
      icon: "Bot",
      title: "Enterprise Automation And AI Operations Layer",
      description:
        "Automation for the high-volume process work that dominates enterprise operations: document intake, case classification, reconciliation and service-desk resolution, built with human approval gates wherever actions are regulated.",
      features: [
        "Retrieval grounded in enterprise knowledge and document repositories",
        "Human-in-the-loop approvals for regulated or customer-affecting actions",
        "Process mining to identify and automate the highest-volume manual steps",
        "Run-time guardrails, model routing and per-workflow cost control",
      ],
    },
    {
      icon: "ShieldCheck",
      title: "Governance, Risk And Compliance Control Platform",
      description:
        "A control platform that maps requirements to technical and procedural controls, then proves them continuously from infrastructure and application telemetry instead of from screenshots assembled before each audit cycle.",
      features: [
        "Control library mapped to ISO 27001, SOC 2 and SOX frameworks",
        "Automated evidence collection from cloud, infrastructure and applications",
        "Access recertification and joiner-mover-leaver workflow automation",
        "Continuous control monitoring with exception reporting and remediation tracking",
      ],
    },
  ],

  services: [
    "enterprise-applications",
    "digital-transformation",
    "software-engineering",
    "cloud-devops",
    "data-analytics",
  ],

  useCases: [
    {
      icon: "Layers",
      title: "Core System Modernization Without Downtime",
      description:
        "Decommission high-cost, unsupported platforms incrementally, moving one capability at a time while the business keeps transacting, with no big-bang cutover and no frozen change window.",
    },
    {
      icon: "Plug",
      title: "Cross-Platform Data And Process Integration",
      description:
        "Unify ERP, CRM, data warehouse and partner systems around one integration layer and a canonical data model, ending duplicate records, manual reconciliation and batch-window dependencies.",
    },
    {
      icon: "RefreshCw",
      title: "Data Centre Exit And Cloud Migration",
      description:
        "Move infrastructure to cloud platforms with dependency mapping, wave planning, traffic cutover and cost modelling, so the estate exits its facility on a schedule rather than under pressure.",
    },
    {
      icon: "Workflow",
      title: "Enterprise Workflow And Case Automation",
      description:
        "Replace email chains, spreadsheets and swivel-chair approvals with configured workflows that enforce service levels, segregation of duties and full traceability across departments.",
    },
    {
      icon: "ShieldCheck",
      title: "Audit Readiness And Regulatory Reporting",
      description:
        "Produce continuous, defensible evidence for SOX, ISO 27001 and GDPR obligations, cutting the manual preparation that normally consumes control owners in the weeks before an audit.",
    },
    {
      icon: "Users",
      title: "Organizational Change And Adoption",
      description:
        "Transfer ownership to business-side product teams, coach the operating model and measure adoption explicitly, so benefits are realized in the business rather than announced at go-live.",
    },
  ],

  compliance: [
    "ISO/IEC 27001 information security management",
    "SOC 2 Type II Trust Services Criteria",
    "Sarbanes-Oxley (SOX) financial reporting controls",
    "GDPR and cross-border data transfer requirements",
    "PCI DSS for cardholder data environments",
    "TOGAF and COBIT architecture governance with data residency controls",
  ],

  technologyCategories: [
    {
      category: "Enterprise Platforms",
      items: [
        "Java and Spring Boot",
        ".NET",
        "Python",
        "React and Angular",
        "Node.js",
        "PostgreSQL and Oracle",
      ],
    },
    {
      category: "Integration And Messaging",
      items: [
        "Apache Kafka",
        "IBM MQ",
        "Mule",
        "Kong API Gateway",
        "Change data capture",
        "gRPC and REST contracts",
      ],
    },
    {
      category: "Data Platforms",
      items: [
        "Databricks Lakehouse",
        "Snowflake",
        "dbt",
        "Apache Airflow",
        "Azure Data Factory",
        "Master data management",
      ],
    },
    {
      category: "Cloud And Infrastructure",
      items: [
        "Microsoft Azure",
        "AWS",
        "VMware vSphere",
        "Kubernetes",
        "Terraform",
        "Ansible Automation Platform",
      ],
    },
    {
      category: "Security And Governance",
      items: [
        "ISO 27001 control framework",
        "Microsoft Entra ID",
        "SIEM and security telemetry",
        "Zero-trust architecture",
        "Policy as code with OPA",
        "Immutable audit logging",
      ],
    },
  ],

  outcomes: [
    {
      icon: "Layers",
      title: "Reduced Legacy Risk And Run Cost",
      description:
        "Unsupported platforms retired, documentation produced and maintenance exposure measurably lower, with the saving tracked per tranche against the business case.",
    },
    {
      icon: "Plug",
      title: "Seamless Integration Across The Estate",
      description:
        "Systems exchange data through a governed integration layer, eliminating manual reconciliation, duplicate master records and single points of integration failure.",
    },
    {
      icon: "TrendingUp",
      title: "Operational Efficiency That Shows In The P&L",
      description:
        "Cycle times, cost per transaction and service-level attainment instrumented and improved, with benefits measured against the baseline the programme was funded on.",
    },
    {
      icon: "ShieldCheck",
      title: "Audit Readiness By Default",
      description:
        "Continuous control monitoring and automated evidence collection that satisfy auditors and regulators without an end-of-quarter scramble or a large finding backlog.",
    },
    {
      icon: "Cloud",
      title: "Cloud-Native Scalability And Resilience",
      description:
        "Infrastructure as code, automated recovery and tested failover across hybrid and multi-cloud environments, with availability targets the business can rely on.",
    },
    {
      icon: "Users",
      title: "Sustained Change Through Internal Capability",
      description:
        "Product ownership, DevSecOps practice and coached internal teams that continue delivering after the programme closes, which is the only definition of success that holds up over time.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Strategy And Architecture Assessment",
      description:
        "An independent assessment that inventories the estate, quantifies the opportunity and risk, and delivers a sequenced modernization roadmap with business cases your board can approve.",
    },
    {
      icon: "Milestone",
      title: "Tranched Programme Delivery",
      description:
        "Programme delivery structured around independently valuable tranches, each with defined scope, accountable business owners and go-live gates, so investment can be re-decided at each stage.",
    },
    {
      icon: "Puzzle",
      title: "Embedded Delivery And Capability Transfer",
      description:
        "Integrated squads working alongside your teams on delivery, architecture and practice, structured so that internal capability grows throughout and outlives the engagement.",
    },
  ],

  faqs: [
    {
      question: "How do you approach an estate that includes systems nobody fully understands?",
      answer:
        "We treat undocumented systems as the normal condition rather than the exception, because in most enterprises a significant share of critical code and configuration has no current owner. The first tranche is reverse engineering: behavioural documentation, interface maps and data-flow analysis produced alongside your operations staff so the knowledge lands in your organization, not in our delivery notes. We never ask you to commit to a modernization plan for a system we have not first read in detail.",
    },
    {
      question: "Can you modernize critical systems without a big-bang cutover?",
      answer:
        "Yes, and on systems where a big-bang cutover would be reckless we would argue against it. We work through strangler-facade migration, wrapping critical capability behind a facade and replacing the implementation underneath while the business continues transacting on the old path. Parallel run periods with automated data reconciliation give your operations teams the evidence to sign off, and each cutover is reversible by design so a failed step is an inconvenience rather than an incident.",
    },
    {
      question: "How do you keep a programme moving when internal IT is consumed by business as usual?",
      answer:
        "This is the most common cause of programme failure, so we design around it rather than assuming extra capacity. A dedicated external delivery team absorbs the build load, your internal experts contribute the domain knowledge we genuinely cannot substitute, and we agree up front on what BAU must keep doing without us. Where that is not enough, we tell you during assessment rather than discovering it at tranche two.",
    },
    {
      question: "How do you integrate with SAP, Salesforce and mainframe systems we cannot replace?",
      answer:
        "We integrate rather than replace. Standard adapters handle the majority of SAP, Oracle, Salesforce and Microsoft interfaces, and for mainframe or proprietary systems we build anti-corruption layers that translate legacy structures into a clean canonical model without modifying the source. The important discipline is that the legacy system stays stable and untouched while its data flows become reliable, well-documented and monitored.",
    },
    {
      question: "What governance and compliance evidence do you produce for our auditors?",
      answer:
        "Evidence is produced continuously by the delivery pipeline rather than assembled before an audit. Controls are mapped to ISO 27001, SOC 2 and SOX requirements, then evidenced automatically from infrastructure configuration, access records, change history and deployment logs, with manual evidence restricted to genuinely procedural controls. You receive the control library, the mapping and the exception reporting, so the auditor verifies live evidence rather than screenshots.",
    },
    {
      question: "How do we ensure the transformation continues after your team leaves?",
      answer:
        "Capability transfer is a contractual deliverable, not good intentions. Your staff work inside the delivery teams, we establish product ownership on the business side and a DevSecOps operating model, and we run your teams through to independent delivery with us in support rather than in the lead. We also hand over the architecture decision records, runbooks and tooling so nothing important exists only in our documentation. If the programme is still dependent on us a year after exit, we have not finished.",
    },
  ],

  relatedIndustries: ["healthcare", "financial-services", "manufacturing"],
};