import React from 'react';

const Resume = () => (
  <section id="resume" className="p-6 md:p-12 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-10 text-center">
      Resume
    </h2>

    {/* Download CV */}
    <div className="flex justify-center mb-12">
      <a
        href="/resume.pdf" // public klasöründeki dosya adı
        download="resume.pdf" // indirme için aynı isim
        className="px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-lg hover:bg-teal-500 transition transform hover:scale-105 shadow-md"
      >
        Download CV
      </a>
    </div>



    <div className="grid md:grid-cols-2 gap-8 text-gray-300">

      {/* Education */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition">
        <h3 className="text-teal-400 font-semibold text-xl mb-4 border-b border-gray-700 pb-2">
          🎓 Education
        </h3>
        <ul className="space-y-4 text-sm">
          <li>
            <p className="font-medium text-gray-200">Hasan Kalyoncu University — Gaziantep</p>
            <p>BSc in Software Engineering · 4th Year</p>
            <p className="text-gray-400">Expected Graduation: 2026</p>
          </li>
          <li>
            <p className="font-medium text-gray-200">St Giles International School — UK</p>
            <p>B2 English Language Certificate</p>
            <p className="text-gray-400">Completed in 2022</p>
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition">
        <h3 className="text-teal-400 font-semibold text-xl mb-4 border-b border-gray-700 pb-2">
          💼 Experience
        </h3>
        <ul className="space-y-3 text-sm">
          <li><span className="font-medium text-gray-200">Sca Social</span> — Project Management Intern (Jun–Aug 2025)</li>
          <li><span className="font-medium text-gray-200">Rigelsan Defense & Security Inc.</span> — Software Intern (2023–2024)</li>
          <li><span className="font-medium text-gray-200">Google DSC HKU</span> — Campus Lead (2022–2024)</li>
          <li><span className="font-medium text-gray-200">Carousel Oceanfront Hotel, USA</span> — Front Desk Associate (Summer 2023)</li>
          <li><span className="font-medium text-gray-200">Dolle’s Candyland Inc., USA</span> — Sales Consultant (Summer 2023)</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition md:col-span-2">
        <h3 className="text-teal-400 font-semibold text-xl mb-4 border-b border-gray-700 pb-2">
          ⚙️ Technical Skills
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-teal-300 font-medium mb-2">Languages & Frameworks</p>
            <p>Python (Flask, Django, DRF)<br />JavaScript (React, React Native/Expo)<br />C, C++</p>
          </div>
          <div>
            <p className="text-teal-300 font-medium mb-2">Tools & Platforms</p>
            <p>Firebase<br />Git & GitHub<br />SQL<br />Figma (UI/UX)</p>
          </div>
          <div>
            <p className="text-teal-300 font-medium mb-2">Other</p>
            <p>Arduino · ESP32 (IoT)<br />Unity (basic game dev)<br />REST API Integration</p>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition md:col-span-2">
        <h3 className="text-teal-400 font-semibold text-xl mb-4 border-b border-gray-700 pb-2">
          📜 Certificates
        </h3>
        <ul className="grid md:grid-cols-2 gap-2 text-sm">
          <li>Project Management Internship — Sca Social (2025)</li>
          <li>Campus Representative — Google DSC (2024)</li>
          <li>Work and Travel — USA (2023)</li>
          <li>B2 English — St Giles International School, UK (2022)</li>
        </ul>
      </div>

    </div>
  </section>
);

export default Resume;
