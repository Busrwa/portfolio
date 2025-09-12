import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMedium, FaInstagram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        const yOffset = -64; // navbar yüksekliği kadar yukarı kaydır
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <section
      id="home"
      className="p-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-center relative"
    >
      {/* Başlık */}
      <h1 className="text-5xl md:text-6xl font-bold text-teal-400 mb-4 animate-fade-in">
        Hi, I'm Busra
      </h1>

      {/* Açıklama */}
      <p className="text-gray-300 max-w-2xl mb-6 text-lg md:text-xl animate-fade-in delay-200">
        I'm a Software Engineer passionate about building modern web and mobile applications using React, React Native (Expo), Django, and IoT solutions.
      </p>

      {/* Call-to-action butonları */}
      <div className="flex flex-col items-center space-y-4 animate-fade-in delay-400">
        <div className="flex space-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded hover:bg-teal-500 transition"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-gray-900 transition"
          >
            My Projects
          </a>
        </div>

        {/* Sosyal ikonlar butonların hemen altında */}
        <div className="flex justify-center space-x-6 text-2xl mt-4">
          <a href="mailto:busrayagcioglu2003@gmail.com" className="hover:text-teal-400">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Busrwa" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/busra-yagcioglu/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaLinkedin />
          </a>
          <a href="https://medium.com/@busrayagcioglu2003" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaMedium />
          </a>
          <a href="https://www.instagram.com/busra_yagciogluu/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
