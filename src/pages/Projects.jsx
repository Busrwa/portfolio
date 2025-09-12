// src/sections/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

// Proje görselleri ve video dosyalarını import edebilirsin
import fridgeCover from '../assets/fridge/fridge-cover.png';
import fridge1 from '../assets/fridge/fridge1.png';
import fridge2 from '../assets/fridge/fridge2.png';
import fridge3 from '../assets/fridge/fridge3.png';
import fridge4 from '../assets/fridge/fridge4.png';
import fridge5 from '../assets/fridge/fridge5.png';
import fridgeDemo from '../assets/fridge/fridge-demo.mp4';

import emailCover from '../assets/email/email1.png';
import email1 from '../assets/email/email1.png';
import email2 from '../assets/email/email2.png';
import email3 from '../assets/email/email3.png';
import emailDemo from '../assets/email/email-demo.mp4';



const Projects = () => {
  const projects = [
    {
      title: "🧊 What's in Your Fridge? - AR Recipe App",
      description: `A React Native (Expo) application that helps users discover recipes based on the ingredients available in their fridge or pantry.

Features:
- Input ingredients manually
- Fetches recipes using TheMealDB API
- Displays recipe details:
  • Ingredients listed at the top
  • Step-by-step instructions shown below
- Clean UI with professional food images`,
      image: fridgeCover,
      github: "https://github.com/Busrwa/whatIsInMyFridge",
      screenshots: [fridge1, fridge2, fridge3, fridge4, fridge5],
      demoVideo: fridgeDemo,
    },
    {
      title: "📧 Automatic Email Sender",
      description: `A Python Flask application that automatically sends emails at scheduled times.  

Features:
- Input sender & receiver email, subject, message, and schedule
- Supports one-time, weekly, monthly, and yearly sending
- Success modal confirms email sent
- Secure sending via SMTP`,
      image: emailCover,
      github: "https://github.com/Busrwa/Otomatik_E-posta_Gonderici",
      screenshots: [email1, email2, email3], 
      demoVideo: emailDemo,
    },
    {
      title: "Smart Trash Can",
      description: `IoT project using ESP32, solar-powered, automatically opens lid and tracks trash fill level remotely.`,
      image: "/assets/project1.png",
      github: "#",
    },
    {
      title: "Gold Bomb Game",
      description: `A React Native game where users open chests to collect gold while avoiding bombs. Includes animations and sound effects.`,
      image: "/assets/project1.png",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="p-6 md:p-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 md:mb-10 text-center">
        My Projects
      </h2>
      <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto px-4 md:px-0">
        Here are a few of my personal and academic projects showcasing my skills in React, React Native (Expo), Django, and IoT development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} descriptionStyle={{ whiteSpace: 'pre-line' }} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
