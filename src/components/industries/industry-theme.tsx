import type { CSSProperties } from "react";
import type { Industry } from "@/data/industries";

interface IndustryThemeProps {
  industry: Industry;
  children: React.ReactNode;
}

/**
 * Scopes the global accent CSS variables to this industry for everything
 * rendered inside it. Because every accent utility in the design system
 * compiles to `var(--color-accent)` (or its light/dark pair), re-pointing
 * those three variables re-themes the entire page — headings, borders,
 * gradient text, icon tints, solid buttons and focus rings — without any
 * component needing to know which industry it is rendering.
 */
export function IndustryTheme({ industry, children }: IndustryThemeProps) {
  const { accent, accentLight, accentDark } = industry.theme;

  const style = {
    "--color-accent": accent,
    "--color-accent-light": accentLight,
    "--color-accent-dark": accentDark,
  } as CSSProperties;

  return (
    <div style={style} data-industry-theme={industry.slug} className="contents">
      {children}
    </div>
  );
}