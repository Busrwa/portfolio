// src/pages/ProjectDetail.jsx
import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useLanguage } from "../contexts/LanguageContext";

const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const { projectId, screenshots = [], demoVideo, github, liveUrl } = location.state || {};
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const NAVBAR_HEIGHT = 64;
  const EXTRA_OFFSET = 24;
  const topOffset = NAVBAR_HEIGHT + EXTRA_OFFSET;

  if (!location.state || !projectId) {
    return (
      <div className="p-8 text-center text-gray-300">
        <p className="text-xl mb-4">{t.projectDetail?.notFound || "Project not found!"}</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-teal-400 text-gray-900 rounded hover:bg-teal-500"
        >
          {t.projectDetail?.goBack || "Go Back"}
        </button>
      </div>
    );
  }

  // Dile göre proje bilgilerini al
  const projectData = t.projects[projectId];
  const title = projectData?.title || "";
  const description = projectData?.desc || "";

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

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
        &larr; {t.projectDetail?.back || "Geri"}
      </button>

      {/* Title & Description */}
      <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">{title}</h1>
      <p className="text-gray-300 mb-12 leading-relaxed whitespace-pre-wrap">{description}</p>

      {/* Live Demo, GitHub & Demo Video Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition font-medium"
          >
            {t.projectDetail?.liveDemo || "Live Demo 🚀"}
          </a>
        )}
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
            {t.projectDetail?.demoVideo || "Demo Video"}
          </button>
        )}
      </div>

      {/* Screenshots Carousel */}
      {screenshots.length > 0 && (
        <div className="w-full max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-xl overflow-hidden shadow-2xl border border-gray-700"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {screenshots.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`screenshot-${index}`}
                  className="w-full h-auto max-h-[600px] object-contain bg-black"
                />
              </SwiperSlide>
            ))}

            {/* Navigation Arrows */}
            <div className="swiper-button-prev text-teal-400 hover:text-teal-200" />
            <div className="swiper-button-next text-teal-400 hover:text-teal-200" />
          </Swiper>

          {/* Pagination Noktaları */}
          <div className="flex justify-center mt-4 gap-2">
            {screenshots.map((_, idx) => (
              <span
                key={idx}
                onClick={() => handlePaginationClick(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  idx === activeIndex ? 'bg-teal-400 scale-125' : 'bg-white'
                }`}
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
              className="absolute top-0 right-0 z-50 text-gray-300 hover:text-teal-400 text-6xl font-bold p-2 hover:scale-110 transition-transform duration-200"
              style={{
                pointerEvents: 'auto',
                top: '-15px',
                right: '0px',
              }}
            >
              &times;
            </button>

            <video controls autoPlay className="w-full h-auto rounded-lg shadow-xl relative z-40">
              <source src={demoVideo} type="video/mp4" />
              {t.projectDetail?.videoError || "Opps… Your browser does not support the video tag."}
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;