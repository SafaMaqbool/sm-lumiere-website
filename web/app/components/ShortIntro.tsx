export default function ShortIntro() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <p className="font-heading text-3xl md:text-4xl text-navy leading-snug">
          A community where ideas flourish, businesses grow, and connections
          are created.
        </p>

        <div className="space-y-6">
          <p className="font-body text-base text-navy/70 leading-relaxed">
            SM Lumière is more than an events and networking platform.
            Through exhibitions, networking events, educational workshops,
            business forums, and empowerment initiatives, we provide
            entrepreneurs, startups, professionals, creatives, and
            home-based businesses with opportunities to showcase their
            work, expand their reach, and build lasting relationships.
          </p>
          <p className="font-body text-base text-navy/70 leading-relaxed">
            Our goal is to create an environment where collaboration
            replaces competition, innovation is encouraged, and success is
            shared.
          </p>
        </div>
      </div>
    </section>
  );
}