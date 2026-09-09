import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms and conditions governing the use of the BLACK VAVE CORPORATION website and its content.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="The terms and conditions governing your use of the BLACK VAVE CORPORATION website. This framework will be finalized as our operations are formalized."
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the BLACK VAVE CORPORATION website, you agree to be
        bound by these Terms of Use and all applicable laws and regulations. If you
        do not agree with any of these terms, you are prohibited from using this
        website.
      </p>

      <h2>2. Use of the Website</h2>
      <p>
        The content on this website is provided for general information purposes
        only. You may not modify, copy, distribute, transmit, display, perform,
        reproduce, publish, license, create derivative works from, transfer, or
        sell any information obtained from this website without our prior written
        consent.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        Unless otherwise stated, BLACK VAVE CORPORATION owns the intellectual
        property rights for all material on this website, including graphics,
        logos, text, images and software. All intellectual property rights are
        reserved.
      </p>

      <h2>4. Limitations</h2>
      <p>
        In no event shall BLACK VAVE CORPORATION be liable for any damages arising
        out of or in connection with your use of this website. This includes, but
        is not limited to, direct, indirect, incidental, consequential, or punitive
        damages.
      </p>

      <h2>5. No Warranties</h2>
      <p>
        The information on this website is provided on an "as is" basis without any
        representations or warranties of any kind, whether express or implied. We
        do not warrant that the website will be available at all times or free from
        errors or viruses.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These Terms of Use shall be governed by and construed in accordance with
        the laws of India. Any disputes relating to these terms shall be subject to
        the exclusive jurisdiction of the courts of India.
      </p>

      <h2>7. Changes to These Terms</h2>
      <p>
        We may revise these Terms of Use at any time by updating this page. By
        using this website, you agree to be bound by the current version of these
        terms.
      </p>
    </LegalPage>
  );
}
