import ContactForm from "./ContactForm";

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 1.8a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4ZM17.8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M14 3h3v3h-3c-.6 0-1 .5-1 1.2V10h4l-.5 3H13v8h-3v-8H8v-3h2V7c0-2.2 1.6-4 4-4Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.6 4.78 6v6.3H18.6v-5.6c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.7H10.4V9Z",
  },
];

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
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-rule flex items-center justify-center text-navy hover:border-gold hover:text-gold-dark transition-colors"
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
