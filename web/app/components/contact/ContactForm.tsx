"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hello@smlumiere.com";

const fieldClass =
  "w-full rounded-md border border-rule bg-white px-4 py-3 font-body text-[16px] text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-gold";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const phone = form.get("phone") as string;
    const subject = form.get("subject") as string;
    const message = form.get("message") as string;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || `Message from ${name}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark mb-2"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={fieldClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark mb-2"
          >
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-body text-[13px] tracking-[0.08em] uppercase text-gold-dark mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="w-full max-w-100 sm:w-auto inline-flex items-center justify-center font-body font-medium px-8 py-3.5 rounded-full bg-gold text-navy hover:bg-gold-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        Send Message
      </button>

      <p className="font-body text-[13px] text-navy/60">
        {sent
          ? "Opening your email app with your message ready to send…"
          : "This opens your email app with your message ready to send to " +
            CONTACT_EMAIL +
            "."}
      </p>
    </form>
  );
}
