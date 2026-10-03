import type { Service } from "./types";

export const cloudDevOps: Service = {
  title: "Cloud & DevOps",
  slug: "cloud-devops",
  tagline: "Infrastructure that scales with your ambition",
  description:
    "Cloud architecture, deployment automation, CI/CD pipelines, monitoring, scalability engineering and infrastructure modernization.",
  metaDescription:
    "BLACK VAVE designs cloud architecture, automates deployments with CI/CD, and implements monitoring for reliable, scalable, cost-efficient infrastructure.",
  icon: "Cloud",
  hero: {
    headline: "Infrastructure That Scales With Your Ambition",
    subheadline:
      "We architect cloud-native systems, automate deployments and establish monitoring that keeps applications reliable, secure and cost-efficient at every scale.",
    highlights: [
      "Cloud Architecture",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Observability",
    ],
  },
  challenges: [
    {
      icon: "Server",
      title: "Manual Infrastructure Management",
      description:
        "Hand-configured servers drift out of sync, slow deployments and make environments unreproducible.",
    },
    {
      icon: "Rocket",
      title: "Deployment Bottlenecks",
      description:
        "Manual release processes create long lead times, deployment fear and weekend launches.",
    },
    {
      icon: "Activity",
      title: "Downtime & Reliability Risk",
      description:
        "Without monitoring and failover, failures are discovered by customers before your team sees them.",
    },
    {
      icon: "DollarSign",
      title: "Cost Sprawl",
      description:
        "Unmanaged cloud resources, idle capacity and oversized instances quietly inflate bills.",
    },
    {
      icon: "Eye",
      title: "Visibility Gaps",
      description:
        "Teams cannot answer basic questions about performance, errors or user impact without observability.",
    },
  ],
  approach: [
    {
      title: "Infrastructure Assessment",
      description:
        "We review current environments, architectures and operational practices to establish a baseline.",
    },
    {
      title: "Architecture & Migration Planning",
      description:
        "We design the target cloud architecture and a phased migration approach with minimal downtime.",
    },
    {
      title: "Automation & Infrastructure as Code",
      description:
        "We codify infrastructure so environments are reproducible, reviewable and version-controlled.",
    },
    {
      title: "Pipeline Engineering",
      description:
        "We build CI/CD pipelines that automate build, test and release with environment promotion.",
    },
    {
      title: "Observability & Reliability",
      description:
        "We implement monitoring, alerting and resilience patterns so issues surface early and recover fast.",
    },
    {
      title: "Optimization & Governance",
      description:
        "We tune cost, performance and security continuously as workloads evolve.",
    },
  ],
  capabilities: [
    {
      icon: "Cloud",
      title: "Cloud Architecture",
      description:
        "Cloud-native architecture designed for availability, scale and cost control.",
      technologies: ["AWS", "Azure", "Google Cloud"],
    },
    {
      icon: "CloudUpload",
      title: "Cloud Migration",
      description:
        "Phased migration of applications and data with validation at each stage.",
      technologies: ["AWS", "Azure", "Google Cloud"],
    },
    {
      icon: "Wrench",
      title: "Infrastructure Automation",
      description:
        "Infrastructure as code that makes environments reproducible and auditable.",
      technologies: ["Infrastructure as Code", "Terraform Practices"],
    },
    {
      icon: "Container",
      title: "Containerization",
      description:
        "Docker-based packaging and Kubernetes orchestration where it fits your scale.",
      technologies: ["Docker", "Kubernetes"],
    },
    {
      icon: "GitBranch",
      title: "CI/CD Pipelines",
      description:
        "Automated build, test and release pipelines with environment promotion and rollback.",
      technologies: ["CI/CD", "Automated Testing"],
    },
    {
      icon: "ShieldCheck",
      title: "Cloud Security",
      description:
        "Least-privilege access, encryption and compliance practices built into infrastructure.",
      technologies: ["Cloud Security", "Compliance Practices"],
    },
    {
      icon: "Activity",
      title: "Infrastructure Monitoring",
      description:
        "Metrics, logs and traces with alerting that surfaces real issues early.",
      technologies: ["Monitoring", "Observability"],
    },
    {
      icon: "Rocket",
      title: "Application Deployment",
      description:
        "Release management with blue-green and canary strategies for safe rollouts.",
      technologies: ["CI/CD", "Docker"],
    },
    {
      icon: "Save",
      title: "Backup & Disaster Recovery",
      description:
        "Backup strategies and recovery plans aligned to your RTO and RPO requirements.",
      technologies: ["Cloud Platforms", "Monitoring"],
    },
    {
      icon: "Gauge",
      title: "Performance & Cost Optimization",
      description:
        "Rightsizing, waste elimination and architecture adjustments that control spend.",
      technologies: ["Monitoring", "Cloud Platforms"],
    },
  ],
  useCases: [
    {
      icon: "CloudUpload",
      title: "Cloud Migration",
      description:
        "Assessment, planning and phased migration of applications and data to cloud platforms.",
    },
    {
      icon: "GitBranch",
      title: "CI/CD Pipeline Engineering",
      description:
        "Automated build, test and release pipelines with environment promotion and rollback.",
    },
    {
      icon: "Container",
      title: "Containerization & Orchestration",
      description:
        "Docker-based packaging and Kubernetes orchestration where it fits your scale.",
    },
    {
      icon: "Activity",
      title: "Monitoring & Observability",
      description:
        "Metrics, logs and traces with alerting that surfaces real issues before customers do.",
    },
    {
      icon: "DollarSign",
      title: "Cost Optimization",
      description:
        "Rightsizing, waste elimination and architecture adjustments that reduce cloud spend.",
    },
  ],
  technologyCategories: [
    { category: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
    { category: "Containers", items: ["Docker", "Kubernetes"] },
    { category: "Delivery", items: ["CI/CD", "Infrastructure as Code"] },
    { category: "Operations", items: ["Monitoring", "Observability"] },
    { category: "Security", items: ["Cloud Security", "Compliance Practices"] },
  ],
  outcomes: [
    {
      icon: "Cloud",
      title: "Reliable, Scalable Infrastructure",
      description:
        "Cloud-native design keeps applications available as demand grows.",
    },
    {
      icon: "Rocket",
      title: "Automated Deployments",
      description:
        "Pipelines release software predictably, with rollback when needed.",
    },
    {
      icon: "Activity",
      title: "Real-Time Monitoring",
      description:
        "Observability surfaces issues before customers experience them.",
    },
    {
      icon: "Server",
      title: "Reduced Operational Overhead",
      description:
        "Infrastructure as code removes manual environment management.",
    },
    {
      icon: "DollarSign",
      title: "Cost Efficiency",
      description:
        "Right-sized resources and waste elimination control cloud spend.",
    },
  ],
  engagementModels: [
    {
      icon: "Users",
      title: "Dedicated Development",
      description:
        "An embedded infrastructure engineering team for sustained cloud programs, platform builds and operational maturity.",
    },
    {
      icon: "Milestone",
      title: "Project-Based Engagement",
      description:
        "Scoped infrastructure projects — migration, pipeline implementation, observability rollout — with clear deliverables.",
    },
    {
      icon: "Compass",
      title: "Consulting & Technical Advisory",
      description:
        "Cloud strategy, architecture review and cost optimization guidance for teams planning their infrastructure future.",
    },
    {
      icon: "LifeBuoy",
      title: "Ongoing Support & Optimization",
      description:
        "Managed infrastructure operations, monitoring refinement and continuous reliability and cost optimization.",
    },
  ],
  faqs: [
    {
      question: "Which cloud platforms do you work with?",
      answer:
        "We work with AWS, Microsoft Azure and Google Cloud, selecting the platform that fits your team, workloads and existing investments. BLACK VAVE is an independent engineering firm — we are not an official partner or reseller of any cloud provider.",
    },
    {
      question: "How do you approach cloud migration?",
      answer:
        "We start with an assessment of applications and dependencies, design the target architecture, then migrate in phases — starting with lower-risk workloads. Each phase includes validation, rollback planning and performance checks before the next begins.",
    },
    {
      question: "What does CI/CD implementation involve?",
      answer:
        "We build pipelines that automate build, test and deployment across environments, with environment promotion rules, automated quality gates and rollback paths. The goal is predictable releases that teams can ship without manual coordination.",
    },
    {
      question: "How do you ensure infrastructure security?",
      answer:
        "We apply least-privilege access, encryption at rest and in transit, infrastructure-as-code review, and continuous configuration monitoring. Security controls are defined in code so they are auditable and repeatable across environments.",
    },
    {
      question: "How do you handle monitoring and observability?",
      answer:
        "We implement metrics, logs and distributed tracing with dashboards and alerting tuned to real failure modes — not just CPU graphs. Alerts are routed to the right team with enough context to act quickly.",
    },
    {
      question: "Can you help reduce cloud costs?",
      answer:
        "Yes. We analyze usage for idle resources, oversized instances and unattached storage, then apply rightsizing, scheduling and architecture adjustments. Cost optimization is an ongoing practice, not a one-time cleanup.",
    },
    {
      question: "What about backup and disaster recovery?",
      answer:
        "We define backup strategies aligned to your recovery time and recovery point objectives, automate restores where possible, and run periodic recovery drills so the plan is proven rather than assumed.",
    },
    {
      question: "Do you support on-premises or hybrid setups?",
      answer:
        "Yes. Many organizations run hybrid environments. We design architectures that span on-premises and cloud infrastructure, with consistent automation, monitoring and security across both.",
    },
  ],
  relatedServices: ["software-engineering", "data-analytics", "digital-transformation"],
  technologies: ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD", "Monitoring"],
};
