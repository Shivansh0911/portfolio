import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const letters = ['S', 'S', 'O'];

  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ background: '#050816' }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="font-display font-extrabold text-[80px] leading-none"
              style={{ color: '#915EFF' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0, 0, 1, 0], scale: [0.8, 0.8, 0.8, 1.2, 2] }}
          transition={{ delay: 1.4, duration: 0.6, ease: 'easeIn', times: [0, 0.4, 0.6, 0.8, 1] }}
        >
          <div
            className="w-40 h-40 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(145,94,255,0.3) 0%, transparent 70%)' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
