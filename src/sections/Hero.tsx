import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle2, TrendingUp, Users, ArrowRight, ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = (t('hero.slides') || []) as {
    title: string;
    highlight: string;
    subtitle: string;
  }[];

  const bgImages = [
    '/images/hero_slide1.png',
    '/images/hero_slide2.png',
    '/images/hero_slide3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bgImages.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-slate-950 text-white select-none">
      
      {/* Background Image Slider with Smooth Fades */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImages[activeSlide]})` }}
          />
        </AnimatePresence>
        
        {/* Dark Premium Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/5 blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Slider Content & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-start">
            
            {/* Top Live Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-xs font-bold text-accent mb-8 uppercase tracking-widest"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {t('hero.badge')}
            </motion.div>

            {/* Slider Content Transitions */}
            <div className="min-h-[240px] sm:min-h-[190px] flex flex-col justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? -30 : 30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full"
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                    {slides[activeSlide]?.title}{' '}
                    <span className="bg-gradient-to-r from-accent via-amber-400 to-amber-600 bg-clip-text text-transparent block sm:inline">
                      {slides[activeSlide]?.highlight}
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-lg">
                    {slides[activeSlide]?.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Dots indicators */}
            <div className="flex gap-2.5 mt-8 mb-10 justify-center lg:justify-start">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === i ? 'w-8 bg-accent' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

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
                className="flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/40 backdrop-blur hover:bg-slate-800/60 font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {t('hero.ctaDemo')}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Dark Dashboard Mockup & Floating Metrics */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Dashboard Container (Glassmorphic Mockup) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-xl aspect-[16/10] rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header Bar */}
              <div className="h-10 border-b border-slate-800/50 px-4 flex items-center justify-between bg-slate-950/40">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="w-40 h-4 rounded-full bg-slate-800/80" />
                <div className="w-4 h-4 rounded-full bg-slate-700" />
              </div>

              {/* Mockup Dashboard Content */}
              <div className="flex-1 p-4 grid grid-cols-12 gap-3 text-start">
                {/* Mini Sidebar */}
                <div className="col-span-2 flex flex-col gap-2.5 border-e border-slate-800/30 pe-2">
                  <div className="w-full h-6 rounded bg-accent/20" />
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="w-full h-4 rounded bg-slate-800/40" />
                  ))}
                </div>

                {/* Dashboard Main Panel */}
                <div className="col-span-10 flex flex-col gap-3">
                  {/* Row 1: Header */}
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-5 rounded bg-slate-700" />
                    <div className="w-16 h-4 rounded bg-emerald-500/20" />
                  </div>
                  
                  {/* Row 2: Grid metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map(n => (
                      <div key={n} className="h-12 rounded-lg bg-slate-900/60 border border-slate-800/40 p-2 flex flex-col justify-between">
                        <div className="w-8 h-2 rounded bg-slate-700" />
                        <div className="w-12 h-4 rounded bg-slate-600" />
                      </div>
                    ))}
                  </div>

                  {/* Row 3: Graph area & Live Reception Feed */}
                  <div className="flex-1 grid grid-cols-12 gap-2.5 min-h-[90px]">
                    {/* Graph block (7 cols) */}
                    <div className="col-span-7 rounded-lg border border-slate-800/30 bg-slate-950/20 p-2 flex flex-col justify-between overflow-hidden">
                      <div className="w-16 h-3 rounded bg-slate-700" />
                      {/* Visual waves / lines */}
                      <div className="w-full h-10 relative flex items-end">
                        <svg className="w-full h-full" viewBox="0 0 100 40">
                          <path d="M 0 35 Q 20 10 40 25 T 80 15 T 100 20 L 100 40 L 0 40 Z" fill="rgba(245, 158, 11, 0.1)" />
                          <path d="M 0 35 Q 20 10 40 25 T 80 15 T 100 20" fill="none" stroke="#F59E0B" strokeWidth={1.5} />
                        </svg>
                      </div>
                    </div>
                    {/* Live Reception Cam (5 cols) - Styled with a warm golden hue */}
                    <div className="col-span-5 rounded-lg border border-slate-800/30 overflow-hidden relative group">
                      <img 
                        src="/images/reception.png" 
                        alt="Lobby Live Cam" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: 'sepia(0.35) saturate(1.6) hue-rotate(-20deg)' }}
                      />
                      <div className="absolute inset-0 bg-slate-950/30 flex flex-col justify-between p-1.5 text-white">
                        <div className="flex justify-between items-center">
                          <span className="text-[7px] font-bold px-1 py-0.5 rounded bg-rose-500 flex items-center gap-0.5 shadow-sm">
                            <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                            LIVE
                          </span>
                          <span className="text-[6px] opacity-75 font-mono select-none">14:43:50</span>
                        </div>
                        <span className="text-[8px] font-bold tracking-tight truncate bg-slate-950/80 py-0.5 px-1 rounded text-center">
                          {isRtl ? 'مكتب الاستقبال' : 'Front Desk Cam'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Card 1: Active Hotels (Top Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 md:-left-12 p-3 rounded-xl border border-slate-850/80 bg-slate-950/70 backdrop-blur shadow-lg flex items-center gap-3 text-white"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t('hero.stats.hotels')}
                </p>
                <h4 className="text-base font-extrabold leading-tight">
                  <AnimatedCounter value={1250} suffix="+" />
                </h4>
              </div>
            </motion.div>

            {/* Card 2: Daily Bookings (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-6 md:-right-10 p-3 rounded-xl border border-slate-850/80 bg-slate-950/70 backdrop-blur shadow-lg flex items-center gap-3 text-white"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t('hero.stats.bookings')}
                </p>
                <h4 className="text-base font-extrabold leading-tight">
                  <AnimatedCounter value={142} suffix="+" />
                </h4>
              </div>
            </motion.div>

            {/* Card 3: Occupancy Rate (Top Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 -right-12 p-3 rounded-xl border border-slate-850/80 bg-slate-950/70 backdrop-blur shadow-lg flex items-center gap-3 text-white hidden sm:flex"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t('hero.stats.occupancy')}
                </p>
                <h4 className="text-base font-extrabold leading-tight">
                  <AnimatedCounter value={88} suffix="%" />
                </h4>
              </div>
            </motion.div>

            {/* Card 4: Revenue Growth (Bottom Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 -left-12 p-3 rounded-xl border border-slate-850/80 bg-slate-950/70 backdrop-blur shadow-lg flex items-center gap-3 text-white hidden sm:flex"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-start">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t('hero.stats.revenue')}
                </p>
                <h4 className="text-base font-extrabold text-accent leading-tight">
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
