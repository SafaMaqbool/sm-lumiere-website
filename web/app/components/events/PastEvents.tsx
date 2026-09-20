import Image from "next/image";
import { getPastEvents } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PastEvents() {
  const events = await getPastEvents();

  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-10">
          Past Events
        </h2>

        {events.length === 0 ? (
          <p className="max-w-xl mx-auto text-center font-body text-[16px] text-navy/70 leading-[1.65]">
            Our events archive will appear here once SM Lumière&apos;s first
            events have taken place.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event._id} className="bg-white rounded-lg overflow-hidden border border-rule">
                {event.coverImage && (
                  <div className="relative w-full aspect-4/3">
                    <Image
                      src={urlFor(event.coverImage).width(600).height(450).url()}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <p className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
                    {formatDate(event.date)}
                  </p>
                  <h3 className="font-heading text-[19px] leading-[1.35] font-semibold text-navy mt-2">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="font-body text-[16px] text-navy/70 leading-[1.65] mt-2">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
