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

import toDoCover from '../assets/toDoApp/toDo7.png';
import toDo1 from '../assets/toDoApp/toDo1.png';
import toDo2 from '../assets/toDoApp/toDo2.png';
import toDo3 from '../assets/toDoApp/toDo3.png';
import toDo4 from '../assets/toDoApp/toDo4.png';
import toDo5 from '../assets/toDoApp/toDo5.png';
import toDo6 from '../assets/toDoApp/toDo6.png';
import toDo7 from '../assets/toDoApp/toDo7.png';
import toDoDemo from '../assets/toDoApp/toDo-Demo.mp4';

import tvCover from '../assets/tvApp/logo.png';
import tv1 from '../assets/tvApp/tvApp1.png';
import tv2 from '../assets/tvApp/tvApp2.png';
import tvDemo from '../assets/tvApp/tvApp-Demo.mp4';

import mindCapsCover from '../assets/mindcaps/icon.png';
import mindCaps1 from '../assets/mindcaps/mindcaps1.png';
import mindCaps2 from '../assets/mindcaps/mindcaps2.png';
import mindCaps3 from '../assets/mindcaps/mindcaps3.png';
import mindCaps4 from '../assets/mindcaps/mindcaps4.png';
import mindCaps5 from '../assets/mindcaps/mindcaps5.png';
import mindCaps6 from '../assets/mindcaps/mindcaps6.png';
import mindCaps7 from '../assets/mindcaps/mindcaps7.png';
import mindCaps8 from '../assets/mindcaps/mindcaps8.png';
import mindCaps9 from '../assets/mindcaps/mindcaps9.png';
import mindCaps10 from '../assets/mindcaps/mindcaps10.png';
import mindCaps11 from '../assets/mindcaps/mindcaps11.png';
import mindCaps12 from '../assets/mindcaps/mindcaps12.png';
import mindCaps13 from '../assets/mindcaps/mindcaps13.png';
import mindCaps14 from '../assets/mindcaps/mindcaps14.png';
import mindCaps15 from '../assets/mindcaps/mindcaps15.png';
import mindCapsDemo from '../assets/mindcaps/mincaps-demo.mp4';

import smartHomeCover from '../assets/smartHome/smartHome1.jpg';
import smartHome1 from '../assets/smartHome/smartHome1.jpg';
import smartHomeDemo from '../assets/smartHome/smartHome-demo.mp4';

import swipeItCover from '../assets/swipeIt/swipeit-cover.png';
import swipeit1 from '../assets/swipeIt/swipeIt1.jpg';
import swipeit2 from '../assets/swipeIt/swipeIt2.jpg';
import swipeit3 from '../assets/swipeIt/swipeIt3.jpg';
import swipeit4 from '../assets/swipeIt/swipeIt4.jpg';
import swipeit5 from '../assets/swipeIt/swipeIt5.jpg';
import swipeit6 from '../assets/swipeIt/swipeIt6.jpg';
import swipeit7 from '../assets/swipeIt/swipeIt7.jpg';
import swipeit8 from '../assets/swipeIt/swipeIt8.jpg';
import swipeit9 from '../assets/swipeIt/swipeIt9.jpg';
import swipeit10 from '../assets/swipeIt/swipeIt10.jpg';
import swipeit11 from '../assets/swipeIt/swipeIt11.jpg';
import swipeit12 from '../assets/swipeIt/swipeIt12.jpg';
import swipeit13 from '../assets/swipeIt/swipeIt13.jpg';
import swipeit14 from '../assets/swipeIt/swipeIt14.jpg';

const Projects = () => {
  const projects = [
    {
      title: "📖 Swipe It - Book Recommendation App",
      description: `A React Native (Expo) mobile app that allows users to swipe through books and movies to discover their favorites.  

Features:
- Swipe-based recommendation system (like Tinder)
- Users can like, dislike, or add items to favorites
- Firebase Auth for secure user login
- Firestore database for storing user preferences and top items
- Detailed view for each book
- Weekly popularity ranking based on user interactions
- Bad word filtering and rate-limiting for user submissions

⚠️ This project repository is private to comply with copyright rules. Screenshots are provided to showcase the app functionality.`,
      image: swipeItCover,
      screenshots: [swipeit1, swipeit2, swipeit3, swipeit4, swipeit5, swipeit6, swipeit7, swipeit8, swipeit9, swipeit10, swipeit11, swipeit12, swipeit13, swipeit14],
    },
    {
      title: "🌿 MindCaps - AI-Powered Psychological Support App",
      description: `A React Native (Expo) mobile app integrated with a Flask backend that provides empathetic psychological support.  

Features:
- User text analysis and AI-generated supportive messages
- Emotional analysis in JSON format (joy, sadness, fear, anger, disgust, surprise)
- Motivational messages from the user's "future self"
- Turkish and English support
- Integrated React Native frontend and Flask backend
- Secure handling of user inputs`,
      image: mindCapsCover,
      github: "https://github.com/Busrwa/MindCaps",
      screenshots: [mindCaps1, mindCaps2, mindCaps3, mindCaps4, mindCaps5, mindCaps12, mindCaps13, mindCaps14, mindCaps15, mindCaps6, mindCaps7, mindCaps8, mindCaps9, mindCaps10, mindCaps11],
      demoVideo: mindCapsDemo,
    },
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
      title: "📝 To-Do List App",
      description: `A Python + Flask application to manage personal tasks and notes.  

Features:
- User registration and login
- Add, view, and delete notes
- User-specific notes stored in SQLite
- Modern and responsive web interface`,
      image: toDoCover,
      github: "https://github.com/Busrwa/To_Do_List",
      screenshots: [toDo1, toDo2, toDo3, toDo4, toDo5, toDo6, toDo7],
      demoVideo: toDoDemo,
    },
    {
      title: "📺 TV Channels - Live Stream App",
      description: `A React Native (Expo) mobile app that displays TV channels in a clean interface.

Features:
- Browse TV channels
- Watch live streams via embedded WebView
- Clean and minimal UI for focused viewing

⚠️ This project repository is private to comply with copyright rules. A demo video and screenshots are provided to showcase the app functionality.`,
      image: tvCover,
      screenshots: [tv1, tv2],
      demoVideo: tvDemo,
    },
    {
      title: "🏠 Smart Home Security System",
      description: `A smart home security system using ESP32, Arduino IDE, and Flask, providing real-time motion detection alerts with voice notifications.  

Features:
- Motion detection via ultrasonic sensor
- Real-time alerts through Flask web interface
- Voice and visual notifications
- Remote access via web or mobile
- Data management using SQLite`,
      image: smartHomeCover,
      github: "https://github.com/Busrwa/SmartHomeSecuritySystem",
      screenshots: [smartHome1],
      demoVideo: smartHomeDemo,
    },

  ];

  return (
    <section id="projects" className="scroll-mt-16 p-6 md:p-12 max-w-7xl mx-auto">
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
