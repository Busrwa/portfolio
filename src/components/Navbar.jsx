// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation();
  const navigate = useNavigate();
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (href) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      // Ana sayfadaysak sadece scroll
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -64; // navbar yüksekliği kadar yukarı kaydır (h-16 = 64px)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Başka sayfadaysak ana sayfaya git ve scroll yap
      navigate("/", { state: { scrollTo: href } });
    }
  };


  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="font-bold text-xl">Busra Portfolio</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href)}
              className="hover:text-teal-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
