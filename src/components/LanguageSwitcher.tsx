import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ scrolled = true }) => {
  const { lang, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none ${
        scrolled 
          ? 'text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-accent' 
          : 'text-slate-300 hover:text-white'
      }`}
      aria-label={lang === 'en' ? 'تغيير اللغة إلى العربية' : 'Change language to English'}
    >
      <Globe className="w-4.5 h-4.5" />
      <span className="uppercase">{lang === 'en' ? 'ar' : 'en'}</span>
    </button>
  );
};
