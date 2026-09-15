import Link from "next/link";

const sitemap = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/training", label: "Training & Coaching" },
  { href: "/gallery", label: "Gallery" },
  { href: "/meet-the-founder", label: "Meet the Founder" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 1.8a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4ZM17.8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M14 3h3v3h-3c-.6 0-1 .5-1 1.2V10h4l-.5 3H13v8h-3v-8H8v-3h2V7c0-2.2 1.6-4 4-4Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.6 4.78 6v6.3H18.6v-5.6c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.7H10.4V9Z",
  },
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
                <Link href={link.href} className="hover:text-gold transition-colors">
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
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
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
