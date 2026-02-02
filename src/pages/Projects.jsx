// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { useLanguage } from '../contexts/LanguageContext';

// Import all project images and videos (same as before)
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

import dsc1 from '../assets/dsc/dsc1.png';
import dsc2 from '../assets/dsc/dsc2.png';
import dsc3 from '../assets/dsc/dsc3.png';
import dsc4 from '../assets/dsc/dsc4.png';
import dsc5 from '../assets/dsc/dsc5.png';
import dsc6 from '../assets/dsc/dsc6.png';
import dsc7 from '../assets/dsc/dsc7.png';
import dsc8 from '../assets/dsc/dsc8.png';

import smartBinCover from '../assets/smartBin/cover.png';
import smartBinDemo from '../assets/smartBin/demo_smartbin.mp4';
import smartBinWeb1 from '../assets/smartBin/smartBinWeb1.png';
import smartBinWeb2 from '../assets/smartBin/smartBinWeb2.png';
import smartBinWeb3 from '../assets/smartBin/smartBinWeb3.png';
import smartBinWeb4 from '../assets/smartBin/smartBinWeb4.png';
import smartBinWeb5 from '../assets/smartBin/smartBinWeb5.png';
import smartBinWeb6 from '../assets/smartBin/smartBinWeb6.png';
import smartBinWeb7 from '../assets/smartBin/smartBinWeb7.png';
import smartBinWeb8 from '../assets/smartBin/smartBinWeb8.png';
import smartBinWeb9 from '../assets/smartBin/smartBinWeb9.png';
import smartBinMobile1 from '../assets/smartBin/smartBinMobil1.jpeg';
import smartBinMobile2 from '../assets/smartBin/smartBinMobil2.jpeg';
import smartBinMobile3 from '../assets/smartBin/smartBinMobil3.jpeg';
import smartBinMobile4 from '../assets/smartBin/smartBinMobil4.jpeg';
import smartBinMobile5 from '../assets/smartBin/smartBinMobil5.jpeg';
import smartBinMobile6 from '../assets/smartBin/smartBinMobil6.jpeg';
import smartBinMobile7 from '../assets/smartBin/smartBinMobil7.jpeg';
import smartBinHw1 from '../assets/smartBin/smartBinHw1.jpeg';
import smartBinHw2 from '../assets/smartBin/smartBinHw2.jpeg';
import smartBinHwDemo from '../assets/smartBin/smartBinHw-Demo.mp4';

import hataDefteriCover from '../assets/hataDefteri/cover.png';
import hataDefteri1 from '../assets/hataDefteri/smurfia1.jpeg';
import hataDefteri2 from '../assets/hataDefteri/smurfia2.jpeg';
import hataDefteri3 from '../assets/hataDefteri/smurfia3.jpeg';
import hataDefteri4 from '../assets/hataDefteri/smurfia4.jpeg';
import hataDefteri5 from '../assets/hataDefteri/smurfia5.jpeg';
import hataDefteri6 from '../assets/hataDefteri/smurfia6.jpeg';
import hataDefteri7 from '../assets/hataDefteri/smurfia7.jpeg';
import hataDefteri8 from '../assets/hataDefteri/smurfia8.jpeg';
import hataDefteri9 from '../assets/hataDefteri/smurfia9.jpeg';
import hataDefteri10 from '../assets/hataDefteri/smurfia10.jpeg';
import hataDefteri11 from '../assets/hataDefteri/smurfia11.jpeg';
import hataDefteri12 from '../assets/hataDefteri/smurfia12.jpeg';
import hataDefteri13 from '../assets/hataDefteri/smurfia13.jpeg';
import hataDefteriDemo from '../assets/hataDefteri/demo-smurfia.mp4';

