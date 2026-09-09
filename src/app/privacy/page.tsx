import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "BLACK VAVE CORPORATION's privacy policy explains how we collect, use, store and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How BLACK VAVE CORPORATION handles your personal information. This policy is a framework and will be updated as we formalize our operations."
    >
      <h2>1. Introduction</h2>
      <p>
        BLACK VAVE CORPORATION PRIVATE LIMITED ("BLACK VAVE," "we," "us") respects
        your privacy and is committed to protecting the personal information you
        share with us. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website or interact with
        our services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We may collect information you provide directly, including your name,
        business email address, company, phone number, country and any details you
        share through our contact form or other communications. We may also
        automatically collect limited technical information about your visit, such
        as browser type and device information, to improve our website.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use the information we collect to respond to your enquiries, provide the
        services you request, communicate with you about our services, improve our
        website and services, and comply with legal obligations. We do not sell
        your personal information to third parties.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfill the
        purposes described in this policy, unless a longer retention period is
        required or permitted by law.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the right to access, correct,
        delete, or restrict the processing of your personal information. To
        exercise these rights, please contact us using the contact information
        provided on our website.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect
        your personal information against unauthorized access, alteration,
        disclosure or destruction. However, no method of transmission or storage
        is completely secure.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of
        any material changes by posting the new policy on this page. We encourage
        you to review this policy periodically.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us via
        the contact information provided on our website.
      </p>
    </LegalPage>
  );
}
