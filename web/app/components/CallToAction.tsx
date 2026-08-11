export default function CallToAction() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-gold">
          Ready to Grow with SM Lumière?
        </h2>
        <p className="font-body text-base md:text-lg text-white/80 leading-relaxed mt-6">
          Whether you are an entrepreneur, business owner, creative
          professional, startup, or someone with a vision to make a
          difference, SM Lumière is here to help you connect, grow, and
          succeed.
        </p>
        <p className="font-body text-base md:text-lg text-white/80 leading-relaxed mt-4">
          Join our community, participate in our events, showcase your
          business, and become part of a platform where opportunities begin
          and success is celebrated.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-gold text-navy font-body font-medium px-8 py-3 rounded-full hover:bg-white transition-colors"
          >
            Join SM Lumière
          </a>
          <a
            href="/partners"
            className="inline-block border border-gold text-gold font-body font-medium px-8 py-3 rounded-full hover:bg-gold hover:text-navy transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}