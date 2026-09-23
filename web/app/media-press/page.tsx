import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import MediaIntro from "../components/media/MediaIntro";
import PressSection from "../components/media/PressSection";
import MediaGallery from "../components/media/MediaGallery";
import CallToAction from "../components/CallToAction";
import { getPressItems } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Media & Press",
  description:
    "Interviews, press features, and awards & recognition for SM Lumière and Founder Shagufta Munaf.",
};

export default async function MediaPressPage() {
  const pressItems = await getPressItems();
  const byCategory = (category: string) =>
    pressItems.filter((item) => item.category === category);

  return (
    <main>
      <PageHero
        background="cream"
        eyebrow="Media & Press"
        heading="Media & Press"
        subheading="Sharing Our Journey. Celebrating Our Impact."
      />
      <MediaIntro />
      <PressSection
        background="cream"
        heading="Interviews"
        intro="Interviews featuring Shagufta Munaf or SM Lumière across television, podcasts, online publications, YouTube, or other media platforms."
        emptyMessage="Interviews will be added here soon."
        items={byCategory("interview")}
      />
      <PressSection
        background="white"
        heading="Press Features"
        intro="Articles, news coverage, blog features, magazine publications, and media mentions."
        emptyMessage="Press features will be added here soon."
        items={byCategory("press")}
      />
      <PressSection
        background="cream"
        heading="Awards & Recognition"
        intro="Awards, certificates, recognitions, achievements, and notable milestones."
        emptyMessage="Awards and recognition will be added here soon."
        items={byCategory("award")}
      />
      <MediaGallery items={pressItems} />
      <CallToAction />
    </main>
  );
}
