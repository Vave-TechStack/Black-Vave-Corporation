export interface Service {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  outcome: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Software Engineering",
    slug: "software-engineering",
    tagline: "Precision-built systems for complex business needs",
    description:
      "Enterprise web applications, platforms, APIs, backend systems and custom software engineered for reliability, scale and performance.",
    problem:
      "Off-the-shelf software rarely fits the complexity of modern business operations. Organizations need systems that align with their unique processes, data models and growth trajectories.",
    solution:
      "We architect and engineer custom software solutions using proven engineering practices, modern frameworks and scalable architecture patterns. Every system is built for maintainability, security and long-term evolution.",
    capabilities: [
      "Enterprise Web Applications",
      "Custom Platform Development",
      "API Design & Engineering",
      "Backend Systems & Microservices",
      "Database Architecture",
      "System Integration",
      "Performance Optimization",
      "Legacy System Modernization",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB"],
    outcome:
      "Reliable, scalable software systems that reduce operational friction, improve efficiency and support business growth.",
    icon: "Code2",
  },
  {
    title: "AI & Intelligent Automation",
    slug: "ai-automation",
    tagline: "Making businesses smarter through intelligent systems",
    description:
      "AI-powered applications, workflow automation, intelligent assistants, document processing and business automation that transform how organizations operate.",
    problem:
      "Manual processes consume valuable resources. Organizations handle repetitive tasks that drain productivity while data-driven decisions remain difficult to operationalize at scale.",
    solution:
      "We design and implement AI-powered systems that automate complex workflows, extract intelligence from documents and data, and create intelligent assistants that augment human capability.",
    capabilities: [
      "AI-Powered Applications",
      "Workflow Automation",
      "Intelligent Document Processing",
      "Business Process Automation",
      "AI Assistants & Chatbots",
      "Predictive Analytics",
      "Custom AI Model Integration",
      "Generative AI Solutions",
    ],
    technologies: ["Python", "Generative AI", "LLM Integration", "AI Agents", "Document Intelligence"],
    outcome:
      "Reduced manual overhead, faster processing, improved accuracy and AI-driven insights that support better business decisions.",
    icon: "Brain",
  },
  {
    title: "Digital Transformation",
    slug: "digital-transformation",
    tagline: "Modernizing operations for the digital era",
    description:
      "Modernizing legacy processes and transforming manual workflows into scalable digital systems that drive organizational performance.",
    problem:
      "Organizations accumulate legacy systems, fragmented workflows and manual processes that create inefficiency, increase risk and limit the ability to adapt to market changes.",
    solution:
      "We work with organizations to understand their operational landscape, identify transformation opportunities and implement digital systems that modernize processes while managing change effectively.",
    capabilities: [
      "Process Assessment & Strategy",
      "Legacy System Modernization",
      "Workflow Digitization",
      "Organizational Change Management",
      "Digital Operations Design",
      "Technology Roadmapping",
      "Data Migration",
      "Process Optimization",
    ],
    technologies: ["Cloud Platforms", "Enterprise Applications", "Workflow Systems", "Data Migration Tools"],
    outcome:
      "Streamlined operations, reduced manual dependency, improved data visibility and organizational agility to respond to change.",
    icon: "RefreshCw",
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    tagline: "Infrastructure that scales with your ambition",
    description:
      "Cloud architecture, deployment automation, CI/CD pipelines, monitoring, scalability engineering and infrastructure modernization.",
    problem:
      "Managing infrastructure manually creates bottlenecks, increases downtime risk and limits the ability to scale applications efficiently across environments.",
    solution:
      "We design cloud-native architectures, implement automated deployment pipelines and establish monitoring systems that ensure reliability, performance and cost efficiency at every scale.",
    capabilities: [
      "Cloud Architecture Design",
      "Infrastructure as Code",
      "CI/CD Pipeline Engineering",
      "Container Orchestration",
      "Monitoring & Observability",
      "Security & Compliance",
      "Cost Optimization",
      "Disaster Recovery Planning",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD", "Monitoring"],
    outcome:
      "Reliable, scalable infrastructure with automated deployments, real-time monitoring and reduced operational overhead.",
    icon: "Cloud",
  },
  {
    title: "Enterprise Applications",
    slug: "enterprise-applications",
    tagline: "Systems that power modern organizations",
    description:
      "CRM, ERP, HRMS, workflow platforms, business portals and internal enterprise systems designed for operational excellence.",
    problem:
      "Organizations rely on disconnected tools and spreadsheets to manage critical business functions. Data silos, manual handoffs and inconsistent processes create friction across departments.",
    solution:
      "We design and build enterprise applications that unify business functions, automate cross-department workflows and provide real-time visibility into organizational performance.",
    capabilities: [
      "CRM Systems",
      "ERP Integration & Development",
      "HRMS Platforms",
      "Business Portals",
      "Workflow Management Systems",
      "Internal Tool Development",
      "Reporting Dashboards",
      "Multi-tenant Platforms",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs", "Cloud Services"],
    outcome:
      "Unified business systems that improve cross-functional visibility, reduce data silos and streamline organizational operations.",
    icon: "Building2",
  },
  {
    title: "Data & Analytics",
    slug: "data-analytics",
    tagline: "Turning data into strategic advantage",
    description:
      "Dashboards, reporting systems, business intelligence and data-driven decision systems that transform raw data into actionable insight.",
    problem:
      "Data exists across multiple systems but lacks structure, context and accessibility. Organizations struggle to derive meaningful insights from the information they already possess.",
    solution:
      "We design data architectures, build analytics platforms and create visualization systems that make data accessible, actionable and aligned with business objectives.",
    capabilities: [
      "Dashboard Development",
      "Business Intelligence Systems",
      "Data Warehouse Design",
      "ETL Pipeline Engineering",
      "Real-time Analytics",
      "KPI Tracking Systems",
      "Custom Reporting",
      "Data Governance",
    ],
    technologies: ["PostgreSQL", "Python", "React", "Data Visualization", "Cloud Analytics"],
    outcome:
      "Clear visibility into business performance, faster data-driven decisions and a foundation for advanced analytics and AI initiatives.",
    icon: "BarChart3",
  },
  {
    title: "Digital Experience",
    slug: "digital-experience",
    tagline: "Interfaces that reflect your brand quality",
    description:
      "Premium websites, customer portals, modern digital interfaces and branded experiences designed for impact and conversion.",
    problem:
      "Digital touchpoints are often inconsistent, slow or fail to communicate the quality and positioning of the brand. Poor digital experiences erode trust and reduce engagement.",
    solution:
      "We design and engineer premium digital experiences that align with brand positioning, optimize for performance and create meaningful interactions across every digital touchpoint.",
    capabilities: [
      "Corporate Website Design",
      "Customer Portal Development",
      "Brand Digital Experience",
      "UX/UI Design",
      "Design System Creation",
      "Frontend Architecture",
      "Performance Optimization",
      "Responsive Design",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    outcome:
      "Premium digital presence that strengthens brand perception, improves user engagement and drives measurable business outcomes.",
    icon: "Monitor",
  },
];
