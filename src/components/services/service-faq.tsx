"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { FAQ } from "@/data/services";

interface ServiceFAQProps {
  faqs: FAQ[];
  serviceTitle: string;
}

export function ServiceFAQ({ faqs, serviceTitle }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const count = faqs.length;
    let next: number | null = null;

    if (event.key === "ArrowDown") {
      next = (index + 1) % count;
    } else if (event.key === "ArrowUp") {
      next = (index - 1 + count) % count;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = count - 1;
    }

    if (next !== null) {
      event.preventDefault();
      buttonRefs.current[next]?.focus();
    }
  };

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-main">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title={`${serviceTitle} — FAQ`}
          description="Direct answers to the questions decision-makers ask most about this service."
          className="mb-14"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div
                  className={cn(
                    "border rounded-sm bg-secondary transition-colors duration-300",
                    isOpen ? "border-accent/40" : "border-border hover:border-border-light"
                  )}
                >
                  <h3>
                    <button
                      ref={(element) => {
                        buttonRefs.current[index] = element;
                      }}
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-heading font-semibold text-text text-base md:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-accent shrink-0 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-6 pb-6"
                  >
                    <p className="text-sm md:text-base text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
