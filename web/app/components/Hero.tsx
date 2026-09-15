import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-white py-18 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-heading text-[34px] md:text-[56px] leading-[1.08] font-semibold text-navy">
          Empowering People. Elevating Businesses. Creating Opportunities.
        </h1>
        <p className="font-body text-[17px] md:text-[19px] text-navy/70 mt-6 max-w-2xl mx-auto leading-relaxed">
          Where entrepreneurs, home-based businesses, professionals, creatives,
          and emerging talent come together to connect, grow, and thrive.
        </p>
        <p className="font-body text-[16px] text-gold-dark font-medium mt-4">
          Build Your Brand. Expand Your Network. Unlock New Opportunities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/events">Explore Events</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
