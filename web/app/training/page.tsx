import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Training & Coaching | SM Lumière",
  description: "SM Lumière's leadership training, mindset coaching, and workshops.",
};

export default function TrainingPage() {
  return (
    <main>
      <ComingSoon label="Training & Coaching" />
    </main>
  );
}
