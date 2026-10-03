import type { Service } from "./types";

export const enterpriseApplications: Service = {
  title: "Enterprise Applications",
  slug: "enterprise-applications",
  tagline: "Systems that power modern organizations",
  description:
    "CRM, ERP, HRMS, workflow platforms, business portals and internal enterprise systems designed for operational excellence.",
  metaDescription:
    "BLACK VAVE builds enterprise portals, CRM and ERP integrations, workflow platforms and internal applications with role-based access and secure architecture.",
  icon: "Building2",
  hero: {
    headline: "Integrated Systems That Power Modern Organizations",
    subheadline:
      "We design and build enterprise portals, CRM and ERP integrations, workflow platforms and internal applications that unify business functions across departments.",
    highlights: [
      "Enterprise Portals",
      "CRM & ERP Integration",
      "Workflow Management",
      "Role-Based Access",
    ],
  },
  challenges: [
    {
      icon: "Boxes",
      title: "Disconnected Business Tools",
      description:
        "CRM, ERP, HR and custom tools each hold fragments of the truth, forcing manual reconciliation.",
    },
    {
      icon: "Database",
      title: "Data Silos",
      description:
        "Departments maintain their own versions of records, creating inconsistencies and reporting conflicts.",
    },
    {
      icon: "Users",
      title: "Cross-Department Friction",
      description:
        "Processes that span teams break at handoff points where ownership and data transfer are unclear.",
    },
    {
      icon: "Key",
      title: "Permission Complexity",
      description:
        "As organizations grow, controlling who can see and do what becomes error-prone and audit-risky.",
    },
    {
      icon: "Wrench",
      title: "Rigid, Hard-to-Extend Systems",
      description:
        "Platforms that cannot adapt to new workflows force workarounds or expensive replacements.",
    },
  ],
  approach: [
    {
      title: "Process Discovery",
      description:
        "We document how departments actually work — workflows, data flows, roles and pain points.",
    },
    {
      title: "System Architecture",
      description:
        "We design the application landscape: modules, integrations, data model and permission structure.",
    },
    {
      title: "Application Design",
      description:
        "We design interfaces and workflows around real operational tasks, not generic CRUD screens.",
    },
    {
      title: "Integration & Data Consistency",
      description:
        "We connect the application to ERP, CRM and other systems with validation and synchronization.",
    },
    {
      title: "Access & Permissions",
      description:
        "We implement role-based access with least privilege and audit trails.",
    },
    {
      title: "Rollout & Adoption",
      description:
        "We deploy in phases with training, feedback loops and support through organizational adoption.",
    },
  ],
  capabilities: [
    {
      icon: "LayoutDashboard",
      title: "Enterprise Portals",
      description:
        "Unified intranet and extranet hubs connecting employees, partners and business systems.",
      technologies: ["Next.js", "React"],
    },
    {
      icon: "Plug",
      title: "ERP Integration & Development",
      description:
        "Connecting ERP modules with custom applications for consistent data across departments.",
      technologies: ["REST APIs", "Node.js"],
    },
    {
      icon: "Briefcase",
      title: "CRM Solutions",
      description:
        "Customer relationship systems with pipeline visibility, automation and reporting.",
      technologies: ["React", "PostgreSQL"],
    },
    {
      icon: "Wrench",
      title: "Internal Business Applications",
      description:
        "Purpose-built tools for operations, finance, HR and line-of-business teams.",
      technologies: ["React", "Node.js"],
    },
    {
      icon: "Key",
      title: "Role-Based Access Management",
      description:
        "Granular permissions, least privilege and audit trails for sensitive functions.",
      technologies: ["Role-Based Access Control"],
    },
    {
      icon: "Workflow",
      title: "Workflow Management",
      description:
        "Cross-department workflows with approvals, tracking and exception handling.",
      technologies: ["Node.js", "REST APIs"],
    },
    {
      icon: "Network",
      title: "Enterprise API Integration",
      description:
        "Integration layers that connect enterprise systems with consistent data contracts.",
      technologies: ["REST APIs", "Enterprise Integrations"],
    },
    {
      icon: "Boxes",
      title: "Multi-Tenant Systems",
      description:
        "Platforms serving multiple business units or clients with secure data isolation.",
      technologies: ["PostgreSQL", "Node.js"],
    },
    {
      icon: "BarChart3",
      title: "Reporting & Operational Dashboards",
      description:
        "Operational visibility through dashboards and reports tied to business activity.",
      technologies: ["React", "PostgreSQL"],
    },
    {
      icon: "ShieldCheck",
      title: "Secure Application Architecture",
      description:
        "Security built into the architecture — authentication, authorization, audit logging.",
      technologies: ["Role-Based Access Control", "REST APIs"],
    },
  ],
  useCases: [
    {
      icon: "LayoutDashboard",
      title: "Enterprise Portal",
      description:
        "A unified intranet or extranet hub connecting employees, partners and business systems.",
    },
    {
      icon: "Briefcase",
      title: "CRM Implementation",
      description:
        "Customer relationship systems with pipeline visibility, automation and reporting.",
    },
    {
      icon: "Plug",
      title: "ERP Integration",
      description:
        "Connecting ERP modules with custom applications for consistent data across departments.",
    },
    {
      icon: "Workflow",
      title: "Internal Workflow Platform",
      description:
        "Cross-department workflows with approvals, tracking and role-based access.",
    },
    {
      icon: "Boxes",
      title: "Multi-Tenant Platform",
      description:
        "SaaS-style enterprise platforms serving multiple business units or clients with data isolation.",
    },
  ],
  technologyCategories: [
    { category: "Frontend", items: ["React", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python"] },
    { category: "Data & APIs", items: ["PostgreSQL", "REST APIs"] },
    { category: "Security", items: ["Role-Based Access Control"] },
    { category: "Integration", items: ["Enterprise Integrations"] },
  ],
  outcomes: [
    {
      icon: "Boxes",
      title: "Unified Business Systems",
      description:
        "Connected applications eliminate duplicate data entry and reconciliation.",
    },
    {
      icon: "Eye",
      title: "Cross-Functional Visibility",
      description:
        "Shared data gives leadership a consistent view of operations.",
    },
    {
      icon: "Database",
      title: "Reduced Data Silos",
      description:
        "A single source of truth improves reporting and decision quality.",
    },
    {
      icon: "Workflow",
      title: "Streamlined Operations",
      description:
        "Cross-department workflows run with fewer handoffs and delays.",
    },
    {
      icon: "ShieldCheck",
      title: "Secure, Controlled Access",
      description:
        "Role-based permissions protect sensitive business functions.",
    },
  ],
  engagementModels: [
    {
      icon: "Users",
      title: "Dedicated Development",
      description:
        "A dedicated product team for long-lived enterprise platforms that evolve with your organization.",
    },
    {
      icon: "Milestone",
      title: "Project-Based Engagement",
      description:
        "Defined projects — a portal launch, CRM integration, workflow platform build — delivered against agreed milestones.",
    },
    {
      icon: "Compass",
      title: "Consulting & Technical Advisory",
      description:
        "Application landscape reviews, integration strategy and platform design guidance for enterprise stakeholders.",
    },
    {
      icon: "LifeBuoy",
      title: "Ongoing Support & Optimization",
      description:
        "Application maintenance, access management and feature evolution for mission-critical business systems.",
    },
  ],
  faqs: [
    {
      question: "How is enterprise application development different from website development?",
      answer:
        "Enterprise applications center on workflows, permissions, integrations and data consistency across departments — not primarily on public-facing content. They require role-based access, audit trails, integration with systems like ERP and CRM, and architecture that supports many concurrent internal users.",
    },
    {
      question: "Can you integrate with our ERP or CRM?",
      answer:
        "Yes. We integrate with ERP and CRM platforms through their APIs, middleware or data synchronization patterns. The integration layer validates and maps data so records stay consistent across systems.",
    },
    {
      question: "How do you handle role-based access?",
      answer:
        "We design permission models around real organizational roles, apply least privilege, and log access to sensitive functions. Permission structures are configurable so they evolve with your organization without code changes.",
    },
    {
      question: "What about multi-tenant architecture?",
      answer:
        "For platforms serving multiple business units or clients, we implement tenant isolation at the data and configuration level, with per-tenant settings, branding and access policies where required.",
    },
    {
      question: "How do you ensure data consistency across departments?",
      answer:
        "We establish a single source of truth for shared records, use validation at integration points, and synchronize data through defined contracts — so sales, operations and finance work from the same information.",
    },
    {
      question: "What is the typical timeline for an enterprise application?",
      answer:
        "Timelines vary with scope. We deliver in phases — a working core first, then modules and integrations — so the organization sees value early and can adjust direction between phases.",
    },
    {
      question: "Do you build mobile-friendly internal tools?",
      answer:
        "Yes. Internal applications are built responsive by default, so field teams, managers and executives can use them on phones and tablets without a separate app.",
    },
    {
      question: "How do we get started?",
      answer:
        "We begin with a process discovery workshop: mapping workflows, data flows, roles and pain points across departments. From that, we propose an architecture and a phased delivery plan.",
    },
  ],
  relatedServices: ["software-engineering", "data-analytics", "digital-transformation"],
  technologies: ["React", "Node.js", "PostgreSQL", "REST APIs", "Cloud Services"],
};
