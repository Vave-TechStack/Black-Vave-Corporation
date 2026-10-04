import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  footerCompany,
  footerServices,
  footerSolutions,
  footerIndustries,
  footerResources,
  footerLegal,
} from "@/data/footer";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const columns: FooterColumn[] = [
  { title: "Company", links: footerCompany },
  { title: "Services", links: footerServices },
  { title: "Solutions", links: footerSolutions },
  { title: "Industries", links: footerIndustries },
  { title: "Resources", links: footerResources },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 text-sm text-text-muted leading-relaxed max-w-xs">
              A modern technology and business solutions company engineering
              intelligent digital products for organizations worldwide.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-1 -my-1 text-sm text-text-muted hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            © {new Date().getFullYear()} BLACK VAVE CORPORATION PRIVATE LIMITED. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4" aria-label="Legal">
            {footerLegal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-block py-1 -my-1 text-xs text-text-dim hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
