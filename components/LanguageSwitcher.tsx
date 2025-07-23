
import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
  translations: { [key: string]: string };
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onChangeLang, translations }) => {
  const getButtonClass = (lang: Language) => {
    const baseClass = "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500";
    if (currentLang === lang) {
      return `${baseClass} bg-blue-600 text-white`;
    }
    return `${baseClass} bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600`;
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => onChangeLang(Language.TH)}
        className={getButtonClass(Language.TH)}
        aria-pressed={currentLang === Language.TH}
      >
        {translations.langTh}
      </button>
      <button
        onClick={() => onChangeLang(Language.EN)}
        className={getButtonClass(Language.EN)}
        aria-pressed={currentLang === Language.EN}
      >
        {translations.langEn}
      </button>
    </div>
  );
};

export default LanguageSwitcher;