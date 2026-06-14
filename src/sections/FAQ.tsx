import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqItems = t('faq.items') as { q: string; a: string }[];

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-brandBg-light via-slate-100/30 to-brandBg-light dark:from-brandBg-dark dark:via-slate-950/20 dark:to-brandBg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4 text-start">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <GlassCard
                key={idx}
                hoverEffect={false}
                className="border-slate-200/50 dark:border-slate-800/40 overflow-hidden"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-start gap-4 font-bold text-slate-950 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all duration-200 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base">{item.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </motion.div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed border-t border-slate-200/30 dark:border-slate-800/25">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
