// src/pages/Resume.jsx
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
  SiPostgresql,
  SiFigma,
  SiGit,
  SiExpo,
  SiNetlify,
} from "react-icons/si";
import {
  FaMicrochip,
  FaGraduationCap,
  FaBriefcase,
  FaEye,
  FaDownload,
  FaTools,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      delay: index * 0.07,
      ease: "easeOut",
    },
  }),
};

const skillRows = [
  {
    label: "Frontend & Mobile",
    labelTr: "Frontend & Mobil",
    items: [
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiReact />, name: "React Native" },
      { icon: <SiExpo />, name: "Expo" },
    ],
  },
  {
    label: "Backend & APIs",
    labelTr: "Backend & API",
    items: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django / DRF" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiGit />, name: "REST API" },
    ],
  },
  {
    label: "Data & Cloud",
    labelTr: "Veri & Bulut",
    items: [
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiFirebase />, name: "Firestore" },
      { icon: <SiPostgresql />, name: "SQL / PostgreSQL" },
    ],
  },
  {
    label: "IoT & Embedded",
    labelTr: "IoT & Gömülü Sistemler",
    items: [
      { icon: <SiArduino />, name: "Arduino" },
      { icon: <FaMicrochip />, name: "ESP32" },
      { icon: <FaMicrochip />, name: "C/C++" },
    ],
  },
  {
    label: "Tools & Deployment",
    labelTr: "Araçlar & Yayına Alma",
    items: [
      { icon: <SiNetlify />, name: "Netlify" },
      { icon: <SiGit />, name: "Render" },
      { icon: <SiGit />, name: "Git / GitHub" },
      { icon: <SiFigma />, name: "Figma" },
    ],
  },
];

const TimelineItem = ({
  title,
  sub,
  note,
  date,
  link,
  index,
}) => {
  const titleContent = (
    <>
      {title}

      {link && (
        <FaExternalLinkAlt
          size={9}
          className="opacity-0 transition-opacity group-hover/title:opacity-100"
        />
      )}
    </>
  );

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      className="relative pl-9"
    >
      {/* Timeline dot */}
      <div className="absolute left-[3px] top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-[#bd9278] bg-[#f7f2eb]">
        <div className="h-1.5 w-1.5 rounded-full bg-[#9e2a22]" />
      </div>

      <div className="group rounded-[22px] border border-[#ded0c6] bg-[#fffaf5]/78 p-5 shadow-[0_12px_30px_rgba(79,49,35,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#c7a58e] hover:bg-[#fffaf5] hover:shadow-[0_18px_36px_rgba(79,49,35,0.09)]">
        <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title flex items-center gap-2 font-['Cormorant_Garamond'] text-xl font-semibold leading-tight text-[#2b211d] transition-colors hover:text-[#9e2a22]"
            >
              {titleContent}
            </a>
          ) : (
            <h4 className="font-['Cormorant_Garamond'] text-xl font-semibold leading-tight text-[#2b211d]">
              {titleContent}
            </h4>
          )}

          {date && (
            <span className="shrink-0 rounded-full border border-[#e0cfc3] bg-[#f8eee7] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#9e2a22]">
              {date}
            </span>
          )}
        </div>

        {sub && (
          <p className="mb-1 text-sm font-medium leading-6 text-[#9e2a22]">
            {sub}
          </p>
        )}

        {note && (
          <p className="text-sm leading-6 text-[#76635a]">
            {note}
          </p>
        )}
      </div>
    </motion.article>
  );
};

