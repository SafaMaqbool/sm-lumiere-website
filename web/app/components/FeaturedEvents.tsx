import Button from "./Button";
import Reveal from "./Reveal";

export default function FeaturedEvents() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <Reveal className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center">
          Discover Carefully Curated Experiences Designed to Connect,
          Educate, and Inspire
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-6 text-left">
          From elegant business exhibitions and networking evenings to
          leadership workshops and community gatherings, every SM Lumière
          event is created to help entrepreneurs build relationships, gain
          visibility, and unlock new opportunities.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/events">Explore Events</Button>
        </div>
      </Reveal>
    </section>
  );
}
