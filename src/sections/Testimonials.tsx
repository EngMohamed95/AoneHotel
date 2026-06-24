import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = t('testimonials.list') as {
    name: string;
    role: string;
    hotel: string;
    quote: string;
    rating: number;
  }[];

  // Helper to get stylized initial avatars with distinct color gradients
  const getAvatarGradient = (idx: number) => {
    const gradients = [
      'from-blue-500 to-indigo-650',
      'from-emerald-400 to-teal-600',
      'from-amber-400 to-rose-500',
    ];
    return gradients[idx % gradients.length];
  };

  return (
    <section className="py-24 bg-gradient-to-b from-brandBg-light via-slate-100/30 to-brandBg-light dark:from-brandBg-dark dark:via-slate-950/20 dark:to-brandBg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard
                hoverEffect={true}
                className="p-8 border-slate-200/50 dark:border-slate-800/40 relative h-full flex flex-col justify-between"
              >
                {/* Decorative floating Quote icon */}
                <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-200/40 dark:text-slate-800/30 pointer-events-none" />

                <div className="flex flex-col gap-5">
                  {/* Star Ratings */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  {/* Feedback Quote */}
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                {/* Profile card footer */}
                <div className="flex items-center gap-4 mt-8 pt-5 border-t border-slate-200/40 dark:border-slate-800/30">
                  {/* Gradient Avatar */}
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${getAvatarGradient(idx)} flex items-center justify-center text-white text-sm font-bold shadow-md`}>
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {test.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-450 dark:text-slate-500 leading-tight mt-0.5">
                      {test.role}, <span className="text-accent">{test.hotel}</span>
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
