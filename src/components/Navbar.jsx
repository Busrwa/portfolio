// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

import EnFlag from "../assets/flags/eng.png";
import TrFlag from "../assets/flags/turkey.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // Project detail sayfasındayken Projects aktif görünsün
    if (location.pathname.startsWith("/project-detail")) {
      setActiveSection("projects");
      return;
    }

    const sectionIds = [
      "home",
      "about",
      "projects",
      "resume",
      "contact",
    ];

    const updateActiveSection = () => {
      const markerPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (
          section &&
          markerPosition >= section.offsetTop
        ) {
          currentSection = id;
        }
      });

      const isNearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (isNearPageBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, [location.pathname]);


  const handleClick = (href) => {
    setIsOpen(false);

    const id = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/", {
        state: {
          scrollTo: href,
        },
      });

      return;
    }

    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight =
      document.querySelector("nav")?.offsetHeight ?? 80;

    const targetPosition =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const title =
    language === "tr"
      ? "Büşra Yağcıoğlu"
      : "Busra Yagcioglu";

  const nextLanguageFlag =
    language === "en" ? TrFlag : EnFlag;

  const nextLanguageLabel =
    language === "en" ? "Türkçe" : "English";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled
        ? "border-[#e6d8cd]/90 bg-[#f7f2eb]/90 shadow-[0_8px_30px_rgba(80,50,35,0.06)] backdrop-blur-xl"
        : "border-transparent bg-[#f7f2eb]/45 backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleClick("#home")}
          className="group flex items-baseline text-left"
          aria-label={title}
        >
          <span className="font-['Cormorant_Garamond'] text-2xl font-semibold tracking-[0.02em] text-[#2b211d] transition-colors group-hover:text-[#9e2a22] md:text-3xl">
            {title}
          </span>

          <span className="ml-0.5 text-xl font-semibold text-[#9e2a22]">
            .
          </span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-3 text-[0.78rem] font-medium uppercase tracking-[0.09em] transition-colors duration-200 ${isActive
                  ? "text-[#9e2a22]"
                  : "text-[#75655d] hover:text-[#2b211d]"
                  }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-[#9e2a22] transition-all duration-300 ${isActive
                    ? "w-6 opacity-100"
                    : "w-0 opacity-0"
                    }`}
                />
              </button>
            );
          })}

          {/* Language selector */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c8bc] bg-white/55 transition duration-300 hover:-translate-y-0.5 hover:border-[#9e2a22]/50 hover:bg-white"
            title={nextLanguageLabel}
            aria-label={nextLanguageLabel}
          >
            <img
              src={nextLanguageFlag}
              alt={nextLanguageLabel}
              className="h-5 w-5 rounded-full object-cover"
            />
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c8bc] bg-white/55"
            title={nextLanguageLabel}
            aria-label={nextLanguageLabel}
          >
            <img
              src={nextLanguageFlag}
              alt={nextLanguageLabel}
              className="h-5 w-5 rounded-full object-cover"
            />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c8bc] bg-white/55 text-[#2b211d] transition hover:border-[#9e2a22]/50 hover:text-[#9e2a22]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <FaTimes size={18} />
            ) : (
              <FaBars size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-[#e6d8cd] bg-[#f7f2eb]/95 px-5 py-4 shadow-[0_18px_35px_rgba(80,50,35,0.08)] backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleClick(link.href)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${isActive
                    ? "bg-[#9e2a22]/8 text-[#9e2a22]"
                    : "text-[#6d5a52] hover:bg-white/65 hover:text-[#2b211d]"
                    }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;