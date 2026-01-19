import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold text-teal-400 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
          {t.notFound.title}
        </h2>
        <p className="text-gray-400 mb-8">
          {t.notFound.description}
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition"
        >
          {t.notFound.button}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
