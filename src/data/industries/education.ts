import type { Industry } from "./types";

export const education: Industry = {
  title: "Education",
  slug: "education",
  tagline: "Purpose-built technology for modern teaching and learning",
  description:
    "Developing digital learning platforms, student management systems and educational technology that supports modern teaching and learning.",
  metaDescription:
    "BLACK VAVE CORPORATION builds scalable education technology: LMS platforms, student information systems, adaptive courseware and campus analytics for schools.",
  icon: "GraduationCap",
  theme: {
    accent: "#6D8CFB",
    accentLight: "#93A9FF",
    accentDark: "#4E6AD4",
    tint: "rgba(109, 140, 251, 0.08)",
  },

  hero: {
    headline: "Education Technology Built Around How People Actually Learn",
    subheadline:
      "We engineer learning platforms, student systems and analytics tools that fit the way your faculty already teach and your students already work, without asking anyone to change how they deliver a class.",
  },

  stats: [
    { value: "WCAG 2.2 AA", label: "Accessibility Baseline" },
    { value: "LTI 1.3", label: "Standard Tool Interoperability" },
    { value: "90 days", label: "To First Pilot Release" },
    { value: "99.9%", label: "Platform Availability Target" },
  ],

  challenges: [
    {
      icon: "ShieldAlert",
      title: "Student Privacy And Regulatory Compliance",
      description:
        "FERPA, COPPA, GDPR and state student-data laws place strict limits on how learner records are collected, shared and retained. Institutions that breach these obligations face contractual penalties, funding consequences and lasting reputational damage.",
    },
    {
      icon: "Layers",
      title: "Fragmented Campus Technology Estate",
      description:
        "A typical institution runs a learning management system, a student information system, a CRM, a library platform and dozens of department-specific tools that rarely exchange data cleanly. Registrars and faculty end up re-keying the same information into spreadsheets.",
    },
    {
      icon: "Accessibility",
      title: "Accessibility And Inclusive Learning Mandates",
      description:
        "Public institutions in the US are legally required to meet Section 508 and WCAG conformance, and accessibility law is tightening across other markets. Retrofitting a platform after procurement is far more expensive than building to the standard from the start.",
    },
    {
      icon: "BarChart3",
      title: "Low Adoption And Completion Rates",
      description:
        "Tools are frequently purchased, announced and then quietly abandoned because they add steps to teaching. Without active workflows, the investment sits idle and the completion and retention data leadership expected to see never materializes.",
    },
    {
      icon: "Globe",
      title: "An Unequal Digital Access Baseline",
      description:
        "Students and staff work from inconsistent devices, home connectivity and digital confidence. Anything that assumes a fast connection or a recent device quietly excludes a meaningful share of the institution and turns a well-intentioned rollout into an equity problem.",
    },
  ],

  approach: [
    {
      title: "Campus Stakeholder Discovery",
      description:
        "We run structured sessions with administrators, registrars, faculty, IT and student support to map how teaching, assessment and administration actually happen today. Requirements come from observed workflows, not from a generic feature list.",
    },
    {
      title: "Standards-First Architecture",
      description:
        "Security, privacy and accessibility controls are designed in from the first sprint, with WCAG 2.2 AA as the baseline and FERPA-aligned data handling baked into the data model. Compliance becomes structural rather than a clean-up exercise at the end.",
    },
    {
      title: "Interoperability By Design",
      description:
        "We integrate through open standards such as LTI 1.3, OneRoster and xAPI so the platform works with your existing LMS, SIS and identity provider. Tools become part of the campus ecosystem instead of another isolated login.",
    },
    {
      title: "Inclusive And Accessible Design",
      description:
        "Interfaces are tested with real assistive technology, keyboard-only navigation and screen readers, and every asset ships with captions and transcripts. Layouts hold up on low-bandwidth connections and older devices.",
    },
    {
      title: "Pilot Cohort, Then Institutional Scale",
      description:
        "We launch with a pilot group of faculty in real teaching conditions, measure engagement and outcomes against the baseline, then extend. Training, documentation and a feedback channel are part of rollout, not an afterthought.",
    },
  ],

  products: [
    {
      icon: "GraduationCap",
      title: "Unified Campus Learning Management System",
      description:
        "A single learning environment for course delivery, content, assignments, grading and discussion, connected to the tools faculty and students already use. Built to replace fragmented portals rather than sit beside them.",
      features: [
        "LTI 1.3 deep linking with launch return for grade passback",
        "Structured course templates that mirror an institution's catalog",
        "Accessible content authoring with captions and transcript support",
        "Offline-tolerant mobile experience for low-bandwidth learners",
      ],
    },
    {
      icon: "Users",
      title: "Student Information And Enrollment Platform",
      description:
        "A modern SIS layer covering enrollment, academic history, scheduling and academic standing, with automated workflow for registration, progression and graduation requirements.",
      features: [
        "Course registration with prerequisite and capacity enforcement",
        "Degree audit and graduation requirement tracking",
        "OneRoster and SIS sync with scheduled reconciliation",
        "Role-scoped access for advisors, faculty and department heads",
      ],
    },
    {
      icon: "Monitor",
      title: "Live Virtual Classroom Suite",
      description:
        "Reliable live teaching and attendance for hybrid and remote delivery, with lecture capture, engagement analytics and a low-bandwidth mode that keeps sessions running on poor connections.",
      features: [
        "Low-latency video, screen share and live annotation",
        "Automatic recording with searchable transcript",
        "Attendance and participation capture for accreditation records",
        "Breakout rooms, polls and hand-raise moderation",
      ],
    },
    {
      icon: "Brain",
      title: "AI Assessment And Adaptive Tutoring Engine",
      description:
        "An AI layer that supports formative assessment and differentiated practice, built with an instructor review path and full visibility into how it reached each conclusion.",
      features: [
        "Auto-graded short answer and rubric-based feedback",
        "Question generation mapped to course learning outcomes",
        "Concept-level mastery tracking per learner",
        "Instructor override and approval on all released content",
      ],
    },
    {
      icon: "LayoutDashboard",
      title: "Faculty Planning And Engagement Workspace",
      description:
        "A working console for instructors that consolidates grading queues, at-risk learner signals, attendance and upcoming teaching tasks into one place, built to reduce clicks rather than add them.",
      features: [
        "Prioritized grading queue with batch feedback tools",
        "At-risk learner flags with documented early-warning criteria",
        "Reusable syllabus and assessment templates",
        "Configurable notification digests instead of per-event alerts",
      ],
    },
    {
      icon: "BarChart3",
      title: "Education Analytics And Outcomes Platform",
      description:
        "A governed analytics layer that connects academic records, LMS activity and retention data into reporting leadership and accreditation teams can act on, with lineage behind every number.",
      features: [
        "Retention, progression and completion cohort analysis",
        "Course and program effectiveness dashboards",
        "Accreditation and outcome reporting exports",
        "Row-level access controls with column-level masking",
      ],
    },
  ],

  services: [
    "software-engineering",
    "digital-experience",
    "data-analytics",
    "cloud-devops",
    "ai-automation",
  ],

  useCases: [
    {
      icon: "Brain",
      title: "Personalized Learning Pathways",
      description:
        "Diagnostic assessment at the start of a course maps each learner to targeted material, with mastery data guiding the next step instead of a single pace for the whole cohort.",
    },
    {
      icon: "Monitor",
      title: "Hybrid And Remote Course Delivery",
      description:
        "Synchronous teaching, recorded lecture and discussion run in one environment so remote and on-campus students have equivalent access to materials and participation.",
    },
    {
      icon: "ListChecks",
      title: "Assessment And Proctoring Workflows",
      description:
        "Quizzes, timed exams and proctored sessions handled in one flow, with question banks, accommodations for extended time and results written straight back to the gradebook.",
    },
    {
      icon: "FileText",
      title: "Feedback And Grading Automation",
      description:
        "Rubric-based and AI-assisted feedback for high-volume submissions, always routed through instructor review so published grades remain faculty-owned and defensible.",
    },
    {
      icon: "MessageSquare",
      title: "Student Support And Advisor Communication",
      description:
        "Structured messaging tied to course and advising context, so students reach the right office without repeating their history, and advisors see the full thread before responding.",
    },
    {
      icon: "FileStack",
      title: "Accreditation And Institutional Reporting",
      description:
        "Evidence collection for accreditation and governing boards assembled from live academic records, replacing manual spreadsheets assembled weeks before every submission deadline.",
    },
  ],

  compliance: [
    "FERPA student education record privacy requirements",
    "COPPA children's online privacy rules for learners under 13",
    "WCAG 2.2 AA and Section 508 accessibility conformance",
    "GDPR obligations for international student and staff data",
    "SOC 2 Type II controls for education technology vendors",
    "LTI 1.3, OneRoster and SCORM content and rostering standards",
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
      ],
    },
    {
      category: "Learning Data",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Apache Kafka",
        "Snowflake",
        "dbt and Airflow",
        "xAPI and Caliper learning event pipelines",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "AWS and Azure",
        "Docker and Kubernetes",
        "Terraform IaC",
        "Global CDN with low-bandwidth delivery",
        "Private connectivity to campus identity providers",
      ],
    },
    {
      category: "Security And Compliance",
      items: [
        "FERPA-aligned data controls",
        "AES-256 and TLS 1.3 encryption",
        "SAML 2.0 and OIDC single sign-on",
        "Immutable audit logging",
        "Zero-trust network design",
        "SOC 2 monitoring",
      ],
    },
    {
      category: "Integration",
      items: [
        "LTI 1.3 and LTI Advantage",
        "OneRoster and REST APIs",
        "SCORM and xAPI content packages",
        "Canvas, Blackboard and Moodle APIs",
        "Clever and ClassLink rostering",
        "Shibboleth and campus identity federation",
      ],
    },
  ],

  outcomes: [
    {
      icon: "TrendingUp",
      title: "Higher Completion And Retention Rates",
      description:
        "Early-warning signals and targeted practice intervene while a learner is still struggling, addressing the point where most courses lose them.",
    },
    {
      icon: "Clock",
      title: "Reduced Faculty Administrative Load",
      description:
        "Consolidated grading, templating and automation return hours each week to faculty, which is where the measurable teaching-quality gain comes from.",
    },
    {
      icon: "Accessibility",
      title: "An Inclusive Experience For Every Learner",
      description:
        "Conformance built into the product rather than retrofitted, so assistive technology, captions and low-bandwidth access are standard rather than exceptions.",
    },
    {
      icon: "ShieldCheck",
      title: "Audit-Ready Privacy And Compliance",
      description:
        "Documented data flows, enforced role-based access and exportable audit evidence that stands up to institutional review, legal diligence and state inquiries.",
    },
    {
      icon: "BarChart3",
      title: "Evidence-Based Institutional Decisions",
      description:
        "Retention, progression and program effectiveness measured on trusted data instead of anecdotes, with the lineage to defend the number in a governance meeting.",
    },
    {
      icon: "GraduationCap",
      title: "Scalable Digital Learning Across Campuses",
      description:
        "A shared platform with configurable per-campus policy, so additional sites, programs and institutions onboard without forking the codebase.",
    },
  ],

  engagementModels: [
    {
      icon: "Compass",
      title: "Discovery And Roadmap",
      description:
        "A fixed-scope assessment that maps your LMS, SIS and identity estate, quantifies the opportunity and produces a prioritized, costed roadmap before any build begins.",
    },
    {
      icon: "Code2",
      title: "Dedicated Delivery Team",
      description:
        "A cross-functional squad of engineers, designers and education domain specialists delivering an end-to-end platform on a predictable cadence with weekly visible progress.",
    },
    {
      icon: "Puzzle",
      title: "Pilot First, Scale Later",
      description:
        "Incremental module delivery starting with a single faculty cohort or workflow, so a working platform exists early and the institution can extend from proven usage.",
    },
  ],

  faqs: [
    {
      question: "Will this integrate with our existing LMS and student information system?",
      answer:
        "Yes. We integrate through open standards rather than screen scraping, using LTI 1.3 for tool launches and grade passback, OneRoster for section and roster data, and xAPI where learning activity needs to be tracked. We have connected to Canvas, Blackboard, Moodle, D2L Brightspace and Google Classroom, and if your environment includes a proprietary or legacy interface we build a targeted adapter instead of asking you to replace what already works.",
    },
    {
      question: "How do you protect student data under FERPA and COPPA?",
      answer:
        "Privacy is designed into the data model rather than reviewed at the end. We apply encryption in transit and at rest, role-based access scoped to the minimum necessary, immutable audit logging on every record access, and configurable retention schedules that support deletion requests. Where children under 13 are in scope we implement parental consent flows and limit collection accordingly, and we work alongside your counsel and privacy office to map every data flow before launch.",
    },
    {
      question: "How do you make sure students with disabilities can actually use the platform?",
      answer:
        "We target WCAG 2.2 AA and Section 508 conformance as the baseline, which means keyboard-navigable interfaces, proper semantic markup, screen reader testing with real assistive technology and captioned media as standard. Accessibility is verified with disabled users during design rather than audited by a checklist after build, and we produce the conformance documentation your procurement and legal teams need.",
    },
    {
      question: "What happens if faculty resist adopting a new platform?",
      answer:
        "Resistance is usually a workflow problem, not an attitude problem, so we co-design with a pilot cohort of instructors and keep the first release close to how they already teach. Migration is incremental, existing content is preserved rather than rebuilt, and grading and rostering come from your current systems so there is nothing to re-key. Adoption is measured through actual usage data each sprint, and features that add clicks without saving time get cut.",
    },
    {
      question: "Can the platform handle registration and exam-period traffic spikes?",
      answer:
        "Yes. Capacity is designed around your historical peak rather than average load, with read-heavy workloads served from cache and scalable components fronting the transactional core. We run load and soak tests against projected peak scenarios before go-live and define autoscaling and rate-limiting behaviour in advance, so a Monday morning registration window does not become an outage that reaches your leadership desk.",
    },
    {
      question: "Who owns the code and what happens when the engagement ends?",
      answer:
        "You do. Code, infrastructure definitions and documentation are delivered into your repositories and cloud accounts from the first sprint, with no proprietary runtime in the critical path. We design for a clean exit, providing full data export in open standard formats and a handover package detailed enough that your internal team can operate and extend the platform without us.",
    },
  ],

  relatedIndustries: ["publishing", "professional-services", "enterprise-organizations"],
};