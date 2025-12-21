// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const location = useLocation();
  const { t, language } = useLanguage(); // dil bilgisi burada da alındı

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        const yOffset = -64;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.state]);

  // Dil bazlı özgeçmiş dosyası
  const resumeFile =
    language === "tr"
      ? "/Busra_Yagcioglu_CV.pdf"
      : "/Busra_Yagcioglu_CV_ENG.pdf";

  const resumeFileName =
    language === "tr"
      ? "Busra_Yagcioglu_CV.pdf"
      : "Busra_Yagcioglu_CV_ENG.pdf";

  return (
    <section
      id="home"
      className="p-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-center relative"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-teal-400 mb-4 animate-fade-in">
        {t.home.greeting}
      </h1>

      <p className="text-gray-300 max-w-2xl mb-6 text-lg md:text-xl animate-fade-in delay-200">
        {t.home.description}
      </p>

      <div className="flex flex-col items-center space-y-4 animate-fade-in delay-400">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {/* Görüntüleme butonu */}
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-lg hover:bg-teal-500 transition transform hover:scale-105 shadow-md text-center"
          >
            {language === "tr"
              ? "Özgeçmişi Görüntüle (Türkçe)"
              : "View Resume (English)"}
          </a>

          {/* İndirme butonu */}
          <a
            href={resumeFile}
            download={resumeFileName}
            className="w-full sm:w-auto px-6 py-3 bg-gray-700 text-gray-100 font-semibold rounded-lg hover:bg-gray-600 transition transform hover:scale-105 shadow-md text-center"
          >
            {t.resume.download}
          </a>

          {/* Projeler butonu */}
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition transform hover:scale-105 shadow-md text-center"
          >
            {t.home.myProjects}
          </a>
        </div>


        {/* Sosyal medya ikonları */}
        <div className="flex justify-center space-x-6 text-2xl mt-6">
          <a
            href="mailto:busrayagcioglu2003@gmail.com"
            className="hover:text-teal-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Busrwa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/busra-yagcioglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://medium.com/@busrayagcioglu2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaMedium />
          </a>
          <a
            href="https://www.instagram.com/busra_yagciogluu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
