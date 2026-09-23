import type { Metadata } from "next";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import OurStory from "../components/OurStory";
import OurPurpose from "../components/OurPurpose";
import VisionMission from "../components/VisionMission";
import CoreValues from "../components/CoreValues";
import WhyFounded from "../components/WhyFounded";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, purpose, vision, and values behind SM Lumière — a platform empowering entrepreneurs, creatives, and home-based businesses.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <OurPurpose />
      <VisionMission />
      <CoreValues />
      <WhyFounded />
      <CallToAction />
    </main>
  );
}
