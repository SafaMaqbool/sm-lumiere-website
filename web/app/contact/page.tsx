import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Contact | SM Lumière",
  description: "Get in touch with SM Lumière.",
};

export default function ContactPage() {
  return (
    <main>
      <ComingSoon
        label="Contact"
        description="Our contact page is on its way. Reach us at hello@smlumiere.com in the meantime."
      />
    </main>
  );
}
