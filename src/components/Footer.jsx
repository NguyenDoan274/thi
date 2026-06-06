import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { CONFIG } from '../config';

export default function Footer() {
  return (
    <footer className="relative mt-auto py-12 px-4 text-center z-10 border-t border-pink-100/50 bg-white/20 backdrop-blur-sm overflow-hidden">
      {/* Background sparkling particles */}
      <div className="absolute top-4 left-10 text-pink-300 sparkle-slow">
        <Sparkles size={16} fill="currentColor" />
      </div>
      <div className="absolute bottom-6 right-10 text-purple-300 sparkle-fast">
        <Sparkles size={18} fill="currentColor" />
      </div>

      <div className="max-w-md mx-auto flex flex-col items-center gap-3">
        {/* Heart icon with breathing animation */}
        <div className="flex gap-1.5 justify-center">
          <Heart size={20} className="text-pink-500 fill-pink-500 animate-pulse" />
          <Heart size={14} className="text-purple-400 fill-purple-400 animate-pulse delay-150" />
          <Heart size={16} className="text-yellow-400 fill-yellow-400 animate-pulse delay-75" />
        </div>

        <p className="text-slate-600 font-bold text-base font-sans tracking-wide">
          Gửi đến <span className="text-pink-500">{CONFIG.friendName}</span> với thật nhiều năng lượng tích cực 💖
        </p>

        <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase mt-1">
          Chúc em vượt qua môn {CONFIG.subjectName} một cách xuất sắc nhất!
        </p>
      </div>
    </footer>
  );
}
