import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-teal-400">Get In Touch</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out for collaborations or just a friendly chat!
      </p>
      <a
        href="mailto:busra@example.com"
        className="px-6 py-3 border border-teal-400 rounded-md text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition"
      >
        Say Hello
      </a>
    </motion.section>
  );
}
