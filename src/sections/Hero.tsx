import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, TrendingUp, Users, ArrowRight, ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-gradient-to-b from-brandBg-light via-slate-100/30 to-brandBg-light dark:from-brandBg-dark dark:via-slate-950/20 dark:to-brandBg-dark">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Decorative Radial Glowing Circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 dark:bg-accent/10 text-xs font-semibold text-accent mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {t('hero.badge')}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
            >
              {t('hero.title').split(' ').map((word: string, i: number) => {
                // Style some words with gradients to create premium visual emphasis
                const isHighlight = i >= 4 && i <= 6;
                return (
                  <span key={i} className={isHighlight ? "bg-gradient-to-r from-accent to-indigo-500 bg-clip-text text-transparent" : ""}>
                    {word}{' '}
                  </span>
                );
              })}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-10 max-w-lg leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#pricing"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-bold shadow-xl shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{t('hero.ctaTrial')}</span>
                {isRtl ? (
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                )}
              </a>
              <a
                href="#pricing"
                className="flex items-center justify-center px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur hover:bg-slate-100 dark:hover:bg-slate-850 font-bold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t('hero.ctaDemo')}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Dashboard Mockup & Floating Metrics */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Dashboard Container (Glassmorphic Mockup) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-xl aspect-[16/10] rounded-2xl border border-slate-200/60 dark:border-slate-800/40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header Bar */}
              <div className="h-10 border-b border-slate-200/50 dark:border-slate-800/50 px-4 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="w-40 h-4 rounded-full bg-slate-200 dark:bg-slate-800/80" />
                <div className="w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>

              {/* Mockup Dashboard Content */}
              <div className="flex-1 p-4 grid grid-cols-12 gap-3 text-start">
                {/* Mini Sidebar */}
                <div className="col-span-2 flex flex-col gap-2.5 border-e border-slate-200/40 dark:border-slate-800/30 pe-2">
                  <div className="w-full h-6 rounded bg-accent/20" />
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="w-full h-4 rounded bg-slate-200/60 dark:bg-slate-800/40" />
                  ))}
                </div>

                {/* Dashboard Main Panel */}
                <div className="col-span-10 flex flex-col gap-3">
                  {/* Row 1: Header */}
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-5 rounded bg-slate-350 dark:bg-slate-750" />
                    <div className="w-16 h-4 rounded bg-emerald-500/20" />
                  </div>
                  
                  {/* Row 2: Grid metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map(n => (
                      <div key={n} className="h-12 rounded-lg bg-slate-100/80 dark:bg-slate-850/50 border border-slate-200/30 dark:border-slate-800/30 p-2 flex flex-col justify-between">
                        <div className="w-8 h-2 rounded bg-slate-300 dark:bg-slate-700" />
                        <div className="w-12 h-4 rounded bg-slate-400 dark:bg-slate-600" />
                      </div>
                    ))}
                  </div>

                  {/* Row 3: Graph area & Live Reception Feed */}
                  <div className="flex-1 grid grid-cols-12 gap-2.5 min-h-[90px]">
                    {/* Graph block (7 cols) */}
                    <div className="col-span-7 rounded-lg border border-slate-200/40 dark:border-slate-800/30 bg-slate-50/50 dark:bg-slate-950/20 p-2 flex flex-col justify-between overflow-hidden">
                      <div className="w-16 h-3 rounded bg-slate-350 dark:bg-slate-750" />
                      {/* Visual waves / lines */}
                      <div className="w-full h-10 relative flex items-end">
                        <svg className="w-full h-full" viewBox="0 0 100 40">
                          <path d="M 0 35 Q 20 10 40 25 T 80 15 T 100 20 L 100 40 L 0 40 Z" fill="rgba(59, 130, 246, 0.1)" />
                          <path d="M 0 35 Q 20 10 40 25 T 80 15 T 100 20" fill="none" stroke="#3B82F6" strokeWidth={1.5} />
                        </svg>
                      </div>
                    </div>
                    {/* Live Reception Cam (5 cols) */}
                    <div className="col-span-5 rounded-lg border border-slate-200/40 dark:border-slate-800/30 overflow-hidden relative group">
                      <img 
                        src="/images/reception.png" 
                        alt="Lobby Live Cam" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 flex flex-col justify-between p-1.5 text-white">
                        <div className="flex justify-between items-center">
                          <span className="text-[7px] font-bold px-1 py-0.5 rounded bg-rose-500 flex items-center gap-0.5 shadow-sm">
                            <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                            LIVE
                          </span>
                          <span className="text-[6px] opacity-75 font-mono select-none">14:43:50</span>
                        </div>
                        <span className="text-[8px] font-bold tracking-tight truncate bg-slate-900/60 py-0.5 px-1 rounded text-center">
                          {isRtl ? 'مكتب الاستقبال' : 'Front Desk Cam'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING STATS CARDS WITH MICRO-ANIMATIONS */}
            
            {/* Card 1: Active Hotels (Top Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 md:-left-12 p-3 rounded-xl border border-white/20 dark:border-slate-800/40 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-lg flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t('hero.stats.hotels')}
                </p>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                  <AnimatedCounter value={1250} suffix="+" />
                </h4>
              </div>
            </motion.div>

            {/* Card 2: Daily Bookings (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-6 md:-right-10 p-3 rounded-xl border border-white/20 dark:border-slate-800/40 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-lg flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-550/15 flex items-center justify-center text-indigo-500">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t('hero.stats.bookings')}
                </p>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                  <AnimatedCounter value={142} suffix="+" />
                </h4>
              </div>
            </motion.div>

            {/* Card 3: Occupancy Rate (Top Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 -right-12 p-3 rounded-xl border border-white/20 dark:border-slate-800/40 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-lg flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t('hero.stats.occupancy')}
                </p>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                  <AnimatedCounter value={88} suffix="%" />
                </h4>
              </div>
            </motion.div>

            {/* Card 4: Revenue Growth (Bottom Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 -left-12 p-3 rounded-xl border border-white/20 dark:border-slate-800/40 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-lg flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-550">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t('hero.stats.revenue')}
                </p>
                <h4 className="text-base font-extrabold text-emerald-500 leading-tight">
                  +<AnimatedCounter value={24} suffix="%" />
                </h4>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
