import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.showcase'), href: '#showcase' },
    { name: t('nav.pricing'), href: '#pricing' },
  ];

  const companyLinks = [
    { name: isRtl ? 'عن الشركة' : 'About Us', href: '#' },
    { name: isRtl ? 'اتصل بنا' : 'Contact Us', href: '#' },
    { name: isRtl ? 'المدونة' : 'Blog', href: '#' },
  ];

  const legalLinks = [
    { name: isRtl ? 'شروط الخدمة' : 'Terms of Service', href: '#' },
    { name: isRtl ? 'سياسة الخصوصية' : 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8 text-start select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-accent to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {isRtl ? 'إيوان' : 'EW'}
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {isRtl ? 'إيوان' : 'Ewan'}<span className="text-accent font-extrabold">.</span>
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
            {/* Social Icons (using inline SVGs for compatibility) */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footer.product')}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footer.company')}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footer.legal')}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter form */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footer.newsletter')}
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-400 max-w-xs mb-1">
              {t('footer.newsletterDesc')}
            </p>
            
            {/* Form */}
            <form onSubmit={handleSubscribe} className="relative w-full flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@hotel.com"
                className="w-full text-xs py-2.5 ps-3.5 pe-10 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="absolute right-1.5 p-1.5 rounded bg-accent hover:bg-accent-dark text-white hover:scale-105 transition-all"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Subscribed message */}
            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="flex items-center gap-1.5 text-success text-[10px] font-semibold mt-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('footer.successMsg')}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        <div className="border-t border-slate-800/60 my-6" />

        {/* Footer Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
          <span>&copy; {currentYear} {isRtl ? 'إيوان PMS' : 'Ewan PMS'}. {t('footer.allRightsReserved')}</span>
          <div className="flex gap-4">
            <span>Powered by Next-Gen AI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
