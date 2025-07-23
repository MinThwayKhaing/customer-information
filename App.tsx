import React, { useState, useCallback } from 'react';
import { Language, Theme, Page } from './types';
import { translations } from './constants/translations';
import { useHashRouter } from './hooks/useRouter';
import LocationForm from './components/LocationForm';
import CustomerInfoForm from './components/CustomerInfoForm';
import Header from './components/Header';
import InstallDateForm from './components/InstallDateForm';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.TH);
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const { page, params } = useHashRouter();
  const userId = params.userId;

  // Submission state for each form
  const [locationSubmitted, setLocationSubmitted] = useState(false);
  const [infoSubmitted, setInfoSubmitted] = useState(false);

  // Callbacks for form submission
  const handleLocationComplete = useCallback(() => {
    setLocationSubmitted(true);
  }, []);

  const handleCustomerInfoComplete = useCallback(() => {
    setInfoSubmitted(true);
  }, []);

  const handleCustomerInfoBack = useCallback(() => {
    setInfoSubmitted(false); // allows editing again
  }, []);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Header
          translations={t}
          language={language}
          theme={theme}
          currentPage={page}
          userId={userId}
          onLanguageChange={setLanguage}
          onThemeChange={setTheme}
          onNavClick={(newPage: Page) => {
            window.location.hash = `#/user/${userId}/${newPage}`;
          }}
        />

        <main>
          {page === 'location' && !locationSubmitted && (
            <LocationForm
              translations={t}
              userId={userId}
              onComplete={handleLocationComplete}
            />
          )}

          {page === 'location' && locationSubmitted && (
            <p className="text-center text-green-600 dark:text-green-400 font-medium">
              ✅ {t.submittedMessage}
            </p>
          )}

          {page === 'info' && !infoSubmitted && (
            <CustomerInfoForm
              translations={t}
              userId={userId}
               keyParam={params.key}
              onBack={handleCustomerInfoBack}
              onComplete={handleCustomerInfoComplete}
            />
          )}
{page === 'install' && (
  <InstallDateForm
    translations={t}
    userId={userId}
    keyParam={params.key}
    onComplete={() => {
      alert('Installation date submitted!');
    }}
  />
)}

          {page === 'info' && infoSubmitted && (
            <p className="text-center text-green-600 dark:text-green-400 font-medium">
              ✅ {t.submittedMessage}
            </p>
          )}
        </main>

        <footer className="text-center pt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Service Installation Co. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
