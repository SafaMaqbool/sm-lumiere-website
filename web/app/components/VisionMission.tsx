import Reveal from "./Reveal";

type VisionMissionProps = {
  background?: "cream" | "white";
};

export default function VisionMission({ background = "cream" }: VisionMissionProps) {
  return (
    <section
      className={`${background === "white" ? "bg-white" : "bg-cream"} py-14 md:py-24`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 md:gap-10">
        <Reveal>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border-t-4 border-gold transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] font-semibold text-navy mb-4">
              Our Vision
            </h2>
            <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
              To become a globally recognised platform that empowers
              entrepreneurs, celebrates talent, builds meaningful connections,
              and inspires positive change through leadership, innovation, and
              collaboration. We envision a future where every entrepreneur,
              home-based business, creative professional, and emerging leader
              has access to opportunities that help them succeed and make a
              meaningful impact.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border-t-4 border-gold transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] font-semibold text-navy mb-4">
              Our Mission
            </h2>
            <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
              Our mission is to create opportunities that inspire growth,
              encourage collaboration, and support entrepreneurial success.
              Through business exhibitions, networking events, educational
              programs, leadership development, and community initiatives, we
              aim to help individuals and businesses increase their
              visibility, strengthen their capabilities, and build valuable
              relationships that lead to long-term success.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}