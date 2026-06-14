import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

type Language = 'en' | 'ar';

interface LanguageContextProps {
  lang: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('ewan_lang');
    if (saved === 'en' || saved === 'ar') return saved;
    return 'ar'; // Default to Arabic
  });

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('ewan_lang', newLang);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (lang === 'ar') {
      root.dir = 'rtl';
      root.lang = 'ar';
      root.classList.remove('font-outfit');
      root.classList.add('font-cairo');
    } else {
      root.dir = 'ltr';
      root.lang = 'en';
      root.classList.remove('font-cairo');
      root.classList.add('font-outfit');
    }
  }, [lang]);

  const t = (path: string): any => {
    const dict = translations[lang];
    const value = getNestedValue(dict, path);
    if (value === undefined) {
      // Fallback to English if not found
      const enValue = getNestedValue(translations['en'], path);
      return enValue !== undefined ? enValue : path;
    }
    return value;
  };

  const isRtl = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
