import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      key: 'starter' as const,
      popular: false,
      glow: 'rgba(59,130,246,0.05)',
    },
    {
      key: 'pro' as const,
      popular: true,
      glow: 'rgba(59,130,246,0.15)',
    },
    {
      key: 'enterprise' as const,
      popular: false,
      glow: 'rgba(16,185,129,0.05)',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-brandBg-light dark:bg-brandBg-dark relative overflow-hidden">
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
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Toggle Switcher Button */}
          <div className="inline-flex items-center gap-3 bg-white/60 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/40 backdrop-blur shadow-sm select-none">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                !isYearly
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                isYearly
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <span>{t('pricing.yearly')}</span>
              <span className="px-1.5 py-0.5 text-[9px] font-extrabold bg-accent text-white rounded-full uppercase tracking-wider animate-pulse-slow">
                {t('pricing.save')}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto text-start">
          {plans.map((plan) => {
            const planData = t(`pricing.tiers.${plan.key}`) as {
              name: string;
              priceMon: string;
              priceYear: string;
              desc: string;
              features: string[];
            };

            const price = isYearly ? planData.priceYear : planData.priceMon;

            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: plan.key === 'pro' ? 0.1 : 0 }}
                className="relative"
              >
                {/* Visual shadow glow overlay for premium emphasis */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-40 dark:opacity-30 pointer-events-none"
                  style={{ backgroundColor: plan.glow }}
                />

                <GlassCard
                  hoverEffect={true}
                  className={`
                    relative p-8 border-transparent dark:border-slate-800/20 h-full flex flex-col justify-between
                    ${plan.popular ? 'border-accent/40 dark:border-accent/30 ring-2 ring-accent/15' : ''}
                  `}
                >
                  {/* Popular Banner */}
                  {plan.popular && (
                    <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-accent/25">
                      {t('pricing.popular')}
                    </span>
                  )}

                  <div className="flex flex-col gap-6">
                    <div>
                      {/* Tier Name */}
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                        {planData.name}
                      </h3>
                      {/* Description */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed min-h-[40px]">
                        {planData.desc}
                      </p>
                    </div>

                    {/* Price display with currency */}
                    <div className="flex items-baseline gap-1.5 my-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white select-none">
                        ${price}
                      </span>
                      <span className="text-xs font-semibold text-slate-450 dark:text-slate-500">
                        /{isYearly ? t('pricing.yearly').toLowerCase() : t('pricing.monthly').toLowerCase()}
                      </span>
                    </div>

                    {/* Action button CTA */}
                    <a
                      href="#pricing"
                      className={`
                        w-full py-3.5 rounded-xl font-bold text-center text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 flex justify-center items-center gap-1.5
                        ${
                          plan.popular
                            ? 'bg-accent text-white hover:bg-accent-dark shadow-accent/20'
                            : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200'
                        }
                      `}
                    >
                      <span>{t('pricing.getStarted')}</span>
                      {isRtl ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </a>

                    <div className="border-t border-slate-200/50 dark:border-slate-800/40 my-2" />

                    {/* Features checklist */}
                    <ul className="flex flex-col gap-3">
                      {planData.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-success/10 flex items-center justify-center text-success mt-0.5">
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
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
