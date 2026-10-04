"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile menu on route change (e.g. browser back/forward), not just on link click.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-primary/95 backdrop-blur-md border-b border-border shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
      <div className="container-main flex items-center justify-between h-16 md:h-20">
          <Logo className="shrink-0" />

          <nav className="hidden lg:flex items-center" aria-label="Primary navigation">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-2 py-2 xl:px-3 text-sm font-medium transition-colors duration-200 group",
                        isActive ? "text-accent" : "text-text-muted hover:text-text"
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute bottom-0 left-2 right-2 xl:left-3 xl:right-3 h-px bg-accent transition-transform duration-300 origin-left",
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary font-semibold text-sm rounded-sm hover:bg-accent-light transition-colors duration-300"
            >
              Talk to Our Experts
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-4 py-2 bg-accent text-primary font-semibold text-sm rounded-sm hover:bg-accent-light transition-colors duration-300"
            >
              <span className="hidden sm:inline">Talk to Our Experts</span>
              <span className="sm:hidden">Contact</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-10 h-10 text-text hover:text-accent transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-primary z-40"
          >
            <nav
              className="container-main flex h-full flex-col overflow-y-auto overscroll-contain py-4 md:py-8"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-3 md:py-4 border-b border-border text-xl font-heading transition-colors",
                          isActive ? "text-accent" : "text-text hover:text-accent"
                        )}
                      >
                        {item.label}
                        <ArrowUpRight className="w-5 h-5 text-text-muted shrink-0" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 md:mt-8 inline-flex items-center justify-center gap-2 w-full shrink-0 px-6 py-4 bg-accent text-primary font-semibold rounded-sm"
              >
                Talk to Our Experts
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
