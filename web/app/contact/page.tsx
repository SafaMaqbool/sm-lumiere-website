import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ContactIntro from "../components/contact/ContactIntro";
import ContactMain from "../components/contact/ContactMain";
import ContactClosing from "../components/contact/ContactClosing";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SM Lumière.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        heading="Let's Connect"
        subheading="We'd love to hear from you."
      />
      <ContactIntro />
      <ContactMain />
      <ContactClosing />
    </main>
  );
}
