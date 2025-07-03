import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setIsOpen(false);
  };

  const currentLanguage = translations[language].language[language];

  // Custom circle icons for languages
  const LanguageIcon = ({ lang, size = "w-5 h-5" }) => {
    if (lang === 'en') {
      return (
        <div className={`${size} rounded-full overflow-hidden shadow-sm border border-gray-200`}>
          <img 
            src="/images/flag.png" 
            alt="English Flag" 
            className="w-full h-full object-cover"
          />
        </div>
      );
    } else if (lang === 'sq') {
      return (
        <div className={`${size} rounded-full overflow-hidden shadow-sm border border-gray-200`}>
          <img 
            src="/images/world.png" 
            alt="Albanian Language" 
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-50 transition-colors duration-200 text-sm font-medium text-neutral-700"
        aria-label="Change language"
      >
        <LanguageIcon lang={language} />
        <span>{currentLanguage}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 z-20">
            <div className="py-1">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 transition-colors duration-200 flex items-center space-x-3 ${
                  language === 'en' ? 'bg-primary bg-opacity-10 text-primary font-medium' : 'text-neutral-700'
                }`}
              >
                <LanguageIcon lang="en" size="w-4 h-4" />
                <span>{translations.en.language.en}</span>
                {language === 'en' && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => handleLanguageChange('sq')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 transition-colors duration-200 flex items-center space-x-3 ${
                  language === 'sq' ? 'bg-primary bg-opacity-10 text-primary font-medium' : 'text-neutral-700'
                }`}
              >
                <LanguageIcon lang="sq" size="w-4 h-4" />
                <span>{translations.sq.language.sq}</span>
                {language === 'sq' && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 