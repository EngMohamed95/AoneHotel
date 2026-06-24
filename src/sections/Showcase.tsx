import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { InteractiveChart } from '../components/InteractiveChart';
import { motion } from 'framer-motion';
import { Percent, DollarSign, Hotel, CalendarCheck } from 'lucide-react';

type ChartType = 'occupancy' | 'revenue' | 'bookings';

export const Showcase: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeChart, setActiveChart] = useState<ChartType>('occupancy');

  const stats = [
    {
      label: t('showcase.metrics.occupancy'),
      value: '88.4%',
      change: '+4.2%',
      isPositive: true,
      icon: <Percent className="w-5 h-5 text-accent" />,
      bg: 'bg-accent/10',
    },
    {
      label: t('showcase.metrics.revpar'),
      value: '$142.50',
      change: '+12.4%',
      isPositive: true,
      icon: <DollarSign className="w-5 h-5 text-emerald-500" />,
      bg: 'bg-emerald-500/10',
    },
    {
      label: t('showcase.metrics.adr'),
      value: '$161.20',
      change: '+6.1%',
      isPositive: true,
      icon: <Hotel className="w-5 h-5 text-amber-500" />,
      bg: 'bg-amber-500/10',
    },
    {
      label: t('showcase.metrics.activeGuests'),
      value: '254',
      change: 'Live Now',
      isPositive: true,
      icon: <CalendarCheck className="w-5 h-5 text-indigo-500" />,
      bg: 'bg-indigo-500/10',
    },
  ];

  return (
    <section id="showcase" className="py-24 bg-gradient-to-b from-brandBg-light via-slate-100/30 to-brandBg-light dark:from-brandBg-dark dark:via-slate-950/20 dark:to-brandBg-dark relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-96 h-96 rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t('showcase.title')}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {t('showcase.subtitle')}
          </p>
        </div>

        {/* Live Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-start">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-white/50 dark:bg-slate-900/40 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 max-w-[80%] leading-tight">
                  {stat.label}
                </span>
                <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {stat.value}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  stat.change.includes('+') ? 'bg-success/15 text-success' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showcase Device Container */}
        <GlassCard hoverEffect={false} className="p-4 md:p-6 border-accent/15 max-w-5xl mx-auto shadow-2xl">
          {/* Laptop Browser Header Chrome */}
          <div className="flex justify-between items-center pb-4 border-b border-slate-200/50 dark:border-slate-800/50 mb-6">
            {/* Window control buttons */}
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 hover:brightness-95 transition-all cursor-pointer" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 hover:brightness-95 transition-all cursor-pointer" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 hover:brightness-95 transition-all cursor-pointer" />
            </div>

            {/* Simulated URL Bar */}
            <div className="w-1/2 md:w-1/3 py-1 px-3 rounded-lg bg-slate-100 dark:bg-slate-950/60 border border-slate-200/45 dark:border-slate-800/50 text-[10px] md:text-xs text-slate-400 dark:text-slate-500 font-medium select-none truncate">
              {isRtl ? 'https://app.ewan-pms.com/ar/analytics' : 'https://app.ewan-pms.com/dashboard/analytics'}
            </div>

            {/* Action toggles (Tabs) */}
            <div className="flex gap-1 bg-slate-100 dark:bg-slate-950/80 p-0.5 rounded-lg border border-slate-200/40 dark:border-slate-800/50">
              <button
                onClick={() => setActiveChart('occupancy')}
                className={`px-3 py-1 rounded text-[10px] md:text-xs font-bold transition-all ${
                  activeChart === 'occupancy'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent'
                }`}
              >
                {t('showcase.occupancyChart').split(' ')[0]}
              </button>
              <button
                onClick={() => setActiveChart('revenue')}
                className={`px-3 py-1 rounded text-[10px] md:text-xs font-bold transition-all ${
                  activeChart === 'revenue'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent'
                }`}
              >
                {t('showcase.revenueChart').split(' ')[0]}
              </button>
              <button
                onClick={() => setActiveChart('bookings')}
                className={`px-3 py-1 rounded text-[10px] md:text-xs font-bold transition-all ${
                  activeChart === 'bookings'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent'
                }`}
              >
                {t('showcase.bookingsChart').split(' ')[0]}
              </button>
            </div>
          </div>

          {/* Interactive Chart Visualizer */}
          <div className="relative">
            <InteractiveChart type={activeChart} />
          </div>
        </GlassCard>

      </div>
    </section>
  );
};
