import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Partners | SM Lumière",
  description: "Partner with SM Lumière.",
};

export default function PartnersPage() {
  return (
    <main>
      <ComingSoon label="Partners" />
    </main>
  );
}
