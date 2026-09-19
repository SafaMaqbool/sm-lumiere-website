import Image from "next/image";
import type { Testimonial } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

type TestimonialSectionProps = {
  background: "white" | "cream";
  heading: string;
  intro: string;
  emptyMessage: string;
  items: Testimonial[];
};

export default function TestimonialSection({
  background,
  heading,
  intro,
  emptyMessage,
  items,
}: TestimonialSectionProps) {
  const cardFill = background === "white" ? "bg-cream" : "bg-white";

  return (
    <section
      className={`${background === "white" ? "bg-white" : "bg-cream"} py-14 md:py-24`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-4">
          {heading}
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65] text-center max-w-2xl mx-auto mb-10">
          {intro}
        </p>

        {items.length === 0 ? (
          <p className="max-w-xl mx-auto text-center font-body text-[16px] text-navy/70 leading-[1.65]">
            {emptyMessage}
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item._id}
                className={`${cardFill} rounded-lg p-6 border-t-4 border-gold flex flex-col`}
              >
                <p className="font-body text-[16px] text-navy/80 leading-[1.65] grow">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6">
                  {item.photo && (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={urlFor(item.photo).width(88).height(88).url()}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-body font-semibold text-[16px] text-navy">
                      {item.name}
                    </p>
                    {item.role && (
                      <p className="font-body text-[13px] text-navy/60">
                        {item.role}
                      </p>
                    )}
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
