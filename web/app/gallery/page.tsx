import type { Metadata } from "next";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryIntro from "../components/gallery/GalleryIntro";
import GalleryTextSection from "../components/gallery/GalleryTextSection";
import GalleryPhotos from "../components/gallery/GalleryPhotos";
import CallToAction from "../components/CallToAction";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery | SM Lumière",
  description:
    "Photos and highlights from SM Lumière exhibitions, workshops, and networking events.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryIntro />
      <GalleryTextSection background="white" heading="Event Highlights">
        Explore the memorable moments from our signature events, featuring
        inspiring speakers, business showcases, networking sessions, product
        displays, and community celebrations.
      </GalleryTextSection>
      <GalleryPhotos />
      <GalleryTextSection background="white" heading="Videos">
        Watch highlights from our events, behind-the-scenes moments,
        participant experiences, and inspiring stories that showcase the
        spirit of SM Lumière and the impact of our growing community. Video
        highlights are being prepared and will be added here soon.
      </GalleryTextSection>
      <GalleryTextSection background="cream" heading="Behind the Scenes">
        Every successful event is the result of careful planning, teamwork,
        and dedication. Take a look behind the scenes to see the passion,
        creativity, and effort that go into creating meaningful experiences
        for our community.
      </GalleryTextSection>
      <GalleryTextSection background="white" heading="Our Journey in Pictures">
        Every event marks another milestone in our journey to empower
        entrepreneurs, celebrate talent, strengthen businesses, and build a
        community where opportunities become lasting success. Thank you to
        every participant, exhibitor, partner, volunteer, and supporter who
        has been part of the SM Lumière story. Together, we continue to
        create experiences that inspire, connect, and leave a lasting
        impact.
      </GalleryTextSection>
      <CallToAction />
    </main>
  );
}
