// src/pages/ProjectDetail.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, screenshots = [], demoVideo, github } = location.state || {};
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const NAVBAR_HEIGHT = 64; // navbar h-16 = 64px
  const EXTRA_OFFSET = 24; // ekstra boşluk
  const topOffset = NAVBAR_HEIGHT + EXTRA_OFFSET;

  if (!location.state) {
    return (
      <div className="p-8 text-center text-gray-300">
        <p className="text-xl mb-4">Project not found!</p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-teal-400 text-gray-900 rounded hover:bg-teal-500"
        >
          Go Back
        </button>
      </div>
    );
  }

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <section
      className="px-4 md:px-12 py-6 md:py-12 max-w-7xl mx-auto"
      style={{ paddingTop: `${topOffset}px` }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-teal-400 text-gray-900 rounded hover:bg-teal-500"
      >
        &larr; Back
      </button>

      {/* Title & Description */}
      <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">{title}</h1>
      <p
        className="text-gray-300 mb-12 leading-relaxed whitespace-pre-wrap"
      >
        {description}
      </p>

      {/* GitHub & Demo Video Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-teal-400 text-gray-300 hover:text-gray-900 rounded transition"
          >
            GitHub
          </a>
        )}
        {demoVideo && (
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-gray-800 hover:bg-teal-400 text-gray-300 hover:text-gray-900 rounded transition"
          >
            Demo Video
          </button>
        )}
      </div>

      {/* Screenshots Carousel */}
      {screenshots.length > 0 && (
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-full max-w-5xl">
            <img
              src={screenshots[currentIndex]}
              alt={`screenshot-${currentIndex}`}
              className="w-full h-auto max-h-[600px] rounded-xl shadow-2xl object-contain border border-gray-700"
            />
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-teal-400 text-gray-900 px-3 py-1 rounded hover:bg-teal-500 shadow-lg transition"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-400 text-gray-900 px-3 py-1 rounded hover:bg-teal-500 shadow-lg transition"
                >
                  &#8594;
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex mt-4 space-x-2 overflow-x-auto w-full max-w-5xl">
            {screenshots.map((shot, idx) => (
              <img
                key={idx}
                src={shot}
                alt={`thumb-${idx}`}
                className={`w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg cursor-pointer border-2 ${
                  idx === currentIndex ? 'border-teal-400' : 'border-transparent'
                } transition`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Demo Video Modal */}
      {showModal && demoVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 rounded-xl w-full max-w-6xl p-6 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-teal-400 text-3xl font-bold"
            >
              &times;
            </button>
            <video controls autoPlay className="w-full h-auto rounded-lg shadow-xl">
              <source src={demoVideo} type="video/mp4" />
              Opps… Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
