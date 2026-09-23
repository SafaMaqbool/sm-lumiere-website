import Image from "next/image";
import { getGalleryItems } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

export default async function EventGallery() {
  const items = await getGalleryItems();

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-10">
          Event Gallery
        </h2>

        {items.length === 0 ? (
          <p className="max-w-xl mx-auto text-center font-body text-[16px] text-navy/70 leading-[1.65]">
            Photos and videos from our events will be added here soon.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="relative w-full aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={urlFor(item.image).width(500).height(500).url()}
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
