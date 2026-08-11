export default function WelcomeMessage() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
          Welcome
        </span>
        <div className="w-12 h-px bg-gold mx-auto mt-3 mb-8" />
        <p className="font-body text-lg text-navy/80 leading-relaxed">
          Welcome to SM Lumière—a purpose-driven platform dedicated to
          empowering entrepreneurs, supporting home-based businesses,
          promoting talent, and creating meaningful opportunities through
          business events, networking, education, and community engagement.
        </p>
        <p className="font-body text-lg text-navy/80 leading-relaxed mt-6">
          At SM Lumière, we believe that every dream deserves a platform,
          every talent deserves recognition, and every entrepreneur deserves
          the opportunity to grow. We bring together ambitious individuals,
          businesses, and communities to inspire collaboration, innovation,
          and lasting success.
        </p>
      </div>
    </section>
  );
}