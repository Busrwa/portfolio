// src/pages/Resume.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  SiReact, SiDjango, SiFirebase, SiArduino, SiPython,
  SiFlask, SiJavascript, SiPostgresql, SiFigma, SiGit,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const TimelineItem = ({ title, sub, note, date, index }) => (
  <motion.div
    variants={fadeUp}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative pl-8"
  >
    <div className="timeline-dot" style={{ top: "6px" }} />
    <div className="bg-[#0f172a] rounded-xl p-4 border border-white/5 hover:border-teal-400/25 transition-colors">
      <div className="flex flex-wrap justify-between items-start gap-1 mb-1">
        <h4 className="text-gray-100 font-semibold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h4>
        {date && <span className="text-xs text-teal-400 shrink-0">{date}</span>}
      </div>
      {sub  && <p className="text-teal-400/80 text-xs mb-0.5">{sub}</p>}
      {note && <p className="text-gray-500 text-xs">{note}</p>}
    </div>
  </motion.div>
);

const skillRows = [
  {
    label: "Languages & Frameworks",
    labelTr: "Diller & Framework'ler",
    items: [
      { icon: <SiPython />,     name: "Python" },
      { icon: <SiDjango />,     name: "Django / DRF" },
      { icon: <SiFlask />,      name: "Flask" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiReact />,      name: "React" },
      { icon: <SiReact />,      name: "React Native" },
    ],
  },
  {
    label: "Tools & Platforms",
    labelTr: "Araçlar & Platformlar",
    items: [
      { icon: <SiFirebase />,    name: "Firebase" },
      { icon: <SiGit />,         name: "Git / GitHub" },
      { icon: <SiPostgresql />,  name: "SQL / PostgreSQL" },
      { icon: <SiFigma />,       name: "Figma" },
    ],
  },
  {
    label: "Other",
    labelTr: "Diğer",
    items: [
      { icon: <SiArduino />,    name: "Arduino" },
      { icon: <FaMicrochip />,  name: "ESP32 (IoT)" },
    ],
  },
];

const Resume = () => {
  const { t, language } = useLanguage();

  const resumeFile     = language === "tr" ? "/Busra_Yagcioglu_CV.pdf" : "/Busra_Yagcioglu_CV_ENG.pdf";
  const resumeFileName = language === "tr" ? "Busra_Yagcioglu_CV.pdf"  : "Busra_Yagcioglu_CV_ENG.pdf";

  const education = [
    {
      title: t.resume.edu1,
      sub:   t.resume.edu1Desc,
      note:  `${t.resume.edu1Note} · ${t.resume.edu1Grad}`,
      date:  "2022–2026",
    },
    {
      title: t.resume.edu2,
      sub:   t.resume.edu2Desc,
      note:  t.resume.edu2Note,
      date:  "2022",
    },
  ];

  const experience = [
    { title: "Sca Social",                     sub: t.resume.exp1, date: "Jun–Aug 2025", link: "https://scasocial.com/" },
    { title: "Google DSC HKU",                 sub: t.resume.exp2, date: "2023–2024",    link: "https://gdg.community.dev/" },
    { title: "Carousel Oceanfront Hotel, USA", sub: t.resume.exp3, date: "Summer 2023",  link: "https://carouselhotel.com/" },
    { title: "Dolle's Candyland Inc., USA",    sub: t.resume.exp4, date: "Summer 2023",  link: "https://dolles.com" },
  ];

  return (
    <section id="resume" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2">
          {language === "tr" ? "Özgeçmiş" : "Resume"}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
          {t.resume.title}
        </h2>
        <div className="section-divider mt-4" />

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-teal-400 text-gray-900 font-semibold rounded-xl hover:bg-teal-300 transition-all hover:scale-105 shadow-lg shadow-teal-400/25 text-sm"
          >
            {language === "tr" ? "Özgeçmişi Görüntüle (TR)" : "View Resume (EN)"}
          </a>
          <a
            href={resumeFile}
            download={resumeFileName}
            className="px-6 py-3 bg-white/5 border border-white/10 text-gray-200 font-semibold rounded-xl hover:bg-white/10 transition-all hover:scale-105 text-sm"
          >
            {t.resume.download}
          </a>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Timeline */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-2" style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="text-teal-400">🎓</span> {t.resume.education}
          </h3>
          <div className="relative space-y-5">
            <div className="timeline-line" />
            {education.map((item, i) => (
              <TimelineItem key={i} {...item} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-2" style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="text-teal-400">💼</span> {t.resume.experience}
          </h3>
          <div className="relative space-y-5">
            <div className="timeline-line" />
            {experience.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="timeline-dot" style={{ top: "6px" }} />
                <div className="bg-[#0f172a] rounded-xl p-4 border border-white/5 hover:border-teal-400/25 transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-1 mb-1">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-100 font-semibold text-sm hover:text-teal-400 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </a>
                    <span className="text-xs text-teal-400 shrink-0">{item.date}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        variants={fadeUp}
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-14 bg-[#111827] rounded-2xl p-8 border border-white/5"
      >
        <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-2" style={{ fontFamily: "'Syne', sans-serif" }}>
          <span className="text-teal-400">⚙️</span> {t.resume.skills}
        </h3>
        <div className="space-y-7">
          {skillRows.map((row) => (
            <div key={row.label}>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                {language === "tr" ? row.labelTr : row.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <span key={item.name} className="skill-chip">
                    <span className="text-teal-400">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certificates */}
      <motion.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 bg-[#111827] rounded-2xl p-8 border border-white/5"
      >
        <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2" style={{ fontFamily: "'Syne', sans-serif" }}>
          <span className="text-teal-400">📜</span> {t.resume.certificates}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[t.about.cert1, t.about.cert2, t.about.cert3, t.about.cert4].map((cert) => (
            <div
              key={cert}
              className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-teal-400/30 transition-colors"
            >
              <span className="text-teal-400 mt-0.5 text-sm">✔</span>
              <span className="text-gray-300 text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;