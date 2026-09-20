"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const links = [
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-ink text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold text-gold"
          onClick={closeMenu}
        >
          SM Lumière
        </Link>

        <nav className="hidden xl:flex gap-5 font-body text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label="Toggle menu"
          className="xl:hidden inline-flex items-center justify-center w-11 h-11 -mr-2"
        >
          <span className="inline-flex flex-col justify-center gap-1.5 w-6 h-6">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 top-[68px] z-40 bg-black/40 xl:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {open && (
        <nav
          id="mobile-nav-panel"
          ref={panelRef}
          className="xl:hidden fixed inset-x-0 top-[68px] z-50 bg-ink border-t border-white/10 px-6 py-6 flex flex-col gap-5 font-body text-[19px] overflow-y-auto max-h-[calc(100vh-68px)]"
        >
          {links.map((link, i) => (
            <Link
              key={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={link.href}
              className="hover:text-gold transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
