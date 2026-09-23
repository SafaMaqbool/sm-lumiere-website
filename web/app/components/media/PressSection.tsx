import Image from "next/image";
import type { PressItem } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { formatDate } from "@/lib/formatDate";

type PressSectionProps = {
  background: "white" | "cream";
  heading: string;
  intro: string;
  emptyMessage: string;
  items: PressItem[];
};

export default function PressSection({
  background,
  heading,
  intro,
  emptyMessage,
  items,
}: PressSectionProps) {
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
            {items.map((item) => {
              const card = (
                <div
                  className={`${cardFill} rounded-lg overflow-hidden border-t-4 border-gold h-full flex flex-col`}
                >
                  {item.thumbnail && (
                    <div className="relative w-full aspect-4/3">
                      <Image
                        src={urlFor(item.thumbnail).width(600).height(450).url()}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {(item.source || item.date) && (
                      <p className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
                        {[item.source, formatDate(item.date)]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}
                    <h3 className="font-heading text-[19px] leading-[1.35] font-semibold text-navy mt-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );

              return item.link ? (
                <a
                  key={item._id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  {card}
                </a>
              ) : (
                <div key={item._id}>{card}</div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
