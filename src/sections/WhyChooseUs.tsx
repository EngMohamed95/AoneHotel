import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { Zap, DollarSign, Heart, Cloud, ShieldCheck, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const benefits = [
    {
      key: 'faster',
      icon: <Zap className="w-6 h-6 text-amber-500 animate-pulse-slow" />,
      bgIcon: 'bg-amber-500/10',
    },
    {
      key: 'revenue',
      icon: <DollarSign className="w-6 h-6 text-emerald-550" />,
      bgIcon: 'bg-emerald-500/10',
    },
    {
      key: 'guestExp',
      icon: <Heart className="w-6 h-6 text-rose-500 animate-bounce-slow" />,
      bgIcon: 'bg-rose-500/10',
    },
    {
      key: 'cloud',
      icon: <Cloud className="w-6 h-6 text-accent" />,
      bgIcon: 'bg-accent/10',
    },
    {
      key: 'secure',
      icon: <ShieldCheck className="w-6 h-6 text-violet-500" />,
      bgIcon: 'bg-violet-500/10',
    },
    {
      key: 'scalable',
      icon: <Maximize2 className="w-6 h-6 text-indigo-500" />,
      bgIcon: 'bg-indigo-500/10',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-brandBg-light dark:bg-brandBg-dark relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/5 dark:bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {t('whyUs.subtitle')}
          </p>
        </motion.div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-start">
          
          {/* Visual Showcase Card (dining.png) - 4 cols on large screens */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 overflow-hidden relative group shadow-xl min-h-[350px] lg:min-h-auto flex flex-col justify-end"
          >
            <img 
              src="/images/dining.png" 
              alt="Premium Hotel Dining Service" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
            
            <div className="relative z-10 p-8 text-white flex flex-col gap-2">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                {isRtl ? 'خدمات ضيافة متميزة' : 'Five-Star Hospitality'}
              </span>
              <h3 className="text-xl font-black">
                {isRtl ? 'ارتقِ بـتـجـربـة نـزيل فندقك' : 'Elevate the Guest Experience'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {isRtl 
                  ? 'من مكتب الاستقبال إلى طاولة الطعام، يضمن نظام إيوان أتمتة كاملة للعمليات وتنسيقاً تاماً يمنح ضيوفك إقامة لا تُنسى.' 
                  : 'From checks at the reception to dining at the restaurant table, Ewan provides complete service flow automation for a memorable guest experience.'}
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid - 8 cols on large screens */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <GlassCard
                key={benefit.key}
                delay={idx * 0.05}
                className="p-6 md:p-8 border-slate-200/50 dark:border-slate-800/40 relative group flex flex-col justify-between"
              >
                {/* Hover Glow Border Top */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-xl ${benefit.bgIcon} flex items-center justify-center`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                      {t(`whyUs.${benefit.key}.t`)}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {t(`whyUs.${benefit.key}.d`)}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
