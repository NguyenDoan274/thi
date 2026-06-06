import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export default function LuckyBoost() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [isFirstClick, setIsFirstClick] = useState(true);

  const handleBoost = () => {
    // Canvas Confetti effect
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffb6c1', '#c084fc', '#6ee7b7', '#fde047', '#60a5fa']
    });

    // Randomize quote but avoid repeating the current one if possible
    const quotes = CONFIG.luckyQuotes;
    let newIndex = Math.floor(Math.random() * quotes.length);
    
    if (currentQuote) {
      while (quotes[newIndex] === currentQuote) {
        newIndex = Math.floor(Math.random() * quotes.length);
      }
    }

    setCurrentQuote(quotes[newIndex]);
    setIsFirstClick(false);
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto z-10 relative">
      <div className="bg-gradient-to-br from-yellow-50/90 via-amber-50/50 to-orange-50/90 border border-yellow-100 rounded-3xl p-8 sm:p-10 shadow-lg backdrop-blur-sm text-center">
        
        {/* Header */}
        <div className="mb-8">
          <span className="text-4xl animate-bounce-slow inline-block">🍀</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-sans mt-2 mb-2">
            Lucky Boost - Tiếp Sức May Mắn
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            Bấm vào cỏ 4 lá để rút một chiếc thẻ may mắn chứa lời chúc ngẫu nhiên từ vũ trụ!
          </p>
        </div>

        {/* Pulsing Clover Button */}
        <div className="flex justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 4px 6px -1px rgba(251, 191, 36, 0.2), 0 2px 4px -1px rgba(251, 191, 36, 0.1)",
                "0 10px 15px -3px rgba(251, 191, 36, 0.4), 0 4px 6px -2px rgba(251, 191, 36, 0.2)",
                "0 4px 6px -1px rgba(251, 191, 36, 0.2), 0 2px 4px -1px rgba(251, 191, 36, 0.1)"
              ]
            }}
            transition={{ 
              scale: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
              boxShadow: { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
            }}
            onClick={handleBoost}
            className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-tr from-emerald-400 to-green-300 hover:from-emerald-500 hover:to-green-400 text-white rounded-full flex items-center justify-center text-4xl sm:text-5xl shadow-xl transition-all border-4 border-white cursor-pointer relative"
          >
            🍀
            <span className="absolute -top-1 -right-1 text-base animate-ping">✨</span>
          </motion.button>
        </div>

        {/* Display Active Quote */}
        <div className="min-h-[90px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isFirstClick ? (
              <motion.p
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="text-slate-400 italic font-semibold text-sm"
              >
                Nhấp nút cỏ bốn lá ở trên để nhận lời chúc...
              </motion.p>
            ) : (
              <motion.div
                key={currentQuote}
                initial={{ scale: 0.8, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -15 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white px-6 py-5 rounded-2xl border border-yellow-200/60 shadow-md max-w-md w-full relative"
              >
                {/* Decorative border details */}
                <div className="absolute top-2 left-2 text-yellow-300 text-xs">★</div>
                <div className="absolute bottom-2 right-2 text-yellow-300 text-xs">★</div>
                
                <p className="text-amber-800 font-extrabold text-base sm:text-lg leading-relaxed font-sans">
                  {currentQuote}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
