// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaMedium, FaInstagram, FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

// Typewriter hook
const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
};

// Floating particles background
const Particles = () => {
  const dots = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    dur: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <div
          key={d.id}
          className="absolute rounded-full bg-teal-400/20"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            animation: `float ${d.dur}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,166,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

const Home = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  const typeWords =
    language === "tr"
      ? ["Web Uygulamaları Geliştiriyorum", "Mobil Uygulamalar Yapıyorum", "IoT Çözümleri Üretiyorum"]
      : ["I Build Web Applications", "I Create Mobile Apps", "I Engineer IoT Solutions"];

  const typed = useTypewriter(typeWords);

  const resumeFile = language === "tr" ? "/Busra_Yagcioglu_CV.pdf" : "/Busra_Yagcioglu_CV_ENG.pdf";
  const resumeFileName = language === "tr" ? "Busra_Yagcioglu_CV.pdf" : "Busra_Yagcioglu_CV_ENG.pdf";

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.state]);

  const socials = [
    { href: "mailto:busrayagcioglu2003@gmail.com", icon: <FaEnvelope />, label: "Email" },
    { href: "https://github.com/Busrwa", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/busra-yagcioglu/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://medium.com/@busrayagcioglu2003", icon: <FaMedium />, label: "Medium" },
    { href: "https://www.instagram.com/busra_yagciogluu/", icon: <FaInstagram />, label: "Instagram" },
  ];

  const stats = [
    { value: "13+", label: language === "tr" ? "Proje" : "Projects" },
    { value: "3+", label: language === "tr" ? "Staj / İş" : "Internships" },
    { value: "4+", label: language === "tr" ? "Dil" : "Languages" },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden mesh-bg"
    >
      <Particles />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/8 text-teal-400 text-sm font-medium mb-6"
          style={{ background: "rgba(20,184,166,0.08)" }}
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          {language === "tr" ? "Yazılım Mühendisliği Öğrencisi" : "Software Engineering Student"}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {language === "tr" ? "Merhaba, Ben " : "Hi, I'm "}
          <span className="text-teal-400 text-glow">
            {language === "tr" ? "Büşra" : "Busra"}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-6 h-9 font-light"
        >
          <span className="text-teal-300">{typed}</span>
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed text-base md:text-lg"
        >
          {t.home.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-xl hover:bg-teal-300 transition-all transform hover:scale-105 shadow-lg shadow-teal-400/25 text-sm"
          >
            {language === "tr" ? "Özgeçmişi Görüntüle (TR)" : "View Resume (EN)"}
          </a>
          <a
            href={resumeFile}
            download={resumeFileName}
            className="px-6 py-3 bg-white/5 border border-white/10 text-gray-200 font-semibold rounded-xl hover:bg-white/10 transition-all hover:scale-105 text-sm"
          >
            {t.resume.download}
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-teal-400/40 text-teal-400 rounded-xl hover:bg-teal-400/10 transition-all hover:scale-105 text-sm"
          >
            {t.home.myProjects} →
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-8 mb-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-teal-400" style={{ fontFamily: "'Syne', sans-serif" }}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10 transition-all hover:scale-110 text-lg"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">
          {language === "tr" ? "kaydır" : "scroll"}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Home;