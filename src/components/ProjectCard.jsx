// src/components/ProjectCard.jsx
import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const techMap = {
  lilithia: ["React Native", "Expo", "Firebase"],
  hataDefteri: ["React Native", "Expo", "Firebase"],
  smartBin: ["ESP32", "IoT", "React", "React Native"],
  dsc: ["React", "Django", "PostgreSQL"],
  swipeIt: ["React Native", "Firebase", "Expo"],
  mindCaps: ["React Native", "Flask", "AI"],
  fridge: ["React Native", "Expo", "API"],
  email: ["Python", "Flask", "SMTP"],
  smartHome: ["ESP32", "Flask", "Arduino"],
};

const categoryMap = {
  lilithia: {
    label: "Mobile",
    style:
      "border-[#c8aecb] bg-[#f7eef7]/90 text-[#725475]",
  },
  hataDefteri: {
    label: "Mobile",
    style:
      "border-[#c8aecb] bg-[#f7eef7]/90 text-[#725475]",
  },
  smartBin: {
    label: "IoT + Full Stack",
    style:
      "border-[#b6c1a6] bg-[#f0f4e9]/90 text-[#526147]",
  },
  dsc: {
    label: "Web",
    style:
      "border-[#b8c4cd] bg-[#eff4f5]/90 text-[#51636d]",
  },
  swipeIt: {
    label: "Mobile",
    style:
      "border-[#c8aecb] bg-[#f7eef7]/90 text-[#725475]",
  },
  mindCaps: {
    label: "AI + Mobile",
    style:
      "border-[#b4c0aa] bg-[#eff4eb]/90 text-[#526247]",
  },
  fridge: {
    label: "Mobile",
    style:
      "border-[#c8aecb] bg-[#f7eef7]/90 text-[#725475]",
  },
  email: {
    label: "Web Utility",
    style:
      "border-[#d5bd9c] bg-[#faf1e4]/90 text-[#7b5d3d]",
  },
  smartHome: {
    label: "IoT",
    style:
      "border-[#b6c1a6] bg-[#f0f4e9]/90 text-[#526147]",
  },
};
const categoryLabelTr = {
  Mobile: "Mobil",
  "IoT + Full Stack": "IoT + Full-Stack",
  Web: "Web",
  "AI + Mobile": "Yapay Zekâ + Mobil",
  "Web Utility": "Web Aracı",
  IoT: "IoT",
  Project: "Proje",
};
const ProjectCard = ({
  id,
  title,
  description,
  image,
  github,
  liveUrl,
  screenshots = {},
  demoVideo,
  hardwareDemoVideo,
}) => {
  const { language } = useLanguage();

  const techs = techMap[id] || [];

  const category =
    categoryMap[id] || {
      label: "Project",
      style:
        "border-[#d8c7bb] bg-[#fffaf5]/90 text-[#6d5a52]",
    };
  const actionText =
    language === "tr"
      ? {
        githubWeb: "GitHub Web",
        githubMobile: "GitHub Mobil",
        liveDemo: "Canlı Demo",
      }
      : {
        githubWeb: "GitHub Web",
        githubMobile: "GitHub Mobile",
        liveDemo: "Live Demo",
      };
  const projectState = {
    projectId: id,
    screenshots,
    demoVideo,
    hardwareDemoVideo,
    github,
    liveUrl,
  };

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#ddcfc4] bg-[#fffaf5] shadow-[0_12px_34px_rgba(82,52,38,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-[#c5a48e] hover:shadow-[0_22px_46px_rgba(82,52,38,0.12)]">
      {/* Card navigation overlay */}
      <Link
        to={`/project-detail/${id}`}
        state={projectState}
        aria-label={`${title} ${language === "tr" ? "proje detayları" : "project details"
          }`}
        className="absolute inset-0 z-10 rounded-[26px]"
      />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#eee4dc]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2b211d]/35 via-[#2b211d]/5 to-transparent"
        />

        {/* Category badge */}
        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.1em] shadow-sm backdrop-blur-md ${category.style}`}
        >
          {language === "tr"
            ? categoryLabelTr[category.label] || category.label
            : category.label}
        </span>

        {/* Hover detail label */}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-[#9e2a22]/0 p-5 transition duration-300 group-hover:bg-[#9e2a22]/5">
          <span className="flex translate-y-2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white opacity-0 drop-shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {language === "tr"
              ? "Projeyi Gör"
              : "View Project"}

            <FaArrowRight size={10} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="mb-3 line-clamp-1 font-['Cormorant_Garamond'] text-2xl font-semibold leading-tight text-[#2b211d] transition-colors duration-300 group-hover:text-[#9e2a22] md:text-[1.75rem]">
          {title}
        </h3>

        <p className="mb-5 line-clamp-3 text-sm leading-7 text-[#6d5a52]">
          {description}
        </p>

        {/* Technologies */}
        {techs.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {techs.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#e2d4ca] bg-[#f8eee7] px-3 py-1 text-[0.68rem] font-medium text-[#745f55]"
              >
                {tech}
              </span>
            ))}

            {techs.length > 4 && (
              <span className="rounded-full border border-[#e2d4ca] bg-[#f8eee7] px-3 py-1 text-[0.68rem] font-medium text-[#745f55]">
                +{techs.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="relative z-20 mt-auto flex items-center gap-2 border-t border-[#eaded5] pt-4">
          {github && typeof github === "string" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfd0c5] bg-white/65 text-[#77655c] transition hover:-translate-y-0.5 hover:border-[#9e2a22]/40 hover:bg-white hover:text-[#9e2a22]"
              title="GitHub"
              aria-label={`${title} GitHub`}
            >
              <FaGithub size={15} />
            </a>
          )}

          {github && typeof github === "object" && (
            <>
              {github.web && (
                <a
                  href={github.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfd0c5] bg-white/65 text-[#77655c] transition hover:-translate-y-0.5 hover:border-[#9e2a22]/40 hover:bg-white hover:text-[#9e2a22]"
                  title={actionText.githubWeb}
                  aria-label={`${title} ${actionText.githubWeb}`}
                >
                  <FaGithub size={15} />
                </a>
              )}

              {github.mobile && (
                <a
                  href={github.mobile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfd0c5] bg-white/65 text-[#77655c] transition hover:-translate-y-0.5 hover:border-[#9e2a22]/40 hover:bg-white hover:text-[#9e2a22]"
                  title={actionText.githubMobile}
                  aria-label={`${title} ${actionText.githubMobile}`}
                >
                  <FaGithub size={15} />
                </a>
              )}
            </>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfd0c5] bg-white/65 text-[#77655c] transition hover:-translate-y-0.5 hover:border-[#9e2a22]/40 hover:bg-white hover:text-[#9e2a22]"
              title={actionText.liveDemo}
              aria-label={`${title} ${actionText.liveDemo}`}
            >
              <FaExternalLinkAlt size={13} />
            </a>
          )}

          <span className="pointer-events-none ml-auto flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8a7469] transition-colors group-hover:text-[#9e2a22]">
            {language === "tr" ? "Detaylar" : "Details"}

            <FaArrowRight
              size={10}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;