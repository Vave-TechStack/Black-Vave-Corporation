"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^[+\d][\d\s-]{6,}$/.test(v), "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please tell us a little more about your project"),
  honeypot: z.string().optional(),
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

const budgets = [
  "Under $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+",
  "Not sure yet",
];

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [delivered, setDelivered] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setState("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setState("error");
        setServerMessage(
          result.message ||
            "Something went wrong. Please try again or email us directly."
        );
        return;
      }

      setDelivered(Boolean(result.delivered));
      setState("success");
    } catch {
      setState("error");
      setServerMessage(
        "We could not reach our server. Please try again or email us directly."
      );
    }
  };

  if (state === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center text-center p-12 border border-accent/30 bg-accent/5 rounded-sm"
        role="status"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-text mb-3">
          Thank You
        </h3>
        {delivered ? (
          <p className="text-text-muted max-w-md">
            Your message has been sent. A member of our team will get back to
            you shortly to discuss your project.
          </p>
        ) : (
          <p className="text-text-muted max-w-md">
            Your enquiry was received. Email delivery is being configured on
            our side — for urgent requests, please contact us directly at{" "}
            <a
              href="mailto:contact@blackvave.com"
              className="text-accent hover:text-accent-light underline underline-offset-2"
            >
              contact@blackvave.com
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 bg-secondary border border-border rounded-sm text-text placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors";
  const labelClasses = "block text-sm font-medium text-text mb-2";
  const errorClasses = "text-sm text-error mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {state === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 border border-error/40 bg-error/10 rounded-sm"
        >
          <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
          <p className="text-sm text-text">{serverMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={inputClasses}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className={errorClasses}>
              {errors.name.message}
            </p>
          )}
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
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorClasses}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company Name
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
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 555 000 0000 (optional)"
            className={inputClasses}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClasses}>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className={labelClasses}>
            Service of Interest <span className="text-accent">*</span>
          </label>
          <select
            id="service"
            className={inputClasses}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className={errorClasses}>
              {errors.service.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Project Budget
          </label>
          <select id="budget" className={inputClasses} {...register("budget")}>
            <option value="">Select budget range (optional)</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Project Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals and timeline..."
          className={`${inputClasses} resize-y`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses}>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from users, traps automated spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
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
