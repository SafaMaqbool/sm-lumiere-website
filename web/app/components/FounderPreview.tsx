export default function FounderPreview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
          Meet the Founder
        </span>
        <p className="font-body text-base md:text-lg text-navy/80 leading-relaxed mt-6">
          Behind SM Lumière is a vision to create opportunities that
          transform ideas into impact.
        </p>
        <p className="font-body text-base md:text-lg text-navy/80 leading-relaxed mt-4">
          Founded by Shagufta Munaf, entrepreneur, business leader, trainer,
          mindset coach, and community builder, SM Lumière reflects her
          commitment to empowering individuals, supporting businesses, and
          building communities through leadership, collaboration, and
          innovation.
        </p>
        <div className="mt-8">
          <a
            href="/meet-the-founder"
            className="inline-block border border-navy text-navy font-body font-medium px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
          >
            Learn More About the Founder
          </a>
        </div>
      </div>
    </section>
  );
}