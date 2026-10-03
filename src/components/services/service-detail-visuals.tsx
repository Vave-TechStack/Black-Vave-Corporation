import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Database,
  LayoutDashboard,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

function ArchitectureLayers() {
  const layers = [
    {
      title: "Client Layer",
      items: ["Web Application", "Mobile Web", "API Consumers"],
    },
    {
      title: "Application Layer",
      items: ["Next.js Frontend", "API Gateway", "Authentication"],
    },
    {
      title: "Service Layer",
      items: ["Business Services", "Microservices", "Integrations"],
    },
    { title: "Data Layer", items: ["PostgreSQL", "MongoDB", "Cache"] },
  ];

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto">
      {layers.map((layer, index) => (
        <div key={layer.title} className="w-full flex flex-col">
          <div className="p-5 md:p-6 border border-border bg-primary rounded-sm hover:border-accent/30 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider md:w-44 shrink-0">
                {layer.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs text-text-muted border border-border rounded-full bg-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {index < layers.length - 1 && (
            <div className="py-2" aria-hidden="true">
              <ArrowDown className="w-4 h-4 text-accent/60 mx-auto" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function DisconnectedConnected() {
  const departments = ["Finance", "Sales", "Operations"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="p-6 border border-border bg-primary rounded-sm">
        <p className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-5">
          Before — Disconnected
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {departments.map((department) => (
              <div
                key={department}
                className="px-4 py-3 border border-dashed border-border-light rounded-sm text-sm text-text-muted"
              >
                {department}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-text-dim">
            <ArrowLeft className="w-4 h-4" />
            <span>Manual handoffs, duplicate entry</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          <p className="text-xs text-text-dim leading-relaxed text-center">
            Each system holds its own version of the truth.
          </p>
        </div>
      </div>

      <div className="p-6 border border-accent/30 bg-accent/5 rounded-sm">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-5">
          After — Connected
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="px-4 py-3 border border-border bg-secondary rounded-sm text-sm text-text">
            {departments[0]}
          </div>
          <ArrowDown className="w-4 h-4 text-accent" aria-hidden="true" />
          <div className="px-5 py-3.5 border border-accent/50 bg-secondary rounded-sm text-sm font-semibold text-accent text-center">
            Shared Data Platform
          </div>
          <ArrowDown className="w-4 h-4 text-accent" aria-hidden="true" />
          <div className="flex gap-3">
            {departments.slice(1).map((department) => (
              <div
                key={department}
                className="px-4 py-3 border border-border bg-secondary rounded-sm text-sm text-text"
              >
                {department}
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted leading-relaxed text-center">
            Automatic synchronization — one source of truth.
          </p>
        </div>
      </div>
    </div>
  );
}

function DeploymentFlow() {
  const environments = [
    { name: "Development", description: "Feature work & unit tests" },
    { name: "Staging", description: "Integration & QA validation" },
    { name: "Production", description: "Live, monitored release" },
  ];
  const gates = ["Automated tests", "Review & approval", "Canary release"];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0">
        {environments.map((environment, index) => (
          <div
            key={environment.name}
            className="flex flex-col md:flex-row items-center flex-1 w-full"
          >
            <div className="flex-1 p-5 border border-border bg-primary rounded-sm text-center w-full">
              <p className="text-base font-heading font-semibold text-text mb-1.5">
                {environment.name}
              </p>
              <p className="text-xs text-text-muted">{environment.description}</p>
            </div>
            {index < environments.length - 1 && (
              <div className="flex flex-col items-center gap-1.5 py-1 md:px-3" aria-hidden="true">
                <ArrowRight className="w-5 h-5 text-accent" />
                <span className="text-[10px] text-text-dim text-center max-w-24 md:max-w-none">
                  {gates[index]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3 text-xs text-text-dim">
        <ArrowLeft className="w-4 h-4 text-accent/60" />
        <span>Automated rollback path on failure detection</span>
      </div>
    </div>
  );
}

function DataConsistency() {
  const sources = ["CRM", "ERP", "HR System"];
  const consumers = ["Operations", "Finance", "Leadership"];

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 max-w-4xl mx-auto"
      role="img"
      aria-label="Data consistency flow: department systems feed an integration layer that synchronizes a single source of truth to all consumers"
    >
      <div className="flex flex-col gap-3 w-full lg:w-auto">
        {sources.map((source) => (
          <div
            key={source}
            className="px-5 py-3 border border-border bg-primary rounded-sm text-sm text-text-muted text-center"
          >
            {source}
          </div>
        ))}
      </div>

      <div className="flex flex-row lg:flex-col items-center gap-2" aria-hidden="true">
        <ArrowRight className="w-5 h-5 text-accent rotate-90 lg:rotate-0" />
        <ArrowRight className="w-5 h-5 text-accent rotate-90 lg:rotate-0" />
        <ArrowRight className="w-5 h-5 text-accent rotate-90 lg:rotate-0" />
      </div>

      <div className="p-6 border border-accent/50 bg-secondary rounded-sm text-center max-w-xs">
        <Database className="w-6 h-6 text-accent mx-auto mb-2" aria-hidden="true" />
        <p className="text-sm font-heading font-semibold text-text mb-1">
          Integration Layer
        </p>
        <p className="text-xs text-text-muted leading-relaxed">
          Validation, mapping &amp; synchronization
        </p>
      </div>

      <div className="flex flex-row lg:flex-col items-center gap-2" aria-hidden="true">
        <ArrowRight className="w-5 h-5 text-accent rotate-90 lg:rotate-0" />
        <ArrowRight className="w-5 h-5 text-accent rotate-90 lg:rotate-0" />
        <ArrowRight className="w-5 h-5 text-accent rotate-90 lg:rotate-0" />
      </div>

      <div className="flex flex-col gap-3 w-full lg:w-auto">
        {consumers.map((consumer) => (
          <div
            key={consumer}
            className="px-5 py-3 border border-border bg-primary rounded-sm text-sm text-text text-center"
          >
            {consumer}
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardMock() {
  const kpis = [
    { label: "Monthly Revenue", value: "$248K", trend: "+12.4%" },
    { label: "Active Users", value: "12.4K", trend: "+8.1%" },
    { label: "Conversion Rate", value: "3.8%", trend: "+0.6%" },
  ];

  const bars = [42, 68, 55, 80, 62, 90, 74];
  const linePoints = "20,110 70,85 120,95 170,60 220,72 270,40 320,52";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border border-border bg-primary rounded-sm overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-border bg-secondary">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-4.5 h-4.5 text-accent" aria-hidden="true" />
            <p className="text-sm font-heading font-semibold text-text">
              Operations Dashboard
            </p>
          </div>
          <span className="px-3 py-1 text-[11px] font-semibold text-accent border border-accent/40 bg-accent/10 rounded-full">
            Illustrative sample data — not real client results
          </span>
        </div>

        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="p-4 border border-border bg-secondary rounded-sm"
              >
                <p className="text-xs text-text-dim uppercase tracking-wider mb-1.5">
                  {kpi.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-heading font-bold text-text">
                    {kpi.value}
                  </span>
                  <span className="text-xs text-accent">{kpi.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border bg-secondary rounded-sm">
              <p className="text-xs text-text-dim uppercase tracking-wider mb-4">
                Weekly Activity
              </p>
              <svg
                viewBox="0 0 320 140"
                className="w-full h-auto"
                role="img"
                aria-label="Sample bar chart showing weekly activity"
              >
                {bars.map((height, index) => (
                  <rect
                    key={index}
                    x={20 + index * 42}
                    y={130 - height}
                    width="24"
                    height={height}
                    rx="3"
                    fill="var(--color-accent)"
                    opacity={index === 5 ? 1 : 0.55}
                  />
                ))}
                <line
                  x1="10"
                  y1="130"
                  x2="315"
                  y2="130"
                  stroke="var(--color-border)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <div className="p-4 border border-border bg-secondary rounded-sm">
              <p className="text-xs text-text-dim uppercase tracking-wider mb-4">
                Performance Trend
              </p>
              <svg
                viewBox="0 0 340 140"
                className="w-full h-auto"
                role="img"
                aria-label="Sample line chart showing performance trend"
              >
                <polyline
                  points={linePoints}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {linePoints.split(" ").map((point) => {
                  const [x, y] = point.split(",").map(Number);
                  return (
                    <circle
                      key={point}
                      cx={x}
                      cy={y}
                      r="3.5"
                      fill="var(--color-primary)"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResponsiveDemo() {
  const frames = [
    {
      icon: Monitor,
      label: "Desktop",
      className: "w-full max-w-72",
      skeleton: "grid-cols-3",
    },
    {
      icon: Tablet,
      label: "Tablet",
      className: "w-full max-w-44",
      skeleton: "grid-cols-2",
    },
    {
      icon: Smartphone,
      label: "Mobile",
      className: "w-full max-w-24",
      skeleton: "grid-cols-1",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="flex flex-col sm:flex-row items-end justify-center gap-8"
        role="img"
        aria-label="The same interface adapting across desktop, tablet and mobile viewports"
      >
        {frames.map((frame) => {
          const Icon = frame.icon;
          return (
            <div key={frame.label} className="flex flex-col items-center gap-3">
              <div
                className={`${frame.className} border border-border bg-primary rounded-sm overflow-hidden`}
              >
                <div className="h-2.5 bg-surface-light" aria-hidden="true" />
                <div className="p-3 space-y-2">
                  <div className="h-2 bg-accent/40 rounded-full w-2/3" aria-hidden="true" />
                  <div className={`grid ${frame.skeleton} gap-1.5`} aria-hidden="true">
                    <div className="h-10 bg-secondary border border-border rounded-sm" />
                    <div className="h-10 bg-secondary border border-border rounded-sm" />
                    <div className="h-10 bg-secondary border border-border rounded-sm" />
                  </div>
                  <div className="h-2 bg-surface-light rounded-full w-full" aria-hidden="true" />
                  <div className="h-2 bg-surface-light rounded-full w-4/5" aria-hidden="true" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <Icon className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                {frame.label}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-center text-xs text-text-dim">
        One codebase, every viewport — mobile-first with defined breakpoints.
      </p>
    </div>
  );
}

interface DetailVisualConfig {
  eyebrow: string;
  title: string;
  description: string;
  visual: ReactNode;
}

const detailVisuals: Record<string, DetailVisualConfig> = {
  "software-engineering": {
    eyebrow: "Architecture Overview",
    title: "A Practical Reference Architecture",
    description:
      "Custom software at BLACK VAVE is built in layers — client, application, service and data — connected through well-defined APIs. This separation keeps systems maintainable, testable and scalable as they grow.",
    visual: <ArchitectureLayers />,
  },
  "digital-transformation": {
    eyebrow: "Transformation Journey",
    title: "From Disconnected to Connected",
    description:
      "Transformation moves organizations from isolated tools and manual handoffs to connected operations with a shared source of truth — the foundation for everything that follows.",
    visual: <DisconnectedConnected />,
  },
  "cloud-devops": {
    eyebrow: "Delivery Pipeline",
    title: "Environments & Release Flow",
    description:
      "Every change flows through development, staging and production with automated quality gates at each step — and a tested rollback path if anything goes wrong.",
    visual: <DeploymentFlow />,
  },
  "enterprise-applications": {
    eyebrow: "Data Consistency",
    title: "One Source of Truth",
    description:
      "Enterprise applications succeed when every department works from the same data. An integration layer validates, maps and synchronizes records across CRM, ERP and HR systems.",
    visual: <DataConsistency />,
  },
  "data-analytics": {
    eyebrow: "Dashboard Overview",
    title: "Analytics, Visualized",
    description:
      "Dashboards consolidate KPIs, trends and operational metrics into a single view. The example below uses illustrative sample data — production dashboards are built exclusively from your actual data.",
    visual: <DashboardMock />,
  },
  "digital-experience": {
    eyebrow: "Responsive Design",
    title: "One Experience, Every Viewport",
    description:
      "Effective digital experiences adapt fluidly across devices. We design mobile-first and validate layouts at every breakpoint — from phones to ultrawide displays.",
    visual: <ResponsiveDemo />,
  },
};

export function ServiceDetailVisual({ slug }: { slug: string }) {
  const config = detailVisuals[slug];
  if (!config) return null;

  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container-main">
        <SectionHeader
          eyebrow={config.eyebrow}
          title={config.title}
          description={config.description}
          align="center"
          className="mb-14"
        />
        <Reveal>
          <div className="p-6 md:p-10 border border-border bg-primary rounded-sm">
            {config.visual}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
