import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  return (
    <Link
      to={`/project-detail/${id}`}
      state={{
        projectId: id,
        screenshots,
        demoVideo,
        hardwareDemoVideo,
        github,
        liveUrl,
      }}
      className="block bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-teal-500/40 transition transform hover:-translate-y-1"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold text-teal-400 mb-2">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 whitespace-pre-wrap line-clamp-4">
            {description}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {github && typeof github === "string" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="GitHub Repository"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <FaGithub size={20} />
            </a>
          )}

          {github && typeof github === "object" && (
            <>
              {github.web && (
                <a
                  href={github.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="GitHub Web Repository"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {github.mobile && (
                <a
                  href={github.mobile}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="GitHub Mobile Repository"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  <FaGithub size={20} />
                </a>
              )}
            </>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Live Demo"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
