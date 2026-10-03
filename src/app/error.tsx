"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[bvc] Application error:", error.message);
  }, [error]);

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
        <p className="font-mono text-accent text-xl mb-4">Error</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text text-balance max-w-2xl mx-auto">
          Something Went Wrong
        </h1>
        <p className="mt-6 text-lg text-text-muted max-w-xl mx-auto">
          An unexpected error occurred. Your information is safe — please
          try again.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent-light transition-colors duration-300"
          >
            Try Again
          </button>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-light text-text font-semibold rounded-sm hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
