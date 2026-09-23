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
      className={`${background === "white" ? "bg-white" : "bg-cream"} py-18 md:py-32`}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
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
