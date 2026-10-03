import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Compass,
  Cpu,
  Filter,
  FileText,
  Gauge,
  Layout,
  Map,
  Monitor,
  Network,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Tablet,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

interface FlowStep {
  icon: LucideIcon;
  label: string;
}

function FlowDiagram({ steps }: { steps: FlowStep[] }) {
  return (
    <div
      className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-0"
      role="img"
      aria-label={`Process flow: ${steps.map((s) => s.label).join(", ")}`}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="flex flex-col md:flex-row items-center flex-1 w-full">
            <div className="flex flex-col items-center gap-3 w-full md:w-auto">
              <div className="w-16 h-16 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium text-text-muted text-center">
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <>
                <ArrowRight
                  className="hidden md:block w-5 h-5 text-accent/50 mx-2 shrink-0"
                  aria-hidden="true"
                />
                <ArrowDown
                  className="md:hidden w-5 h-5 text-accent/50 my-1 shrink-0"
                  aria-hidden="true"
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SdlcCycle() {
  const cx = 240;
  const cy = 240;
  const r = 160;
  const steps = ["Discover", "Architect", "Build", "Test", "Deploy", "Evolve"];

  const nodes = steps.map((_, index) => {
    const angle = (-90 + index * 60) * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  });

  const arrows = [-60, 0, 60, 120, 180, 240].map((deg) => {
    const angle = deg * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      rotation: deg + 90,
    };
  });

  const labels = [
    { x: cx, y: 42, anchor: "middle" as const },
    { x: 414, y: 142, anchor: "middle" as const },
    { x: 414, y: 338, anchor: "middle" as const },
    { x: cx, y: 438, anchor: "middle" as const },
    { x: 66, y: 338, anchor: "middle" as const },
    { x: 66, y: 142, anchor: "middle" as const },
  ];

  return (
    <svg
      viewBox="0 0 480 480"
      className="w-full h-auto"
      role="img"
      aria-label="Software development lifecycle cycle: Discover, Architect, Build, Test, Deploy, Evolve"
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      {arrows.map((arrow, index) => (
        <path
          key={index}
          d="M -6 -4 L 6 0 L -6 4 Z"
          fill="var(--color-accent)"
          opacity="0.7"
          transform={`translate(${arrow.x} ${arrow.y}) rotate(${arrow.rotation})`}
        />
      ))}
      {nodes.map((node, index) => (
        <g key={index}>
          <circle
            cx={node.x}
            cy={node.y}
            r="26"
            fill="var(--color-primary)"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
          />
          <text
            x={node.x}
            y={node.y + 5}
            textAnchor="middle"
            className="fill-accent"
            fontSize="13"
            fontFamily="var(--font-mono)"
          >
            {String(index + 1).padStart(2, "0")}
          </text>
          <text
            x={labels[index].x}
            y={labels[index].y}
            textAnchor={labels[index].anchor}
            className="fill-text"
            fontSize="14"
            fontWeight="600"
            fontFamily="var(--font-heading)"
          >
            {steps[index]}
          </text>
        </g>
      ))}
      <circle
        cx={cx}
        cy={cy}
        r="52"
        fill="var(--color-secondary)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        className="fill-text"
        fontSize="15"
        fontWeight="700"
        fontFamily="var(--font-heading)"
      >
        SDLC
      </text>
      <text
        x={cx}
        y={cy + 14}
        textAnchor="middle"
        className="fill-text-dim"
        fontSize="10"
        fontFamily="var(--font-body)"
      >
        Continuous
      </text>
    </svg>
  );
}

function TransformationJourney() {
  const steps: FlowStep[] = [
    { icon: Compass, label: "Assess" },
    { icon: Map, label: "Strategize" },
    { icon: RefreshCw, label: "Modernize" },
    { icon: Network, label: "Integrate" },
    { icon: TrendingUp, label: "Optimize" },
  ];
  return <FlowDiagram steps={steps} />;
}

function CloudArchitecture() {
  const layers = [
    { title: "Users & Clients", items: ["Web", "Mobile", "Partners"] },
    { title: "Edge Layer", items: ["CDN", "Load Balancer"] },
    {
      title: "Application Services",
      items: ["Next.js Frontend", "API Services", "Workers"],
    },
    { title: "Data Layer", items: ["PostgreSQL", "MongoDB", "Cache"] },
  ];

  return (
    <div
      className="flex flex-col lg:flex-row gap-6"
      role="img"
      aria-label="Cloud architecture diagram: users connect through an edge layer to application services and a data layer, with CI/CD and monitoring alongside"
    >
      <div className="flex-1 flex flex-col gap-0">
        {layers.map((layer, index) => (
          <div key={layer.title} className="flex flex-col">
            <div className="p-4 border border-border bg-primary rounded-sm">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2.5">
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
            {index < layers.length - 1 && (
              <div className="flex justify-center py-1.5" aria-hidden="true">
                <ArrowDown className="w-4 h-4 text-accent/60" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="lg:w-56 flex flex-row lg:flex-col gap-4">
        <div className="flex-1 p-4 border border-dashed border-accent/40 bg-accent/5 rounded-sm">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            CI/CD Pipeline
          </p>
          <p className="text-xs text-text-muted leading-relaxed">
            Automated build, test and release to every environment.
          </p>
        </div>
        <div className="flex-1 p-4 border border-dashed border-accent/40 bg-accent/5 rounded-sm">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Monitoring
          </p>
          <p className="text-xs text-text-muted leading-relaxed">
            Metrics, logs and traces with intelligent alerting.
          </p>
        </div>
      </div>
    </div>
  );
}

function EnterpriseModules() {
  const cx = 240;
  const cy = 240;
  const r = 165;
  const modules = [
    { label: "HR & Payroll", angle: -90 },
    { label: "Finance", angle: -30 },
    { label: "Sales & CRM", angle: 30 },
    { label: "Operations", angle: 90 },
    { label: "Customers", angle: 150 },
    { label: "Partners", angle: 210 },
  ];

  const nodes = modules.map((module) => {
    const angle = module.angle * (Math.PI / 180);
    return {
      label: module.label,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  });

  const boxWidth = 118;
  const boxHeight = 46;

  return (
    <svg
      viewBox="0 0 480 480"
      className="w-full h-auto"
      role="img"
      aria-label="Connected enterprise modules: HR, Finance, Sales, Operations, Customers and Partners connected to a central enterprise platform"
    >
      {nodes.map((node) => (
        <line
          key={node.label}
          x1={cx}
          y1={cy}
          x2={node.x}
          y2={node.y}
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          opacity="0.45"
        />
      ))}
      {nodes.map((node) => (
        <g key={node.label}>
          <rect
            x={node.x - boxWidth / 2}
            y={node.y - boxHeight / 2}
            width={boxWidth}
            height={boxHeight}
            rx="6"
            fill="var(--color-primary)"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <text
            x={node.x}
            y={node.y + 5}
            textAnchor="middle"
            className="fill-text"
            fontSize="13"
            fontWeight="600"
            fontFamily="var(--font-heading)"
          >
            {node.label}
          </text>
        </g>
      ))}
      <rect
        x={cx - 85}
        y={cy - 34}
        width={170}
        height={68}
        rx="8"
        fill="var(--color-secondary)"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        className="fill-text"
        fontSize="14"
        fontWeight="700"
        fontFamily="var(--font-heading)"
      >
        Enterprise
      </text>
      <text
        x={cx}
        y={cy + 14}
        textAnchor="middle"
        className="fill-text"
        fontSize="14"
        fontWeight="700"
        fontFamily="var(--font-heading)"
      >
        Platform
      </text>
    </svg>
  );
}

function AnalyticsWorkflow() {
  const steps: FlowStep[] = [
    { icon: Network, label: "Collect" },
    { icon: Filter, label: "Clean" },
    { icon: Cpu, label: "Transform" },
    { icon: Search, label: "Analyze" },
    { icon: BarChart3, label: "Visualize" },
    { icon: TrendingUp, label: "Act" },
  ];
  return <FlowDiagram steps={steps} />;
}

function ExperienceElements() {
  const elements = [
    { icon: Compass, title: "Navigation", description: "Clear paths to every key task." },
    { icon: Layout, title: "Content Structure", description: "Information organized for scanning." },
    { icon: Smartphone, title: "Responsive Layouts", description: "Flawless from phone to ultrawide." },
    { icon: CheckCircle2, title: "Accessibility", description: "Usable by everyone, WCAG 2.2 AA." },
    { icon: Gauge, title: "Performance", description: "Fast loads, smooth interactions." },
  ];

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      role="img"
      aria-label="Five elements of an effective digital experience: navigation, content structure, responsive layouts, accessibility and performance"
    >
      {elements.map((element) => {
        const Icon = element.icon;
        return (
          <div
            key={element.title}
            className="flex flex-col items-center text-center gap-3 p-5 border border-border bg-primary rounded-sm"
          >
            <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Icon className="w-5.5 h-5.5 text-accent" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-heading font-semibold text-text">
              {element.title}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {element.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function ServiceHeroVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "software-engineering":
      return <SdlcCycle />;
    case "ai-automation":
      return (
        <FlowDiagram
          steps={[
            { icon: FileText, label: "Input" },
            { icon: Filter, label: "Processing" },
            { icon: Brain, label: "AI Model" },
            { icon: ShieldCheck, label: "Validation" },
            { icon: Send, label: "Output" },
            { icon: Users, label: "Human Review" },
          ]}
        />
      );
    case "digital-transformation":
      return <TransformationJourney />;
    case "cloud-devops":
      return <CloudArchitecture />;
    case "enterprise-applications":
      return <EnterpriseModules />;
    case "data-analytics":
      return <AnalyticsWorkflow />;
    case "digital-experience":
      return <ExperienceElements />;
    default:
      return null;
  }
}
