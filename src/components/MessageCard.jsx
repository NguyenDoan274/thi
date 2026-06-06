import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CONFIG } from '../config';

export default function MessageCard() {
  const words = CONFIG.mainMessage.split(" ");

  // Framer motion variants for word-by-word reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto z-10 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 font-sans mb-2 flex items-center justify-center gap-2">
          Thư Gửi {CONFIG.friendName} 💌
        </h2>
        <p className="text-slate-500 font-medium text-sm">
          Nhấp nháy một chút tin nhắn đáng yêu này để sạc đầy năng lượng nha!
        </p>
      </div>

      {/* Notebook Message Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-10 pt-12 overflow-hidden"
      >
        {/* Decorative Washi Tape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-32 h-8 bg-yellow-100/80 border border-yellow-200/60 shadow-sm border-dashed rotate-2 flex items-center justify-center z-20">
          <span className="text-[10px] text-yellow-600 font-bold tracking-widest uppercase select-none">
            with love ♥
          </span>
        </div>

        {/* Notebook Spiral holes on the left */}
        <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-around py-4 w-4 pointer-events-none opacity-40 z-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-slate-200 rounded-full border border-slate-300 shadow-inner" />
          ))}
        </div>

        {/* Notebook Vertical Red Margin Line */}
        <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-red-200" />

        {/* Paper content with lines */}
        <div className="pl-6 sm:pl-10 notebook-paper text-slate-700 font-sans text-lg sm:text-xl font-semibold">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-x-2 gap-y-1"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Floating Heart at the bottom right */}
        <div className="flex justify-end mt-8 items-center gap-1.5 text-pink-500 font-semibold pr-2">
          <span className="text-sm">Thương gửi em</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <Heart size={18} fill="currentColor" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
