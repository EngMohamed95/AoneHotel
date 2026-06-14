import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface ChartProps {
  type: 'occupancy' | 'revenue' | 'bookings';
}

export const InteractiveChart: React.FC<ChartProps> = ({ type }) => {
  const { t, isRtl } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // 7 days data
  const daysEN = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysAR = ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];
  const days = isRtl ? daysAR : daysEN;

  const chartData = {
    occupancy: {
      thisWeek: [62, 70, 68, 85, 92, 88, 95],
      lastWeek: [55, 60, 58, 65, 70, 72, 75],
      min: 0,
      max: 100,
      unit: '%',
      color: '#3B82F6', // Accent
    },
    revenue: {
      thisWeek: [4500, 5800, 5200, 7800, 9400, 8900, 11200],
      lastWeek: [3800, 4200, 4100, 5900, 7200, 6800, 8100],
      min: 0,
      max: 12000,
      unit: '$',
      color: '#10B981', // Success
    },
    bookings: {
      thisWeek: [12, 19, 15, 26, 32, 28, 36],
      lastWeek: [8, 12, 10, 18, 22, 20, 25],
      min: 0,
      max: 40,
      unit: '',
      color: '#6366F1', // Indigo
    }
  };

  const current = chartData[type];
  const width = 600;
  const height = 240;
  const paddingX = 40;
  const paddingY = 30;

  // Helpers to map data coordinates
  const getCoordinates = (data: number[]) => {
    const chartWidth = width - paddingX * 2;
    const chartHeight = height - paddingY * 2;
    
    return data.map((val, idx) => {
      // If RTL, we inverse the X alignment sequence so timeline flows right-to-left
      const stepIdx = isRtl ? (data.length - 1 - idx) : idx;
      const x = paddingX + (stepIdx / (data.length - 1)) * chartWidth;
      const y = height - paddingY - ((val - current.min) / (current.max - current.min)) * chartHeight;
      return { x, y, value: val };
    });
  };

  const thisWeekCoords = getCoordinates(current.thisWeek);
  const lastWeekCoords = getCoordinates(current.lastWeek);

  // Generate SVG Line Path
  const getLinePath = (coords: { x: number; y: number }[]) => {
    return coords.reduce((path, coord, idx) => {
      return idx === 0 ? `M ${coord.x} ${coord.y}` : `${path} L ${coord.x} ${coord.y}`;
    }, '');
  };

  // Generate Area Path (closing the shape at the bottom)
  const getAreaPath = (coords: { x: number; y: number }[]) => {
    if (coords.length === 0) return '';
    const linePath = getLinePath(coords);
    const chartWidth = width - paddingX * 2;
    const startX = isRtl ? paddingX + chartWidth : paddingX;
    const endX = isRtl ? paddingX : paddingX + chartWidth;
    return `${linePath} L ${endX} ${height - paddingY} L ${startX} ${height - paddingY} Z`;
  };

  return (
    <div className="w-full bg-white/50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md relative">
      {/* Chart Title and Toggles */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t('showcase.chartLegend.thisWeek')}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t('showcase.chartLegend.lastWeek')}
            </span>
          </div>
        </div>

        {/* Dynamic Display value on hover */}
        <AnimatePresence>
          {hoveredIdx !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -5 }}
              className="px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg shadow-md"
            >
              {days[hoveredIdx]}: {type === 'revenue' ? '$' : ''}
              {current.thisWeek[hoveredIdx]}
              {current.unit}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SVG Canvas */}
      <div className="relative overflow-visible">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          {/* Gradients */}
          <defs>
            <linearGradient id="areaGradThis" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={current.color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={current.color} stopOpacity="0.00" />
            </linearGradient>
            <linearGradient id="areaGradLast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.00" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
            const y = paddingY + ratio * (height - paddingY * 2);
            return (
              <line
                key={i}
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                className="stroke-slate-200/60 dark:stroke-slate-800/40"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            );
          })}

          {/* Draw Last Week (Background Line) */}
          {type !== 'bookings' && (
            <>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                d={getLinePath(lastWeekCoords)}
                fill="none"
                stroke="#94A3B8"
                strokeWidth={2}
                strokeDasharray="3 3"
                opacity={0.6}
              />
              <path
                d={getAreaPath(lastWeekCoords)}
                fill="url(#areaGradLast)"
                className="pointer-events-none"
              />
            </>
          )}

          {/* Draw This Week (Foreground Line) */}
          {type !== 'bookings' ? (
            <>
              {/* Area */}
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                d={getAreaPath(thisWeekCoords)}
                fill="url(#areaGradThis)"
                className="pointer-events-none"
              />
              {/* Path line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                d={getLinePath(thisWeekCoords)}
                fill="none"
                stroke={current.color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          ) : (
            /* Bar Chart for Bookings */
            thisWeekCoords.map((coord, idx) => {
              const barWidth = 24;
              const chartHeight = height - paddingY * 2;
              const yZero = height - paddingY;
              const barHeight = yZero - coord.y;
              
              // Last week bar variables
              const lastWeekVal = current.lastWeek[idx];
              const lastWeekY = height - paddingY - ((lastWeekVal - current.min) / (current.max - current.min)) * chartHeight;
              const lastWeekHeight = yZero - lastWeekY;

              return (
                <g key={idx} className="group cursor-pointer">
                  {/* Last week bar (bg) */}
                  <motion.rect
                    initial={{ height: 0, y: yZero }}
                    animate={{ height: lastWeekHeight, y: lastWeekY }}
                    transition={{ duration: 1, delay: idx * 0.05 }}
                    x={coord.x - barWidth - 2}
                    width={barWidth / 2}
                    className="fill-slate-300 dark:fill-slate-700 opacity-60"
                    rx={2}
                  />

                  {/* This week bar (fg) */}
                  <motion.rect
                    initial={{ height: 0, y: yZero }}
                    animate={{ height: barHeight, y: coord.y }}
                    transition={{ duration: 1.2, delay: idx * 0.05, ease: 'easeOut' }}
                    x={coord.x - barWidth / 2}
                    width={barWidth}
                    fill={current.color}
                    rx={4}
                    className="transition-all duration-300 hover:brightness-110"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  />
                </g>
              );
            })
          )}

          {/* Interactive Hover Dots for Line Chart */}
          {type !== 'bookings' &&
            thisWeekCoords.map((coord, idx) => (
              <g key={idx} className="cursor-pointer">
                {/* Large invisible catch circle for better UX */}
                <circle
                  cx={coord.x}
                  cy={coord.y}
                  r={15}
                  className="fill-transparent"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
                {/* Visible animated dot */}
                <circle
                  cx={coord.x}
                  cy={coord.y}
                  r={hoveredIdx === idx ? 6 : 4}
                  fill={current.color}
                  className="stroke-white dark:stroke-slate-900 transition-all duration-200"
                  strokeWidth={2}
                />
              </g>
            ))}

          {/* X-Axis Labels */}
          {days.map((day, idx) => {
            // Place labels aligned with coords
            // For lines, label X is coord.x. For bars, label X is centered.
            const x = paddingX + (isRtl ? (days.length - 1 - idx) : idx) / (days.length - 1) * (width - paddingX * 2);
            
            return (
              <text
                key={idx}
                x={x}
                y={height - 8}
                textAnchor="middle"
                className="fill-slate-400 dark:fill-slate-500 text-[10px] font-semibold tracking-wider"
              >
                {day}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
