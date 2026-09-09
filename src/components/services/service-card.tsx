import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Code2, Brain, RefreshCw, Cloud, Building2, BarChart3, Monitor, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  RefreshCw,
  Cloud,
  Building2,
  BarChart3,
  Monitor,
};

interface ServiceCardProps {
  title: string;
  slug: string;
  tagline: string;
  icon: string;
  technologies: string[];
  children: React.ReactNode;
}

export function ServiceCard({ title, slug, tagline, icon, technologies, children }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Code2;
  return (
    <Link href={`/services/${slug}`} className="group block h-full">
      <article className="h-full flex flex-col p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-accent/80 font-medium mb-4">{tagline}</p>
        <div className="text-sm text-text-muted leading-relaxed flex-grow mb-6">
          {children}
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs text-text-dim border border-border rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
