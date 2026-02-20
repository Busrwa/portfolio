// src/components/ProjectCard.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Map project id to tech badges
const techMap = {
  lilithia:   ["React Native", "Expo", "Firebase"],
  hataDefteri:["React Native", "Expo", "Firebase"],
  smartBin:   ["ESP32", "IoT", "React", "React Native"],
  dsc:        ["React", "Django", "PostgreSQL"],
  swipeIt:    ["React Native", "Firebase", "Expo"],
  mindCaps:   ["React Native", "Flask", "AI"],
  fridge:     ["React Native", "Expo", "API"],
  email:      ["Python", "Flask", "SMTP"],
  pdf:        ["Python", "Tkinter"],
  blog:       ["Flask", "SQLite"],
  todo:       ["Python", "Flask"],
  tv:         ["React Native", "WebView"],
  smartHome:  ["ESP32", "Flask", "Arduino"],
};

// Category label
const categoryMap = {
  lilithia:   { label: "Mobile", color: "from-violet-500/20 to-violet-500/5" },
  hataDefteri:{ label: "Mobile", color: "from-violet-500/20 to-violet-500/5" },
  smartBin:   { label: "IoT + Full Stack", color: "from-teal-500/20 to-teal-500/5" },
  dsc:        { label: "Web", color: "from-blue-500/20 to-blue-500/5" },
  swipeIt:    { label: "Mobile", color: "from-violet-500/20 to-violet-500/5" },
  mindCaps:   { label: "AI + Mobile", color: "from-emerald-500/20 to-emerald-500/5" },
  fridge:     { label: "Mobile", color: "from-violet-500/20 to-violet-500/5" },
  email:      { label: "Desktop", color: "from-orange-500/20 to-orange-500/5" },
  pdf:        { label: "Desktop", color: "from-orange-500/20 to-orange-500/5" },
  blog:       { label: "Web", color: "from-blue-500/20 to-blue-500/5" },
  todo:       { label: "Web", color: "from-blue-500/20 to-blue-500/5" },
  tv:         { label: "Mobile", color: "from-violet-500/20 to-violet-500/5" },
  smartHome:  { label: "IoT", color: "from-teal-500/20 to-teal-500/5" },
};

const ProjectCard = ({
  id, title, description, image, github, liveUrl,
  screenshots = {}, demoVideo, hardwareDemoVideo,
}) => {
  const techs = techMap[id] || [];
  const cat = categoryMap[id] || { label: "Project", color: "from-gray-500/20 to-gray-500/5" };

  return (
    <Link
      to={`/project-detail/${id}`}
      state={{ projectId: id, screenshots, demoVideo, hardwareDemoVideo, github, liveUrl }}
      className="project-card group relative block bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-400/10"
    >
      {/* Image */}
      <div className="relative h-48 bg-[#0b1120]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Static bottom fade - always visible, no animation */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to top, #111827 0%, transparent 100%)" }}
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-gray-300">
          {cat.label}
        </span>

        {/* Hover overlay - teal tint only, no bottom gradient to avoid flicker */}
        <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/8 transition-colors duration-300 flex items-end p-4">
          <span className="text-teal-400 text-sm font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Project <FaArrowRight size={11} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors line-clamp-1"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Tech badges */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {techs.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
            {techs.length > 4 && (
              <span className="tech-badge">+{techs.length - 4}</span>
            )}
          </div>
        )}

        {/* Action icons */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
          {github && typeof github === "string" && (
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); window.open(github, "_blank"); }}
              className="text-gray-500 hover:text-teal-400 transition-colors"
              title="GitHub"
            >
              <FaGithub size={17} />
            </button>
          )}
          {github && typeof github === "object" && (
            <>
              {github.web && (
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); window.open(github.web, "_blank"); }}
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                  title="GitHub Web"
                >
                  <FaGithub size={17} />
                </button>
              )}
              {github.mobile && (
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); window.open(github.mobile, "_blank"); }}
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                  title="GitHub Mobile"
                >
                  <FaGithub size={17} />
                </button>
              )}
            </>
          )}
          {liveUrl && (
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); window.open(liveUrl, "_blank"); }}
              className="text-gray-500 hover:text-teal-400 transition-colors"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={14} />
            </button>
          )}
          <span className="ml-auto text-xs text-gray-600 group-hover:text-teal-400 transition-colors flex items-center gap-1">
            Details <FaArrowRight size={10} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;