// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f2eb] px-5 pb-20 pt-28 md:px-10">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-1/2 h-[440px] w-[580px] -translate-y-1/2 rounded-full bg-[#efdcd0]/55 blur-3xl"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 hidden h-80 w-80 opacity-[0.1] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 49%, #b99859 50%, transparent 51%), linear-gradient(transparent 49%, #b99859 50%, transparent 51%)",
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to left, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, black, transparent)",
        }}
      />

      {/* Floral-tech decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[78%] w-[48%] overflow-hidden lg:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 24%, black 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/tech-floral-contact.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "210% auto",
            opacity: 0.82,
          }}
        />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="max-w-2xl rounded-[30px] border border-white/75 bg-[#fffaf5]/95 p-8 shadow-[0_20px_55px_rgba(80,50,35,0.08)] sm:p-10 md:p-12">
          <div className="eyebrow mb-5">
            {language === "tr"
              ? "Sayfa Bulunamadı"
              : "Page Not Found"}
          </div>

          <h1 className="mb-3 font-['Cormorant_Garamond'] text-7xl font-semibold leading-none text-[#9e2a22] sm:text-8xl md:text-9xl">
            404
          </h1>

          <h2 className="mb-5 font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-[#2b211d] md:text-5xl">
            {t.notFound.title}
          </h2>

          <p className="mb-8 max-w-xl text-base leading-8 text-[#6d5a52] md:text-lg">
            {t.notFound.description}
          </p>

          <Link
            to="/"
            className="btn-primary"
          >
            <span aria-hidden="true">←</span>

            {t.notFound.button}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;