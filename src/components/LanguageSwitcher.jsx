import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-20 right-4 z-50 px-4 py-2 bg-teal-400 text-gray-900 font-semibold rounded-lg hover:bg-teal-500 transition transform hover:scale-110 shadow-lg flex items-center gap-2"
      title={language === 'en' ? 'Türkçe\'ye Geç' : 'Switch to English'}
    >
      <span className="text-2xl">{language === 'en' ? '🇹🇷' : '🇬🇧'}</span>
      <span className="font-bold">{language === 'en' ? 'TR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;