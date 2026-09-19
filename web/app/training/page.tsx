import type { Metadata } from "next";
import TrainingHero from "../components/training/TrainingHero";
import TrainingIntro from "../components/training/TrainingIntro";
import TrainingPhilosophy from "../components/training/TrainingPhilosophy";
import TrainingServices from "../components/training/TrainingServices";
import WhoItsFor from "../components/training/WhoItsFor";
import WhyChoose from "../components/training/WhyChoose";
import OurCommitment from "../components/training/OurCommitment";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Training & Coaching | SM Lumière",
  description:
    "SM Lumière's mindset coaching, business coaching, leadership development, and entrepreneurship training programs.",
};

export default function TrainingPage() {
  return (
    <main>
      <TrainingHero />
      <TrainingIntro />
      <TrainingPhilosophy />
      <TrainingServices />
      <WhoItsFor />
      <WhyChoose />
      <OurCommitment />
      <CallToAction />
    </main>
  );
}
