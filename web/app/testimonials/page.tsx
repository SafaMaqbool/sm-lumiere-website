import type { Metadata } from "next";
import TestimonialsHero from "../components/testimonials/TestimonialsHero";
import TestimonialsIntro from "../components/testimonials/TestimonialsIntro";
import TestimonialSection from "../components/testimonials/TestimonialSection";
import SuccessStories from "../components/testimonials/SuccessStories";
import ShareExperience from "../components/testimonials/ShareExperience";
import { getTestimonials } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Testimonials | SM Lumière",
  description:
    "What participants, vendors, sponsors, and clients say about SM Lumière events and programs.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  const byCategory = (category: string) =>
    testimonials.filter((t) => t.category === category);

  return (
    <main>
      <TestimonialsHero />
      <TestimonialsIntro />
      <TestimonialSection
        background="white"
        heading="Participant Testimonials"
        intro="Hear from entrepreneurs, professionals, and community members who have attended SM Lumière events, workshops, and networking experiences. Their stories reflect the inspiration, knowledge, connections, and confidence they gained."
        emptyMessage="Participant stories will be added here soon."
        items={byCategory("participant")}
      />
      <TestimonialSection
        background="cream"
        heading="Vendor Testimonials"
        intro="Discover how exhibitors and business owners have benefited from showcasing their brands through SM Lumière. From increased visibility and customer engagement to valuable networking opportunities, our vendors share their experiences of business growth."
        emptyMessage="Vendor stories will be added here soon."
        items={byCategory("vendor")}
      />
      <TestimonialSection
        background="white"
        heading="Sponsor & Partner Feedback"
        intro="We value every partnership built on trust, professionalism, and shared vision. Read what our sponsors, collaborators, speakers, and strategic partners have to say about working with SM Lumière and the impact of our events."
        emptyMessage="Sponsor and partner feedback will be added here soon."
        items={byCategory("sponsor")}
      />
      <TestimonialSection
        background="cream"
        heading="Client Testimonials"
        intro="Our clients' satisfaction is at the heart of everything we do. Whether through event management, business promotion, training, or community initiatives, their feedback reflects our commitment to delivering quality, excellence, and meaningful results."
        emptyMessage="Client testimonials will be added here soon."
        items={byCategory("client")}
      />
      <SuccessStories />
      <ShareExperience />
    </main>
  );
}
