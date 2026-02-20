// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

import EnFlag from "../assets/flags/eng.png";
import TrFlag from "../assets/flags/turkey.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: t.nav.home,     href: "#home"     },
    { name: t.nav.about,    href: "#about"    },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.resume,   href: "#resume"   },
    { name: t.nav.contact,  href: "#contact"  },
  ];

  // Navbar scroll blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "resume", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          // rootMargin: push the detection zone to the upper 30% of viewport
          rootMargin: "-20% 0px -70% 0px",
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (href) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navH = document.querySelector("nav")?.offsetHeight ?? 64;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - navH, behavior: "smooth" });
    }
  };

  const title = language === "tr" ? "Büşra Yağcıoğlu" : "Busra Yagcioglu";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1120]/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <button
          onClick={() => handleClick("#home")}
          className="font-bold text-xl tracking-tight text-white hover:text-teal-400 transition-colors"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
          <span className="text-teal-400">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg
                  ${isActive
                    ? "text-teal-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-teal-400 rounded-full" />
                )}
              </button>
            );
          })}

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-3 p-2 rounded-lg hover:bg-white/5 transition-all hover:scale-110"
            title={language === "en" ? "Türkçe" : "English"}
          >
            <img
              src={language === "en" ? TrFlag : EnFlag}
              alt="language"
              className="w-5 h-5 rounded-sm object-cover"
            />
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="hover:scale-110 transition-transform"
          >
            <img
              src={language === "en" ? TrFlag : EnFlag}
              alt="language"
              className="w-5 h-5 rounded-sm object-cover"
            />
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1120]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                onClick={() => handleClick(link.href)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${isActive ? "text-teal-400 bg-teal-400/10" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;