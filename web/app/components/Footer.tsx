export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-heading text-xl text-gold">SM Lumière</p>
        <p className="font-body text-sm text-white/70">
          © {new Date().getFullYear()} SM Lumière. All rights reserved.
        </p>
      </div>
    </footer>
  );
}