import Image from "next/image";
import Button from "./Button";

export default function FounderPreview() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1 relative w-full aspect-4/5 rounded-lg overflow-hidden">
          <Image
            src="/images/Shagufta-pic-5.jpg"
            alt="Shagufta Munaf, Founder of SM Lumière"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2 text-center md:text-left">
          <span className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark">
            Meet the Founder
          </span>
          <p className="font-body text-[17px] md:text-[19px] text-navy/80 leading-[1.6] mt-6 text-left">
            Behind SM Lumière is a vision to create opportunities that
            transform ideas into impact.
          </p>
          <p className="font-body text-[16px] text-navy/80 leading-[1.65] mt-4 text-left">
            Founded by Shagufta Munaf, entrepreneur, business leader,
            trainer, mindset coach, and community builder, SM Lumière
            reflects her commitment to empowering individuals, supporting
            businesses, and building communities through leadership,
            collaboration, and innovation.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Button href="/meet-the-founder" variant="secondary">
              Learn More About the Founder
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
