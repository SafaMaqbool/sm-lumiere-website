import Button from "../Button";

export default function CollaborationCTA() {
  return (
    <section className="bg-cream py-18 md:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy mb-6">
          Collaboration Opportunities
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
          We invite organisations and businesses to collaborate with SM
          Lumière.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Become a Partner</Button>
        </div>
      </div>
    </section>
  );
}
