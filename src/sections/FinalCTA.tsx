import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-24 bg-brandBg-light dark:bg-brandBg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glow Container with luxury room background */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 dark:border-slate-800/40 text-white px-8 py-16 md:p-20 shadow-2xl text-center flex flex-col items-center">
          {/* Full-bleed background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-[1.02]"
            style={{ backgroundImage: "url('/images/room.png')" }}
          />
          {/* Multi-layered brand-tinted dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-accent/80 mix-blend-multiply opacity-95 pointer-events-none" />

          {/* Abstract Grid Mesh Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            
            {/* Header */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight"
            >
              {t('cta.title')}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-100 dark:text-slate-200 font-medium mb-10 max-w-xl leading-relaxed"
            >
              {t('cta.subtitle')}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6"
            >
              <a
                href="#pricing"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{t('cta.trial')}</span>
                {isRtl ? (
                  <ArrowLeft className="w-5 h-5 text-accent transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1" />
                )}
              </a>
              <a
                href="#pricing"
                className="flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 bg-transparent hover:bg-white/10 font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {t('cta.demo')}
              </a>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs text-slate-200/90 font-medium tracking-wide"
            >
              {t('cta.noCard')}
            </motion.p>
            
          </div>
        </div>

      </div>
    </section>
  );
};
