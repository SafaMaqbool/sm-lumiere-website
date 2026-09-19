const categories = [
  {
    title: "Business Exhibitions",
    description:
      "Upcoming and past business exhibitions with event details, images, and registration links where applicable.",
  },
  {
    title: "Networking Events",
    description:
      "Networking sessions that bring together entrepreneurs, professionals, startups, creatives, and business owners.",
  },
  {
    title: "Women's Empowerment Events",
    description:
      "Events focused on empowering women through education, networking, entrepreneurship, leadership, and personal growth.",
  },
  {
    title: "Workshops",
    description:
      "Educational workshops covering entrepreneurship, branding, leadership, communication, business growth, and professional development.",
  },
  {
    title: "Business Forums",
    description:
      "Panel discussions, expert sessions, industry talks, and business forums organised by SM Lumière.",
  },
  {
    title: "Community Meetups",
    description:
      "Informal networking sessions, meetups, collaborations, and community gatherings.",
  },
];

export default function EventCategories() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-10">
          What to Expect
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg p-6 md:p-8 border-t-4 border-gold"
            >
              <h3 className="font-heading text-[19px] md:text-[21px] leading-[1.35] font-semibold text-navy mb-2">
                {category.title}
              </h3>
              <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
