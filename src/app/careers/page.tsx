import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { jobs } from "@/data/careers";
import { CTASection } from "@/components/cta-section";
import { Award, Users, Lightbulb, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join BLACK VAVE CORPORATION to help build what comes next. Explore open positions, engineering culture, learning opportunities and internships.",
  alternates: { canonical: "/careers" },
};

const reasons = [
  {
    icon: Lightbulb,
    title: "Meaningful Work",
    description: "Build technology that solves real problems for organizations and the people they serve.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    description: "Work with disciplined engineers who care about quality, craft and getting things right.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Grow through challenging projects, mentorship and a culture that values development.",
  },
  {
    icon: Users,
    title: "Strong Team Culture",
    description: "Join a collaborative team built on trust, transparency and shared ownership.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build What Comes Next."
        description="We're looking for people who care about quality, think rigorously and want to build technology that matters. Join us in engineering the future of business."
      />

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-main">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Why BLACK VAVE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text text-balance mb-4">
                More Than a Job — a Place to Build
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                We take on complex, meaningful problems and hold ourselves to a
                high standard of engineering. In return, we create an environment
                where great people can do their best work and grow.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.08}>
                <div className="h-full p-6 border border-border bg-secondary rounded-sm">
                  <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Current Opportunities
              </h2>
              <p className="mt-3 text-lg text-text-muted">
                Explore our open positions and internship opportunities.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {jobs.map((job, index) => (
              <Reveal key={job.slug} delay={index * 0.05}>
                <div className="h-full flex flex-col p-8 border border-border bg-secondary rounded-sm hover:border-accent/40 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-heading font-semibold text-text min-w-0">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-semibold text-accent border border-accent/30 rounded-full shrink-0">
                      {job.type}
                    </span>
                  </div>
                  <dl className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <dt className="text-xs text-text-dim uppercase tracking-wide mb-1">Location</dt>
                      <dd className="text-sm text-text">{job.location}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-dim uppercase tracking-wide mb-1">Experience</dt>
                      <dd className="text-sm text-text">{job.experience}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-dim uppercase tracking-wide mb-1">Department</dt>
                      <dd className="text-sm text-text">{job.department}</dd>
                    </div>
                  </dl>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {job.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs text-text-muted border border-border rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`mailto:careers@blackvave.com?subject=Application: ${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light transition-colors duration-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        description="We're always looking for exceptional people. Share your profile and we'll keep you in mind for future opportunities."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Explore Our Culture"
        secondaryHref="/about"
      />
    </>
  );
}
