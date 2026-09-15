const roles = [
  {
    title: "Entrepreneur & Businesswoman",
    description:
      "With a passion for entrepreneurship and business development, Shagufta believes that every successful business begins with a clear vision, continuous learning, and the courage to take action. Her work focuses on helping entrepreneurs strengthen their brands, expand their networks, increase business visibility, and unlock new opportunities for sustainable growth.",
  },
  {
    title: "Influencer & Speaker",
    description:
      "As an influencer and public speaker, Shagufta uses her platform to inspire, educate, and encourage aspiring entrepreneurs, professionals, and community members. Through her talks, events, and digital presence, she shares practical insights on entrepreneurship, leadership, confidence, personal growth, and building purpose-driven businesses.",
  },
  {
    title: "Trainer & Mindset Coach",
    description:
      "Shagufta believes that success begins with the right mindset. Through training programs, workshops, and mentorship, she empowers individuals to develop confidence, resilience, leadership, communication skills, and strategic thinking. Her coaching is designed to help people overcome self-doubt, embrace opportunities, and achieve both personal and professional growth.",
  },
  {
    title: "Community Builder",
    description:
      "Creating meaningful connections is at the heart of everything she does. Through SM Lumière, Shagufta has cultivated a community that encourages collaboration, supports entrepreneurship, promotes talented individuals, and creates opportunities for businesses and professionals to connect, learn, and grow together. Her commitment extends beyond business—she is passionate about empowering women, supporting home-based businesses, and fostering inclusive communities where everyone has the opportunity to succeed.",
  },
];

export default function FounderRoles() {
  return (
    <section className="bg-white py-14 sm:py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-10">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
            Many Roles, One Purpose
          </span>
          <div className="w-12 h-px bg-gold mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-cream rounded-lg p-6 md:p-8 shadow-sm border-t-4 border-gold"
            >
              <h2 className="font-heading text-lg md:text-xl font-semibold text-navy mb-3">
                {role.title}
              </h2>
              <p className="font-body text-sm md:text-base text-navy/70 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
