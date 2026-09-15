export default function FounderMessage() {
  return (
    <section className="bg-cream py-14 sm:py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border-t-4 border-gold text-center">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
            A Message from the Founder
          </span>
          <blockquote className="font-heading text-lg sm:text-xl md:text-2xl text-navy leading-relaxed mt-6">
            &ldquo;I believe that success is not only about what we achieve
            for ourselves, but about the opportunities we create for others.
            My vision is to build a platform where talent is recognised,
            entrepreneurs are empowered, meaningful connections are created,
            and every individual has the confidence to pursue their dreams
            with purpose.&rdquo;
          </blockquote>
          <p className="font-body text-sm tracking-[0.15em] uppercase text-gold mt-6">
            — Shagufta Munaf
          </p>
        </div>
      </div>
    </section>
  );
}
