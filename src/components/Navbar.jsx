// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

// SVG bayrakları import et
import EnFlag from "../assets/flags/eng.png";
import TrFlag from "../assets/flags/turkey.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { language, toggleLanguage, t } = useLanguage();

  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.resume, href: "#resume" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleClick = (href) => {
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
    }
  };

  const title = language === "tr" ? "Büşra Yağcıoğlu Portföy" : "Busra Yagcioglu Portfolio";

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="font-bold text-xl">{title}</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href)}
              className="hover:text-teal-400 transition-colors"
            >
              {link.name}
            </button>
          ))}

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="ml-4 hover:scale-110 transition-transform"
            title={language === "en" ? "Türkçe" : "English"}
          >
            <img
              src={language === "en" ? TrFlag : EnFlag}
              alt="flag"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="hover:scale-110 transition-transform"
            title={language === "en" ? "Türkçe" : "English"}
          >
            <img
              src={language === "en" ? TrFlag : EnFlag}
              alt="flag"
              className="w-6 h-6"
            />
          </button>

          {/* Hamburger Menu */}
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 flex flex-col space-y-2">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href)}
              className="hover:text-teal-400 transition-colors text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
