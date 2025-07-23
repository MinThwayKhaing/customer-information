
import React from 'react';
import { Language, Theme, Page } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
  translations: { [key: string]: string };
  language: Language;
  theme: Theme;
  currentPage: Page;
  userId: string;
  onLanguageChange: (lang: Language) => void;
  onThemeChange: (theme: Theme) => void;
  onNavClick: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({
  translations: t,
  language,
  theme,
  currentPage,
  onLanguageChange,
  onThemeChange,
  onNavClick
}) => {
  const getNavButtonClass = (page: Page) => {
    const baseClass = "px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500";
    if (currentPage === page) {
      return `${baseClass} bg-blue-600 text-white shadow`;
    }
    return `${baseClass} text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700`;
  };

  return (
    <header className="space-y-6">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          {t.appTitle}
        </h1>
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          <LanguageSwitcher
            currentLang={language}
            onChangeLang={onLanguageChange}
            translations={t}
          />
          <ThemeSwitcher theme={theme} onChangeTheme={onThemeChange} />
        </div>
      </div>
      {/* <nav className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex items-center space-x-2">
        <button
          onClick={() => onNavClick('location')}
          className={getNavButtonClass('location')}
          aria-current={currentPage === 'location' ? 'page' : undefined}
        >
          {t.navLocation}
        </button>
        <button
          onClick={() => onNavClick('info')}
          className={getNavButtonClass('info')}
          aria-current={currentPage === 'info' ? 'page' : undefined}
        >
          {t.navCustomerInfo}
        </button>
      </nav> */}
    </header>
  );
};

export default Header;