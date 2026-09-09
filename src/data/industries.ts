export interface Industry {
  title: string;
  slug: string;
  description: string;
  challenge: string;
  approach: string;
  technologies: string[];
  outcomes: string[];
  icon: string;
}

export const industries: Industry[] = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Building technology that improves patient outcomes, streamlines clinical workflows and supports healthcare organizations in delivering quality care.",
    challenge:
      "Healthcare organizations face growing pressure to modernize patient management, comply with regulatory requirements, integrate disparate systems and improve care delivery efficiency while maintaining data security.",
    approach:
      "We design secure, compliant healthcare technology solutions that integrate with existing clinical workflows, improve patient data management and support telemedicine and remote care capabilities.",
    technologies: ["HIPAA-Compliant Systems", "Telemedicine Platforms", "EHR Integration", "Health Data Analytics"],
    outcomes: [
      "Improved patient data management",
      "Streamlined clinical workflows",
      "Enhanced telemedicine capabilities",
      "Regulatory compliance support",
    ],
    icon: "Heart",
  },
  {
    title: "Education",
    slug: "education",
    description:
      "Developing digital learning platforms, student management systems and educational technology that supports modern teaching and learning.",
    challenge:
      "Educational institutions need to modernize their digital infrastructure, support remote and hybrid learning models, streamline administrative processes and improve student engagement through technology.",
    approach:
      "We build comprehensive education technology platforms including learning management systems, student information systems and administrative tools designed for scalability and ease of use.",
    technologies: ["LMS Platforms", "Student Information Systems", "Virtual Classrooms", "Assessment Tools"],
    outcomes: [
      "Modernized learning delivery",
      "Simplified administrative processes",
      "Improved student engagement",
      "Scalable digital infrastructure",
    ],
    icon: "GraduationCap",
  },
  {
    title: "Financial Services",
    slug: "financial-services",
    description:
      "Engineering secure, compliant technology solutions for banking, insurance, fintech and financial advisory organizations.",
    challenge:
      "Financial services organizations must navigate complex regulatory requirements, manage sensitive data securely, modernize legacy systems and deliver digital experiences that meet evolving customer expectations.",
    approach:
      "We build secure, compliant financial technology solutions with robust data protection, regulatory adherence and modern user interfaces that improve both operational efficiency and customer experience.",
    technologies: ["Secure Payment Systems", "Regulatory Compliance", "Risk Analytics", "Digital Banking Platforms"],
    outcomes: [
      "Enhanced regulatory compliance",
      "Improved data security",
      "Streamlined financial operations",
      "Modern customer experiences",
    ],
    icon: "DollarSign",
  },
  {
    title: "Retail & E-commerce",
    slug: "retail-ecommerce",
    description:
      "Building digital commerce platforms, inventory systems and customer experience solutions for modern retail businesses.",
    challenge:
      "Retail businesses need integrated digital commerce solutions that manage products, orders, inventory, customer relationships and analytics across multiple channels while delivering seamless customer experiences.",
    approach:
      "We design and build end-to-end retail technology solutions including e-commerce platforms, inventory management systems and customer analytics tools that unify operations and drive growth.",
    technologies: ["E-commerce Platforms", "Inventory Management", "Payment Integration", "Customer Analytics"],
    outcomes: [
      "Unified commerce operations",
      "Improved inventory visibility",
      "Enhanced customer experience",
      "Data-driven retail decisions",
    ],
    icon: "ShoppingBag",
  },
  {
    title: "Publishing",
    slug: "publishing",
    description:
      "Developing content management systems, digital publishing platforms and subscription solutions for modern media organizations.",
    challenge:
      "Publishing organizations need digital platforms that manage content creation, distribution and monetization while supporting subscription models, audience analytics and multi-format content delivery.",
    approach:
      "We build comprehensive publishing technology platforms including CMS solutions, digital subscription systems and content analytics tools designed for editorial efficiency and audience growth.",
    technologies: ["Content Management Systems", "Digital Publishing", "Subscription Platforms", "Content Analytics"],
    outcomes: [
      "Streamlined content operations",
      "Flexible monetization models",
      "Improved audience engagement",
      "Multi-format content delivery",
    ],
    icon: "BookOpen",
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description:
      "Building digital systems that modernize manufacturing operations, improve production visibility and support supply chain management.",
    challenge:
      "Manufacturing organizations need digital systems to improve production visibility, manage supply chains, optimize resource utilization and modernize legacy operational processes.",
    approach:
      "We develop manufacturing technology solutions including production management systems, supply chain platforms and operational dashboards that improve visibility and drive efficiency.",
    technologies: ["Production Management", "Supply Chain Systems", "IoT Integration", "Operational Analytics"],
    outcomes: [
      "Improved production visibility",
      "Optimized resource utilization",
      "Streamlined supply chain",
      "Data-driven operations",
    ],
    icon: "Factory",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Creating property management platforms, listing systems and digital solutions that modernize real estate operations.",
    challenge:
      "Real estate organizations need digital platforms to manage properties, streamline transactions, improve client experiences and modernize operational workflows.",
    approach:
      "We build real estate technology solutions including property management platforms, listing systems and client relationship tools that modernize operations and improve efficiency.",
    technologies: ["Property Management Systems", "Listing Platforms", "CRM Integration", "Document Management"],
    outcomes: [
      "Streamlined property management",
      "Improved client experiences",
      "Automated transaction workflows",
      "Centralized data management",
    ],
    icon: "Building",
  },
  {
    title: "Professional Services",
    slug: "professional-services",
    description:
      "Building technology solutions for consulting firms, law practices, accounting firms and other professional service organizations.",
    challenge:
      "Professional service firms need systems to manage client relationships, track project delivery, handle billing and improve team collaboration while maintaining data security and compliance.",
    approach:
      "We develop professional services technology including project management platforms, client portals and operational dashboards that improve service delivery and business management.",
    technologies: ["Project Management", "Client Portals", "Billing Systems", "Team Collaboration Tools"],
    outcomes: [
      "Improved project delivery tracking",
      "Enhanced client communication",
      "Streamlined billing processes",
      "Better team collaboration",
    ],
    icon: "Briefcase",
  },
  {
    title: "Agriculture",
    slug: "agriculture",
    description:
      "Developing agricultural technology solutions that improve farm management, supply chain visibility and data-driven farming decisions.",
    challenge:
      "Agricultural organizations need digital tools to manage operations, track supply chains, analyze data and improve productivity while addressing sustainability and compliance requirements.",
    approach:
      "We build agricultural technology platforms including farm management systems, supply chain tracking and data analytics tools that support modern farming operations.",
    technologies: ["Farm Management Systems", "Supply Chain Tracking", "Data Analytics", "IoT Monitoring"],
    outcomes: [
      "Improved farm management",
      "Enhanced supply chain visibility",
      "Data-driven decisions",
      "Sustainability tracking",
    ],
    icon: "Leaf",
  },
  {
    title: "Startups & SMEs",
    slug: "startups-smes",
    description:
      "Building scalable technology foundations for startups and small-to-medium enterprises that support growth from day one.",
    challenge:
      "Startups and SMEs need technology solutions that are cost-effective, scalable and built for growth. They require engineering partners who understand lean operations and rapid iteration.",
    approach:
      "We build scalable technology foundations for growing businesses, focusing on MVP development, iterative improvement and architecture that supports growth without requiring complete rebuilds.",
    technologies: ["MVP Development", "Cloud-Native Architecture", "API Development", "Rapid Prototyping"],
    outcomes: [
      "Scalable technology foundation",
      "Faster time to market",
      "Cost-effective development",
      "Architecture ready for growth",
    ],
    icon: "Rocket",
  },
  {
    title: "Enterprise Organizations",
    slug: "enterprise-organizations",
    description:
      "Delivering large-scale technology transformations, custom enterprise systems and strategic digital initiatives for complex organizations.",
    challenge:
      "Enterprise organizations face complex technology landscapes with legacy systems, multiple departments, strict compliance requirements and the need for large-scale digital transformation initiatives.",
    approach:
      "We partner with enterprise organizations to design and implement large-scale technology solutions that modernize operations, integrate complex systems and support organizational transformation.",
    technologies: ["Enterprise Architecture", "System Integration", "Cloud Migration", "Enterprise Security"],
    outcomes: [
      "Successful digital transformation",
      "Modernized legacy systems",
      "Improved operational efficiency",
      "Scalable enterprise architecture",
    ],
    icon: "Globe",
  },
];
