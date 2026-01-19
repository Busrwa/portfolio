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

  const {
    projectId,
    screenshots = {},
    demoVideo,
    hardwareDemoVideo,
    github,
    liveUrl,
  } = location.state || {};

  const [showVideo, setShowVideo] = useState(null); // "system" | "hardware"
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("web"); // hardware | web | mobile
  const swiperRef = useRef(null);

  const NAVBAR_HEIGHT = 64;
  const EXTRA_OFFSET = 24;
  const topOffset = NAVBAR_HEIGHT + EXTRA_OFFSET;

  const hasViews =
    screenshots &&
    typeof screenshots === "object" &&
    (screenshots.hardware || screenshots.web || screenshots.mobile);

  const currentScreenshots =
    hasViews && screenshots[viewMode] ? screenshots[viewMode] : [];

  if (!location.state || !projectId) {
    return (
      <div className="p-8 text-center text-gray-300">
        <p className="text-xl mb-4">
          {t.projectDetail?.notFound || "Project not found!"}
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-teal-400 text-gray-900 rounded hover:bg-teal-500"
        >
          {t.projectDetail?.goBack || "Go Back"}
        </button>
      </div>
    );
  }

  const projectData = t.projects?.[projectId];
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
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-teal-400 text-gray-900 rounded hover:bg-teal-500"
      >
        &larr; {t.projectDetail?.back || "Back"}
      </button>

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
        {title}
      </h1>
      <p className="text-gray-300 mb-10 leading-relaxed whitespace-pre-wrap">
        {description}
      </p>

      {/* ACTION BAR */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded"
          >
            {t.projectDetail?.liveDemo || "Live Demo 🚀"}
          </a>
        )}

        {github && typeof github === "object" && (
          <>
            {github.web && (
              <a
                href={github.web}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-teal-400 text-gray-300 hover:text-gray-900 rounded"
              >
                {t.projectDetail.githubWeb}              </a>
            )}
            {github.mobile && (
              <a
                href={github.mobile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-teal-400 text-gray-300 hover:text-gray-900 rounded"
              >
                {t.projectDetail.githubMobile}
              </a>
            )}
          </>
        )}

        {demoVideo && (
          <button
            onClick={() => setShowVideo("system")}
            className="px-4 py-2 bg-gray-800 hover:bg-teal-400 text-gray-300 hover:text-gray-900 rounded"
          >
            {t.projectDetail.demoVideo}
          </button>
        )}

        {hardwareDemoVideo && (
          <button
            onClick={() => setShowVideo("hardware")}
            className="px-4 py-2 bg-gray-800 hover:bg-teal-400 text-gray-300 hover:text-gray-900 rounded"
          >
            {t.projectDetail.hardwareDemo}
          </button>
        )}

        {/* VIEW TOGGLE */}
        {hasViews && (
          <div className="flex ml-auto bg-gray-800 rounded-lg overflow-hidden">
            {screenshots.hardware && (
              <button
                onClick={() => setViewMode("hardware")}
                className={`px-4 py-2 text-sm ${viewMode === "hardware"
                    ? "bg-teal-500 text-white"
                    : "text-gray-300 hover:bg-teal-400 hover:text-gray-900"
                  }`}
              >
                {t.projectDetail.viewHardware}

              </button>
            )}
            {screenshots.web && (
              <button
                onClick={() => setViewMode("web")}
                className={`px-4 py-2 text-sm ${viewMode === "web"
                    ? "bg-teal-500 text-white"
                    : "text-gray-300 hover:bg-teal-400 hover:text-gray-900"
                  }`}
              >
                {t.projectDetail.viewWeb}

              </button>
            )}
            {screenshots.mobile && (
              <button
                onClick={() => setViewMode("mobile")}
                className={`px-4 py-2 text-sm ${viewMode === "mobile"
                    ? "bg-teal-500 text-white"
                    : "text-gray-300 hover:bg-teal-400 hover:text-gray-900"
                  }`}
              >
                {t.projectDetail.viewMobile}

              </button>
            )}
          </div>
        )}
      </div>

      {/* SCREENSHOTS */}
      {currentScreenshots.length > 0 && (
        <div className="w-full max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            onSwiper={(s) => (swiperRef.current = s)}
            className="rounded-xl overflow-hidden border border-gray-700"
          >
            {currentScreenshots.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`screenshot-${i}`}
                  className="w-full max-h-[600px] object-contain bg-black"
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev text-teal-400" />
            <div className="swiper-button-next text-teal-400" />
          </Swiper>

          <div className="flex justify-center mt-4 gap-2">
            {currentScreenshots.map((_, i) => (
              <span
                key={i}
                onClick={() => handlePaginationClick(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${i === activeIndex ? "bg-teal-400 scale-125" : "bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* VIDEO MODAL – RESPONSIVE SIZE */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div
            className="relative bg-gray-900 rounded-xl p-4 shadow-2xl"
            style={{
              width: "fit-content",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <button
              onClick={() => setShowVideo(null)}
              className="absolute -top-5 -right-5 bg-gray-800 text-gray-300 hover:text-teal-400 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
            >
              ×
            </button>

            <video
              controls
              autoPlay
              className="rounded-lg"
              style={{
                maxWidth: "85vw",
                maxHeight: "80vh",
              }}
            >
              <source
                src={showVideo === "system" ? demoVideo : hardwareDemoVideo}
                type="video/mp4"
              />
              {t.projectDetail?.videoError ||
                "Your browser does not support the video tag."}
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
