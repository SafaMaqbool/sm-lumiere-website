import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="bg-cream py-18 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy">
          Ready to Grow with SM Lumière?
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-6 text-left">
          Whether you are an entrepreneur, business owner, creative
          professional, startup, or someone with a vision to make a
          difference, SM Lumière is here to help you connect, grow, and
          succeed.
        </p>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-4 text-left">
          Join our community, participate in our events, showcase your
          business, and become part of a platform where opportunities begin
          and success is celebrated.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/contact">Contact</Button>
          <Button href="/partners" variant="secondary">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
