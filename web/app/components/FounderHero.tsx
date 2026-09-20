import Image from "next/image";

export default function FounderHero() {
  return (
    <section className="bg-white py-14 sm:py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden order-1 md:order-none">
          <Image
            src="/images/Shagufta-pic-5.jpg"
            alt="Shagufta Munaf, Founder & CEO of SM Lumière"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center md:text-left">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
            Meet the Founder
          </span>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-semibold text-navy mt-4 leading-tight">
            Meet Shagufta Munaf
          </h1>
          <p className="font-body text-sm md:text-base tracking-[0.15em] uppercase text-gold mt-3">
            Founder &amp; CEO, SM Lumière
          </p>
          <p className="font-body text-base md:text-lg text-navy/70 leading-relaxed mt-6">
            Shagufta Munaf is an entrepreneur, businesswoman, speaker,
            influencer, trainer, mindset coach, and community builder
            dedicated to empowering individuals, supporting entrepreneurs,
            and creating opportunities that inspire growth, collaboration,
            and lasting impact.
          </p>
          <p className="font-body text-base md:text-lg text-navy/70 leading-relaxed mt-4">
            As the Founder &amp; CEO of SM Lumière, she has established a
            platform that brings together entrepreneurs, home-based
            businesses, professionals, creatives, and emerging talent through
            business exhibitions, networking events, educational initiatives,
            and community-driven experiences. Her vision is to create an
            ecosystem where people are empowered to connect, learn, grow, and
            succeed together.
          </p>
        </div>
      </div>
    </section>
  );
}
