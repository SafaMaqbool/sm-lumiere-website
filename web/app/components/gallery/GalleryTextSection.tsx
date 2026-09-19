type GalleryTextSectionProps = {
  background: "white" | "cream";
  heading: string;
  children: React.ReactNode;
};

export default function GalleryTextSection({
  background,
  heading,
  children,
}: GalleryTextSectionProps) {
  return (
    <section
      className={`${background === "white" ? "bg-white" : "bg-cream"} py-14 md:py-24`}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy mb-6">
          {heading}
        </h2>
        <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
          {children}
        </p>
      </div>
    </section>
  );
}
