import { Building2, Users, Sparkles, GraduationCap, MessagesSquare, Coffee } from "lucide-react";
import Reveal from "../Reveal";
import CardIcon from "../CardIcon";

const categories = [
  {
    title: "Business Exhibitions",
    description:
      "Upcoming and past business exhibitions with event details, images, and registration links where applicable.",
    icon: Building2,
  },
  {
    title: "Networking Events",
    description:
      "Networking sessions that bring together entrepreneurs, professionals, startups, creatives, and business owners.",
    icon: Users,
  },
  {
    title: "Women's Empowerment Events",
    description:
      "Events focused on empowering women through education, networking, entrepreneurship, leadership, and personal growth.",
    icon: Sparkles,
  },
  {
    title: "Workshops",
    description:
      "Educational workshops covering entrepreneurship, branding, leadership, communication, business growth, and professional development.",
    icon: GraduationCap,
  },
  {
    title: "Business Forums",
    description:
      "Panel discussions, expert sessions, industry talks, and business forums organised by SM Lumière.",
    icon: MessagesSquare,
  },
  {
    title: "Community Meetups",
    description:
      "Informal networking sessions, meetups, collaborations, and community gatherings.",
    icon: Coffee,
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
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 80}>
              <div className="bg-white rounded-lg p-6 md:p-8 border-t-4 border-gold transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <CardIcon icon={category.icon} />
                <h3 className="font-heading text-[19px] md:text-[21px] leading-[1.35] font-semibold text-navy mb-2">
                  {category.title}
                </h3>
                <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
                  {category.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
