import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "BLACK VAVE CORPORATION's commitment to accessibility — targeting WCAG 2.2 AA standards across our website.",
  alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityStatementPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      description="BLACK VAVE CORPORATION is committed to ensuring digital accessibility for people with disabilities. We are working toward WCAG 2.2 AA compliance across our website."
    >
      <h2>Our Commitment</h2>
      <p>
        BLACK VAVE CORPORATION is committed to providing a website that is
        accessible to the widest possible audience, regardless of technology or
        ability. We are actively working to ensure our website meets or exceeds the
        requirements of the Web Content Accessibility Guidelines (WCAG) 2.2 AA.
      </p>

      <h2>What We Are Doing</h2>
      <p>
        We have implemented a number of accessibility features, including:
      </p>
      <ul>
        <li>Semantic HTML structure for improved screen reader navigation</li>
        <li>Full keyboard navigation support with visible focus indicators</li>
        <li>Proper heading hierarchy and descriptive alt text for images</li>
        <li>Sufficient color contrast for text and UI elements</li>
        <li>Support for reduced-motion preferences</li>
        <li>Skip-to-content navigation</li>
        <li>Accessible forms with clear labels and error messaging</li>
        <li>ARIA attributes where necessary to enhance screen reader experience</li>
      </ul>

      <h2>Ongoing Effort</h2>
      <p>
        Accessibility is an ongoing process. We regularly review our website and
        make improvements to enhance accessibility and usability. As we continue to
        evolve our digital presence, we apply accessibility best practices to all
        new and updated content.
      </p>

      <h2>Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of our website. If you
        encounter any accessibility barriers, or have suggestions for improvement,
        please contact us so we can assist you. Your feedback helps us improve.
      </p>
    </LegalPage>
  );
}
