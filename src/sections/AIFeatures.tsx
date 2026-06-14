import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { Brain, Sparkles, TrendingUp, BarChart4, MessageSquareCode } from 'lucide-react';
import { motion } from 'framer-motion';

export const AIFeatures: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const aiModules = [
    {
      key: 'forecasting',
      icon: <Brain className="w-6 h-6 text-accent" />,
      glowColor: 'rgba(59,130,246,0.3)',
      borderColor: 'group-hover:border-blue-500/50',
    },
    {
      key: 'pricing',
      icon: <TrendingUp className="w-6 h-6 text-emerald-550" />,
      glowColor: 'rgba(16,185,129,0.3)',
      borderColor: 'group-hover:border-emerald-500/50',
    },
    {
      key: 'insights',
      icon: <Sparkles className="w-6 h-6 text-amber-500 animate-pulse-slow" />,
      glowColor: 'rgba(245,158,11,0.3)',
      borderColor: 'group-hover:border-amber-500/50',
    },
    {
      key: 'prediction',
      icon: <BarChart4 className="w-6 h-6 text-indigo-500" />,
      glowColor: 'rgba(99,102,241,0.3)',
      borderColor: 'group-hover:border-indigo-500/50',
    },
    {
      key: 'bi',
      icon: <MessageSquareCode className="w-6 h-6 text-violet-500" />,
      glowColor: 'rgba(139,92,246,0.3)',
      borderColor: 'group-hover:border-violet-500/50',
    },
  ];

  return (
    <section id="ai-features" className="py-24 bg-gradient-to-b from-brandBg-light via-slate-100/30 to-brandBg-light dark:from-brandBg-dark dark:via-slate-950/20 dark:to-brandBg-dark relative overflow-hidden">
      {/* Mesh Gradient Grid Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 dark:bg-accent/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/5 text-xs font-bold text-purple-500 dark:text-purple-400 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRtl ? 'جناح إيوان للذكاء الاصطناعي' : 'Ewan AI Cognitive Suite'}</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t('ai.title')}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {t('ai.subtitle')}
          </p>
        </div>

        {/* AI Grid Layout (Asymmetric grid with a large feature card and secondary grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-start">
          
          {aiModules.map((module, idx) => {
            // Span 3 columns on large screens for the first two items to create visual variance
            const isSpan3 = idx < 2;
            
            return (
              <motion.div
                key={module.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`lg:col-span-${isSpan3 ? '3' : '2'} relative group`}
              >
                {/* Neon shadow overlay on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{ backgroundColor: module.glowColor }}
                />

                <GlassCard
                  hoverEffect={true}
                  className={`h-full p-8 border-transparent dark:border-slate-800/20 group-hover:border-slate-400/30 dark:group-hover:border-slate-700/50 transition-all duration-300`}
                >
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div className="flex flex-col gap-4">
                      {/* Floating glowing icon container */}
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/40 relative shadow-sm">
                        {module.icon}
                        <div className="absolute inset-0 rounded-xl bg-current opacity-5 blur-sm" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white flex items-center gap-1.5">
                          {t(`ai.${module.key}.t`)}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {t(`ai.${module.key}.d`)}
                        </p>
                      </div>
                    </div>

                    {/* Futuristic micro indicator */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        Neural Engine Active
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
};
