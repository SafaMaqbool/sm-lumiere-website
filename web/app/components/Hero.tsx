import React from 'react'

export default function Hero() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-semibold text-navy leading-tight">
          Illuminate Your Hair
        </h1>
        <p className="font-body text-lg text-navy/70 mt-6 max-w-2xl mx-auto">
          Welcome to SM Lumière, where innovation meets elegance — transforming
          the fashion and beauty landscape with high-quality products and
          exceptional experiences.
        </p>
        <div className="mt-10">
          <a href="/about" className="inline-block bg-gold text-navy font-body font-medium px-8 py-3 rounded-full hover:bg-navy hover:text-gold transition-colors">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}

