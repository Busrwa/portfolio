// src/components/Footer.jsx
import React from "react";
import {
  FaGithub, FaLinkedin, FaMedium, FaInstagram, FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  const socials = [
    { href: "mailto:busrayagcioglu2003@gmail.com",          icon: <FaEnvelope />,  label: "Email"     },
    { href: "https://github.com/Busrwa",                    icon: <FaGithub />,    label: "GitHub"    },
    { href: "https://www.linkedin.com/in/busra-yagcioglu/", icon: <FaLinkedin />,  label: "LinkedIn"  },
    { href: "https://medium.com/@busrayagcioglu2003",        icon: <FaMedium />,    label: "Medium"    },
    { href: "https://www.instagram.com/busra_yagciogluu/",  icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0b1120] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p
            className="text-white font-bold text-lg mb-1"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Busra Yagcioglu<span className="text-teal-400">.</span>
          </p>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Büşra Yağcıoğlu. {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-teal-400 hover:border-teal-400/30 hover:bg-teal-400/8 transition-all hover:scale-110"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;