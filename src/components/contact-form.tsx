"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^[+\d][\d\s-]{6,}$/.test(v), "Please enter a valid phone number"),
  country: z.string().optional(),
  service: z.string(),
  projectType: z.string(),
  budget: z.string(),
  message: z.string().min(10, "Please tell us a little more about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Software Engineering",
  "AI & Intelligent Automation",
  "Digital Transformation",
  "Cloud & DevOps",
  "Enterprise Applications",
  "Data & Analytics",
  "Digital Experience",
  "Other",
];

const projectTypes = [
  "New Project",
  "Application Modernization",
  "AI / Automation Initiative",
  "Cloud Migration",
  "Digital Platform",
  "Consulting / Strategy",
  "Other",
];

const budgets = [
  "Under $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+",
  "Not sure yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
      projectType: "",
      budget: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulated submission - in production this would POST to a secure API endpoint
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact submission:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 border border-accent/30 bg-accent/5 rounded-sm">
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-text mb-3">
          Thank You
        </h3>
        <p className="text-text-muted max-w-md">
          Your message has been received. A member of our team will get back to
          you shortly to discuss your project.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 bg-secondary border border-border rounded-sm text-text placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors";
  const labelClasses = "block text-sm font-medium text-text mb-2";
  const errorClasses = "text-sm text-error mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={inputClasses}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Business Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClasses}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company (optional)"
            className={inputClasses}
            {...register("company")}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 555 000 0000 (optional)"
            className={inputClasses}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="country" className={labelClasses}>
          Country
        </label>
        <input
          id="country"
          type="text"
          autoComplete="country-name"
          placeholder="Your country (optional)"
          className={inputClasses}
          {...register("country")}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Service Interested In <span className="text-accent">*</span>
        </label>
        <select id="service" className={inputClasses} {...register("service")}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorClasses}>{errors.service.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Project Type
          </label>
          <select id="projectType" className={inputClasses} {...register("projectType")}>
            <option value="">Select project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Budget Range
          </label>
          <select id="budget" className={inputClasses} {...register("budget")}>
            <option value="">Select budget range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals and timeline..."
          className={`${inputClasses} resize-y`}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Start a Conversation"}
      </button>

      <p className="text-xs text-text-dim">
        Your information is kept confidential and used only to respond to your enquiry.
      </p>
    </form>
  );
}
