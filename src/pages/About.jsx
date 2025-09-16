import React from "react";

const About = () => (
  <section id="about" className="p-6 md:p-12 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 md:mb-10 text-center">
      About Me
    </h2>

    {/* Intro */}
    <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto px-4 md:px-0 leading-relaxed">
      I am a 4th-year <span className="text-teal-400 font-semibold">Software Engineering student</span> at Hasan Kalyoncu University (expected graduation: 2026).
      I am passionate about <span className="text-teal-400">web & mobile development</span>,
      <span className="text-teal-400"> IoT solutions</span>, and projects that combine software and hardware.
    </p>

    <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto px-4 md:px-0 leading-relaxed">
      My experience includes working as a <span className="text-teal-400">Project Management Intern at Sca Social</span>,
      <span className="text-teal-400"> Software Intern at Rigelsan Defense & Security</span>,
      and <span className="text-teal-400">University Campus Lead at Google DSC HKU</span>.
      I also gained <span className="text-teal-400">international work experience</span> in the USA through the Work and Travel program.
    </p>

    {/* Skill Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <h3 className="text-teal-400 font-semibold text-lg mb-3">
          Web & Mobile Development
        </h3>
        <p className="text-gray-300 text-sm">
          React · React Native (Expo) · Django · Firebase
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <h3 className="text-teal-400 font-semibold text-lg mb-3">
          IoT & Embedded Systems
        </h3>
        <p className="text-gray-300 text-sm">
          ESP32 · Arduino · Sensor Applications
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <h3 className="text-teal-400 font-semibold text-lg mb-3">
          Leadership & Projects
        </h3>
        <p className="text-gray-300 text-sm">
          Google DSC · Hackathons · Smart Trash Can IoT · Personal Apps
        </p>
      </div>
    </div>

    {/* Extra Info in Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Languages */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center">
        <h3 className="text-teal-400 font-semibold text-lg mb-5 text-center">
          🌍 Languages
        </h3>
        <div className="space-y-3 w-full">
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="text-gray-200 font-medium">English</span>
            <span className="text-sm text-teal-400">B2 (Speaking) · B1 (Reading)</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="text-gray-200 font-medium">German</span>
            <span className="text-sm text-teal-400">A1</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-200 font-medium">Greek</span>
            <span className="text-sm text-teal-400">A1</span>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center">
        <h3 className="text-teal-400 font-semibold text-lg mb-5 text-center">
          🎓 Certificates
        </h3>
        <ul className="text-gray-300 text-sm space-y-2 w-full">
          <li className="flex items-start">
            <span className="mr-2 text-teal-400">✔️</span>
            <span>Project Management — Sca Social (2025)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-teal-400">✔️</span>
            <span>Google DSC Campus Representative (2024)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-teal-400">✔️</span>
            <span>Work and Travel — USA (2023)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-teal-400">✔️</span>
            <span>B2 English — ST Giles, UK (2022)</span>
          </li>
        </ul>
      </div>

    </div>
  </section>
);

export default About;
