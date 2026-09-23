import Image from "next/image";
import type { PressItem } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

type MediaGalleryProps = {
  items: PressItem[];
};

export default function MediaGallery({ items }: MediaGalleryProps) {
  const withThumbnails = items.filter((item) => item.thumbnail);

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-4">
          Media Gallery
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65] text-center max-w-2xl mx-auto mb-10">
          Photographs, videos, newspaper clippings, event coverage, and other
          media assets from SM Lumière&apos;s journey.
        </p>

        {withThumbnails.length === 0 ? (
          <p className="max-w-xl mx-auto text-center font-body text-[16px] text-navy/70 leading-[1.65]">
            Media assets will be added here soon.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {withThumbnails.map((item) => (
              <div
                key={item._id}
                className="relative w-full aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={urlFor(item.thumbnail!).width(500).height(500).url()}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
