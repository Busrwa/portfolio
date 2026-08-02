// src/pages/Projects.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import { useLanguage } from "../contexts/LanguageContext";
import { getProjectsData } from "../data/projectsData";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      delay: index * 0.06,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = useMemo(
    () => getProjectsData(t),
    [t]
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#e1d4ca] bg-[#f7f2eb] px-5 py-24 md:px-10 md:py-28"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-[#efddd1]/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#ded7bd]/25 blur-3xl"
      />

      {/* Subtle technology grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 hidden h-64 w-64 opacity-[0.11] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 49%, #b99859 50%, transparent 51%), linear-gradient(transparent 49%, #b99859 50%, transparent 51%)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to right, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, black, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mb-14"
        >
          <div className="eyebrow mb-5">
            {language === "tr"
              ? "Seçilmiş Çalışmalar"
              : "Featured Work"}
          </div>

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl font-['Cormorant_Garamond'] text-5xl font-medium leading-[0.95] text-[#2b211d] sm:text-6xl md:text-7xl">
              {t.projects.title}
            </h2>

            <p className="max-w-xl text-sm leading-7 text-[#6d5a52] md:text-base">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="mt-7 flex items-center">
            <div className="h-px w-28 bg-gradient-to-r from-[#9e2a22] via-[#c8a96b] to-transparent" />

            <div className="h-2 w-2 rounded-full bg-[#c8a96b] shadow-[0_0_12px_rgba(200,169,107,0.55)]" />
          </div>
        </motion.header>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;