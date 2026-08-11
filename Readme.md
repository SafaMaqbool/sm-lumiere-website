# SM Lumière Website

Rebuild of [smlumiere.pk](https://smlumiere.pk) — moving from WordPress to a
Next.js frontend with a Sanity headless CMS.

## Structure

sm-lumiere/
├── sm-lumiere/ # Sanity Studio (content management)
├── web/ # Next.js frontend
└── README.md

## Tech Stack

- **Frontend:** Next.js (App Router) + Tailwind CSS + Framer Motion
- **CMS:** Sanity
- **Hosting:** Vercel
- **Package manager:** bun

## Getting Started

### Sanity Studio

```bash
cd sm-lumiere
bun install
bun dev
```

Studio runs at `http://localhost:3333`

### Next.js App

```bash
cd web
bun install
bun dev
```

Site runs at `http://localhost:3000`

## Sections

Home, About, Meet the Founder, Events, Training & Coaching,
Community Impact, Gallery, Testimonials, Media & Press,
Partners & Sponsors, Contact Us

## Status

🚧 In development — migrating from existing WordPress site.