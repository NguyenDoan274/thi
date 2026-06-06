import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, X, Smile } from 'lucide-react';
import { CONFIG } from '../config';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-16 px-4 flex flex-col items-center justify-center text-center overflow-hidden z-10">
      {/* Sparkles decorations inside Hero */}
      <div className="absolute top-20 left-1/4 animate-bounce-slow text-yellow-400">
        <Sparkles size={20} fill="currentColor" />
      </div>
      <div className="absolute top-40 right-1/4 animate-pulse-slow text-pink-400">
        <Heart size={20} fill="currentColor" />
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Cute tag */}
        <span className="px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold tracking-wide shadow-sm border border-pink-200 mb-6 flex items-center gap-1.5">
          <Smile size={16} /> Gửi ngàn lời chúc thương mến
        </span>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4 font-sans">
          Cố lên nhé, <span className="text-pink-500 relative inline-block">
            {CONFIG.friendName}
            {/* Curved line under name */}
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" stroke="#ec4899" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </span>!
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 font-medium mb-8 max-w-lg mt-2">
          Kỳ thi môn <span className="text-purple-600 font-bold">{CONFIG.subjectName}</span> chỉ là một thử thách nhỏ thôi ✨
        </p>

        {/* Main Illustration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 mb-8 bg-white/40 p-4 rounded-full border border-pink-100 shadow-md backdrop-blur-sm flex items-center justify-center"
        >
          <img
            src="/study_buddy.png"
            alt="Cổ vũ thi cử"
            className="w-full h-full object-contain rounded-full"
          />
          {/* Decorative small badges */}
          <div className="absolute -top-2 -right-2 bg-yellow-100 p-2 rounded-full border border-yellow-300 shadow-sm animate-spin-slow">
            🍀
          </div>
          <div className="absolute -bottom-2 -left-2 bg-pink-100 p-2 rounded-full border border-pink-300 shadow-sm">
            💯
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-pink-200/50 hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-pink-300"
          onClick={() => setIsOpen(true)}
        >
          <span>Nhận lời chúc may mắn</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            💌
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Greeting Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-gradient-to-tr from-pink-50 to-purple-50 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-pink-200 shadow-2xl z-10 overflow-hidden"
            >
              {/* Top decoration strip */}
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-300 via-purple-300 to-teal-300" />
              
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 bg-white border border-pink-100 text-slate-400 hover:text-slate-600 rounded-full transition-colors shadow-sm"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col items-center text-center mt-2">
                {/* Cute Icon */}
                <div className="w-16 h-16 bg-pink-100 border border-pink-200 rounded-full flex items-center justify-center text-3xl mb-4 shadow-sm animate-bounce">
                  💝
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  Gửi {CONFIG.friendName} thân thương!
                </h3>

                {/* Hand-written paper like design */}
                <div className="bg-white/95 rounded-2xl p-5 border border-pink-100 shadow-inner text-slate-700 text-left relative overflow-hidden">
                  {/* Watermark clover */}
                  <div className="absolute right-2 bottom-2 text-green-100 text-7xl font-bold select-none pointer-events-none">
                    🍀
                  </div>
                  <p className="relative z-10 leading-relaxed font-semibold italic text-slate-600 font-sans">
                    "{CONFIG.mainMessage}"
                  </p>
                </div>

                {/* Decorative heart inside modal */}
                <div className="mt-5 flex gap-2 justify-center">
                  <span className="text-pink-400 animate-pulse">💖</span>
                  <span className="text-purple-400 animate-pulse delay-75">💜</span>
                  <span className="text-yellow-400 animate-pulse delay-150">💛</span>
                </div>

                {/* Close CTA */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-6 py-2.5 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all border border-pink-400"
                >
                  E nhận được rồi! 🌸
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
