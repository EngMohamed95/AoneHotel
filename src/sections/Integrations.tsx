import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { motion } from 'framer-motion';
import { Link2 } from 'lucide-react';

export const Integrations: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const partnerLogos = [
    {
      name: 'Airbnb',
      category: isRtl ? 'قناة حجز' : 'Channel Manager',
      status: t('integrations.connected'),
      logo: <svg className="w-8 h-8 fill-current text-rose-500" viewBox="0 0 24 24">
          <path d="M12 2.1c-.2 0-.4.1-.5.2L2.7 12.5c-.3.3-.3.8 0 1.1s.8.3 1.1 0L12 5.1l8.2 8.5c.3.3.8.3 1.1 0s.3-.8 0-1.1L12.5 2.3c-.1-.1-.3-.2-.5-.2zm0 6c-2.3 0-4.2 1.9-4.2 4.2 0 1.8 1.1 3.3 2.7 3.9l-1.3 3.9c-.1.3.1.6.4.7.1 0 .2 0 .3-.1l3.5-2.6c1.1.2 2.3.2 3.4 0l3.5 2.6c.2.1.4.1.5-.1.2-.2.3-.5.1-.7l-1.3-3.9c1.6-.6 2.7-2.1 2.7-3.9 0-2.3-1.9-4.2-4.2-4.2zm0 1.5c1.5 0 2.7 1.2 2.7 2.7 0 1-.5 1.9-1.3 2.4l-.5.3v2c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-2l-.5-.3c-.8-.5-1.3-1.4-1.3-2.4 0-1.5 1.2-2.7 2.7-2.7z" />
        </svg>
    },
    {
      name: 'Booking.com',
      category: isRtl ? 'قناة حجز' : 'Channel Manager',
      status: t('integrations.connected'),
      logo: <svg className="w-12 h-6 fill-current text-blue-700 dark:text-blue-400" viewBox="0 0 120 30">
          <text x="0" y="20" className="text-lg font-black italic tracking-tighter">Booking</text>
          <rect x="75" y="2" width="22" height="22" rx="4" className="text-accent fill-current" />
          <text x="81" y="18" className="text-xs font-black fill-white">.com</text>
        </svg>
    },
    {
      name: 'Expedia',
      category: isRtl ? 'قناة حجز' : 'Channel Manager',
      status: t('integrations.connected'),
      logo: <svg className="w-10 h-8 fill-current text-amber-500" viewBox="0 0 40 32">
          <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <path d="M16 6 L22 18 L10 18 Z" />
          <text x="29" y="22" className="text-xs font-black fill-slate-900 dark:fill-white">E</text>
        </svg>
    },
    {
      name: 'Agoda',
      category: isRtl ? 'قناة حجز' : 'Channel Manager',
      status: t('integrations.connected'),
      logo: <svg className="w-12 h-6 fill-current text-rose-550" viewBox="0 0 120 30">
          <text x="0" y="20" className="text-lg font-black tracking-widest text-slate-800 dark:text-white">agoda</text>
          <circle cx="95" cy="12" r="4" className="text-accent fill-current" />
          <circle cx="107" cy="14" r="5" className="text-success fill-current" />
        </svg>
    },
    {
      name: 'Stripe',
      category: isRtl ? 'بوابة دفع' : 'Payment Gateway',
      status: t('integrations.connected'),
      logo: <svg className="w-12 h-8 fill-current text-indigo-500" viewBox="0 0 120 32">
          <text x="0" y="25" className="text-2xl font-black font-sans tracking-tight">stripe</text>
        </svg>
    },
    {
      name: 'PayPal',
      category: isRtl ? 'بوابة دفع' : 'Payment Gateway',
      status: t('integrations.connected'),
      logo: <svg className="w-12 h-6 fill-current text-blue-500" viewBox="0 0 120 30">
          <text x="0" y="20" className="text-lg font-black tracking-tight italic text-blue-900 dark:text-blue-300">Pay</text>
          <text x="32" y="20" className="text-lg font-black tracking-tight italic text-cyan-500">Pal</text>
        </svg>
    },
    {
      name: 'Google Hotel',
      category: isRtl ? 'محرك حجز' : 'Meta Search',
      status: t('integrations.connected'),
      logo: <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
    },
    {
      name: 'WhatsApp',
      category: isRtl ? 'تنبيهات النزلاء' : 'Messaging API',
      status: t('integrations.connected'),
      logo: <svg className="w-8 h-8 fill-current text-emerald-500 animate-pulse-slow" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.07 1 11.999 1c-5.439 0-9.863 4.373-9.867 9.801-.001 1.73.487 3.42 1.413 4.908l-.993 3.629 3.504-.984zm9.362-5.482c-.253-.127-1.498-.738-1.73-.822-.232-.085-.4-.128-.569.127-.169.254-.654.822-.802.991-.148.169-.296.19-.549.063-.253-.127-1.07-.395-2.037-1.257-.753-.672-1.261-1.503-1.409-1.757-.148-.254-.016-.391.111-.518.114-.114.253-.296.38-.444.127-.148.169-.254.253-.423.085-.169.042-.317-.021-.444-.064-.127-.569-1.373-.78-1.88-.205-.493-.412-.426-.569-.434-.148-.007-.317-.008-.486-.008-.169 0-.444.063-.676.317-.232.254-.886.866-.886 2.112s.907 2.446 1.034 2.615c.127.169 1.785 2.726 4.323 3.82.604.26 1.076.416 1.443.532.607.192 1.159.165 1.597.1.488-.073 1.498-.612 1.709-1.204.21-.592.21-1.1.148-1.204-.064-.104-.232-.169-.486-.296z" />
        </svg>
    },
    {
      name: isRtl ? 'البريد الإلكتروني' : 'Email Systems',
      category: isRtl ? 'نظام تواصل' : 'Automated Mail',
      status: t('integrations.connected'),
      logo: <svg className="w-8 h-8 fill-current text-slate-700 dark:text-slate-300" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-brandBg-light dark:bg-brandBg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Descriptive text */}
          <div className="lg:col-span-4 text-center lg:text-start flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold text-accent mb-4">
              <Link2 className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Direct Sync APIs</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              {t('integrations.title')}
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              {t('integrations.desc')}
            </p>

            <a
              href="#pricing"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-750 text-white font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {t('nav.demo')}
            </a>
          </div>

          {/* Right Column: Grid of integrated tools */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-start">
              {partnerLogos.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <GlassCard
                    hoverEffect={true}
                    className="p-5 border-slate-200/40 dark:border-slate-800/30 flex flex-col justify-between min-h-[140px]"
                  >
                    {/* Logo container */}
                    <div className="h-10 flex items-center mb-3">
                      {partner.logo}
                    </div>
                    
                    {/* Details */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5 leading-tight">
                        {partner.name}
                      </h4>
                      <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-2">
                        {partner.category}
                      </p>
                      {/* Connection status badge */}
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        <span className="text-[9px] font-extrabold text-success uppercase tracking-wider">
                          {partner.status}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
