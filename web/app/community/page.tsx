import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import CommunityIntro from "../components/community/CommunityIntro";
import ImpactAreas from "../components/community/ImpactAreas";
import CommunityCommitment from "../components/community/CommunityCommitment";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "How SM Lumière empowers women, home-based businesses, and entrepreneurs, and builds stronger communities.",
};

export default function CommunityPage() {
  return (
    <main>
      <PageHero
        background="cream"
        eyebrow="Community Impact"
        heading="Creating Opportunities. Empowering People. Building Stronger Communities."
      />
      <CommunityIntro />
      <ImpactAreas />
      <CommunityCommitment />
      <CallToAction />
    </main>
  );
}
