const services = [
  "Business Exhibitions & Expos",
  "Networking Events",
  "Business Forums",
  "Workshops & Masterclasses",
  "Mindset & Leadership Training",
  "Entrepreneurship Development",
  "Home-Based Business Promotion",
  "Brand Visibility & Business Growth",
  "Women Empowerment Initiatives",
  "Community Building & Strategic Networking",
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-2xl md:text-3xl text-navy text-center mb-10">
          What We Do
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-cream rounded-lg p-5 md:p-6 border-t-4 border-gold text-center"
            >
              <p className="font-body text-sm md:text-base text-navy/80">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}