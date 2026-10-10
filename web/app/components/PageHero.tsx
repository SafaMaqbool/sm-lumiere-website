type PageHeroProps = {
  background?: "white" | "cream";
  eyebrow: string;
  heading: string;
  subheading?: string;
};

export default function PageHero({
  background = "white",
  eyebrow,
  heading,
  subheading,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${background === "white" ? "bg-white" : "bg-cream"} py-18 md:py-32`}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-120 w-180 -translate-x-1/2 -translate-y-1/3 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,175,55,0.14), rgba(212,175,55,0.04) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <span className="animate-fade-in-up font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
          {eyebrow}
        </span>
        <h1
          className="animate-fade-in-up font-heading text-[34px] md:text-[56px] leading-[1.08] font-semibold text-navy mt-4"
          style={{ animationDelay: "100ms" }}
        >
          {heading}
        </h1>
        {subheading && (
          <p
            className="animate-fade-in-up font-body text-[17px] md:text-[19px] text-navy/70 leading-relaxed mt-6"
            style={{ animationDelay: "200ms" }}
          >
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
