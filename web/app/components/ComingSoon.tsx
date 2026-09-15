import Button from "./Button";

type ComingSoonProps = {
  label: string;
  description?: string;
};

export default function ComingSoon({ label, description }: ComingSoonProps) {
  return (
    <section className="bg-cream py-18 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
          {label}
        </span>
        <h1 className="font-heading text-[34px] md:text-[56px] leading-[1.08] font-semibold text-navy mt-4">
          {label} is coming soon
        </h1>
        <p className="font-body text-[17px] md:text-[19px] text-navy/70 leading-relaxed mt-6">
          {description ??
            "We're putting the finishing touches on this page. In the meantime, head back home or get in touch."}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
