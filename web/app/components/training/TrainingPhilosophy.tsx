import Reveal from "../Reveal";

const pillars = [
  "A Growth Mindset",
  "Continuous Learning",
  "Purpose-Driven Leadership",
];

export default function TrainingPhilosophy() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy">
          Our Training Philosophy
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-4 max-w-xl mx-auto">
          We believe that success is built on three essential foundations:
        </p>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-10">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar} delay={i * 100}>
              <div className="bg-cream rounded-lg p-6 border-t-4 border-gold transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <p className="font-body text-[19px] md:text-[21px] leading-[1.35] text-navy">
                  {pillar}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-10 max-w-xl mx-auto">
          Every program is designed to inspire confidence, strengthen
          capabilities, and help individuals unlock their full potential.
        </p>
      </div>
    </section>
  );
}
