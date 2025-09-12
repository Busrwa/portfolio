import React from 'react';

const Resume = () => (
  <section id="resume" className="p-6 md:p-12 max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 md:mb-10 text-center">
      Resume
    </h2>
    <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto px-4 md:px-0">
      You can download my full resume by clicking the button below.
    </p>
    <div className="flex justify-center mb-8">
      <a
        href="/resume.pdf"
        target="_blank"
        className="px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-lg hover:bg-teal-500 transition transform hover:scale-105 shadow-md"
      >
        Download Resume
      </a>
    </div>
    <div className="grid md:grid-cols-2 gap-6 text-gray-300 px-4 md:px-0">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <h3 className="text-teal-400 font-semibold text-lg mb-2">Education</h3>
        <p>BSc in Software Engineering, Hasan Kalyoncu University (2022-Present)</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <h3 className="text-teal-400 font-semibold text-lg mb-2">Leadership</h3>
        <p>Developer Student Clubs Leader, organizing tech events & hackathons</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <h3 className="text-teal-400 font-semibold text-lg mb-2">Skills</h3>
        <p>React, React Native (Expo), Django, Python, IoT, Firebase</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <h3 className="text-teal-400 font-semibold text-lg mb-2">Projects</h3>
        <p>Smart Trash Can, What's in My Fridge App, Gold Bomb Game</p>
      </div>
    </div>
  </section>
);

export default Resume;
