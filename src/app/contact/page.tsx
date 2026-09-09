import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start a conversation with BLACK VAVE CORPORATION. Contact our team to discuss your project, explore our services or learn how we can help your organization.",
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Corporate Email",
    value: "contact@blackvave.com",
    href: "mailto:contact@blackvave.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Registered Office: India (Headquarters)",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM (IST)",
    href: undefined,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "BLACK VAVE CORPORATION",
    href: "https://www.linkedin.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Meaningful."
        description="Tell us about your project and goals. Our team will get back to you to discuss how BLACK VAVE can help."
      />

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="text-2xl font-bold text-text mb-8">Start a Conversation</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-bold text-text mb-8">Contact Information</h2>
              <div className="space-y-4 mb-10">
                {contactMethods.map((method) => (
                  <div
                    key={method.label}
                    className="flex items-start gap-4 p-5 border border-border bg-secondary rounded-sm"
                  >
                    <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <method.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted mb-1">{method.label}</div>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-text font-medium hover:text-accent transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-text font-medium">{method.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border border-border bg-secondary rounded-sm">
                <h3 className="text-lg font-semibold text-text mb-3">Office Location</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  Registered Office
                  <br />
                  India
                </p>
                <div className="aspect-video bg-primary border border-border rounded-sm flex items-center justify-center">
                  <p className="text-text-dim text-sm">
                    Interactive map available on request
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
