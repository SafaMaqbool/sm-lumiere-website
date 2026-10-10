import Image from "next/image";
import { Handshake } from "lucide-react";
import type { Partner } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Reveal from "../Reveal";
import EmptyState from "../EmptyState";

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
          <EmptyState icon={Handshake} message={emptyMessage} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, i) => {
              const logo = (
                <div
                  className={`${cardFill} rounded-lg border border-rule flex items-center justify-center p-6 h-28 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-gold`}
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

              return (
                <Reveal key={item._id} delay={(i % 4) * 70}>
                  {item.website ? (
                    <a href={item.website} target="_blank" rel="noopener noreferrer">
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
