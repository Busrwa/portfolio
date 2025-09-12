import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.section
      id="resume"
      className="py-24 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-teal-400">Resume</h2>
      <p className="text-gray-300 mb-4">
        You can download my resume here:
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        className="px-6 py-3 border border-teal-400 rounded-md text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition"
      >
        Download Resume
      </a>
    </motion.section>
  );
}
