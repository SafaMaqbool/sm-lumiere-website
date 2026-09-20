import Image from "next/image";
import type { Partner } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

type PartnerSectionProps = {
  background: "white" | "cream";
  heading: string;
  emptyMessage: string;
  items: Partner[];
};

export default function PartnerSection({
  background,
  heading,
  emptyMessage,
  items,
}: PartnerSectionProps) {
  const cardFill = background === "white" ? "bg-cream" : "bg-white";

  return (
    <section
      className={`${background === "white" ? "bg-white" : "bg-cream"} py-14 md:py-24`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-10">
          {heading}
        </h2>

        {items.length === 0 ? (
          <p className="max-w-xl mx-auto text-center font-body text-[16px] text-navy/70 leading-[1.65]">
            {emptyMessage}
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => {
              const logo = (
                <div
                  className={`${cardFill} rounded-lg border border-rule flex items-center justify-center p-6 h-28`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={urlFor(item.logo).width(240).height(120).fit("max").url()}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              );

              return item.website ? (
                <a
                  key={item._id}
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  {logo}
                </a>
              ) : (
                <div key={item._id}>{logo}</div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
