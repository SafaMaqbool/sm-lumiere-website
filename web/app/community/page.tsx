import type { Metadata } from "next";
import CommunityHero from "../components/community/CommunityHero";
import CommunityIntro from "../components/community/CommunityIntro";
import ImpactAreas from "../components/community/ImpactAreas";
import CommunityCommitment from "../components/community/CommunityCommitment";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Community Impact | SM Lumière",
  description:
    "How SM Lumière empowers women, home-based businesses, and entrepreneurs, and builds stronger communities.",
};

export default function CommunityPage() {
  return (
    <main>
      <CommunityHero />
      <CommunityIntro />
      <ImpactAreas />
      <CommunityCommitment />
      <CallToAction />
    </main>
  );
}
