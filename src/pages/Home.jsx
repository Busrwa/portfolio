// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

/* ─── Typewriter hook ───────────────────────────────── */
const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];

    const timeout = window.setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));

        if (charIdx + 1 === current.length) {
          window.setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((value) => value + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));

        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((value) => (value + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((value) => value - 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => window.clearTimeout(timeout);
  }, [charIdx, deleting, pause, speed, wordIdx, words]);

  return display;
};

const Home = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  const typeWords =
    language === "tr"
      ? [
          "Full-Stack Web Geliştiriyorum",
          "Mobil Uygulamalar Yapıyorum",
          "REST API'ler Tasarlıyorum",
          "IoT Sistemleri Kuruyorum",
        ]
      : [
          "I Build Full-Stack Web Apps",
          "I Develop Mobile Applications",
          "I Design REST APIs",
          "I Engineer IoT Systems",
        ];

  const typed = useTypewriter(typeWords);

  const resumeFile =
    language === "tr"
      ? "/Busra_Yagcioglu_CV.pdf"
      : "/Busra_Yagcioglu_CV_ENG.pdf";

  const resumeFileName =
    language === "tr"
      ? "Busra_Yagcioglu_CV.pdf"
      : "Busra_Yagcioglu_CV_ENG.pdf";

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const element = document.querySelector(location.state.scrollTo);

    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        72;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [location.state]);

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

  const stats = [
    {
      value: "9",
      label:
        language === "tr"
          ? "Seçilmiş Proje"
          : "Selected Projects",
    },
    {
      value: "2",
      label:
        language === "tr"
          ? "Play Store Uygulaması"
          : "Play Store Apps",
    },
    {
      value: "3+",
      label:
        language === "tr"
          ? "Deneyim"
          : "Work Experience",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f2eb] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32"
    >
      {/* Subtle editorial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[18%] h-72 w-72 rounded-full bg-[#efd8c9]/55 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[17%] h-80 w-80 rounded-full bg-[#ddd4b8]/35 blur-3xl"
      />

      {/* Subtle technical lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-32 hidden h-56 w-56 opacity-[0.18] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 49%, #c8a96b 50%, transparent 51%), linear-gradient(transparent 49%, #c8a96b 50%, transparent 51%)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to left, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, black, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-4">
        {/* ─── Text content ──────────────────────────── */}
        <div className="order-2 mx-auto w-full max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="eyebrow mb-6 justify-center lg:justify-start"
          >
            {language === "tr"
              ? "Full-Stack & Mobil Geliştirici"
              : "Full-Stack & Mobile Developer"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="editorial-title mb-7 text-[4.3rem] font-medium sm:text-[5.6rem] md:text-[6.8rem] lg:text-[7.5rem]"
          >
            <span className="block">
              {language === "tr" ? "Büşra" : "Busra"}
            </span>

            <span className="block">
              {language === "tr" ? "Yağcıoğlu" : "Yagcioglu"}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mb-6 min-h-8 text-lg font-medium text-[#9e2a22] sm:text-xl md:text-2xl"
          >
            <span>{typed}</span>
            <span className="typewriter-cursor" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.44,
              duration: 0.6,
            }}
            className="mx-auto mb-8 max-w-xl text-base leading-8 text-[#6d5a52] md:text-lg lg:mx-0"
          >
            {t.home.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56 }}
            className="mb-9 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              className="btn-primary"
            >
              {t.home.myProjects}
              <span aria-hidden="true">→</span>
            </a>

            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {language === "tr"
                ? "Özgeçmişi Görüntüle"
                : "View Resume"}
            </a>

            <a
              href={resumeFile}
              download={resumeFileName}
              className="btn-secondary"
            >
              {t.resume.download}
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.68 }}
            className="mb-10 flex justify-center gap-3 lg:justify-start"
          >
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7c4b7] bg-white/60 text-lg text-[#3c302a] transition duration-300 hover:-translate-y-1 hover:border-[#9e2a22] hover:bg-white hover:text-[#9e2a22]"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mx-auto grid max-w-xl grid-cols-3 divide-x divide-[#dacabe] border-y border-[#dacabe] py-5 lg:mx-0"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-2 text-center lg:text-left"
              >
                <div className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#2b211d] md:text-4xl">
                  {stat.value}
                </div>

                <div className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-[#8b756b] sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── Floral-tech artwork ───────────────────── */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 35,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative order-1 flex min-h-[350px] items-center justify-center lg:order-2 lg:min-h-[680px]"
        >
          <div
            aria-hidden="true"
            className="absolute h-[78%] w-[78%] rounded-full border border-[#c8a96b]/20"
          />

          <div
            aria-hidden="true"
            className="absolute h-[61%] w-[61%] rounded-full border border-[#9e2a22]/10"
          />

          <img
            src="/tech-flower-hero.png"
            alt=""
            aria-hidden="true"
            className="relative z-10 max-h-[620px] w-auto max-w-[88vw] object-contain sm:max-w-[530px] lg:max-h-[700px] lg:max-w-[620px]"
            style={{
              filter:
                "drop-shadow(0 24px 30px rgba(54, 39, 29, 0.18))",
              animation:
                "float 7s ease-in-out infinite",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[8%] right-[8%] h-px w-32 bg-gradient-to-r from-transparent via-[#c8a96b] to-transparent opacity-70"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[4%] right-[6%] h-2 w-2 rounded-full bg-[#c8a96b] shadow-[0_0_16px_rgba(200,169,107,0.8)]"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.66rem] uppercase tracking-[0.2em] text-[#8b756b] md:flex"
      >
        <span>
          {language === "tr" ? "Kaydır" : "Scroll"}
        </span>

        <span className="h-8 w-px bg-gradient-to-b from-[#9e2a22] to-transparent" />
      </motion.a>
    </section>
  );
};

export default Home;