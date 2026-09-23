import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import TrainingIntro from "../components/training/TrainingIntro";
import TrainingPhilosophy from "../components/training/TrainingPhilosophy";
import TrainingServices from "../components/training/TrainingServices";
import WhoItsFor from "../components/training/WhoItsFor";
import WhyChoose from "../components/training/WhyChoose";
import OurCommitment from "../components/training/OurCommitment";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Training & Coaching",
  description:
    "SM Lumière's mindset coaching, business coaching, leadership development, and entrepreneurship training programs.",
};

export default function TrainingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Training & Coaching"
        heading="Transforming Mindsets. Developing Leaders. Building Successful Entrepreneurs."
      />
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
