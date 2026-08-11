export default function FeaturedEvents() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-navy leading-snug">
          Discover Carefully Curated Experiences Designed to Connect,
          Educate, and Inspire
        </h2>
        <p className="font-body text-base md:text-lg text-navy/70 leading-relaxed mt-6">
          From elegant business exhibitions and networking evenings to
          leadership workshops and community gatherings, every SM Lumière
          event is created to help entrepreneurs build relationships, gain
          visibility, and unlock new opportunities.
        </p>
        <div className="mt-8">
          <a
            href="/events"
            className="inline-block bg-gold text-navy font-body font-medium px-8 py-3 rounded-full hover:bg-navy hover:text-gold transition-colors"
          >
            Explore Our Events
          </a>
        </div>
      </div>
    </section>
  );
}