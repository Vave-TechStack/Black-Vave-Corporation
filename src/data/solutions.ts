export interface Solution {
  title: string;
  slug: string;
  description: string;
  features: string[];
  industries: string[];
}

export const solutions: Solution[] = [
  {
    title: "AI Business Automation",
    slug: "ai-business-automation",
    description:
      "Intelligent automation systems that reduce manual processes, accelerate workflows and bring AI-powered decision support to business operations.",
    features: [
      "Intelligent Document Processing",
      "Automated Workflow Engines",
      "AI-Powered Decision Support",
      "Natural Language Processing",
      "Predictive Business Analytics",
    ],
    industries: ["Healthcare", "Financial Services", "Education", "Professional Services"],
  },
  {
    title: "Enterprise Workflow Platforms",
    slug: "enterprise-workflow-platforms",
    description:
      "Custom workflow management systems that streamline cross-department processes, reduce bottlenecks and provide operational visibility.",
    features: [
      "Process Automation",
      "Approval Workflows",
      "Role-Based Access Control",
      "Real-Time Dashboards",
      "Integration Capabilities",
    ],
    industries: ["Enterprise Organizations", "Professional Services", "Manufacturing"],
  },
  {
    title: "Custom Business Applications",
    slug: "custom-business-applications",
    description:
      "Purpose-built applications designed around your specific business logic, data models and operational requirements.",
    features: [
      "Custom Data Models",
      "Business Logic Implementation",
      "API-First Architecture",
      "Scalable Backend Systems",
      "Responsive Frontend Design",
    ],
    industries: ["All Industries"],
  },
  {
    title: "Digital Commerce Platforms",
    slug: "digital-commerce-platforms",
    description:
      "End-to-end commerce solutions including product management, payment processing, inventory management and customer experience.",
    features: [
      "Product Catalog Management",
      "Payment Gateway Integration",
      "Order Management Systems",
      "Customer Accounts & Profiles",
      "Analytics & Reporting",
    ],
    industries: ["Retail & E-commerce", "Publishing"],
  },
  {
    title: "Customer Experience Platforms",
    slug: "customer-experience-platforms",
    description:
      "Unified platforms for managing customer interactions, support workflows and engagement across every digital channel.",
    features: [
      "Omnichannel Support",
      "Customer Portal Design",
      "Self-Service Solutions",
      "Live Chat Integration",
      "Feedback & Analytics",
    ],
    industries: ["Retail", "Financial Services", "Healthcare"],
  },
  {
    title: "HR & Workforce Solutions",
    slug: "hr-workforce-solutions",
    description:
      "Human resource management systems, recruitment platforms, employee portals and workforce analytics for modern organizations.",
    features: [
      "Recruitment Management",
      "Employee Self-Service",
      "Performance Tracking",
      "Payroll Integration",
      "Workforce Analytics",
    ],
    industries: ["Enterprise Organizations", "Professional Services", "Education"],
  },
  {
    title: "Healthcare Technology Solutions",
    slug: "healthcare-technology",
    description:
      "Digital solutions for healthcare organizations including patient management, telemedicine platforms, clinical workflows and health data systems.",
    features: [
      "Patient Management Systems",
      "Telemedicine Platforms",
      "Clinical Workflow Tools",
      "Health Data Analytics",
      "Regulatory Compliance",
    ],
    industries: ["Healthcare"],
  },
  {
    title: "Education Technology Solutions",
    slug: "education-technology",
    description:
      "Learning management systems, student information platforms, assessment tools and digital education infrastructure.",
    features: [
      "Learning Management Systems",
      "Student Information Systems",
      "Assessment & Grading Tools",
      "Virtual Classroom Platforms",
      "Administrative Portals",
    ],
    industries: ["Education"],
  },
  {
    title: "Publishing & Digital Content",
    slug: "publishing-digital-content",
    description:
      "Content management systems, digital publishing platforms, subscription management and content delivery solutions.",
    features: [
      "Content Management Systems",
      "Digital Publishing Platforms",
      "Subscription & Paywall Systems",
      "Content Delivery Optimization",
      "Editorial Workflow Tools",
    ],
    industries: ["Publishing", "Media"],
  },
  {
    title: "Data & Analytics Platforms",
    slug: "data-analytics-platforms",
    description:
      "Business intelligence dashboards, data warehousing, real-time analytics and data governance platforms for decision-makers.",
    features: [
      "Business Intelligence Dashboards",
      "Data Warehouse Architecture",
      "Real-Time Analytics Engine",
      "Data Governance Framework",
      "Custom Reporting Systems",
    ],
    industries: ["Financial Services", "Retail", "Healthcare", "Enterprise Organizations"],
  },
];
