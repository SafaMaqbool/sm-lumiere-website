const audiences = [
  "Entrepreneurs",
  "Business Owners",
  "Home-Based Businesses",
  "Startups",
  "Professionals",
  "Students & Aspiring Leaders",
  "Women Entrepreneurs",
  "Creative Professionals",
  "Individuals Seeking Personal & Professional Growth",
];

export default function WhoItsFor() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy">
          Who Our Programs Are For
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="font-body text-[16px] text-navy bg-cream border border-rule rounded-full px-5 py-2.5 transition-colors duration-200 hover:border-gold hover:bg-white"
            >
              {audience}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
