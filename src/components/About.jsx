import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 max-w-5xl ml-[33%]" // Sağda kaydırmak için sol margin
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-teal-400">About Me</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        I'm a 4th-year Software Engineering student at Hasan Kalyoncu University. 
        I focus on web and mobile development (React, Django, Expo) and IoT solutions.
      </p>
      <p className="text-gray-300 leading-relaxed">
        As DSC Lead, I organize hackathons, workshops, and collaborative tech projects. 
        I enjoy building innovative projects and contributing to open-source communities.
      </p>
    </motion.section>
  );
}
