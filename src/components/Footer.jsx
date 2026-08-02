// src/components/Footer.jsx
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  const socials = [
    {
      href: "mailto:busrayagcioglu2003@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
    {
      href: "https://github.com/Busrwa",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/busra-yagcioglu/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://medium.com/@busrayagcioglu2003",
      icon: <FaMedium />,
      label: "Medium",
    },
    {
      href: "https://www.instagram.com/busra_yagciogluu/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
  ];

  const title =
    language === "tr"
      ? "Büşra Yağcıoğlu"
      : "Busra Yagcioglu";

  return (
    <footer className="border-t border-[#ddcfc4] bg-[#eee1d7] px-5 py-9 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="mb-1 font-['Cormorant_Garamond'] text-2xl font-semibold tracking-[0.02em] text-[#2b211d]">
            {title}
            <span className="text-[#9e2a22]">.</span>
          </p>

          <p className="text-xs text-[#8a756b] md:text-sm">
            © {new Date().getFullYear()} Büşra Yağcıoğlu.{" "}
            {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={
                social.href.startsWith("mailto")
                  ? undefined
                  : "_blank"
              }
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c6ba] bg-white/55 text-[#77655c] transition duration-300 hover:-translate-y-1 hover:border-[#9e2a22]/40 hover:bg-white hover:text-[#9e2a22]"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;