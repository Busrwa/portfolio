// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const { language } = useLanguage();

  const copy =
    language === "tr"
      ? {
        eyebrow: "İletişime Geçelim",
        title: "İletişime Geç",
        description:
          "Projeler, iş fırsatları, iş birlikleri veya kısa bir sohbet için benimle iletişime geçebilirsiniz.",
        nameLabel: "Adınız",
        namePlaceholder: "Adınız",
        emailLabel: "E-posta Adresi",
        emailPlaceholder: "ornek@email.com",
        subjectLabel: "Konu",
        subjectPlaceholder:
          "Proje, iş fırsatı veya iş birliği",
        messageLabel: "Mesaj",
        messagePlaceholder: "Mesajınızı yazın...",
        send: "Mesaj Gönder",
        sending: "Gönderiliyor...",
        success: "Mesajınız başarıyla gönderildi.",
        error:
          "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
        honeypot: "Bu alanı doldurmayın:",
      }
      : {
        eyebrow: "Let's Connect",
        title: "Get In Touch",
        description:
          "Feel free to reach out for projects, opportunities, collaborations, or just a friendly chat!",
        nameLabel: "Your Name",
        namePlaceholder: "Name",
        emailLabel: "Email Address",
        emailPlaceholder: "name@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder:
          "Project, opportunity or collaboration",
        messageLabel: "Message",
        messagePlaceholder: "Write your message...",
        send: "Send Message",
        sending: "Sending...",
        success: "Your message was sent successfully.",
        error:
          "The message could not be sent. Please try again.",
        honeypot: "Do not fill this out:",
      };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-[720px] scroll-mt-20 overflow-hidden border-t border-[#dfcfc4] bg-[#f1dfd4] px-5 py-24 md:px-10 md:py-28 lg:min-h-[760px]"
    >
      {/* Soft background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-1/2 h-[420px] w-[600px] -translate-y-1/2 rounded-full bg-white/45 blur-3xl"
      />

      {/* Subtle technology grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-72 w-72 opacity-[0.1] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 49%, #b99859 50%, transparent 51%), linear-gradient(transparent 49%, #b99859 50%, transparent 51%)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, black, transparent)",
        }}
      />

      {/* Desktop floral composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] overflow-hidden lg:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: 45,
          }}
          whileInView={{
            opacity: 0.96,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/tech-floral-contact.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "205% auto",
            filter:
              "drop-shadow(0 20px 26px rgba(67,45,30,0.14))",
          }}
        />
      </div>

      {/* Mobile floral composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[48%] overflow-hidden sm:h-[270px] sm:w-[46%] lg:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-45 sm:opacity-60"
          style={{
            backgroundImage:
              "url('/tech-floral-contact.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "245% auto",
            filter:
              "drop-shadow(0 16px 20px rgba(67,45,30,0.1))",
          }}
        />
      </div>

      {/* Contact card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 34,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="w-full max-w-2xl rounded-[30px] border border-white/75 bg-[#fffaf5]/95 p-8 shadow-[0_20px_55px_rgba(80,50,35,0.08)] md:p-11">
          <div className="eyebrow mb-5">
            {copy.eyebrow}
          </div>
          <h2 className="mb-6 font-['Cormorant_Garamond'] text-5xl font-medium leading-[0.94] text-[#2b211d] sm:text-6xl md:text-7xl">
            {copy.title}
          </h2>

          <p className="mb-8 max-w-lg text-base leading-8 text-[#6d5a52] md:text-lg">
            {copy.description}
          </p>
          <form
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="hidden"
              name="form-name"
              value="portfolio-contact"
            />

            {/* Spam protection */}
            <p className="hidden">
              <label>
                {copy.honeypot}
                <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#795f55]">
                  {copy.nameLabel}
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={copy.namePlaceholder}
                  className="w-full rounded-[14px] border border-[#dccdc2] bg-white/70 px-4 py-3 text-sm text-[#2b211d] outline-none transition placeholder:text-[#aa9890] focus:border-[#9e2a22]/55 focus:bg-white focus:ring-4 focus:ring-[#9e2a22]/5"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#795f55]">
                  {copy.emailLabel}
                </span>

                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={copy.emailPlaceholder}
                  className="w-full rounded-[14px] border border-[#dccdc2] bg-white/70 px-4 py-3 text-sm text-[#2b211d] outline-none transition placeholder:text-[#aa9890] focus:border-[#9e2a22]/55 focus:bg-white focus:ring-4 focus:ring-[#9e2a22]/5"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#795f55]">
                {copy.subjectLabel}
              </span>

              <input
                type="text"
                name="subject"
                placeholder={copy.subjectPlaceholder}
                className="w-full rounded-[14px] border border-[#dccdc2] bg-white/70 px-4 py-3 text-sm text-[#2b211d] outline-none transition placeholder:text-[#aa9890] focus:border-[#9e2a22]/55 focus:bg-white focus:ring-4 focus:ring-[#9e2a22]/5"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#795f55]">
                {copy.messageLabel}
              </span>

              <textarea
                name="message"
                required
                rows={5}
                placeholder={copy.messagePlaceholder}
                className="w-full resize-y rounded-[14px] border border-[#dccdc2] bg-white/70 px-4 py-3 text-sm leading-6 text-[#2b211d] outline-none transition placeholder:text-[#aa9890] focus:border-[#9e2a22]/55 focus:bg-white focus:ring-4 focus:ring-[#9e2a22]/5"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                <FaEnvelope size={15} />

                {formStatus === "sending"
                  ? copy.sending
                  : copy.send}

                <FaArrowRight size={12} />
              </button>

              <div
                aria-live="polite"
                className="text-sm"
              >
                {formStatus === "success" && (
                  <span className="font-medium text-[#62775f]">
                    {copy.success}
                  </span>
                )}

                {formStatus === "error" && (
                  <span className="font-medium text-[#9e2a22]">
                    {copy.error}
                  </span>
                )}
              </div>
            </div>
          </form>

        </div>
      </motion.div>
    </section>
  );
}