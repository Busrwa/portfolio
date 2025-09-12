import React from "react";
import { FaGithub, FaLinkedin, FaMedium, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Büşra Yağcıoğlu. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end space-x-6 text-2xl">
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
    </footer>
  );
};

export default Footer;
