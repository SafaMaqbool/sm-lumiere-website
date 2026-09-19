import Image from "next/image";
import { getGalleryItems } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

export default async function GalleryPhotos() {
  const items = await getGalleryItems();

  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-4">
          Photos
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65] text-center max-w-2xl mx-auto mb-10">
          Discover a collection of images capturing the energy, creativity,
          and connections that define every SM Lumière event. From
          exhibitions and workshops to networking gatherings and community
          experiences, each photograph reflects our journey of empowering
          people and supporting businesses.
        </p>

        {items.length === 0 ? (
          <p className="max-w-xl mx-auto text-center font-body text-[16px] text-navy/70 leading-[1.65]">
            Photos from SM Lumière events will be added here soon.
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
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
