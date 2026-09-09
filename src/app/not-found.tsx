import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,160,96,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative container-main text-center py-32">
        <p className="font-mono text-accent text-xl mb-4">404</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text text-balance max-w-2xl mx-auto">
          This Page Is Beyond Our Reach
        </h1>
        <p className="mt-6 text-lg text-text-muted max-w-xl mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-light text-text font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Contact Us
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
