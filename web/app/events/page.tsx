import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Events | SM Lumière",
  description: "Upcoming SM Lumière exhibitions, networking evenings, and workshops.",
};

export default function EventsPage() {
  return (
    <main>
      <ComingSoon label="Events" />
    </main>
  );
}
