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
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border backdrop-blur text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
        scrolled 
          ? 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80' 
          : 'border-slate-700 bg-slate-950/20 text-slate-300 hover:bg-slate-800/40 hover:text-white'
      }`}
      aria-label={lang === 'en' ? 'تغيير اللغة إلى العربية' : 'Change language to English'}
    >
      <Globe className="w-4 h-4 text-accent animate-pulse-slow" />
      <span>{lang === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};
