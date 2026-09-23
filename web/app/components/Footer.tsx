import Link from "next/link";
import { socialLinks } from "@/lib/socialLinks";

const sitemap = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/training", label: "Training & Coaching" },
  { href: "/community", label: "Community Impact" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/media-press", label: "Media & Press" },
  { href: "/meet-the-founder", label: "Meet the Founder" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <div>
          <p className="font-heading text-xl text-gold">SM Lumière</p>
          <p className="font-body text-[16px] text-white/70 leading-relaxed mt-4 max-w-xs">
            A purpose-driven platform empowering entrepreneurs, home-based
            businesses, and emerging talent through events, education, and
            community.
          </p>
        </div>

        <div>
          <p className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
            Sitemap
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 font-body text-[16px] text-white/80">
            {sitemap.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
            Contact
          </p>
          <div className="mt-4 space-y-2 font-body text-[16px] text-white/80">
            <p>hello@smlumiere.com</p>
            <p>Coming soon</p>
          </div>
          <div className="mt-6 flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gold">
        <p className="max-w-7xl mx-auto px-6 py-5 font-body text-[13px] text-white/60">
          © {new Date().getFullYear()} SM Lumière. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
