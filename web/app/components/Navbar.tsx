import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-2xl font-semibold text-gold">
          SM Lumière
        </Link>

        <nav className="hidden md:flex gap-8 font-body text-sm">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gold transition-colors">About</Link>
          <Link href="/events" className="hover:text-gold transition-colors">Events</Link>
          <Link href="/training" className="hover:text-gold transition-colors">Training & Coaching</Link>
          <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}