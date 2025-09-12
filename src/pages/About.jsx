import React from 'react';

const About = () => (
  <section id="about" className="p-6 md:p-12 max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 md:mb-10 text-center">
      About Me
    </h2>
    <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto px-4 md:px-0">
      I am a 4th-year Software Engineering student passionate about developing mobile and web applications using React, React Native (Expo), Django, and IoT solutions.
    </p>
    <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto px-4 md:px-0">
      I enjoy exploring new technologies, contributing to open-source projects, and working on innovative personal projects that combine software and hardware.
    </p>
    <div className="flex justify-center space-x-6 mt-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <h3 className="text-teal-400 font-semibold text-lg mb-2">Web & Mobile Development</h3>
        <p className="text-gray-300 text-sm">React, React Native (Expo), Django</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <h3 className="text-teal-400 font-semibold text-lg mb-2">IoT & Embedded Systems</h3>
        <p className="text-gray-300 text-sm">ESP32, Arduino, Sensors</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center">
        <h3 className="text-teal-400 font-semibold text-lg mb-2">Open Source & Projects</h3>
        <p className="text-gray-300 text-sm">Hackathons, DSC Events, Personal Apps</p>
      </div>
    </div>
  </section>
);

export default About;
