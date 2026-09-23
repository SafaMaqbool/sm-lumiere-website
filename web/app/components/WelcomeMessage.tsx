import Reveal from "./Reveal";

export default function WelcomeMessage() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <Reveal className="max-w-2xl mx-auto px-6">
        <span className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
          Welcome
        </span>
        <div className="w-12 h-px bg-gold mt-3 mb-8" />
        <p className="font-body text-[17px] md:text-[19px] text-navy/80 leading-[1.6]">
          Welcome to SM Lumière—a purpose-driven platform dedicated to
          empowering entrepreneurs, supporting home-based businesses,
          promoting talent, and creating meaningful opportunities through
          business events, networking, education, and community engagement.
        </p>
        <p className="font-body text-[16px] text-navy/80 leading-[1.65] mt-6">
          At SM Lumière, we believe that every dream deserves a platform,
          every talent deserves recognition, and every entrepreneur deserves
          the opportunity to grow. We bring together ambitious individuals,
          businesses, and communities to inspire collaboration, innovation,
          and lasting success.
        </p>
      </Reveal>
    </section>
  );
}
