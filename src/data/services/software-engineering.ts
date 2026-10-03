import type { Service } from "./types";

export const softwareEngineering: Service = {
  title: "Software Engineering",
  slug: "software-engineering",
  tagline: "Precision-built systems for complex business needs",
  description:
    "Enterprise web applications, platforms, APIs, backend systems and custom software engineered for reliability, scale and performance.",
  metaDescription:
    "BLACK VAVE engineers custom software, SaaS platforms, APIs and backend systems built for reliability, scale and long-term maintainability.",
  icon: "Code2",
  hero: {
    headline: "Software Engineered for Operations That Never Stop",
    subheadline:
      "BLACK VAVE designs and builds custom web applications, SaaS platforms, APIs and backend systems that align with your real business processes — engineered for reliability, scale and long-term evolution.",
    highlights: [
      "Custom Software Development",
      "SaaS & Platform Engineering",
      "API Design & Integration",
      "Quality Assurance",
    ],
  },
  challenges: [
    {
      icon: "Puzzle",
      title: "Off-the-Shelf Limitations",
      description:
        "Generic software rarely matches unique business processes, forcing teams to work around their tools instead of with them.",
    },
    {
      icon: "GitBranch",
      title: "Technical Debt",
      description:
        "Accumulated shortcuts and aging code slow every new feature, increase defect risk and make systems expensive to change.",
    },
    {
      icon: "TrendingUp",
      title: "Scaling Bottlenecks",
      description:
        "Systems built for early traction often buckle under real load — slow queries, timeouts and outages during peak demand.",
    },
    {
      icon: "Network",
      title: "Integration Silos",
      description:
        "Disconnected tools create duplicate data entry, inconsistent records and manual handoffs between departments.",
    },
    {
      icon: "ShieldAlert",
      title: "Quality & Reliability Risk",
      description:
        "Without automated testing and review discipline, defects reach production and erode user trust.",
    },
  ],
  approach: [
    {
      title: "Discovery & Requirements",
      description:
        "We map your business processes, constraints and goals into a clear, prioritized set of requirements.",
    },
    {
      title: "Architecture & Strategy",
      description:
        "We design the system architecture — data models, service boundaries and integration points — before a line of code is written.",
    },
    {
      title: "Design & Engineering",
      description:
        "We build in iterative increments with code review, automated testing and continuous integration from day one.",
    },
    {
      title: "Integration & Testing",
      description:
        "We connect your new system to existing tools and validate it with automated and exploratory testing.",
    },
    {
      title: "Deployment & Release",
      description:
        "We ship through controlled release pipelines with rollback plans, monitoring and launch support.",
    },
    {
      title: "Evolution & Optimization",
      description:
        "We refine performance, address technical debt and plan the next phase of capability.",
    },
  ],
  capabilities: [
    {
      icon: "Code2",
      title: "Custom Software Development",
      description:
        "Purpose-built applications designed around your business logic, data models and operational requirements.",
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
    {
      icon: "Globe",
      title: "Web Application Engineering",
      description:
        "Full-stack web applications with responsive interfaces, secure APIs and production-grade reliability.",
      technologies: ["Next.js", "TypeScript", "REST APIs"],
    },
    {
      icon: "Layers",
      title: "SaaS Product Development",
      description:
        "Multi-tenant SaaS platforms with subscription workflows, role-based access and scalable architecture.",
      technologies: ["Next.js", "MongoDB", "Docker"],
    },
    {
      icon: "Webhook",
      title: "API Design & Integration",
      description:
        "Well-documented REST APIs and integration layers that connect internal tools, partners and third-party services.",
      technologies: ["Node.js", "REST APIs", "Python"],
    },
    {
      icon: "Server",
      title: "Backend Architecture",
      description:
        "Modular backend systems and microservices designed for maintainability, performance and horizontal scaling.",
      technologies: ["Node.js", "Python", "Microservices"],
    },
    {
      icon: "Monitor",
      title: "Frontend Engineering",
      description:
        "Fast, accessible interfaces built with modern component architecture and performance budgets.",
      technologies: ["React", "Next.js", "TypeScript"],
    },
    {
      icon: "Database",
      title: "Database Design",
      description:
        "Normalized data models, query optimization and migration strategies that keep data consistent as it grows.",
      technologies: ["PostgreSQL", "MongoDB"],
    },
    {
      icon: "RefreshCw",
      title: "Application Modernization",
      description:
        "Incremental migration of aging applications to modern stacks while preserving business logic.",
      technologies: ["Next.js", "Docker", "CI/CD"],
    },
    {
      icon: "ListChecks",
      title: "Quality Assurance & Automated Testing",
      description:
        "Unit, integration and end-to-end test suites that run automatically on every change.",
      technologies: ["Automated Testing", "CI/CD"],
    },
    {
      icon: "LifeBuoy",
      title: "Application Maintenance",
      description:
        "Ongoing monitoring, patching and incremental improvements that keep production software healthy.",
      technologies: ["Monitoring", "CI/CD"],
    },
  ],
  useCases: [
    {
      icon: "Layers",
      title: "SaaS Product Development",
      description:
        "Multi-tenant SaaS platforms with subscription workflows, role-based access and scalable, billing-ready architecture.",
    },
    {
      icon: "RefreshCw",
      title: "Legacy Application Modernization",
      description:
        "Incremental migration of aging applications to modern stacks while preserving business logic and minimizing downtime.",
    },
    {
      icon: "Webhook",
      title: "API & Platform Engineering",
      description:
        "REST APIs and integration platforms that connect internal tools, partners and third-party services reliably.",
    },
    {
      icon: "Wrench",
      title: "Internal Tooling",
      description:
        "Purpose-built internal applications that replace spreadsheets and manual processes with reliable workflows.",
    },
    {
      icon: "Gauge",
      title: "Performance Optimization",
      description:
        "Profiling, refactoring and infrastructure tuning for applications that slow down under load.",
    },
  ],
  technologyCategories: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Python", "REST APIs"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
    { category: "Architecture", items: ["Microservices", "Modular Architecture"] },
    { category: "Quality", items: ["Automated Testing", "CI/CD"] },
  ],
  outcomes: [
    {
      icon: "Zap",
      title: "Improved Operational Efficiency",
      description:
        "Systems built around real processes remove friction from daily work.",
    },
    {
      icon: "Clock",
      title: "Faster Delivery Cycles",
      description:
        "Modular architecture and automated testing shorten time from idea to production.",
    },
    {
      icon: "TrendingUp",
      title: "Better Scalability",
      description:
        "Systems designed to grow handle increased load without re-architecture.",
    },
    {
      icon: "ShieldCheck",
      title: "Reduced Technical Risk",
      description:
        "Testing, review and proven patterns lower the chance of costly failures.",
    },
    {
      icon: "Wrench",
      title: "Long-Term Maintainability",
      description:
        "Clean, documented code keeps systems economical to evolve for years.",
    },
  ],
  engagementModels: [
    {
      icon: "Users",
      title: "Dedicated Development",
      description:
        "A dedicated engineering team embedded within your project — ideal for long-term product builds, platform evolution and sustained feature development.",
    },
    {
      icon: "Milestone",
      title: "Project-Based Engagement",
      description:
        "Fixed-scope delivery with defined milestones, timelines and acceptance criteria — suited to well-defined applications, APIs or platform builds.",
    },
    {
      icon: "Compass",
      title: "Consulting & Technical Advisory",
      description:
        "Architecture reviews, technology selection and engineering strategy for teams that need expert guidance before committing to a build.",
    },
    {
      icon: "LifeBuoy",
      title: "Ongoing Support & Optimization",
      description:
        "Continuous maintenance, performance tuning and incremental improvements that keep production software healthy as it grows.",
    },
  ],
  faqs: [
    {
      question: "What types of software projects does BLACK VAVE handle?",
      answer:
        "We build enterprise web applications, SaaS platforms, REST APIs, backend systems, internal tools and data-driven applications. Our engineering work spans greenfield product development, legacy modernization and performance optimization — always aligned to your operational requirements rather than a generic template.",
    },
    {
      question: "How does your software development process work?",
      answer:
        "We follow a six-stage lifecycle: discovery and requirements, architecture and strategy, iterative design and engineering, integration and testing, controlled deployment, and ongoing optimization. Each stage produces concrete deliverables, so you always know what is being built and why.",
    },
    {
      question: "Can you integrate new software with our existing systems?",
      answer:
        "Yes. Integration is a core part of our architecture work. We connect new applications to ERPs, CRMs, databases and third-party services through REST APIs, webhooks and event-driven patterns, with data validation and error handling designed in from the start.",
    },
    {
      question: "Which technologies do you use?",
      answer:
        "Our core stack includes React, Next.js, TypeScript, Node.js, Python, PostgreSQL and MongoDB. We select technologies per project based on your team, scale requirements and long-term maintainability — we do not force a single stack onto every engagement.",
    },
    {
      question: "Can you modernize our existing applications?",
      answer:
        "We approach modernization incrementally. We assess the current system, identify the highest-risk components, and migrate functionality in phases — often using strangler patterns — so operations continue while the new system takes over.",
    },
    {
      question: "How do you approach security and scalability?",
      answer:
        "Security starts with threat modeling, authentication, role-based access and input validation, and continues with dependency review and secure deployment practices. Scalability is addressed through stateless services, database indexing, caching and load testing before release.",
    },
    {
      question: "Do you provide ongoing maintenance after launch?",
      answer:
        "Yes. Our ongoing support model includes monitoring, patching, performance tuning and incremental feature development. Support can be scoped to a fixed retainer or adjusted as your product evolves.",
    },
    {
      question: "How can we get started?",
      answer:
        "Start with a discovery conversation. Share your goals and current challenges through our contact page, and we will schedule a scoping session to outline requirements, architecture options and a phased delivery plan.",
    },
  ],
  relatedServices: ["digital-experience", "cloud-devops", "enterprise-applications"],
  technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB"],
};
