import type { Metadata } from "next";
import FounderHero from "../components/FounderHero";
import FounderRoles from "../components/FounderRoles";
import FounderLeadership from "../components/FounderLeadership";
import FounderVisionMission from "../components/FounderVisionMission";
import FounderBook from "../components/FounderBook";
import FounderMessage from "../components/FounderMessage";
import CallToAction from "../components/CallToAction";
import { getBooks } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Meet Shagufta Munaf",
  description:
    "Meet Shagufta Munaf, Founder & CEO of SM Lumière — entrepreneur, speaker, trainer, mindset coach, and community builder empowering entrepreneurs and communities.",
};

export default async function MeetTheFounderPage() {
  const books = await getBooks();

  return (
    <main>
      <FounderHero />
      <FounderRoles />
      <FounderLeadership />
      <FounderVisionMission />
      <FounderBook books={books} />
      <FounderMessage />
      <CallToAction />
    </main>
  );
}
