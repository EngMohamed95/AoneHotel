import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { lang, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 backdrop-blur hover:bg-slate-100 dark:hover:bg-slate-800/80 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={lang === 'en' ? 'تغيير اللغة إلى العربية' : 'Change language to English'}
    >
      <Globe className="w-4 h-4 text-accent animate-pulse-slow" />
      <span>{lang === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};
