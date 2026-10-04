import type { Industry } from "./types";

export const manufacturing: Industry = {
  title: "Manufacturing",
  slug: "manufacturing",
  tagline: "Connected operations, real-time production visibility",
  description:
    "Building digital systems that modernize manufacturing operations, improve production visibility and support supply chain management.",
  metaDescription:
    "BLACK VAVE CORPORATION builds manufacturing technology — MES integration, IIoT platforms, predictive maintenance, production analytics and supply chain systems.",
  icon: "Factory",
  theme: {
    accent: "#4FB6D8",
    accentLight: "#7DD0EA",
    accentDark: "#3892AF",
    tint: "rgba(79, 182, 216, 0.08)",
  },

  hero: {
    headline: "Manufacturing Systems That Keep The Line Running",
    subheadline:
      "We connect plant floor equipment, production management and supply chain data into one operational picture, so teams act on what is happening now rather than reconciling yesterday's spreadsheets.",
  },

  stats: [
    { value: "OPC-UA", label: "Standards-Based OT Integration" },
    { value: "Real-Time", label: "Production Data Capture" },
    { value: "ISO 27001", label: "Aligned Security Practice" },
    { value: "Predictive", label: "Maintenance & Quality Analytics" },
  ],

  challenges: [
    {
      icon: "Gauge",
      title: "Limited Production Visibility",
      description:
        "Many plants still rely on manual reporting and paper travelers, so downtime, cycle time and defect causes are only visible after the shift has already ended.",
    },
    {
      icon: "RefreshCw",
      title: "Legacy OT And IT Integration Gaps",
      description:
        "Operational technology on the floor often predates modern IT by decades. Connecting PLCs, SCADA and enterprise systems without disrupting production is a persistent integration challenge.",
    },
    {
      icon: "ShieldAlert",
      title: "Operational Technology Security Risk",
      description:
        "Industrial networks were historically air-gapped and are now increasingly exposed. A compromised control system can halt production or create physical safety risk.",
    },
    {
      icon: "Boxes",
      title: "Supply Chain Disruption",
      description:
        "Supplier delays, material shortages and demand swings ripple through production schedules, causing idle lines, expedited freight and costly schedule changes.",
    },
    {
      icon: "ScanText",
      title: "Inconsistent Quality Data",
      description:
        "When inspection results, non-conformance reports and batch records live in disconnected systems, root cause analysis takes days instead of hours and defects recur.",
    },
  ],

  approach: [
    {
      title: "Plant Systems Assessment",
      description:
        "We map equipment, control systems, existing MES and ERP relationships, and network topology, so integration work is planned against reality rather than an assumed architecture.",
    },
    {
      title: "Connectivity And Data Pipeline",
      description:
        "We build standards-based connectivity using OPC-UA, MQTT and industrial gateways, keeping the plant floor isolated and read-safe while streaming usable data upstream.",
    },
    {
      title: "Process And Quality Integration",
      description:
        "Production orders, work centers, genealogy and inspection results are modelled so operators and quality teams work from a single operational record instead of parallel spreadsheets.",
    },
    {
      title: "Predictive Analytics",
      description:
        "Sensor and machine data feed models that detect drift, predict equipment failure and flag process anomalies before they turn into downtime or scrap.",
    },
    {
      title: "Rollout By Production Cell",
      description:
        "Deployment follows the production calendar. We pilot on one line or asset class, prove value against measured baseline, then replicate across the plant without halting output.",
    },
  ],

  products: [
    {
      icon: "LayoutDashboard",
      title: "Manufacturing Execution System (MES)",
      description:
        "A production management layer that manages work orders, routings, shop-floor execution and genealogy in real time, giving operations a live view of every line and work center.",
      features: [
        "Real-time work order and routing execution",
        "Shop-floor terminal and barcode/RFID scanning",
        "Full batch and material genealogy tracking",
        "Downtime, cycle time and OEE calculation",
      ],
    },
    {
      icon: "Cpu",
      title: "IIoT Connectivity And Telemetry Platform",
      description:
        "An edge-to-cloud platform that securely collects machine data, normalizes tags across mixed equipment and streams high-frequency telemetry into operational systems.",
      features: [
        "OPC-UA, Modbus and MQTT protocol support",
        "Edge buffering for unreliable network segments",
        "Tag normalization across mixed vendor equipment",
        "Unidirectional plant-to-cloud data isolation",
      ],
    },
    {
      icon: "Activity",
      title: "Predictive Maintenance System",
      description:
        "Condition-monitoring models built on vibration, temperature and runtime data that identify developing faults and schedule maintenance before unplanned failure.",
      features: [
        "Vibration, thermal and runtime signal analysis",
        "Asset health scoring and degradation trending",
        "Automated work order generation on threshold breach",
        "Maintenance history and asset registry integration",
      ],
    },
    {
      icon: "GitBranch",
      title: "Supply Chain And Inventory Platform",
      description:
        "End-to-end material visibility from supplier through production to despatch, with demand signals, shortage forecasting and supplier performance scoring.",
      features: [
        "Multi-echelon inventory visibility",
        "Supplier lead time and performance scoring",
        "Shortage and shortage-risk forecasting",
        "Purchase order and goods receipt automation",
      ],
    },
    {
      icon: "ShieldCheck",
      title: "Quality And Compliance Suite",
      description:
        "Digital quality management covering inspection plans, non-conformance, CAPA workflows, audit trails and certification reporting across the plant.",
      features: [
        "Inspection plans with automated sampling rules",
        "Non-conformance and CAPA workflow tracking",
        "ISO 9001 and IATF 16949-ready audit trails",
        "Digital batch records for regulatory submission",
      ],
    },
    {
      icon: "LineChart",
      title: "Production Analytics And OEE Dashboard",
      description:
        "Operational dashboards that turn collected machine and process data into shift, line and plant performance views your production leadership can act on immediately.",
      features: [
        "OEE, downtime reason and loss analysis",
        "Shift and line performance comparison",
        "Energy consumption and scrap trend tracking",
        "Scheduled reporting to plant leadership",
      ],
    },
  ],

  services: [
    "software-engineering",
    "data-analytics",
    "cloud-devops",
    "ai-automation",
    "enterprise-applications",
  ],

  useCases: [
    {
icon: "Factory",
      title: "Shop Floor Execution",
      description:
        "Digital work instructions and real-time job tracking so operators know exactly what to run next and supervisors see progress without walking the floor.",
    },
    {
      icon: "Activity",
      title: "Asset Downtime Reduction",
      description:
        "Identify the true causes of unplanned stops, distinguish breakdown from changeover and setup loss, and target maintenance spend where it reduces output loss.",
    },
    {
      icon: "Wrench",
      title: "Tooling And Spare Parts Management",
      description:
        "Track tooling life, calibration intervals and spare part consumption so critical assets are available when a changeover is due.",
    },
    {
      icon: "Boxes",
      title: "Supplier Integration",
      description:
        "Connect suppliers directly to demand and delivery schedules, reducing manual purchase follow-up and improving inbound material reliability.",
    },
    {
      icon: "ShieldCheck",
      title: "Energy And Sustainability Tracking",
      description:
        "Measure consumption per unit produced against targets to support energy reduction programmes and sustainability reporting obligations.",
    },
    {
      icon: "Users",
      title: "Multi-Site Operations Visibility",
      description:
        "Standardize reporting across plants and lines so leadership compares performance on consistent definitions rather than site-specific spreadsheets.",
    },
  ],

  compliance: [
    "ISO 9001 quality management",
    "ISO 27001 information security",
    "IEC 62443 operational technology security",
    "OPC-UA and IEC 62541 standards",
    "GDPR for employee and supplier data",
    "IATF 16949 automotive quality (where applicable)",
  ],

  technologyCategories: [
    {
      category: "Industrial Connectivity",
      items: [
        "OPC-UA",
        "MQTT Sparkplug B",
        "Modbus TCP",
        "Siemens S7 / Rockwell PLC",
        "Edge Gateways",
        " Historian Pipelines",
      ],
    },
    {
      category: "Core Platforms",
      items: [
        ".NET and Java",
        "Node.js",
        "React and Next.js",
        "Python",
        "Event-driven Microservices",
        "REST and GraphQL APIs",
      ],
    },
    {
      category: "Data And Analytics",
      items: [
        "PostgreSQL and TimescaleDB",
        "Apache Kafka",
        "Snowflake",
        "Apache Spark",
        "dbt and Airflow",
        "Machine Learning Pipelines",
      ],
    },
    {
      category: "Manufacturing Systems",
      items: [
        "SAP MES / Opcenter",
        "Tulip / Ignition SCADA",
        "Rockwell FactoryTalk",
        "AVEVA / Teamcenter",
        "ERP Integration (SAP, Oracle)",
        "CMMS Platforms",
      ],
    },
    {
      category: "Infrastructure And Security",
      items: [
        "AWS and Azure IoT",
        "Kubernetes and Docker",
        "Network Segmentation",
        "OPC-UA Security Profiles",
        "Terraform IaC",
        "Centralized Logging",
      ],
    },
  ],

  outcomes: [
    {
      icon: "Gauge",
      title: "Improved Production Visibility",
      description:
        "Live, trustworthy data on every line and asset, so decisions are made from current production state rather than end-of-shift summaries.",
    },
    {
      icon: "Wrench",
      title: "Reduced Unplanned Downtime",
      description:
        "Condition monitoring and predictive maintenance move failures from unplanned stops to scheduled interventions.",
    },
    {
      icon: "Boxes",
      title: "Optimized Resource Utilization",
      description:
        "Better material availability, labor scheduling and asset usage reduce waste across the production system.",
    },
    {
      icon: "TrendingUp",
      title: "Higher Throughput And OEE",
      description:
        "Identifying and eliminating the largest sources of loss — downtime, changeover and speed loss — produces measurable capacity gains without new equipment.",
    },
    {
      icon: "ShieldCheck",
      title: "Consistent Quality And Traceability",
      description:
        "Complete batch and process records make root cause analysis fast and satisfy certification and customer audit requirements.",
    },
    {
      icon: "LineChart",
      title: "Lower Cost Of Production",
      description:
        "Better planning, reduced scrap and improved asset utilization reduce the cost per unit produced across the plant.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Plant Assessment",
      description:
        "A structured study of your plant systems, data flows and loss patterns, ending in a prioritized roadmap with estimated payback per initiative.",
    },
    {
      icon: "Code2",
      title: "Dedicated Delivery Team",
      description:
        "An engineering squad that builds and integrates your manufacturing platform, working within your plant systems and production schedule.",
    },
    {
      icon: "Puzzle",
      title: "Modular Rollout",
      description:
        "Deliver capability in stages — starting with shop-floor visibility, then quality, then predictive analytics — with each stage independently valuable.",
    },
  ],

  faqs: [
    {
      question: "Will this work with our existing PLCs and SCADA systems?",
      answer:
        "Yes. Integration is designed around what you already run rather than what is easiest to build. We connect through OPC-UA, Modbus and industrial gateway protocols across major vendors including Siemens and Rockwell. Where equipment predates modern protocols, we use edge gateways with buffering so plant networks stay isolated and we do not introduce risk to production.",
    },
    {
      question: "How do you avoid disrupting production during implementation?",
      answer:
        "We schedule deployment against your production calendar and pilot on a single line before extending. Work is designed to be reversible, we avoid changes during peak runs, and your operations team approves each rollout stage. Most plants continue producing normally throughout the engagement.",
    },
    {
      question: "Can you keep plant data secure and satisfy IT security requirements?",
      answer:
        "We apply IEC 62443 principles by default: network segmentation between the plant floor and corporate IT, unidirectional or strictly allow-listed data paths out of the control network, and no inbound connectivity to production equipment. Architecture is reviewed with your IT and OT security teams before implementation.",
    },
    {
      question: "How quickly do we see value from a manufacturing project?",
      answer:
        "Visibility comes first because it is usually where the biggest gaps are. A shop-floor execution and OEE baseline typically delivers measurable improvement within the first quarter, and predictive maintenance models need several months of machine data before they reach useful accuracy. We are explicit about this timeline during scoping rather than overstating early results.",
    },
    {
      question: "Do we need to replace our existing ERP or MES?",
      answer:
        "Usually not. The majority of our work is integration-first: we connect your existing ERP, MES and quality systems into a coherent operational picture. Where a specific capability is genuinely missing we build it, but we rarely find that a full replacement is the right answer.",
    },
    {
      question: "What happens to our production data at the end of the engagement?",
      answer:
        "You own it. We document the architecture, export everything in open formats, and support migration to your internal team or another provider. Industrial data is often highly sensitive, so we treat clean exit and data ownership as requirements from the start.",
    },
  ],

  relatedIndustries: [
    "agriculture",
    "retail-ecommerce",
    "enterprise-organizations",
  ],
};