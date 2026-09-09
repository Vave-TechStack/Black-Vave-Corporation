import { Reveal } from "@/components/ui/reveal";
import { Building2 } from "lucide-react";

export function LeadershipSection() {
  return (
    <section className="py-20 md:py-28 bg-primary" id="leadership">
      <div className="container-main">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text text-balance">
              Led by Experience. Guided by Standards.
            </h2>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Our leadership is committed to the same discipline, integrity and
              engineering standards we bring to every client engagement. Leadership
              profiles are being finalized and will be published here.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-center justify-center text-center p-16 border border-dashed border-border rounded-sm">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
              <Building2 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-text mb-3">
              Leadership Profiles Coming Soon
            </h3>
            <p className="text-text-muted max-w-md">
              We are assembling detailed profiles of our leadership team and will
              publish them here shortly. Until then, we invite you to learn more
              about how we work and what we build.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
