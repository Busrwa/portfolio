// src/pages/Resume.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Resume = () => {
  const { t, language } = useLanguage();

  const resumeFile =
    language === 'tr'
      ? '/Busra_Yagcioglu_CV.pdf' // Türkçe CV
      : '/Busra_Yagcioglu_CV_ENG.pdf'; // İngilizce CV

  // Dosya adı (download için)
  const resumeFileName =
    language === 'tr' ? 'Busra_Yagcioglu_CV.pdf' : 'Busra_Yagcioglu_CV_ENG.pdf';

  return (
    <section id="resume" className="p-6 md:p-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-10 text-center">
        {t.resume.title}
      </h2>

      {/* Görüntüleme ve indirme butonları */}
      <div className="flex justify-center mb-12 gap-4 flex-wrap">
        <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-lg hover:bg-teal-500 transition transform hover:scale-105 shadow-md"
        >
          {language === 'tr'
            ? 'Özgeçmişi Görüntüle (Türkçe)'
            : 'View Resume (English)'}
        </a>

        <a
          href={resumeFile}
          download={resumeFileName}
          className="px-6 py-3 bg-gray-700 text-gray-100 font-semibold rounded-lg hover:bg-gray-600 transition transform hover:scale-105 shadow-md"
        >
          {t.resume.download}
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-gray-300">
        {/* Education */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition">
          <h3 className="text-teal-400 font-semibold text-xl mb-4 border-b border-gray-700 pb-2">
            🎓 {t.resume.education}
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="font-medium text-gray-200">{t.resume.edu1}</p>
              <p>{t.resume.edu1Desc}</p>
              <p className="text-teal-400 text-sm">{t.resume.edu1Note}</p>
              <p className="text-gray-400">{t.resume.edu1Grad}</p>
            </li>
            <li>
              <p className="font-medium text-gray-200">{t.resume.edu2}</p>
              <p className="text-teal-400 text-sm">{t.resume.edu2Desc}</p>
              <p className="text-gray-400">{t.resume.edu2Note}</p>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition">
          <h3 className="text-teal-400 font-semibold text-xl mb-4 border-b border-gray-700 pb-2">
            💼 {t.resume.experience}
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://scasocial.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-200 hover:text-teal-400 transition-colors"
              >
                Sca Social
              </a>
              <span className="text-teal-400 text-sm"> {t.resume.exp1}</span>
            </li>
            <li>
              <a
                href="https://gdg.community.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-200 hover:text-teal-400 transition-colors"
              >
                Google DSC HKU
              </a>
              <span className="text-teal-400 text-sm"> {t.resume.exp2}</span>
            </li>
            <li>
              <a
                href="https://carouselhotel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-200 hover:text-teal-400 transition-colors"
              >
                Carousel Oceanfront Hotel, USA
              </a>
              <span className="text-teal-400 text-sm"> {t.resume.exp3}</span>
            </li>
            <li>
              <a
                href="https://dolles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-200 hover:text-teal-400 transition-colors"
              >
                Dolle's Candyland Inc., USA
              </a>
              <span className="text-teal-400 text-sm"> {t.resume.exp4}</span>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition md:col-span-2">
          <h3 className="text-teal-400 font-semibold text-xl mb-4 border-b border-gray-700 pb-2">
            ⚙️ {t.resume.skills}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-teal-300 font-medium mb-2">{t.resume.skillsLang}</p>
              <p>Python (Flask, Django, DRF)<br />JavaScript (React, Vite, React Native/Expo)<br />C, C++</p>
            </div>
            <div>
              <p className="text-teal-300 font-medium mb-2">{t.resume.skillsTools}</p>
              <p>Firebase<br />Git & GitHub<br />SQL<br />Figma (UI/UX)</p>
            </div>
            <div>
              <p className="text-teal-300 font-medium mb-2">{t.resume.skillsOther}</p>
              <p>Arduino · ESP32 (IoT)<br />Unity (Basic game dev)<br />REST API Integration</p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition md:col-span-2">
          <h3 className="text-teal-400 font-semibold text-xl mb-4 border-b border-gray-700 pb-2">
            📜 {t.resume.certificates}
          </h3>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            <li>{t.about.cert1}</li>
            <li>{t.about.cert2}</li>
            <li>{t.about.cert3}</li>
            <li>{t.about.cert4}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;