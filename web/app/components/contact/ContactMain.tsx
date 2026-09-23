import ContactForm from "./ContactForm";
import { socialLinks } from "@/lib/socialLinks";

export default function ContactMain() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
        <div>
          <h2 className="font-heading text-[27px] md:text-[36px] leading-[1.18] text-navy mb-8">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>

        <div className="space-y-10">
          <div>
            <p className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark mb-4">
              Contact Information
            </p>
            <div className="space-y-2 font-body text-[16px] text-navy/80">
              <p>hello@smlumiere.com</p>
              <p>Coming soon</p>
              <p>WhatsApp: Coming soon</p>
            </div>
          </div>

          <div>
            <p className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark mb-4">
              Follow Us
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-rule flex items-center justify-center text-navy hover:border-gold hover:text-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark mb-4">
              Location
            </p>
            <p className="font-body text-[16px] text-navy/70 leading-[1.65]">
              Location details coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
