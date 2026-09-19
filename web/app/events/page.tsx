import type { Metadata } from "next";
import EventsHero from "../components/events/EventsHero";
import EventCategories from "../components/events/EventCategories";
import UpcomingEvents from "../components/events/UpcomingEvents";
import PastEvents from "../components/events/PastEvents";
import EventGallery from "../components/events/EventGallery";
import CallToAction from "../components/CallToAction";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events | SM Lumière",
  description:
    "SM Lumière events — business exhibitions, networking evenings, workshops, business forums, and community meetups.",
};

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <EventCategories />
      <UpcomingEvents />
      <PastEvents />
      <EventGallery />
      <CallToAction />
    </main>
  );
}
