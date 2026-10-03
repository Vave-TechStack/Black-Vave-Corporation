import type { Service } from "./types";

export const dataAnalytics: Service = {
  title: "Data & Analytics",
  slug: "data-analytics",
  tagline: "Turning data into strategic advantage",
  description:
    "Dashboards, reporting systems, business intelligence and data-driven decision systems that transform raw data into actionable insight.",
  metaDescription:
    "BLACK VAVE builds BI dashboards, operational reporting, KPI tracking and data pipelines that turn business data into decisions.",
  icon: "BarChart3",
  hero: {
    headline: "Turn Operational Data into Decisions",
    subheadline:
      "We build data pipelines, BI dashboards and reporting systems that make your business performance visible, trustworthy and actionable for the teams that need it.",
    highlights: [
      "BI Dashboards",
      "Operational Reporting",
      "KPI Tracking",
      "Data Quality",
    ],
  },
  challenges: [
    {
      icon: "Network",
      title: "Scattered Data Sources",
      description:
        "Operational data lives in databases, files and SaaS tools with no unified view.",
    },
    {
      icon: "ShieldAlert",
      title: "Unreliable Data Quality",
      description:
        "Duplicates, gaps and inconsistent definitions undermine confidence in every report.",
    },
    {
      icon: "FileStack",
      title: "Slow Manual Reporting",
      description:
        "Analysts spend hours assembling reports that are outdated by the time they are delivered.",
    },
    {
      icon: "Gauge",
      title: "No KPI Visibility",
      description:
        "Teams work without clear, shared measures of performance or progress toward objectives.",
    },
    {
      icon: "TrendingUp",
      title: "Insight-to-Action Gap",
      description:
        "Dashboards exist but do not connect to decisions — insights never reach the people who act on them.",
    },
  ],
  approach: [
    {
      title: "Data Discovery",
      description:
        "We map your data sources, quality issues and the decisions analytics must support.",
    },
    {
      title: "Collection & Integration",
      description:
        "We build pipelines that consolidate data reliably from databases, files and services.",
    },
    {
      title: "Processing & Modeling",
      description:
        "We clean, transform and model data into structures that are trustworthy and queryable.",
    },
    {
      title: "Analysis & Visualization",
      description:
        "We design dashboards and reports around the KPIs and questions your teams actually have.",
    },
    {
      title: "Decision Support",
      description:
        "We embed analytics into operational workflows so insights reach the people who act on them.",
    },
    {
      title: "Ongoing Refinement",
      description:
        "We monitor data quality, extend coverage and improve models as questions evolve.",
    },
  ],
  capabilities: [
    {
      icon: "Network",
      title: "Data Collection & Integration",
      description:
        "Pipelines that consolidate data from databases, files and SaaS services.",
      technologies: ["Python", "SQL"],
    },
    {
      icon: "Filter",
      title: "Data Processing",
      description:
        "Cleaning, transformation and enrichment pipelines that prepare data for analysis.",
      technologies: ["Python", "Data Processing"],
    },
    {
      icon: "Database",
      title: "Data Modeling",
      description:
        "Dimensional models and schemas that make data trustworthy and queryable.",
      technologies: ["SQL", "PostgreSQL"],
    },
    {
      icon: "LayoutDashboard",
      title: "Business Intelligence Dashboards",
      description:
        "Executive and operational dashboards designed around the metrics that matter.",
      technologies: ["Data Visualization", "BI Tools"],
    },
    {
      icon: "FileText",
      title: "Operational Reporting",
      description:
        "Automated daily and weekly reports that replace manual spreadsheet work.",
      technologies: ["Reporting Systems", "Python"],
    },
    {
      icon: "BarChart3",
      title: "Data Visualization",
      description:
        "Clear, honest visual design that makes patterns and anomalies obvious.",
      technologies: ["Data Visualization", "React"],
    },
    {
      icon: "Gauge",
      title: "KPI Tracking",
      description:
        "Structured KPI definitions, tracking and alerting tied to business objectives.",
      technologies: ["SQL", "Reporting Systems"],
    },
    {
      icon: "ShieldCheck",
      title: "Data Quality",
      description:
        "Validation, profiling and governance that keep numbers defensible.",
      technologies: ["Python", "SQL"],
    },
    {
      icon: "Zap",
      title: "Analytical Automation",
      description:
        "Scheduled data processing and report generation that runs without manual intervention.",
      technologies: ["Python", "Data Processing"],
    },
    {
      icon: "TrendingUp",
      title: "Decision-Support Systems",
      description:
        "Analytics embedded into operational workflows where decisions happen.",
      technologies: ["BI Tools", "REST APIs"],
    },
  ],
  useCases: [
    {
      icon: "LayoutDashboard",
      title: "Business Intelligence Dashboards",
      description:
        "Executive and operational dashboards that surface the KPIs your teams actually monitor.",
    },
    {
      icon: "FileText",
      title: "Operational Reporting",
      description:
        "Automated daily and weekly reports that replace manual spreadsheet work.",
    },
    {
      icon: "Gauge",
      title: "KPI Tracking Systems",
      description:
        "Structured KPI definitions, tracking and alerting tied to business objectives.",
    },
    {
      icon: "Database",
      title: "Data Warehouse Design",
      description:
        "Centralized data models that consolidate sources into a single analytical foundation.",
    },
    {
      icon: "Zap",
      title: "Analytical Automation",
      description:
        "Scheduled data processing and report generation that runs without manual intervention.",
    },
  ],
  technologyCategories: [
    { category: "Languages & Query", items: ["Python", "SQL"] },
    { category: "Data Platform", items: ["PostgreSQL", "Data Processing"] },
    { category: "Analysis", items: ["Business Intelligence", "Reporting Systems"] },
    {
      category: "Visualization",
      items: ["Data Visualization", "Analytical Dashboards"],
    },
  ],
  outcomes: [
    {
      icon: "Gauge",
      title: "Clear Performance Visibility",
      description:
        "Dashboards surface the KPIs that matter, in one place.",
    },
    {
      icon: "Clock",
      title: "Faster Data-Driven Decisions",
      description:
        "Self-serve reporting cuts the wait for answers from days to minutes.",
    },
    {
      icon: "CheckCircle2",
      title: "Trustworthy Data",
      description:
        "Quality controls and governance make numbers defensible.",
    },
    {
      icon: "TrendingUp",
      title: "Foundation for Advanced Analytics",
      description:
        "Clean, modeled data supports AI and forecasting initiatives.",
    },
    {
      icon: "Zap",
      title: "Operational Efficiency",
      description:
        "Automated reporting reclaims analyst time for analysis, not assembly.",
    },
  ],
  engagementModels: [
    {
      icon: "Users",
      title: "Dedicated Development",
      description:
        "An embedded data engineering and analytics team for sustained platform and reporting programs.",
    },
    {
      icon: "Milestone",
      title: "Project-Based Engagement",
      description:
        "Scoped analytics projects — a KPI dashboard, a reporting system, a data model — delivered with clear outcomes.",
    },
    {
      icon: "Compass",
      title: "Consulting & Technical Advisory",
      description:
        "Data strategy, architecture guidance and analytics maturity assessment for data-driven operations.",
    },
    {
      icon: "LifeBuoy",
      title: "Ongoing Support & Optimization",
      description:
        "Pipeline monitoring, report maintenance and continuous improvement of data quality and decision support.",
    },
  ],
  faqs: [
    {
      question: "How do you handle data quality issues?",
      answer:
        "We start with data profiling to find duplicates, gaps and inconsistencies, then apply validation rules at ingestion, standardize definitions with data owners, and monitor quality continuously. Trustworthy numbers come from process, not tools alone.",
    },
    {
      question: "What is the difference between reporting and business intelligence?",
      answer:
        "Reporting answers predefined questions — what happened this week. BI adds exploration: slicing, filtering and drilling into data to understand why. We build both, matched to how your teams actually work.",
    },
    {
      question: "How do you build dashboards that people actually use?",
      answer:
        "We design dashboards with the people who will use them. We start with the decisions they make, define the KPIs that inform those decisions, and iterate on the design with real users before rollout.",
    },
    {
      question: "Can you connect to our existing data sources?",
      answer:
        "Yes. We integrate with databases, spreadsheets, files and SaaS APIs through pipelines that extract, validate and load data on a schedule or in near real-time, depending on the use case.",
    },
    {
      question: "How is sample data used in your demos?",
      answer:
        "Any illustrative dashboard or chart we show during discovery is clearly labeled as sample data. We never present fabricated figures as real results, and production dashboards use only your actual data.",
    },
    {
      question: "Do you offer real-time analytics?",
      answer:
        "Where the use case justifies it — operations monitoring, live KPIs — we build streaming or near-real-time pipelines. For most reporting, well-designed batch pipelines are more reliable and cost-effective.",
    },
    {
      question: "How do you approach data governance?",
      answer:
        "We define data ownership, standardize business definitions, document lineage and apply role-based access so the right people see the right data — with an audit trail for sensitive metrics.",
    },
    {
      question: "How can analytics support decision-making?",
      answer:
        "Analytics provides visibility, faster reporting and evidence for decisions. We do not promise specific financial outcomes — we build the systems and habits that let your team measure, understand and act.",
    },
  ],
  relatedServices: ["ai-automation", "enterprise-applications", "digital-transformation"],
  technologies: ["PostgreSQL", "Python", "React", "Data Visualization", "Cloud Analytics"],
};
