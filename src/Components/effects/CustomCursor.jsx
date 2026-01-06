import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setCursorText('Click');
      } else if (target.dataset.cursorText) {
        setIsHovering(true);
        setCursorText(target.dataset.cursorText);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add listeners for interactive elements
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-cyan-400/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Cursor text */}
      <AnimatePresence>
        {isHovering && cursorText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed pointer-events-none z-[9999] text-xs font-bold text-cyan-400"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y + 20,
            }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trailing particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 bg-cyan-400/30 rounded-full pointer-events-none z-[9997]"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          }}
          transition={{
            type: 'spring',
            stiffness: 150 - i * 30,
            damping: 15 + i * 5,
            mass: 0.1 + i * 0.1,
          }}
        />
      ))}

      {/* Hide default cursor globally */}
      <style>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
