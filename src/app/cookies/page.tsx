import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How BLACK VAVE CORPORATION uses cookies and similar technologies on its website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How BLACK VAVE CORPORATION uses cookies and similar technologies. This framework will be finalized as our analytics operations are configured."
    >
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They are widely used to make websites work efficiently, improve
        user experience and provide information to website owners.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>
        We use cookies for essential website functionality, such as remembering
        your preferences, and for analytics purposes to understand how visitors
        use our website so we can improve it. We do not use cookies that process
        personal data beyond what is described here.
      </p>

      <h2>3. Managing Cookies</h2>
      <p>
        You can control and/or delete cookies through your browser settings. You
        can delete all cookies already stored on your computer and set most
        browsers to prevent them from being placed. However, if you do this, you
        may need to manually adjust some preferences every time you visit and some
        services may not work correctly.
      </p>

      <h2>4. Analytics</h2>
      <p>
        We may use analytics tools to understand website usage and improve our
        services. These tools use cookies to collect information in an anonymous
        form. We are in the process of configuring our analytics architecture and
        will update this policy accordingly.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. We encourage you to
        review this policy periodically to stay informed about how we use cookies.
      </p>
    </LegalPage>
  );
}
