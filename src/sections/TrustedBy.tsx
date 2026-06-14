import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TrustedBy: React.FC = () => {
  const { t } = useLanguage();

  const hotelLogos = [
    { name: 'Grand Horizon', icon: (
      <svg className="h-7 fill-current" viewBox="0 0 160 32">
        <path d="M12 4h4v24h-4zM24 10h4v18h-4zM36 6h4v22h-4zM0 14h4v14H0z" className="text-accent" />
        <text x="50" y="22" className="text-sm font-black font-sans select-none fill-slate-900 dark:fill-white">HORIZON</text>
      </svg>
    )},
    { name: 'Aura Boutique', icon: (
      <svg className="h-7 fill-current" viewBox="0 0 150 32">
        <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="3" className="text-indigo-500" />
        <circle cx="16" cy="16" r="6" className="text-accent" />
        <text x="38" y="22" className="text-sm font-black font-sans tracking-widest select-none fill-slate-900 dark:fill-white">AURA</text>
      </svg>
    )},
    { name: 'Oasis Palace', icon: (
      <svg className="h-7 fill-current" viewBox="0 0 160 32">
        <path d="M16 2 L28 28 L4 28 Z" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-500" />
        <path d="M16 10 L22 24 L10 24 Z" className="text-accent" />
        <text x="38" y="22" className="text-sm font-black font-sans tracking-wide select-none fill-slate-900 dark:fill-white">OASIS</text>
      </svg>
    )},
    { name: 'Peak Chalet', icon: (
      <svg className="h-7 fill-current" viewBox="0 0 140 32">
        <path d="M6 26 L16 8 L26 26 M14 26 L22 14 L30 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-amber-550" />
        <text x="38" y="22" className="text-sm font-black font-sans select-none fill-slate-900 dark:fill-white">PEAK</text>
      </svg>
    )},
    { name: 'Vance Resorts', icon: (
      <svg className="h-7 fill-current" viewBox="0 0 150 32">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="3" className="text-violet-500" />
        <path d="M10 16 l4 4 l8 -8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
        <text x="38" y="22" className="text-sm font-black font-sans select-none fill-slate-900 dark:fill-white">VANCE</text>
      </svg>
    )}
  ];

  // Duplicate for seamless infinite marquee scroll
  const marqueeItems = [...hotelLogos, ...hotelLogos, ...hotelLogos, ...hotelLogos];

  return (
    <section className="py-10 border-y border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          {t('trusted.title')}
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex items-center overflow-hidden">
        {/* Left and Right glass fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brandBg-light dark:from-brandBg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brandBg-light dark:from-brandBg-dark to-transparent z-10 pointer-events-none" />

        {/* Scrolling list */}
        <div className="flex gap-20 w-max animate-marquee py-2 hover:[animation-play-state:paused] transition-all duration-300">
          {marqueeItems.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:text-accent hover:scale-105 transition-all duration-300 cursor-pointer"
              title={logo.name}
            >
              {logo.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
