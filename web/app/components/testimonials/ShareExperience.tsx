import Button from "../Button";

export default function ShareExperience() {
  return (
    <section className="bg-cream py-18 md:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy mb-6">
          Share Your Experience
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
          Have you attended an SM Lumière event, partnered with us, or
          participated in one of our programs? We would love to hear your
          story. Your feedback helps us grow, inspires others, and
          strengthens our community.
        </p>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-4">
          Together, we celebrate every milestone, every achievement, and
          every success story.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Share Your Story</Button>
        </div>
      </div>
    </section>
  );
}
