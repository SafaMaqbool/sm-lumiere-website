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

export type Testimonial = {
  _id: string;
  name: string;
  role?: string;
  category?: string;
  quote: string;
  photo?: SanityImageSource;
};

export type Partner = {
  _id: string;
  name: string;
  category?: string;
  website?: string;
  logo: SanityImageSource;
};

export type PressItem = {
  _id: string;
  title: string;
  source?: string;
  category?: string;
  link?: string;
  date?: string;
  thumbnail?: SanityImageSource;
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

const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id, name, role, category, quote, photo
}`;

const partnersQuery = `*[_type == "partner"] | order(name asc) {
  _id, name, category, website, logo
}`;

const pressItemsQuery = `*[_type == "pressItem"] | order(date desc) {
  _id, title, source, category, link, date, thumbnail
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

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(testimonialsQuery);
  } catch {
    return [];
  }
}

export async function getPartners(): Promise<Partner[]> {
  try {
    return await client.fetch(partnersQuery);
  } catch {
    return [];
  }
}

export async function getPressItems(): Promise<PressItem[]> {
  try {
    return await client.fetch(pressItemsQuery);
  } catch {
    return [];
  }
}
