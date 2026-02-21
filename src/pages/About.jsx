// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  SiReact, SiDjango, SiFirebase, SiArduino, SiPython,
  SiFlask, SiJavascript, SiExpo, SiPostgresql, SiNodedotjs,
  SiNetlify, SiGit, SiFigma,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const skillGroups = [
  {
    labelKey: "webMobile",
    icon: <SiReact className="text-cyan-400" />,
    chips: [
      { label: "React",          icon: <SiReact /> },
      { label: "React Native",   icon: <SiExpo /> },
      { label: "JavaScript",     icon: <SiJavascript /> },
    ],
  },
  {
    labelKey: "backend",
    icon: <SiDjango className="text-green-400" />,
    chips: [
      { label: "Django REST",    icon: <SiDjango /> },
      { label: "Flask",          icon: <SiFlask /> },
      { label: "Node.js",        icon: <SiNodedotjs /> },
      { label: "Python",         icon: <SiPython /> },
    ],
  },
  {
    labelKey: "data",
    icon: <SiPostgresql className="text-blue-400" />,
    chips: [
      { label: "PostgreSQL",     icon: <SiPostgresql /> },
      { label: "Firebase",       icon: <SiFirebase /> },
    ],
  },
  {
    labelKey: "iot",
    icon: <FaMicrochip className="text-teal-400" />,
    chips: [
      { label: "ESP32",          icon: <FaMicrochip /> },
      { label: "Arduino",        icon: <SiArduino /> },
    ],
  },
  {
    labelKey: "deploy",
    icon: <SiNetlify className="text-teal-300" />,
    chips: [
      { label: "Netlify",        icon: <SiNetlify /> },
      { label: "Git",            icon: <SiGit /> },
      { label: "Figma",          icon: <SiFigma /> },
    ],
  },
];

const About = () => {
  const { t, language } = useLanguage();

  const langLevels = [
    { name: t.about.turkish, level: t.about.native, pct: 100 },
    { name: t.about.english, level: "B2", pct: 72 },
    { name: t.about.german,  level: "A1", pct: 20 },
    { name: t.about.greek,   level: "A1", pct: 20 },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto" style={{ position: "relative", zIndex: 1 }}>

      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2">
          {language === "tr" ? "Hakkımda" : "About"}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
          {t.about.title}
        </h2>
        <div className="section-divider mt-4" />
      </motion.div>

      {/* Bio */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-gray-300 leading-relaxed">
            {t.about.intro1}{" "}
            <span className="text-teal-400 font-medium">{t.about.student}</span>{" "}
            {t.about.intro2}
            <span className="text-teal-400 font-medium">{t.about.scholarship}</span>
            {t.about.intro3}
            <span className="text-teal-400">{t.about.webMobile}</span>,{" "}
            <span className="text-teal-400">{t.about.iot}</span>
            {t.about.intro4}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {t.about.experience}
            <span className="text-teal-400">{t.about.pm}</span>,{" "}
            <span className="text-teal-400">{t.about.lead}</span>
            {t.about.international}
            {t.about.usa}
          </p>
        </motion.div>

        {/* Language bars */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#111827] rounded-2xl p-6 border border-white/5"
        >
          <h3 className="text-teal-400 font-semibold mb-5 flex items-center gap-2">
            🌍 {t.about.languages}
          </h3>
          <div className="space-y-4">
            {langLevels.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-200 font-medium">{lang.name}</span>
                  <span className="text-teal-400 text-xs">{lang.level}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        variants={fadeUp}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3
          className="text-center text-xl font-bold text-white mb-8"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {language === "tr" ? "Teknik Beceriler" : "Technical Skills"}
        </h3>
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.labelKey}>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                {group.icon}
                {t.about.skills[group.labelKey] || group.labelKey}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <span key={chip.label} className="skill-chip">
                    <span className="text-teal-400">{chip.icon}</span>
                    {chip.label}
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
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#111827] rounded-2xl p-6 border border-white/5"
      >
        <h3 className="text-teal-400 font-semibold mb-5">🎓 {t.about.certificates}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[t.about.cert1, t.about.cert2, t.about.cert3, t.about.cert4].map((cert) => (
            <div
              key={cert}
              className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-teal-400/30 transition-colors"
            >
              <span className="text-teal-400 mt-0.5 text-sm">✔</span>
              <span className="text-gray-300 text-sm leading-snug">{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;