import lilithiaCover from '../assets/lilithia/lilithia-cover.png';
import lilithia1 from '../assets/lilithia/lilithia1.jpeg';
import lilithia2 from '../assets/lilithia/lilithia2.jpeg';
import lilithia3 from '../assets/lilithia/lilithia3.jpeg';
import lilithia4 from '../assets/lilithia/lilithia4.jpeg';
import lilithia5 from '../assets/lilithia/lilithia5.jpeg';
import lilithia6 from '../assets/lilithia/lilithia6.jpeg';
import lilithia7 from '../assets/lilithia/lilithia7.jpeg';
import lilithia8 from '../assets/lilithia/lilithia8.jpeg';
import lilithia9 from '../assets/lilithia/lilithia9.jpeg';
import lilithia10 from '../assets/lilithia/lilithia10.jpeg';
import lilithia11 from '../assets/lilithia/lilithia11.jpeg';
import lilithiaDemo from '../assets/lilithia/lilithia-demo.mp4';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'lilithia',
      title: t.projects.lilithia.title,
      description: t.projects.lilithia.desc,
      image: lilithiaCover,
      liveUrl: "https://play.google.com/",
      screenshots: {
        mobile: [lilithia1, lilithia2, lilithia3, lilithia4, lilithia5, lilithia6, lilithia7, lilithia8, lilithia9, lilithia10, lilithia11],
      },
      demoVideo: lilithiaDemo,
    },

    {
      id: 'hataDefteri',
      title: t.projects.hataDefteri.title,
      description: t.projects.hataDefteri.desc,
      image: hataDefteriCover,
      screenshots: {
        mobile: [hataDefteri1, hataDefteri2, hataDefteri3, hataDefteri4, hataDefteri5, hataDefteri6, hataDefteri7, hataDefteri8, hataDefteri9, hataDefteri10, hataDefteri11, hataDefteri12, hataDefteri13],
      },
      demoVideo: hataDefteriDemo,
      liveUrl: "https://play.google.com/",

    },
    {
      id: 'smartBin',
      title: t.projects.smartBin.title,
      description: t.projects.smartBin.desc,
      liveUrl: "https://smartbinwebsite.netlify.app/",
      github: {
        web: "https://github.com/Busrwa/SmartBinWebsite",
        mobile: "https://github.com/Busrwa/SmartBinMobil"
      },
      image: smartBinCover,
      screenshots: {
        hardware: [
          smartBinHw1,
          smartBinHw2,
        ],
        web: [
          smartBinWeb1,
          smartBinWeb2,
          smartBinWeb3,
          smartBinWeb4,
          smartBinWeb5,
          smartBinWeb6,
          smartBinWeb7,
          smartBinWeb8,
          smartBinWeb9,
        ],
        mobile: [
          smartBinMobile1,
          smartBinMobile2,
          smartBinMobile3,
          smartBinMobile4,
          smartBinMobile5,
          smartBinMobile6,
          smartBinMobile7,
        ]
      },
      demoVideo: smartBinDemo,
      hardwareDemoVideo: smartBinHwDemo,
    },
    {
      id: 'dsc',
      title: t.projects.dsc.title,
      description: t.projects.dsc.desc,
      liveUrl: t.projects.dsc.liveUrl,
      image: dsc1,
      screenshots: {
        web: [dsc1, dsc2, dsc3, dsc4, dsc5, dsc6, dsc7, dsc8]
      },
    },

    {
      id: 'swipeIt',
      title: t.projects.swipeIt.title,
      description: t.projects.swipeIt.desc,
      image: swipeItCover,
      screenshots: {
        mobile: [swipeit1, swipeit2, swipeit3, swipeit4, swipeit5, swipeit6, swipeit7, swipeit8, swipeit9, swipeit10, swipeit11, swipeit12, swipeit13, swipeit14],
      },
    },
    {
      id: 'mindCaps',
      title: t.projects.mindCaps.title,
      description: t.projects.mindCaps.desc,
      image: mindCapsCover,
      github: {
        mobile: "https://github.com/Busrwa/MindCaps",
      },
      screenshots: {
        mobile: [mindCaps1, mindCaps2, mindCaps3, mindCaps4, mindCaps5, mindCaps6, mindCaps7, mindCaps8, mindCaps9, mindCaps10, mindCaps11, mindCaps12, mindCaps13, mindCaps14, mindCaps15],
      },
      demoVideo: mindCapsDemo,
    },
    {
      id: 'fridge',
      title: t.projects.fridge.title,
      description: t.projects.fridge.desc,
      image: fridgeCover,
      github: {
        mobile: "https://github.com/Busrwa/whatIsInMyFridge",
      },
      screenshots: {
        mobile: [fridge1, fridge2, fridge3, fridge4, fridge5],
      },
      demoVideo: fridgeDemo,
    },
    {
      id: 'email',
      title: t.projects.email.title,
      description: t.projects.email.desc,
      image: emailCover,
      github: {
        web: "https://github.com/Busrwa/Otomatik_E-posta_Gonderici",
      },
      screenshots: {
        web: [email1, email2, email3],
      },
      demoVideo: emailDemo,
    },
    {
      id: 'pdf',
      title: t.projects.pdf.title,
      description: t.projects.pdf.desc,
      image: pdfCover,
      github: {
        web: "https://github.com/Busrwa/PDF_Birlestirici",
      },
      screenshots: {
        web: [pdf1, pdf2, pdf3, pdf4],
      },
    },
    {
      id: 'blog',
      title: t.projects.blog.title,
      description: t.projects.blog.desc,
      image: blogCover,
      github: {
        web: "https://github.com/Busrwa/Blog_Scripti",
      },
      screenshots: {
        web: [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10],
      },
      demoVideo: blogDemo,
    },
    {
      id: 'todo',
      title: t.projects.todo.title,
      description: t.projects.todo.desc,
      image: toDoCover,
      github: {
        web: "https://github.com/Busrwa/To_Do_List",
      },
      screenshots: {
        web: [toDo1, toDo2, toDo3, toDo4, toDo5, toDo6, toDo7],
      },
      demoVideo: toDoDemo,
    },
    {
      id: 'tv',
      title: t.projects.tv.title,
      description: t.projects.tv.desc,
      image: tvCover,
      screenshots: {
        mobile: [tv1, tv2],
      },
      demoVideo: tvDemo,
    },
    {
      id: 'smartHome',
      title: t.projects.smartHome.title,
      description: t.projects.smartHome.desc,
      image: smartHomeCover,
      github: {
        hardware: "https://github.com/Busrwa/SmartHomeSecuritySystem",
      },
      screenshots: {
        hardware: [smartHome1],
      },
      demoVideo: smartHomeDemo,
    },
  ];

  return (
    <section id="projects" className="scroll-mt-16 p-6 md:p-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 md:mb-10 text-center">
        {t.projects.title}
      </h2>
      <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto px-4 md:px-0">
        {t.projects.subtitle}
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