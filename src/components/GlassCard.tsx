import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -6, scale: 1.01 } : undefined}
      className={`
        relative overflow-hidden rounded-2xl
        border border-white/20 dark:border-slate-800/40
        bg-white/70 dark:bg-slate-900/60
        backdrop-blur-xl
        shadow-xl shadow-slate-200/50 dark:shadow-black/30
        transition-all duration-300
        ${className}
      `}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute -inset-px bg-gradient-to-tr from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
};
