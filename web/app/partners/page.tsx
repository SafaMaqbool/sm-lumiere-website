import type { Metadata } from "next";
import PartnersHero from "../components/partners/PartnersHero";
import PartnersIntro from "../components/partners/PartnersIntro";
import PartnerSection from "../components/partners/PartnerSection";
import CollaborationCTA from "../components/partners/CollaborationCTA";
import { getPartners } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Partners & Sponsors | SM Lumière",
  description: "SM Lumière's brand partners and event sponsors.",
};

export default async function PartnersPage() {
  const partners = await getPartners();
  const byCategory = (category: string) =>
    partners.filter((p) => p.category === category);

  return (
    <main>
      <PartnersHero />
      <PartnersIntro />
      <PartnerSection
        background="cream"
        heading="Brand Partners"
        emptyMessage="Our brand partners will be featured here soon."
        items={byCategory("brand")}
      />
      <PartnerSection
        background="white"
        heading="Sponsors"
        emptyMessage="Our event sponsors will be featured here soon."
        items={byCategory("sponsor")}
      />
      <CollaborationCTA />
    </main>
  );
}