const Resume = () => {
  const { t, language } = useLanguage();

  const resumeFile =
    language === "tr"
      ? "/Busra_Yagcioglu_CV.pdf"
      : "/Busra_Yagcioglu_CV_ENG.pdf";

  const resumeFileName =
    language === "tr"
      ? "Busra_Yagcioglu_CV.pdf"
      : "Busra_Yagcioglu_CV_ENG.pdf";

  const education = [
    {
      title: t.resume.edu1,
      sub: t.resume.edu1Desc,
      note: `${t.resume.edu1Note} · ${t.resume.edu1Grad}`,
      date: "2022–2026",
    },
    {
      title: t.resume.edu2,
      sub: t.resume.edu2Desc,
      note: t.resume.edu2Note,
      date: "2022",
    },
  ];

  const experience = [
    {
      title: "Logicute",
      sub:
        language === "tr"
          ? "— Mobil Uygulama Geliştirici Stajyeri (CO-OP)"
          : "— Mobile Application Developer Intern (CO-OP)",
      date:
        language === "tr"
          ? "Şub–May 2026"
          : "Feb–May 2026",
      link: "https://www.logicute.com/",
    },
    {
      title: "Sca Social",
      sub: t.resume.exp1,
      date:
        language === "tr"
          ? "Haz–Ağu 2025"
          : "Jun–Aug 2025",
      link: "https://scasocial.com/",
    },
    {
      title: "Google DSC HKU",
      sub: t.resume.exp3,
      date: "2023–2024",
      link: "https://gdg.community.dev/",
    },
    {
      title:
        "Carousel Oceanfront Hotel & Condos / Dolle’s Candyland Inc.",
      sub: t.resume.exp4,
      date:
        language === "tr"
          ? "Yaz 2023"
          : "Summer 2023",
      link: "https://carouselhotel.com/",
    },
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
      id="resume"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#e1d4ca] bg-[#f7f2eb] px-5 py-24 md:px-10 md:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-52 h-[420px] w-[420px] rounded-full bg-[#efdcd0]/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-40 h-[420px] w-[420px] rounded-full bg-[#dcd5b8]/20 blur-3xl"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-80 w-80 opacity-[0.1] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 49%, #b99859 50%, transparent 51%), linear-gradient(transparent 49%, #b99859 50%, transparent 51%)",
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to left, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, black, transparent)",
        }}
      />
      {/* Decorative floral-tech hibiscus */}
      <motion.img
        initial={{
          opacity: 0,
          x: 55,
        }}
        whileInView={{
          opacity: 0.28,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        src="/tech-hibiscus.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-28 z-0 hidden w-[430px] max-w-none mix-blend-multiply xl:block 2xl:right-0 2xl:w-[470px]"
        style={{
          maskImage:
            "linear-gradient(to left, black 68%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 68%, transparent 100%)",
          filter:
            "drop-shadow(0 20px 28px rgba(76,48,35,0.09))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mb-16"
        >
          <div className="eyebrow mb-5">
            {language === "tr" ? "Özgeçmiş" : "Resume"}
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl font-['Cormorant_Garamond'] text-5xl font-medium leading-[0.95] text-[#2b211d] sm:text-6xl md:text-7xl">
              {t.resume.title}
            </h2>

            <div className="flex flex-wrap items-center gap-3 lg:mr-20 xl:mr-24">
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-[14px] border border-[#8f241e] bg-[#9e2a22] px-5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(158,42,34,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8f241e] hover:shadow-[0_11px_22px_rgba(158,42,34,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9e2a22]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f2eb]"
              >
                <FaEye size={15} />

                {language === "tr"
                  ? "Özgeçmişi Görüntüle"
                  : "View Resume"}
              </a>

              <a
                href={resumeFile}
                download={resumeFileName}
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-[14px] border border-[#d8c8bd] bg-[#fffaf5]/90 px-5 text-sm font-semibold text-[#4f4039] shadow-[0_6px_16px_rgba(80,50,35,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b98e76] hover:bg-white hover:text-[#9e2a22] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9e2a22]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f2eb]"
              >
                <FaDownload size={14} />

                {t.resume.download}
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center">
            <div className="h-px w-28 bg-gradient-to-r from-[#9e2a22] via-[#c8a96b] to-transparent" />

            <div className="h-2 w-2 rounded-full bg-[#c8a96b] shadow-[0_0_12px_rgba(200,169,107,0.55)]" />
          </div>
        </motion.header>

        {/* Education and experience */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Education */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c4b6] bg-[#f8eee7] text-lg text-[#9e2a22]">
                <FaGraduationCap />
              </div>

              <div>
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#9e2a22]">
                  {language === "tr"
                    ? "Akademik Geçmiş"
                    : "Academic Background"}
                </p>

                <h3 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#2b211d]">
                  {t.resume.education}
                </h3>
              </div>
            </div>

            <div className="relative space-y-5">
              <div className="absolute bottom-5 left-[10px] top-5 w-px bg-gradient-to-b from-[#9e2a22]/65 via-[#c8a96b]/55 to-transparent" />

              {education.map((item, index) => (
                <TimelineItem
                  key={`${item.title}-${item.date}`}
                  {...item}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c4b6] bg-[#f8eee7] text-lg text-[#9e2a22]">
                <FaBriefcase />
              </div>

              <div>
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#9e2a22]">
                  {language === "tr"
                    ? "Profesyonel Geçmiş"
                    : "Professional Background"}
                </p>

                <h3 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#2b211d]">
                  {t.resume.experience}
                </h3>
              </div>
            </div>

            <div className="relative space-y-5">
              <div className="absolute bottom-5 left-[10px] top-5 w-px bg-gradient-to-b from-[#9e2a22]/65 via-[#c8a96b]/55 to-transparent" />

              {experience.map((item, index) => (
                <TimelineItem
                  key={`${item.title}-${item.date}`}
                  {...item}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.section
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-16 overflow-hidden rounded-[30px] border border-[#ded0c6] bg-[#fffaf5]/76 p-7 shadow-[0_16px_42px_rgba(79,49,35,0.06)] md:p-10"
        >
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c4b6] bg-[#f8eee7] text-lg text-[#9e2a22]">
                <FaTools />
              </div>

              <h3 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#2b211d]">
                {t.resume.skills}
              </h3>
            </div>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#c8a96b]/70 to-transparent sm:block" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillRows.map((row) => (
              <div
                key={row.label}
                className="rounded-[22px] border border-[#e6d8ce] bg-white/55 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#c9a994] hover:bg-white"
              >
                <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#7b655b]">
                  {language === "tr"
                    ? row.labelTr
                    : row.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {row.items.map((item) => (
                    <span
                      key={item.name}
                      className="skill-chip"
                    >
                      <span className="text-[#9e2a22]">
                        {item.icon}
                      </span>

                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certificates */}
        <motion.section
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-8 overflow-hidden rounded-[30px] border border-[#ded0c6] bg-[#fffaf5]/76 p-7 shadow-[0_16px_42px_rgba(79,49,35,0.06)] md:p-10"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c4b6] bg-[#f8eee7] text-lg text-[#9e2a22]">
              <FaCertificate />
            </div>

            <h3 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#2b211d]">
              {t.resume.certificates}
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
        </motion.section>
      </div>
    </section>
  );
};

export default Resume;