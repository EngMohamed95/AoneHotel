import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Brain, Sparkles, TrendingUp, BarChart4, MessageSquareCode } from 'lucide-react';
import { motion } from 'framer-motion';

export const AIFeatures: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const aiModules = [
    {
      key: 'forecasting',
      num: '01',
      icon: <Brain className="w-6 h-6 text-amber-400" />,
      glowColor: 'rgba(245,158,11,0.15)',
      borderColor: 'group-hover:border-amber-500/40',
      badge: 'PROJECTION ENGINE'
    },
    {
      key: 'pricing',
      num: '02',
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      glowColor: 'rgba(234,179,8,0.15)',
      borderColor: 'group-hover:border-yellow-400/40',
      badge: 'DYNAMIC YIELD'
    },
    {
      key: 'insights',
      num: '03',
      icon: <Sparkles className="w-6 h-6 text-orange-400 animate-pulse-slow" />,
      glowColor: 'rgba(249,115,22,0.15)',
      borderColor: 'group-hover:border-orange-500/40',
      badge: 'NLP ANALYTICS'
    },
    {
      key: 'prediction',
      num: '04',
      icon: <BarChart4 className="w-6 h-6 text-amber-500" />,
      glowColor: 'rgba(217,119,6,0.15)',
      borderColor: 'group-hover:border-amber-600/40',
      badge: 'CAPACITY ASSURANCE'
    },
    {
      key: 'bi',
      num: '05',
      icon: <MessageSquareCode className="w-6 h-6 text-yellow-500" />,
      glowColor: 'rgba(234,179,8,0.15)',
      borderColor: 'group-hover:border-yellow-500/40',
      badge: 'CONVERSATIONAL BI'
    },
  ];

  return (
    <section id="ai-features" className="py-24 bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#0B0F19] text-white relative overflow-hidden">
      {/* Background Neural Grid Accent */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Glowing Mesh Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-bold text-amber-400 mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRtl ? 'جناح إيوان للذكاء الاصطناعي' : 'Ewan AI Cognitive Suite'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-amber-400 bg-clip-text text-transparent">
            {t('ai.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t('ai.subtitle')}
          </p>
        </motion.div>

        {/* AI Grid Layout (Balanced flex layout with centered elements on the last row) */}
        <div className="flex flex-wrap justify-center gap-8 text-start">
          
          {aiModules.map((module, idx) => {
            return (
              <motion.div
                key={module.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] min-w-[300px] relative group flex flex-col"
              >
                {/* Glowing Aura Hover Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ backgroundColor: module.glowColor }}
                />

                {/* Glassmorphism Card Container */}
                <div className="relative flex-grow rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl p-8 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between gap-8 group-hover:-translate-y-1 shadow-2xl">
                  {/* Glowing Top-Border Effect */}
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                      {/* Floating glowing icon container */}
                      <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 relative shadow-inner">
                        {module.icon}
                        <div className="absolute inset-0 rounded-xl bg-current opacity-5 blur-sm" />
                      </div>

                      {/* Number and Badge */}
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-black text-slate-800 dark:text-slate-800 group-hover:text-amber-500/20 transition-colors duration-300">
                          {module.num}
                        </span>
                        <span className="text-[9px] font-extrabold text-slate-500 tracking-wider">
                          {module.badge}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2 group-hover:text-amber-400 transition-colors duration-300">
                        {t(`ai.${module.key}.t`)}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {t(`ai.${module.key}.d`)}
                      </p>
                    </div>
                  </div>

                  {/* Futuristic micro indicator */}
                  <div className="flex items-center gap-2 border-t border-slate-800/50 pt-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                      Neural Engine Active
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
};

