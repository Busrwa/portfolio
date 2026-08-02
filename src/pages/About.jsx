// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  SiReact,
  SiDjango,
  SiFirebase,
  SiArduino,
  SiPython,
  SiFlask,
  SiJavascript,
  SiExpo,
  SiPostgresql,
  SiNetlify,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

const skillGroups = [
  {
    labelKey: "webMobile",
    icon: <SiReact />,
    chips: [
      { label: "React", icon: <SiReact /> },
      { label: "React Native", icon: <SiReact /> },
      { label: "Expo", icon: <SiExpo /> },
      { label: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    labelKey: "backend",
    icon: <SiDjango />,
    chips: [
      { label: "Django REST", icon: <SiDjango /> },
      { label: "Flask", icon: <SiFlask /> },
      { label: "REST API", icon: <SiGit /> },
      { label: "Python", icon: <SiPython /> },
    ],
  },
  {
    labelKey: "data",
    icon: <SiPostgresql />,
    chips: [
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "Firebase", icon: <SiFirebase /> },
      { label: "Firestore", icon: <SiFirebase /> },
    ],
  },
  {
    labelKey: "iot",
    icon: <FaMicrochip />,
    chips: [
      { label: "ESP32", icon: <FaMicrochip /> },
      { label: "Arduino", icon: <SiArduino /> },
    ],
  },
  {
    labelKey: "deploy",
    icon: <SiNetlify />,
    chips: [
      { label: "Netlify", icon: <SiNetlify /> },
      { label: "Render", icon: <SiNetlify /> },
      { label: "Git", icon: <SiGit /> },
      { label: "Figma", icon: <SiFigma /> },
    ],
  },
];

const About = () => {
  const { t, language } = useLanguage();

  const languageLevels = [
    {
      name: t.about.turkish,
      level: t.about.native,
      pct: 100,
    },
    {
      name: t.about.english,
      level: "B2",
      pct: 72,
    },
    {
      name: t.about.german,
      level: "A1",
      pct: 20,
    },
  ];

  const researchItems = [
    t.about.research1,
    t.about.research2,
    t.about.research3,
    t.about.research4,
    t.about.research5,
  ];

  const certificates = [
    t.about.cert1,
    t.about.cert2,
    t.about.cert5,
    t.about.cert4,
    t.about.cert3,
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-[#dfcfc4] bg-[#f1dfd4] px-5 py-24 md:px-10 md:py-28"
    >
      {/* Soft light effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-white/45 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-[#e9c8b4]/40 blur-3xl"
      />

      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-[420px] w-[420px] opacity-[0.11] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 49%, #b99859 50%, transparent 51%), linear-gradient(transparent 49%, #b99859 50%, transparent 51%)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, black, transparent)",
        }}
      />

      {/* Decorative botanical-tech leaf */}
      <motion.img
        initial={{
          opacity: 0,
          x: -55,
          rotate: -8,
        }}
        whileInView={{
          opacity: 0.2,
          x: 0,
          rotate: -4,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
        }}
        src="/tech-leaf-about.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-24 hidden w-[430px] object-contain lg:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mb-14 md:mb-16"
        >
          <div className="eyebrow mb-5">
            {language === "tr" ? "Hakkımda" : "About Me"}
          </div>

          <h2 className="max-w-4xl font-['Cormorant_Garamond'] text-5xl font-medium leading-[0.98] text-[#2b211d] sm:text-6xl md:text-7xl">
            {t.about.title}
          </h2>

          <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#9e2a22] via-[#c8a96b] to-transparent" />
        </motion.div>

        {/* Biography and languages */}
        <div className="mb-16 grid items-start gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12">
          {/* Biography */}
          <motion.article
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/55 bg-white/45 p-7 shadow-[0_18px_50px_rgba(91,57,42,0.07)] backdrop-blur-sm md:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-24 w-24 border-r border-t border-[#c8a96b]/45"
            />

            <div
              aria-hidden="true"
              className="absolute right-5 top-5 h-2 w-2 rounded-full bg-[#c8a96b] shadow-[0_0_14px_rgba(200,169,107,0.65)]"
            />

            <p className="mb-6 text-base leading-8 text-[#65544d] md:text-lg">
              {t.about.intro1}{" "}
              <span className="font-semibold text-[#9e2a22]">
                {t.about.student}
              </span>{" "}
              {t.about.intro2}
              <span className="font-semibold text-[#9e2a22]">
                {t.about.scholarship}
              </span>
              {t.about.intro3}
            </p>

            <p className="text-base leading-8 text-[#65544d] md:text-lg">
              {t.about.experience}
              <span className="font-medium text-[#9e2a22]">
                {t.about.pm}
              </span>
              ,{" "}
              <span className="font-medium text-[#9e2a22]">
                {t.about.software}
              </span>
              ,{" "}
              <span className="font-medium text-[#9e2a22]">
                {t.about.lead}
              </span>
              {t.about.international}
              {t.about.usa}
            </p>
          </motion.article>

          {/* Languages */}
          <motion.aside
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative overflow-hidden rounded-[28px] border border-[#dccbc0] bg-[#fffaf5]/80 p-7 shadow-[0_18px_50px_rgba(91,57,42,0.07)] md:p-8"
          >
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#9e2a22]">
                  {language === "tr"
                    ? "İletişim"
                    : "Communication"}
                </p>

                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#2b211d]">
                  {t.about.languages}
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9c5b8] bg-white/70 text-xl">
                🌍
              </div>
            </div>

            <div className="space-y-6">
              {languageLevels.map((item, index) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-end justify-between gap-4">
                    <span className="text-sm font-semibold text-[#3c302a]">
                      {item.name}
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9e2a22]">
                      {item.level}
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-[#eaded5]">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${item.pct}%`,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.15 + index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#9e2a22] via-[#b7573f] to-[#c8a96b]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        {/* Research interests */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mb-16 overflow-hidden rounded-[28px] border border-[#dfcfc4] bg-[#fffaf5]/75 p-7 shadow-[0_16px_45px_rgba(91,57,42,0.06)] md:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute -right-14 -top-14 h-36 w-36 rounded-full border border-[#c8a96b]/25"
          />

          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#9e2a22]/10"
          />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c3b5] bg-white/65">
                🔬
              </span>

              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#2b211d]">
                {t.about.researchTitle}
              </h3>
            </div>

            <p className="mb-6 max-w-4xl text-sm leading-7 text-[#6d5a52] md:text-base">
              {t.about.researchIntro}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {researchItems.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical skills */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mb-16"
        >
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#9e2a22]">
                {language === "tr"
                  ? "Teknoloji Alanları"
                  : "Technology Areas"}
              </p>

              <h3 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#2b211d] md:text-5xl">
                {language === "tr"
                  ? "Teknik Beceriler"
                  : "Technical Skills"}
              </h3>
            </div>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#c8a96b]/70 to-transparent sm:block" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.labelKey}
                variants={fadeUp}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="group rounded-[24px] border border-[#decfc5] bg-white/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c7a58f] hover:bg-[#fffaf5] hover:shadow-[0_16px_34px_rgba(91,57,42,0.08)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c4b6] bg-[#f8eee7] text-xl text-[#9e2a22] transition group-hover:border-[#9e2a22]/35 group-hover:bg-white">
                    {group.icon}
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6d5a52]">
                    {t.about.skills[group.labelKey] ||
                      group.labelKey}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.chips.map((chip) => (
                    <span
                      key={chip.label}
                      className="skill-chip"
                    >
                      <span className="text-[#9e2a22]">
                        {chip.icon}
                      </span>

                      {chip.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="relative overflow-hidden rounded-[28px] border border-[#dfcfc4] bg-[#fffaf5]/75 p-7 shadow-[0_16px_45px_rgba(91,57,42,0.06)] md:p-9"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c3b5] bg-white/70 text-xl">
              🎓
            </span>

            <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#2b211d] md:text-4xl">
              {t.about.certificates}
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {certificates.map((certificate) => (
              <div
                key={certificate}
                className="flex items-start gap-3 rounded-2xl border border-[#eaded5] bg-white/55 p-4 transition duration-300 hover:border-[#cba996] hover:bg-white"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#9e2a22]/10 text-xs font-bold text-[#9e2a22]">
                  ✓
                </span>

                <span className="text-sm leading-6 text-[#5f4e47]">
                  {certificate}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;