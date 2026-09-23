import Reveal from "./Reveal";

const values = [
  {
    title: "Empowerment",
    description:
      "We believe in enabling individuals to realise their full potential through opportunity, education, and encouragement.",
  },
  {
    title: "Integrity",
    description:
      "We conduct our work with honesty, professionalism, transparency, and respect.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering high-quality experiences, meaningful events, and exceptional value to our community.",
  },
  {
    title: "Collaboration",
    description:
      "We believe that strong partnerships and meaningful relationships create greater opportunities for everyone.",
  },
  {
    title: "Innovation",
    description:
      "We encourage creativity, fresh ideas, and continuous learning to help individuals and businesses stay ahead.",
  },
  {
    title: "Inclusivity",
    description:
      "We welcome people from diverse backgrounds, industries, and experiences, creating a community where everyone has the opportunity to grow.",
  },
  {
    title: "Impact",
    description:
      "Every initiative we create is designed to make a positive and lasting difference for individuals, businesses, and communities.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-2xl md:text-3xl text-navy text-center mb-8 md:mb-10">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={(i % 3) * 80}>
              <div className="bg-cream rounded-lg p-6 shadow-sm border-t-4 border-gold transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-navy/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
