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
        <span className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
          {eyebrow}
        </span>
        <h1 className="font-heading text-[34px] md:text-[56px] leading-[1.08] font-semibold text-navy mt-4">
          {heading}
        </h1>
        {subheading && (
          <p className="font-body text-[17px] md:text-[19px] text-navy/70 leading-relaxed mt-6">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
