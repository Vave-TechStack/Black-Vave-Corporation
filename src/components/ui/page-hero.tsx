interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 bg-primary overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 10%, rgba(200,160,96,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,160,96,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,160,96,0.05) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 0%, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 0%, black 30%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative container-main">
        <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text max-w-4xl leading-tight text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
