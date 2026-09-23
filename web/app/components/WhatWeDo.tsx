const services = [
  {
    title: "Business Exhibitions & Expos",
    description: "",
    flagship: true,
  },
  {
    title: "Networking Events",
    description: "",
    flagship: false,
  },
  {
    title: "Workshops & Masterclasses",
    description: "",
    flagship: false,
  },
  {
    title: "Entrepreneurship Development",
    description: "",
    flagship: false,
  },
  {
    title: "Women Empowerment Initiatives",
    description: "",
    flagship: false,
  },
  {
    title: "Community Building & Strategic Networking",
    description: "",
    flagship: true,
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-10">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-cream rounded-lg p-5 md:p-6 border-t-4 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                service.flagship ? "border-gold" : "border-rule"
              }`}
            >
              <p className="font-body text-[19px] md:text-[21px] leading-[1.35] text-navy break-words">
                {service.title}
              </p>
              {service.description && (
                <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-2">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
