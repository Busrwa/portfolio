// src/pages/Projects.jsx
import React, { useMemo } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { useLanguage } from "../contexts/LanguageContext";
import { getProjectsData } from "../data/projectsData";

const Projects = () => {
  const { t } = useLanguage();

  const projects = useMemo(() => getProjectsData(t), [t]);

  return (
    <section id="projects" className="scroll-mt-16 p-6 md:p-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 md:mb-10 text-center">
        {t.projects.title}
      </h2>

      <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto px-4 md:px-0">
        {t.projects.subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            {...proj}
            descriptionStyle={{ whiteSpace: "pre-line" }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;