"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/training", label: "Training & Coaching" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold text-gold"
          onClick={() => setOpen(false)}
        >
          SM Lumière
        </Link>

        <nav className="hidden md:flex gap-8 font-body text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden inline-flex flex-col justify-center gap-1.5 w-8 h-8"
        >
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
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4 font-body text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
