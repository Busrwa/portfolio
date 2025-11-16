// src/components/ProjectCard.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, image, github, liveUrl, screenshots = [], demoVideo }) => {
  return (
    <Link
      to="/project-detail"
      state={{ projectId: id, screenshots, demoVideo, github, liveUrl }}
      className="block bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-teal-500/40 transition transform hover:-translate-y-1"
    >
      {/* Card Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold text-teal-400 mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 whitespace-pre-wrap line-clamp-4">
            {description}
          </p>
        </div>

        {/* Github / Live Demo Links */}
        <div className="flex justify-start items-center space-x-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
              onClick={(e) => e.stopPropagation()}
              title="GitHub Repository"
            >
              <FaGithub size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
              onClick={(e) => e.stopPropagation()}
              title="Live Demo"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;