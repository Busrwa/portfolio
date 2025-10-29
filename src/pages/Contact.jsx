// src/pages/Contact.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="p-8 max-w-4xl mx-auto text-center text-gray-300">
      <h2 className="text-3xl font-bold text-teal-400 mb-4">{t.contact.title}</h2>
      <p className="mb-4">
        {t.contact.subtitle}
      </p>
      <div className="space-y-2 text-lg">
        <p className="text-teal-400 font-medium">
          Email:{' '}
          <a
            href="mailto:busrayagcioglu2003@gmail.com"
            className="hover:underline"
          >
            busrayagcioglu2003@gmail.com
          </a>
        </p>
        <p className="text-teal-400 font-medium">
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/busra-yagcioglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/busra-yagcioglu
          </a>
        </p>
        <p className="text-teal-400 font-medium">
          GitHub:{' '}
          <a
            href="https://github.com/Busrwa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Busrwa
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;