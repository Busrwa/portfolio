// src/pages/About.jsx
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="p-6 md:p-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 md:mb-10 text-center">
        {t.about.title}
      </h2>

      <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto px-4 md:px-0 leading-relaxed">
        {t.about.intro1} <span className="text-teal-400 font-semibold">{t.about.student}</span> {t.about.intro2}
        <span className="text-teal-400 font-semibold">{t.about.scholarship}</span>{t.about.intro3}
        <span className="text-teal-400">{t.about.webMobile}</span>,{" "}
        <span className="text-teal-400">{t.about.iot}</span>{t.about.intro4}
      </p>
      
      <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto px-4 md:px-0 leading-relaxed">
        {t.about.experience}<span className="text-teal-400">{t.about.pm}</span>,{" "}
        <span className="text-teal-400">{t.about.lead}</span>{t.about.international}{t.about.usa}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <h3 className="text-teal-400 font-semibold text-lg mb-3">
            {t.about.skills.webMobile}
          </h3>
          <p className="text-gray-300 text-sm">
            {t.about.skills.webMobileDesc}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <h3 className="text-teal-400 font-semibold text-lg mb-3">
            {t.about.skills.iot}
          </h3>
          <p className="text-gray-300 text-sm">
            {t.about.skills.iotDesc}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <h3 className="text-teal-400 font-semibold text-lg mb-3">
            {t.about.skills.leadership}
          </h3>
          <p className="text-gray-300 text-sm">
            {t.about.skills.leadershipDesc}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <h3 className="text-teal-400 font-semibold text-lg mb-5 text-center">
            🌍 {t.about.languages}
          </h3>
          <div className="space-y-3 w-full">
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-200 font-medium">{t.about.turkish}</span>
              <span className="text-sm text-teal-400">{t.about.native}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-200 font-medium">{t.about.english}</span>
              <span className="text-sm text-teal-400">B2</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-200 font-medium">{t.about.german}</span>
              <span className="text-sm text-teal-400">A1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200 font-medium">{t.about.greek}</span>
              <span className="text-sm text-teal-400">A1</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <h3 className="text-teal-400 font-semibold text-lg mb-5 text-center">
            🎓 {t.about.certificates}
          </h3>
          <ul className="text-gray-300 text-sm space-y-2 w-full">
            <li className="flex items-start">
              <span className="mr-2 text-teal-400">✔️</span>
              <span>{t.about.cert1}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal-400">✔️</span>
              <span>{t.about.cert2}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal-400">✔️</span>
              <span>{t.about.cert3}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal-400">✔️</span>
              <span>{t.about.cert4}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;