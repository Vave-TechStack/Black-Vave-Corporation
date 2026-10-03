import type { Service } from "./types";

export const aiAutomation: Service = {
  title: "AI & Intelligent Automation",
  slug: "ai-automation",
  tagline: "Making businesses smarter through intelligent systems",
  description:
    "AI-powered applications, workflow automation, intelligent assistants, document processing and business automation that transform how organizations operate.",
  metaDescription:
    "BLACK VAVE builds generative AI applications, intelligent document processing, AI assistants and workflow automation with human oversight and responsible deployment.",
  icon: "Brain",
  hero: {
    headline: "Intelligence That Works Alongside Your Team",
    subheadline:
      "We apply generative AI, intelligent document processing and workflow automation to the processes that consume the most time — with human oversight, validation and responsible deployment built in.",
    highlights: [
      "Generative AI Integration",
      "Intelligent Document Processing",
      "AI Assistants & Agents",
      "Workflow Automation",
    ],
  },
  challenges: [
    {
      icon: "Clock",
      title: "Manual Process Overhead",
      description:
        "Repetitive data entry, document handling and routine approvals consume skilled staff hours every week.",
    },
    {
      icon: "FileText",
      title: "Unstructured Data Lockup",
      description:
        "Critical information trapped in documents, emails and PDFs cannot be searched, analyzed or automated.",
    },
    {
      icon: "Hourglass",
      title: "Slow Decision Cycles",
      description:
        "Decisions wait on manual data gathering and cross-team coordination, delaying response to customers and markets.",
    },
    {
      icon: "Bot",
      title: "Automation Without Judgment",
      description:
        "Rule-based automation breaks on edge cases, while poorly scoped AI projects overpromise and underdeliver.",
    },
    {
      icon: "Compass",
      title: "AI Adoption Uncertainty",
      description:
        "Unclear use cases, hallucination concerns and privacy questions make it hard to know where AI genuinely helps.",
    },
  ],
  approach: [
    {
      title: "Opportunity Assessment",
      description:
        "We identify processes where AI or automation genuinely adds value — and where it does not.",
    },
    {
      title: "Data & Process Audit",
      description:
        "We examine your data sources, document flows and workflows to understand what the systems must handle.",
    },
    {
      title: "Model & Workflow Design",
      description:
        "We design the AI workflow — retrieval, prompting, validation and human review points — around your accuracy needs.",
    },
    {
      title: "Pilot & Evaluation",
      description:
        "We run a scoped pilot with defined metrics, human oversight and clear success criteria before scaling.",
    },
    {
      title: "Deployment with Oversight",
      description:
        "We deploy with monitoring, guardrails and review loops that keep automated decisions accountable.",
    },
    {
      title: "Monitoring & Refinement",
      description:
        "We track performance, adjust prompts and models as needed, and expand coverage based on measured results.",
    },
  ],
  capabilities: [
    {
      icon: "Sparkles",
      title: "Generative AI Integration",
      description:
        "Large language models integrated into products and workflows for drafting, summarization and analysis.",
      technologies: ["Generative AI", "LLM Integration"],
    },
    {
      icon: "MessageSquare",
      title: "LLM-Powered Applications",
      description:
        "Applications that understand and generate natural language while staying grounded in your data.",
      technologies: ["LLM Integration", "Python"],
    },
    {
      icon: "Search",
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "Responses grounded in your documents and databases, with source citations and access controls.",
      technologies: ["RAG", "Vector Search"],
    },
    {
      icon: "Bot",
      title: "AI Assistants & Agents",
      description:
        "Assistants that handle routine inquiries and multi-step tasks with defined autonomy and human escalation.",
      technologies: ["AI Agents", "LangChain"],
    },
    {
      icon: "ScanText",
      title: "Intelligent Document Processing",
      description:
        "Extraction, classification and validation of information from invoices, contracts and forms.",
      technologies: ["Document Intelligence", "Python"],
    },
    {
      icon: "Workflow",
      title: "Workflow Automation",
      description:
        "Automated handoffs between systems — data entry, notifications and approvals — with audit trails.",
      technologies: ["Workflow Automation", "API Integrations"],
    },
    {
      icon: "SearchCode",
      title: "AI-Powered Search",
      description:
        "Semantic search across internal knowledge bases, documents and product catalogs.",
      technologies: ["RAG", "Vector Search"],
    },
    {
      icon: "FileSearch",
      title: "Data Extraction & Classification",
      description:
        "Structured data capture from unstructured sources, validated before it reaches your systems.",
      technologies: ["Document Intelligence", "Python"],
    },
    {
      icon: "Zap",
      title: "Business Process Automation",
      description:
        "End-to-end automation of repeatable business processes with exception handling and reporting.",
      technologies: ["Workflow Automation", "API Integrations"],
    },
    {
      icon: "Plug",
      title: "AI Application Integration",
      description:
        "AI capabilities embedded into existing CRMs, ERPs and internal tools through APIs.",
      technologies: ["REST APIs", "LLM Integration"],
    },
  ],
  useCases: [
    {
      icon: "ScanText",
      title: "Intelligent Document Processing",
      description:
        "Extract, classify and validate information from invoices, contracts and forms — with human review for exceptions.",
    },
    {
      icon: "Headphones",
      title: "AI-Assisted Support",
      description:
        "Knowledge-grounded assistants that draft responses and surface relevant information for support teams.",
    },
    {
      icon: "BookOpen",
      title: "RAG Knowledge Systems",
      description:
        "Retrieval-augmented search over internal documentation with source citations and access controls.",
    },
    {
      icon: "Workflow",
      title: "Workflow Automation",
      description:
        "Automated handoffs between systems — data entry, notifications, approvals — with full audit trails.",
    },
    {
      icon: "FileSearch",
      title: "Data Extraction & Classification",
      description:
        "Structured data capture from unstructured sources, validated before it reaches your systems.",
    },
  ],
  perspectives: [
    {
      icon: "Settings",
      title: "Traditional Automation",
      description:
        "Rule-based systems that execute predefined steps reliably. Best for deterministic, high-volume tasks with clear conditions.",
      traits: ["Deterministic rules", "No judgment required", "Breaks on edge cases"],
    },
    {
      icon: "MessageSquare",
      title: "AI-Assisted Workflows",
      description:
        "Models draft, summarize and recommend — people review and decide. The right balance for most business processes today.",
      traits: ["Human in the loop", "Model suggestions", "Review before action"],
    },
    {
      icon: "Bot",
      title: "Agent-Based Systems",
      description:
        "AI agents plan and execute multi-step tasks with defined autonomy, escalating to humans for exceptions and approvals.",
      traits: ["Multi-step planning", "Bounded autonomy", "Human oversight"],
    },
  ],
  technologyCategories: [
    { category: "Languages", items: ["Python", "TypeScript"] },
    { category: "AI Capabilities", items: ["Generative AI", "LLM Integration"] },
    { category: "Frameworks", items: ["LangChain", "Relevant AI Tooling"] },
    {
      category: "Applications",
      items: ["AI Agents", "RAG", "Intelligent Document Processing"],
    },
    { category: "Automation", items: ["Workflow Automation", "API Integrations"] },
    { category: "Infrastructure", items: ["Cloud-Based AI Deployments"] },
  ],
  outcomes: [
    {
      icon: "Clock",
      title: "Reduced Manual Overhead",
      description:
        "Automated processing frees skilled staff for higher-value work.",
    },
    {
      icon: "Zap",
      title: "Faster Processing",
      description:
        "Document and data workflows that took hours run in minutes.",
    },
    {
      icon: "CheckCircle2",
      title: "Improved Accuracy",
      description:
        "Consistent model-driven processing with validation reduces human error.",
    },
    {
      icon: "TrendingUp",
      title: "Better Decision Support",
      description:
        "AI-generated insights and summaries inform faster, better-grounded decisions.",
    },
    {
      icon: "Scale",
      title: "Scalable Operations",
      description:
        "Automation handles volume growth without proportional headcount increases.",
    },
  ],
  engagementModels: [
    {
      icon: "Users",
      title: "Dedicated Development",
      description:
        "A focused AI engineering team for sustained model integration, agent development and automation program expansion.",
    },
    {
      icon: "Milestone",
      title: "Project-Based Engagement",
      description:
        "Scoped engagements for specific automation use cases — from document processing pilots to deployed AI assistants with defined success criteria.",
    },
    {
      icon: "Compass",
      title: "Consulting & Technical Advisory",
      description:
        "AI readiness assessments, use-case prioritization and responsible deployment planning before you invest in a build.",
    },
    {
      icon: "LifeBuoy",
      title: "Ongoing Support & Optimization",
      description:
        "Model monitoring, evaluation and refinement to keep automated systems accurate, safe and aligned with business needs.",
    },
  ],
  faqs: [
    {
      question: "What AI capabilities does BLACK VAVE offer?",
      answer:
        "We build generative AI integrations, LLM-powered applications, retrieval-augmented generation (RAG) systems, AI assistants and agents, intelligent document processing, AI-powered search and workflow automation. Every capability is scoped to a concrete business process rather than applied as a generic add-on.",
    },
    {
      question: "What is the difference between automation, AI-assisted workflows and agents?",
      answer:
        "Traditional automation follows fixed rules and works well for deterministic tasks. AI-assisted workflows use models to draft, summarize or recommend, with a human making the final decision. Agent-based systems plan and execute multi-step tasks with bounded autonomy, escalating to people for exceptions. We help you choose the right level of autonomy for each process.",
    },
    {
      question: "How do you address AI hallucination risks?",
      answer:
        "We ground model outputs in your data through retrieval-augmented generation, add validation layers before outputs reach your systems, set confidence thresholds, and route uncertain results to human review. Pilots measure accuracy before any scaled deployment.",
    },
    {
      question: "How do you handle data privacy in AI projects?",
      answer:
        "We apply data minimization, role-based access controls and private deployment options. Client data is not used to train shared models without an explicit agreement, and sensitive workflows can run in isolated environments with full audit logging.",
    },
    {
      question: "What does an AI pilot look like?",
      answer:
        "A pilot targets one well-defined process — for example, invoice data extraction. We establish baseline metrics, run the model with human-in-the-loop review, measure accuracy and time savings, and then decide together whether to scale, adjust or stop.",
    },
    {
      question: "Which AI technologies and frameworks do you use?",
      answer:
        "We work primarily in Python and TypeScript, using LangChain and other relevant tooling, LLM APIs, vector search and document intelligence libraries. The stack is selected per use case based on accuracy requirements, data sensitivity and integration needs.",
    },
    {
      question: "How do you measure AI project success?",
      answer:
        "We evaluate accuracy, processing time, manual effort reduction and user acceptance against the baseline captured before the pilot. Success criteria are agreed upfront so the decision to scale is based on evidence, not enthusiasm.",
    },
    {
      question: "Can AI integrate with our existing business systems?",
      answer:
        "Yes. AI capabilities are delivered through APIs and workflow integrations that connect to CRMs, ERPs, document management systems and internal tools, so intelligence is embedded where your team already works.",
    },
  ],
  relatedServices: ["software-engineering", "data-analytics", "digital-transformation"],
  technologies: ["Python", "Generative AI", "LLM Integration", "AI Agents", "Document Intelligence"],
};
