export default function Hero() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-semibold text-navy leading-tight">
          Empowering People. Elevating Businesses. Creating Opportunities.
        </h1>
        <p className="font-body text-lg text-navy/70 mt-6 max-w-2xl mx-auto">
          Where entrepreneurs, home-based businesses, professionals, creatives,
          and emerging talent come together to connect, grow, and thrive.
        </p>
        <p className="font-body text-base text-gold font-medium mt-4">
          Build Your Brand. Expand Your Network. Unlock New Opportunities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/events"
            className="inline-block bg-gold text-navy font-body font-medium px-8 py-3 rounded-full hover:bg-navy hover:text-gold transition-colors"
          >
            Explore Events
          </a>
          <a
            href="/contact"
            className="inline-block border border-navy text-navy font-body font-medium px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
}