const areas = [
  {
    title: "Empowering Women",
    description:
      "We are passionate about empowering women to become confident leaders, successful entrepreneurs, and independent professionals. Through networking, mentorship, education, and business opportunities, we encourage women to pursue their ambitions and achieve their full potential.",
  },
  {
    title: "Supporting Home-Based Businesses",
    description:
      "Many successful businesses begin at home. SM Lumière provides home-based entrepreneurs with a professional platform to showcase their products and services, increase brand visibility, connect with new customers, and expand their businesses with confidence.",
  },
  {
    title: "Promoting Entrepreneurs",
    description:
      "We are committed to supporting entrepreneurs at every stage of their journey. Whether launching a new venture or scaling an existing business, we provide opportunities for learning, networking, collaboration, and business growth.",
  },
  {
    title: "Showcasing Talent",
    description:
      "Every talent deserves recognition. We create opportunities for creatives, professionals, artisans, innovators, and emerging entrepreneurs to present their skills, ideas, and businesses to a wider audience, helping them gain visibility and unlock new possibilities.",
  },
  {
    title: "Leadership Development",
    description:
      "Strong communities are built by strong leaders. Through coaching, workshops, mentorship, and educational initiatives, we help individuals develop confidence, communication, strategic thinking, and leadership skills that create lasting personal and professional impact.",
  },
  {
    title: "Business Growth & Opportunities",
    description:
      "Our platform connects entrepreneurs with customers, partners, industry professionals, and business leaders. By creating meaningful networking opportunities and collaborative experiences, we help businesses increase visibility, strengthen relationships, and discover new avenues for growth.",
  },
  {
    title: "Encouraging Financial Independence",
    description:
      "We believe entrepreneurship can create lasting financial empowerment. By supporting small businesses, promoting innovation, and encouraging self-employment, we help individuals build sustainable income and long-term economic independence.",
  },
  {
    title: "Community Building",
    description:
      "SM Lumière is more than a business platform—it is a growing community built on trust, collaboration, inclusivity, and shared success. We bring together individuals from diverse backgrounds who inspire, support, and learn from one another.",
  },
  {
    title: "Networking & Collaboration",
    description:
      "Meaningful relationships create meaningful opportunities. Our events and initiatives are designed to connect entrepreneurs, professionals, creatives, and organisations, encouraging partnerships, knowledge-sharing, and long-term collaboration that benefits everyone involved.",
  },
];

export default function ImpactAreas() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white rounded-lg p-6 border-t-4 border-gold flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="font-heading text-[19px] leading-[1.35] font-semibold text-navy mb-2">
                {area.title}
              </h2>
              <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
