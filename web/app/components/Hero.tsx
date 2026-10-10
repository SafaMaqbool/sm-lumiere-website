import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-18 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-160 w-225 -translate-x-1/2 -translate-y-1/3 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,175,55,0.16), rgba(212,175,55,0.05) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="animate-fade-in-up font-heading text-[34px] md:text-[56px] leading-[1.08] font-semibold text-navy">
          Empowering People. Elevating Businesses. Creating Opportunities.
        </h1>
        <p
          className="animate-fade-in-up font-body text-[17px] md:text-[19px] text-navy/70 mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: "120ms" }}
        >
          Where entrepreneurs, home-based businesses, professionals, creatives,
          and emerging talent come together to connect, grow, and thrive.
        </p>
        <p
          className="animate-fade-in-up font-body text-[16px] text-gold-dark font-medium mt-4"
          style={{ animationDelay: "220ms" }}
        >
          Build Your Brand. Expand Your Network. Unlock New Opportunities.
        </p>
        <div
          className="animate-fade-in-up mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animationDelay: "320ms" }}
        >
          <Button href="/events">Explore Events</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
