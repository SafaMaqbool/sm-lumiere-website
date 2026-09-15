import Link from "next/link";
import Button from "./components/Button";

export default function NotFound() {
  return (
    <main>
      <section className="bg-cream py-18 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
            Page not found
          </span>
          <h1 className="font-heading text-[34px] md:text-[56px] leading-[1.08] font-semibold text-navy mt-4">
            We couldn&apos;t find that page.
          </h1>
          <p className="font-body text-[17px] md:text-[19px] text-navy/70 leading-relaxed mt-6">
            The link may be out of date, or the page may have moved. You can
            pick up from one of these instead.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/">Back to Home</Button>
            <Button href="/events" variant="secondary">
              Explore Events
            </Button>
            <Link
              href="/contact"
              className="font-body font-medium text-navy underline underline-offset-4 hover:text-gold-dark transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
