import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.round((scrollTop / docHeight) * 100);
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', updateScrollPercentage);
    return () => window.removeEventListener('scroll', updateScrollPercentage);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left z-[1000]"
        style={{ scaleX }}
      />

      {/* Circular progress indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollPercentage > 5 ? 1 : 0, scale: scrollPercentage > 5 ? 1 : 0 }}
        className="fixed bottom-24 right-6 z-[998] hidden md:flex"
      >
        <div className="relative w-12 h-12">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="3"
              fill="transparent"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray="125.6"
              style={{
                strokeDashoffset: 125.6 - (125.6 * scrollPercentage) / 100,
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
            {scrollPercentage}%
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
