const services = [
  {
    title: "Mindset Coaching",
    description:
      "Develop a success-oriented mindset by overcoming self-doubt, building resilience, increasing self-confidence, and creating positive habits that lead to long-term personal and professional growth.",
  },
  {
    title: "Business Coaching",
    description:
      "Gain practical guidance on starting, growing, and strengthening your business. Learn how to build your brand, improve visibility, develop business strategies, and identify opportunities for sustainable growth.",
  },
  {
    title: "Leadership Development",
    description:
      "Strengthen your ability to lead with confidence, integrity, and purpose. Our leadership programs focus on communication, decision-making, emotional intelligence, team building, and strategic thinking.",
  },
  {
    title: "Entrepreneurship Training",
    description:
      "Designed for aspiring and existing entrepreneurs, this program provides practical knowledge on business planning, branding, networking, customer engagement, business development, and entrepreneurial success.",
  },
  {
    title: "Personal Development",
    description:
      "Personal growth is the foundation of professional success. Our programs help individuals improve confidence, communication, productivity, emotional resilience, goal setting, and self-leadership.",
  },
  {
    title: "Business Networking & Professional Growth",
    description:
      "Learn how to build meaningful relationships, expand your professional network, create valuable collaborations, and leverage networking as a powerful tool for business success.",
  },
  {
    title: "Women's Leadership & Empowerment",
    description:
      "Supporting women in developing leadership skills, building successful businesses, increasing confidence, and creating meaningful opportunities for financial and personal growth.",
  },
  {
    title: "Workshops & Masterclasses",
    description:
      "Interactive learning experiences covering entrepreneurship, branding, business growth, leadership, mindset, communication, networking, and professional development.",
  },
];

export default function TrainingServices() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy text-center mb-10">
          Our Training &amp; Coaching Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 border-t-4 border-gold flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-heading text-[19px] leading-[1.35] font-semibold text-navy mb-2">
                {service.title}
              </h3>
              <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
