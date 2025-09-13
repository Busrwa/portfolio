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

import pdfCover from '../assets/pdfMerge/pdf_merge1.png';
import pdf1 from '../assets/pdfMerge/pdf_merge1.png';
import pdf2 from '../assets/pdfMerge/pdf_merge2.png';
import pdf3 from '../assets/pdfMerge/pdf_merge3.png';
import pdf4 from '../assets/pdfMerge/pdf_merge4.png';

import blogCover from '../assets/blogScript/blog1.png';
import blog1 from '../assets/blogScript/blog1.png';
import blog2 from '../assets/blogScript/blog2.png';
import blog3 from '../assets/blogScript/blog3.png';
import blog4 from '../assets/blogScript/blog4.png';
import blog5 from '../assets/blogScript/blog5.png';
import blog6 from '../assets/blogScript/blog6.png';
import blog7 from '../assets/blogScript/blog7.png';
import blog8 from '../assets/blogScript/blog8.png';
import blog9 from '../assets/blogScript/blog9.png';
import blog10 from '../assets/blogScript/blog10.png';
import blogDemo from '../assets/blogScript/blog-demo.mp4';

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
      title: "📝 PDF Merger",
      description: `A Python desktop application with a GUI to merge multiple PDF files into one.  

Features:
- Select multiple PDFs
- Choose output location
- User-friendly Tkinter interface
- Success and error notifications`,
      image: pdfCover,
      github: "https://github.com/Busrwa/PDF_Birlestirici",
      screenshots: [pdf1, pdf2, pdf3, pdf4],
    },
    {
      title: "📚 Flask Blog App",
      description: `A Flask-based blog application using SQLite.  

Features:
- User registration and login
- Add, view, and filter posts by category
- Categories: News, Technology, Health, Education
- Modern and responsive UI`,
      image: blogCover,
      github: "https://github.com/Busrwa/Blog_Scripti",
      screenshots: [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10],
      demoVideo: blogDemo,
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
