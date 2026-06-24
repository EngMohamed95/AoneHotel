import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, CalendarRange, Shuffle, TrendingUp, Users2,
  Receipt, Utensils, Box, ShieldCheck, Wrench, BarChart3,
  CheckCircle2, ArrowRight, ArrowLeft
} from 'lucide-react';

type CategoryKey =
  | 'pms'
  | 'bookingEngine'
  | 'channelManager'
  | 'revenue'
  | 'crm'
  | 'accounting'
  | 'pos'
  | 'inventory'
  | 'hr'
  | 'maintenance'
  | 'reports';

export const Features: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<CategoryKey>('pms');

  // Categories list with corresponding Lucide icons
  const categories: { key: CategoryKey; icon: React.ReactNode }[] = [
    { key: 'pms', icon: <Building2 className="w-6 h-6" /> },
    { key: 'bookingEngine', icon: <CalendarRange className="w-6 h-6" /> },
    { key: 'channelManager', icon: <Shuffle className="w-6 h-6" /> },
    { key: 'revenue', icon: <TrendingUp className="w-6 h-6" /> },
    { key: 'crm', icon: <Users2 className="w-6 h-6" /> },
    { key: 'accounting', icon: <Receipt className="w-6 h-6" /> },
    { key: 'pos', icon: <Utensils className="w-6 h-6" /> },
    { key: 'inventory', icon: <Box className="w-6 h-6" /> },
    { key: 'hr', icon: <ShieldCheck className="w-6 h-6" /> },
    { key: 'maintenance', icon: <Wrench className="w-6 h-6" /> },
    { key: 'reports', icon: <BarChart3 className="w-6 h-6" /> },
  ];

  // Helper to extract feature details dynamically from translations, including category images
  const getActiveDetails = (key: CategoryKey) => {
    switch (key) {
      case 'pms':
        return {
          title: t('features.pms.title'),
          desc: t('features.pms.desc'),
          img: '/images/reception.png',
          items: [
            { t: t('features.pms.f1'), d: t('features.pms.f1d') },
            { t: t('features.pms.f2'), d: t('features.pms.f2d') },
            { t: t('features.pms.f3'), d: t('features.pms.f3d') },
            { t: t('features.pms.f4'), d: t('features.pms.f4d') },
            { t: t('features.pms.f5'), d: t('features.pms.f5d') },
            { t: t('features.pms.f6'), d: t('features.pms.f6d') },
          ]
        };
      case 'bookingEngine':
        return {
          title: t('features.bookingEngine.title'),
          desc: t('features.bookingEngine.desc'),
          img: '/images/room.png',
          items: [
            { t: t('features.bookingEngine.f1'), d: t('features.bookingEngine.f1d') },
            { t: t('features.bookingEngine.f2'), d: t('features.bookingEngine.f2d') },
            { t: t('features.bookingEngine.f3'), d: t('features.bookingEngine.f3d') },
          ]
        };
      case 'channelManager':
        return {
          title: t('features.channelManager.title'),
          desc: t('features.channelManager.desc'),
          img: '/images/channel_manager.png',
          items: [
            { t: t('features.channelManager.f1'), d: t('features.channelManager.f1d') },
            { t: t('features.channelManager.f2'), d: t('features.channelManager.f2d') },
            { t: t('features.channelManager.f3'), d: t('features.channelManager.f3d') },
            { t: t('features.channelManager.f4'), d: t('features.channelManager.f4d') },
          ]
        };
      case 'revenue':
        return {
          title: t('features.revenue.title'),
          desc: t('features.revenue.desc'),
          img: '/images/revenue.png',
          items: [
            { t: t('features.revenue.f1'), d: t('features.revenue.f1d') },
            { t: t('features.revenue.f2'), d: t('features.revenue.f2d') },
            { t: t('features.revenue.f3'), d: t('features.revenue.f3d') },
          ]
        };
      case 'crm':
        return {
          title: t('features.crm.title'),
          desc: t('features.crm.desc'),
          img: '/images/crm.png',
          items: [
            { t: t('features.crm.f1'), d: t('features.crm.f1d') },
            { t: t('features.crm.f2'), d: t('features.crm.f2d') },
            { t: t('features.crm.f3'), d: t('features.crm.f3d') },
          ]
        };
      case 'accounting':
        return {
          title: t('features.accounting.title'),
          desc: t('features.accounting.desc'),
          img: '/images/accounting.png',
          items: [
            { t: t('features.accounting.f1'), d: t('features.accounting.f1d') },
            { t: t('features.accounting.f2'), d: t('features.accounting.f2d') },
            { t: t('features.accounting.f3'), d: t('features.accounting.f3d') },
            { t: t('features.accounting.f4'), d: t('features.accounting.f4d') },
          ]
        };
      case 'pos':
        return {
          title: t('features.pos.title'),
          desc: t('features.pos.desc'),
          img: '/images/dining.png',
          items: [
            { t: t('features.pos.f1'), d: t('features.pos.f1d') },
            { t: t('features.pos.f2'), d: t('features.pos.f2d') },
            { t: t('features.pos.f3'), d: t('features.pos.f3d') },
            { t: t('features.pos.f4'), d: t('features.pos.f4d') },
          ]
        };
      case 'inventory':
        return {
          title: t('features.inventory.title'),
          desc: t('features.inventory.desc'),
          img: '/images/inventory.png',
          items: [
            { t: t('features.inventory.f1'), d: t('features.inventory.f1d') },
            { t: t('features.inventory.f2'), d: t('features.inventory.f2d') },
            { t: t('features.inventory.f3'), d: t('features.inventory.f3d') },
          ]
        };
      case 'hr':
        return {
          title: t('features.hr.title'),
          desc: t('features.hr.desc'),
          img: '/images/hr.png',
          items: [
            { t: t('features.hr.f1'), d: t('features.hr.f1d') },
            { t: t('features.hr.f2'), d: t('features.hr.f2d') },
            { t: t('features.hr.f3'), d: t('features.hr.f3d') },
            { t: t('features.hr.f4'), d: t('features.hr.f4d') },
          ]
        };
      case 'maintenance':
        return {
          title: t('features.maintenance.title'),
          desc: t('features.maintenance.desc'),
          img: '/images/maintenance.png',
          items: [
            { t: t('features.maintenance.f1'), d: t('features.maintenance.f1d') },
            { t: t('features.maintenance.f2'), d: t('features.maintenance.f2d') },
            { t: t('features.maintenance.f3'), d: t('features.maintenance.f3d') },
          ]
        };
      case 'reports':
        return {
          title: t('features.reports.title'),
          desc: t('features.reports.desc'),
          img: '/images/reports.png',
          items: [
            { t: t('features.reports.f1'), d: t('features.reports.f1d') },
            { t: t('features.reports.f2'), d: t('features.reports.f2d') },
            { t: t('features.reports.f3'), d: t('features.reports.f3d') },
            { t: t('features.reports.f4'), d: t('features.reports.f4d') },
          ]
        };
      default:
        return { title: '', desc: '', img: '', items: [] };
    }
  };

  const details = getActiveDetails(activeTab);

  return (
    <section id="features" className="py-24 bg-brandBg-light dark:bg-brandBg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Categories Tab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Sidebar Column: Tab Buttons */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-thin scrollbar-thumb-slate-350 dark:scrollbar-thumb-slate-800">
            {categories.map((cat) => {
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`
                    flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 text-start w-auto lg:w-full select-none
                    ${
                      isActive
                        ? 'bg-accent text-white shadow-lg shadow-accent/20 translate-x-1 rtl:-translate-x-1'
                        : 'bg-white/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }
                  `}
                >
                  {cat.icon}
                  <span>{t(`features.categories.${cat.key}`)}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Active Panel */}
          <div className="lg:col-span-8 min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: isRtl ? -15 : 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? 15 : -15 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard hoverEffect={false} className="p-6 md:p-8 border-accent/10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start">
                    
                    {/* Content Section */}
                    <div className="lg:col-span-7 flex flex-col gap-5">
                      <div>
                        {/* Module Badge */}
                        <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">
                          {t(`features.categories.${activeTab}`)}
                        </span>
                        {/* Module Title */}
                        <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-slate-900 dark:text-white">
                          {details.title}
                        </h3>
                        {/* Module Description */}
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {details.desc}
                        </p>
                      </div>

                      <div className="border-t border-slate-200/60 dark:border-slate-800/40 my-1" />

                      {/* Sub-features bullet grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {details.items.map((item, index) => (
                          <div key={index} className="flex gap-2 text-start">
                            <div className="flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-success" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                                {item.t}
                              </h4>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                {item.d}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-2 flex justify-start">
                        <a
                          href="#pricing"
                          className="group flex items-center gap-1 text-xs font-bold text-accent hover:text-accent-dark transition-all"
                        >
                          <span>{t('nav.demo')}</span>
                          {isRtl ? (
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                          ) : (
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          )}
                        </a>
                      </div>
                    </div>

                    {/* Image illustration column */}
                    <div className="lg:col-span-5 w-full aspect-[4/3] lg:h-full lg:aspect-auto rounded-xl overflow-hidden border border-slate-200/35 dark:border-slate-800/30 shadow-md relative group">
                      <img
                        src={details.img}
                        alt={details.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent pointer-events-none" />
                    </div>

                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
