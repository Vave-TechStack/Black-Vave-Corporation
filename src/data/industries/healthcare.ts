import type { Industry } from "./types";

export const healthcare: Industry = {
  title: "Healthcare",
  slug: "healthcare",
  tagline: "Secure, compliant technology that improves patient outcomes",
  description:
    "Building technology that improves patient outcomes, streamlines clinical workflows and supports healthcare organizations in delivering quality care.",
  metaDescription:
    "BLACK VAVE CORPORATION builds secure, HIPAA-compliant healthcare technology — EHR integration, telemedicine, patient portals and health data analytics.",
  icon: "Heart",
  theme: {
    accent: "#E4687C",
    accentLight: "#F4909F",
    accentDark: "#C24E62",
    tint: "rgba(228, 104, 124, 0.08)",
  },

  hero: {
    headline: "Healthcare Technology That Clinicians Actually Use",
    subheadline:
      "We engineer secure, compliant digital systems that fit the way clinical teams already work — improving patient outcomes without adding friction to care.",
  },

  stats: [
    { value: "HIPAA", label: "Aligned Engineering" },
    { value: "< 90 days", label: "To First Clinical Release" },
    { value: "24/7", label: "Monitoring & Support" },
    { value: "99.9%", label: "Platform Availability Target" },
  ],

  challenges: [
    {
      icon: "ShieldAlert",
      title: "Regulatory And Compliance Pressure",
      description:
        "HIPAA, GDPR, HITECH and regional data-residency rules constrain how patient data can be stored, processed and shared. Non-compliance carries severe financial and reputational consequences.",
    },
    {
      icon: "Database",
      title: "Fragmented Legacy Systems",
      description:
        "Most providers run a patchwork of Electronic Health Records, lab systems, billing platforms and referral tools that do not exchange data cleanly, forcing clinicians into manual workarounds.",
    },
    {
      icon: "Activity",
      title: "Clinical Workflow Disruption",
      description:
        "Technology introduced without clinical input creates parallel paperwork, longer shift transitions and alert fatigue. Clinicians disengage, and adoption — along with the intended benefit — disappears.",
    },
    {
      icon: "Users",
      title: "Uneven Digital Access",
      description:
        "Rural populations, elderly patients and low-bandwidth regions often lack reliable broadband or digital literacy, creating a gap between patients who benefit from digital care and those left behind.",
    },
    {
      icon: "Lock",
      title: "Patient Data Security",
      description:
        "Healthcare records are among the most valuable targets for attackers. A single breach can expose millions of records, trigger notification obligations and permanently damage patient trust.",
    },
  ],

  approach: [
    {
      title: "Clinical Discovery And Workflow Mapping",
      description:
        "We begin on the floor with clinicians and administrators, mapping real care pathways and documenting exactly where time is lost. Every requirement traces back to an observed problem rather than an assumption.",
    },
    {
      title: "Compliance And Security Architecture",
      description:
        "Encryption, role-based access controls, immutable audit trails and data-residency patterns are designed in from the first line of code, so compliance is structural rather than retrofitted.",
    },
    {
      title: "Interoperability And Integration",
      description:
        "We integrate with existing EHRs, lab systems and payer platforms using standards such as HL7 FHIR and DICOM, so your new systems become part of the ecosystem instead of another island.",
    },
    {
      title: "Human-Centered Interface Design",
      description:
        "Interfaces are tested with actual clinical users under realistic load. We design for gloved hands, shared workstations, interruptions and shift fatigue — the conditions software actually meets.",
    },
    {
      title: "Pilot, Train And Scale",
      description:
        "We launch in a single department or clinic, measure outcomes against the baseline, refine, then extend. Rollout includes role-based training and a feedback loop that keeps adoption high.",
    },
  ],

  products: [
    {
      icon: "Stethoscope",
      title: "Electronic Health Record Integration Platform",
      description:
        "A standards-based integration layer that connects your existing EHR with laboratory, imaging, pharmacy and referral systems, eliminating duplicate entry and giving clinicians one reliable view of the patient.",
      features: [
        "HL7 FHIR and DICOM compliant data exchange",
        "Real-time bidirectional clinical synchronization",
        "Automated reconciliation of duplicate records",
        "Vendor-neutral — works across major EHR providers",
      ],
    },
    {
      icon: "Monitor",
      title: "Telemedicine And Virtual Care Suite",
      description:
        "A secure virtual consultation platform that lets clinicians assess patients remotely, with video, chat, e-prescription and automated visit documentation built in.",
      features: [
        "HD video with low-bandwidth fallback mode",
        "E-prescription and clinical note generation",
        "Digital queue with automated wait-time updates",
        "Accessible on phone, tablet and desktop",
      ],
    },
    {
      icon: "LayoutDashboard",
      title: "Patient Portal And Mobile App",
      description:
        "A white-label patient experience for appointments, lab results, prescriptions, billing and secure messaging — designed to reduce inbound call volume and improve adherence.",
      features: [
        "Appointment booking, rescheduling and reminders",
        "Secure messaging with care teams",
        "Prescription refills and adherence tracking",
        "Multi-language and accessibility support",
      ],
    },
    {
      icon: "Brain",
      title: "Clinical Decision Support Engine",
      description:
        "Evidence-based alerting and diagnostic assistance that surfaces relevant guidance at the point of care, including drug-interaction warnings, protocol reminders and risk stratification.",
      features: [
        "Configurable clinical rules and pathways",
        "Explainable alerts with supporting rationale",
        "Integration with formulary and protocol libraries",
        "Tuned to minimize alert fatigue",
      ],
    },
    {
      icon: "LineChart",
      title: "Health Data Analytics Platform",
      description:
        "A governed analytics layer that turns clinical, operational and financial data into measurable insight — tracking readmission rates, care-gap closure, throughput and cost per encounter.",
      features: [
        "Population health and cohort segmentation",
        "Readmission and care-gap tracking",
        "Operational dashboards for clinical leadership",
        "Role-based access with full data lineage",
      ],
    },
    {
      icon: "Workflow",
      title: "Clinical Operations Automation Suite",
      description:
        "Automation for the administrative load that consumes clinical capacity: intelligent scheduling, prior authorization, referral routing, claims pre-checks and compliance reporting.",
      features: [
        "Rules-based prior authorization workflows",
        "Automated referral and discharge routing",
        "Claims scrubbing and pre-submission validation",
        "Compliance and audit report generation",
      ],
    },
  ],

  services: [
    "software-engineering",
    "ai-automation",
    "data-analytics",
    "cloud-devops",
    "digital-experience",
  ],

  useCases: [
    {
icon: "Heart",
      title: "Remote Patient Monitoring",
      description:
        "Capture vitals and symptoms from connected devices between visits, with threshold-based alerting so clinical teams intervene early instead of waiting for deterioration.",
    },
    {
      icon: "Activity",
      title: "Chronic Disease Management",
      description:
        "Structured digital pathways for diabetes, hypertension and cardiac conditions that combine monitoring, medication adherence tracking and scheduled check-ins.",
    },
    {
      icon: "ScanText",
      title: "Medical Imaging And Diagnostic Workflow",
      description:
        "Route, prioritize and annotate imaging studies so radiologists work from a single queue with faster turnaround and fewer missed critical findings.",
    },
    {
      icon: "Users",
      title: "Patient Intake And Triage",
      description:
        "Digital registration, symptom assessment and automated triage that shortens waiting rooms and routes patients to the right level of care on arrival.",
    },
    {
      icon: "Building",
      title: "Hospital Operations And Capacity",
      description:
        "Live bed, staffing and theatre scheduling with predictive demand signals that help operations teams anticipate bottlenecks before they affect care.",
    },
    {
      icon: "ShieldCheck",
      title: "Clinical Trial And Research Data",
      description:
        "Structured capture, validation and analysis of trial data with the audit trails and data integrity academic and regulatory programmes require.",
    },
  ],

  compliance: [
    "HIPAA Privacy and Security Rules",
    "HITECH Act provisions",
    "GDPR for international patient data",
    "HL7 FHIR and DICOM interoperability standards",
    "21 CFR Part 11 electronic records integrity",
    "Data residency and localization requirements",
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
        "FHIR R4 API Services",
      ],
    },
    {
      category: "Data And AI",
      items: [
        "PostgreSQL",
        "FHIR Data Store",
        "Apache Kafka",
        "Snowflake",
        "dbt and Airflow",
        "PyTorch and Hugging Face",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "AWS and Azure Health Data Services",
        "Docker and Kubernetes",
        "Terraform IaC",
        "Encrypted Object Storage",
        "Private VNet Connectivity",
      ],
    },
    {
      category: "Security And Compliance",
      items: [
        "HIPAA-aligned Controls",
        "AES-256 and TLS 1.3 Encryption",
        "OAuth 2.0 and OIDC",
        "Immutable Audit Logging",
        "Zero-Trust Network Design",
        "SOC 2 Monitoring",
      ],
    },
    {
      category: "Integration",
      items: [
        "HL7 v2 and FHIR R4",
        "DICOM Imaging Protocol",
        "CDA Documents",
        "X12 EDI Claims",
        "FHIR Bulk Data Export",
        "SFTP and Legacy Adapters",
      ],
    },
  ],

  outcomes: [
    {
      icon: "Activity",
      title: "Improved Patient Outcomes",
      description:
        "Earlier detection and faster intervention through continuous monitoring and decision support at the point of care.",
    },
    {
      icon: "Workflow",
      title: "Streamlined Clinical Workflows",
      description:
        "Fewer duplicate entries, fewer manual handoffs and shorter documentation time, returning clinician hours to patient care.",
    },
    {
      icon: "ShieldCheck",
      title: "Regulatory Compliance Assurance",
      description:
        "Audit-ready evidence, enforced access controls and documented data handling that satisfy reviewers and regulators.",
    },
    {
      icon: "Users",
      title: "Higher Patient Engagement",
      description:
        "Self-service access to records, appointments and messaging that improves adherence and reduces administrative call volume.",
    },
    {
      icon: "LineChart",
      title: "Lower Cost Of Care",
      description:
        "Reduced readmissions, fewer avoidable complications and better resource utilization across the care pathway.",
    },
    {
      icon: "Globe",
      title: "Wider Access To Services",
      description:
        "Virtual care and low-bandwidth design extend specialist reach to patients who cannot travel to a facility.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Discovery And Advisory",
      description:
        "An assessment engagement that maps current systems, quantifies the opportunity and produces a prioritized roadmap before any build begins.",
    },
    {
      icon: "Code2",
      title: "Dedicated Product Team",
      description:
        "A cross-functional squad of engineers, designers and clinical domain specialists delivering an end-to-end platform on a predictable cadence.",
    },
    {
      icon: "Puzzle",
      title: "Modular Build",
      description:
        "Incremental delivery of individual modules — starting with the integration layer or patient portal — so value arrives in stages rather than all at once.",
    },
  ],

  faqs: [
    {
      question: "How do you ensure patient data stays HIPAA compliant?",
      answer:
        "Compliance is designed in from the first line of code rather than checked at the end. We apply encryption in transit and at rest, role-based access controls, immutable audit logging and minimum-necessary data access. Every data flow is mapped and reviewed, and we support HIPAA-aligned administrative, physical and technical safeguards alongside your own compliance and legal teams.",
    },
    {
      question: "Will this integrate with our existing EHR?",
      answer:
        "Yes. Integration is a core part of how we work. We build standards-based interfaces using HL7 FHIR, DICOM and CDA, and we have connected to major EHR platforms includingEpic, Cerner and legacy systems behind them. If your environment includes proprietary or older interfaces, we build targeted adapters rather than asking you to replace what already works.",
    },
    {
      question: "How do you avoid disrupting clinical workflows?",
      answer:
        "We start with workflow mapping sessions alongside the clinicians who will actually use the system, and we pilot in a single department before scaling. Interfaces are usability-tested with real users under realistic conditions. The goal is software that fits the way care is already delivered, so adoption does not depend on behaviour change.",
    },
    {
      question: "How long does a typical healthcare project take?",
      answer:
        "It depends on scope, but most engagements reach a first clinical release within 90 days. We favour a modular delivery model so an integration layer or patient portal can go live early and deliver measurable value while the broader platform continues to be built.",
    },
    {
      question: "Can you work within our existing infrastructure and security team?",
      answer:
        "Absolutely. We routinely operate inside customer-managed cloud environments and work alongside internal security, infrastructure and compliance teams. We follow your change-management and release processes, and we document everything thoroughly enough that your team can own and extend the platform after handover.",
    },
    {
      question: "What happens to our data if the engagement ends?",
      answer:
        "Your data is yours. We design for clean exit: we document the architecture, provide full data export in open standard formats, and support an orderly migration to your team or another provider. There is no proprietary lock-in built into the systems we build.",
    },
  ],

  relatedIndustries: ["education", "enterprise-organizations", "professional-services"],
};