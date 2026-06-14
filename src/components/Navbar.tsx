import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.showcase'), href: '#showcase' },
    { name: t('nav.whyUs'), href: '#why-us' },
    { name: t('nav.aiFeatures'), href: '#ai-features' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-brandBg-dark/85 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-amber-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/20 transition-transform duration-300 group-hover:scale-105">
                {isRtl ? 'إيوان' : 'EW'}
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                {isRtl ? 'إيوان' : 'Ewan'}<span className="text-accent font-extrabold">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 gap-1 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Controls & CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="#pricing"
              className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-accent transition-colors duration-200"
            >
              {t('nav.demo')}
            </a>
            <a
              href="#pricing"
              className="group flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-dark text-white text-sm font-semibold shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{t('nav.trial')}</span>
              {isRtl ? (
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-brandBg-dark/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-slate-200 dark:border-slate-800 my-4" />
              <div className="flex flex-col gap-3 px-4">
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850"
                >
                  {t('nav.demo')}
                </a>
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white text-base font-semibold shadow-lg shadow-accent/20"
                >
                  <span>{t('nav.trial')}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
