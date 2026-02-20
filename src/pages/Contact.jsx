// src/pages/Contact.jsx
// NOTE: To enable the form, install emailjs-com: npm install @emailjs/browser
// Then replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY in the sendEmail function.
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  FaEnvelope, FaLinkedin, FaGithub, FaMedium,
  FaInstagram, FaPaperPlane, FaCheckCircle,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Contact = () => {
  const { t, language } = useLanguage();
  const formRef = useRef(null);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const socials = [
    { href: "mailto:busrayagcioglu2003@gmail.com", icon: <FaEnvelope />, label: "Email", value: "busrayagcioglu2003@gmail.com" },
    { href: "https://www.linkedin.com/in/busra-yagcioglu/", icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/busra-yagcioglu" },
    { href: "https://github.com/Busrwa", icon: <FaGithub />, label: "GitHub", value: "github.com/Busrwa" },
    { href: "https://medium.com/@busrayagcioglu2003", icon: <FaMedium />, label: "Medium", value: "medium.com/@busrayagcioglu2003" },
    { href: "https://www.instagram.com/busra_yagciogluu/", icon: <FaInstagram />, label: "Instagram", value: "@busra_yagciogluu" },
  ];

  const placeholders = {
    name: language === "tr" ? "Adınız" : "Your name",
    email: language === "tr" ? "E-posta adresiniz" : "Your email",
    message: language === "tr" ? "Mesajınız..." : "Your message...",
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2">
          {language === "tr" ? "İletişim" : "Contact"}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
          {t.contact.title}
        </h2>
        <div className="section-divider mt-4" />
        <p className="text-gray-400 mt-4 max-w-md mx-auto">{t.contact.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left — social links */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-white font-semibold text-lg mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            {language === "tr" ? "Bana Ulaşın" : "Get in touch"}
          </h3>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-white/5 hover:border-teal-400/30 hover:bg-teal-400/5 transition-all group"
            >
              <span className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-400/20 transition-colors text-lg shrink-0">
                {s.icon}
              </span>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                <p className="text-gray-200 text-sm group-hover:text-teal-400 transition-colors">{s.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Right — contact form */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold text-lg mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            {language === "tr" ? "Mesaj Gönderin" : "Send a message"}
          </h3>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <FaCheckCircle className="text-teal-400 text-5xl animate-pulse-glow" />
              <p className="text-white font-semibold text-lg">
                {language === "tr" ? "Mesajınız alındı!" : "Message sent!"}
              </p>
              <p className="text-gray-400 text-sm">
                {language === "tr"
                  ? "En kısa sürede size geri döneceğim."
                  : "I'll get back to you as soon as possible."}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-teal-400 text-sm hover:underline"
              >
                {language === "tr" ? "Yeni mesaj gönder" : "Send another message"}
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
                  {language === "tr" ? "Ad Soyad" : "Name"}
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder={placeholders.name}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
                  {language === "tr" ? "E-Posta" : "Email"}
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder={placeholders.email}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">
                  {language === "tr" ? "Mesaj" : "Message"}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={placeholders.message}
                  required
                  rows={5}
                  className="contact-input resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  {language === "tr"
                    ? "Bir hata oluştu. Lütfen doğrudan e-posta gönderin."
                    : "Something went wrong. Please email me directly."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-400 text-gray-900 font-semibold rounded-xl hover:bg-teal-300 transition-all hover:scale-[1.02] shadow-lg shadow-teal-400/25 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                    {language === "tr" ? "Gönderiliyor..." : "Sending..."}
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    {t.contact.button}
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;