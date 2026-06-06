import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Cloud, BookOpen, GraduationCap } from 'lucide-react';

export default function DecorativeElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Cloud 1 */}
      <motion.div
        className="absolute top-16 left-6 md:left-24 text-blue-200 opacity-60 hidden sm:block"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <Cloud size={64} fill="currentColor" />
      </motion.div>

      {/* Floating Cloud 2 */}
      <motion.div
        className="absolute top-96 right-8 md:right-28 text-blue-200 opacity-50 hidden sm:block"
        animate={{ y: [0, -15, 0], x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
      >
        <Cloud size={80} fill="currentColor" />
      </motion.div>

      {/* Floating Heart 1 */}
      <motion.div
        className="absolute top-1/4 left-10 md:left-40 text-pink-300 opacity-70"
        animate={{ 
          y: [0, -12, 0], 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 0.95, 1]
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <Heart size={28} fill="currentColor" className="drop-shadow-sm" />
      </motion.div>

      {/* Floating Heart 2 */}
      <motion.div
        className="absolute bottom-1/4 right-10 md:right-48 text-pink-300 opacity-75"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, -15, 15, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
      >
        <Heart size={32} fill="currentColor" className="drop-shadow-sm" />
      </motion.div>

      {/* Floating Sparkles 1 */}
      <motion.div
        className="absolute top-10 right-20 text-yellow-300 opacity-80"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Sparkles size={24} fill="currentColor" />
      </motion.div>

      {/* Floating Sparkles 2 */}
      <motion.div
        className="absolute bottom-1/3 left-12 md:left-32 text-yellow-300 opacity-80"
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          rotate: [0, -90, 0]
        }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
      >
        <Sparkles size={20} fill="currentColor" />
      </motion.div>

      {/* Floating Book */}
      <motion.div
        className="absolute bottom-16 left-6 md:left-24 text-purple-200 opacity-60 hidden lg:block"
        animate={{ 
          y: [0, -18, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
      >
        <BookOpen size={48} className="drop-shadow-sm" />
      </motion.div>

      {/* Floating Graduation Cap */}
      <motion.div
        className="absolute top-1/2 right-12 md:right-36 text-indigo-200 opacity-60 hidden lg:block"
        animate={{ 
          y: [0, -14, 0],
          rotate: [0, -8, 8, 0]
        }}
        transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 2.5 }}
      >
        <GraduationCap size={52} className="drop-shadow-sm" />
      </motion.div>
    </div>
  );
}
