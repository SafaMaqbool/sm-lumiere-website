import type { Metadata } from "next";
import ContactHero from "../components/contact/ContactHero";
import ContactIntro from "../components/contact/ContactIntro";
import ContactMain from "../components/contact/ContactMain";
import ContactClosing from "../components/contact/ContactClosing";

export const metadata: Metadata = {
  title: "Contact | SM Lumière",
  description: "Get in touch with SM Lumière.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactIntro />
      <ContactMain />
      <ContactClosing />
    </main>
  );
}
