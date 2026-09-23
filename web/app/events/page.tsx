import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import EventCategories from "../components/events/EventCategories";
import UpcomingEvents from "../components/events/UpcomingEvents";
import PastEvents from "../components/events/PastEvents";
import EventGallery from "../components/events/EventGallery";
import CallToAction from "../components/CallToAction";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events",
  description:
    "SM Lumière events — business exhibitions, networking evenings, workshops, business forums, and community meetups.",
};

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Events"
        heading="SM Lumière Events"
        subheading="Connecting People. Inspiring Growth. Creating Opportunities."
      />
      <EventCategories />
      <UpcomingEvents />
      <PastEvents />
      <EventGallery />
      <CallToAction />
    </main>
  );
}
