import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type SanityEvent = {
  _id: string;
  title: string;
  slug?: string;
  date: string;
  location?: string;
  description?: string;
  coverImage?: SanityImageSource;
};

export type GalleryItem = {
  _id: string;
  title: string;
  category?: string;
  image: SanityImageSource;
};

const upcomingEventsQuery = `*[_type == "event" && date >= now()] | order(date asc) {
  _id, title, "slug": slug.current, date, location, description, coverImage
}`;

const pastEventsQuery = `*[_type == "event" && date < now()] | order(date desc) {
  _id, title, "slug": slug.current, date, location, description, coverImage
}`;

const galleryQuery = `*[_type == "galleryItem"] | order(_createdAt desc) {
  _id, title, category, image
}`;

export async function getUpcomingEvents(): Promise<SanityEvent[]> {
  try {
    return await client.fetch(upcomingEventsQuery);
  } catch {
    return [];
  }
}

export async function getPastEvents(): Promise<SanityEvent[]> {
  try {
    return await client.fetch(pastEventsQuery);
  } catch {
    return [];
  }
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    return await client.fetch(galleryQuery);
  } catch {
    return [];
  }
}
