import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Gallery | SM Lumière",
  description: "Photos from SM Lumière events, exhibitions, and community gatherings.",
};

export default function GalleryPage() {
  return (
    <main>
      <ComingSoon label="Gallery" />
    </main>
  );
}
