import Image from "next/image";
import Button from "../Button";
import { getUpcomingEvents } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { formatDate } from "@/lib/formatDate";

export default async function UpcomingEvents() {
  const events = await getUpcomingEvents();

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-10">
          Upcoming Events
        </h2>

        {events.length === 0 ? (
          <div className="max-w-xl mx-auto text-center">
            <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
              New events are being planned. Check back soon, or get in touch
              to hear about SM Lumière&apos;s next event first.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="group bg-cream rounded-lg overflow-hidden shadow-sm border-t-4 border-gold flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {event.coverImage && (
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={urlFor(event.coverImage).width(600).height(450).url()}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col grow">
                  <p className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
                    {formatDate(event.date)}
                  </p>
                  <h3 className="font-heading text-[19px] md:text-[21px] leading-[1.35] font-semibold text-navy mt-2">
                    {event.title}
                  </h3>
                  {event.location && (
                    <p className="font-body text-[16px] text-navy/60 mt-1">
                      {event.location}
                    </p>
                  )}
                  {event.description && (
                    <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-3 grow">
                      {event.description}
                    </p>
                  )}
                  <div className="mt-6">
                    <Button href="/contact">Register</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
