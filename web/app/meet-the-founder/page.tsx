import type { Metadata } from "next";
import FounderHero from "../components/FounderHero";
import FounderRoles from "../components/FounderRoles";
import FounderLeadership from "../components/FounderLeadership";
import FounderVisionMission from "../components/FounderVisionMission";
import FounderBook from "../components/FounderBook";
import FounderMessage from "../components/FounderMessage";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Meet Shagufta Munaf | SM Lumière",
  description:
    "Meet Shagufta Munaf, Founder & CEO of SM Lumière — entrepreneur, speaker, trainer, mindset coach, and community builder empowering entrepreneurs and communities.",
};

export default function MeetTheFounderPage() {
  return (
    <main>
      <FounderHero />
      <FounderRoles />
      <FounderLeadership />
      <FounderVisionMission />
      <FounderBook />
      <FounderMessage />
      <CallToAction />
    </main>
  );
}
