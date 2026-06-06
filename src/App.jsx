import React from 'react';
import DecorativeElements from './components/DecorativeElements';
import Hero from './components/Hero';
import EncouragementCards from './components/EncouragementCards';
import MessageCard from './components/MessageCard';
import ExamChecklist from './components/ExamChecklist';
import LuckyBoost from './components/LuckyBoost';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="relative min-h-screen animated-bg flex flex-col font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      {/* Absolute floating decorations in background */}
      <DecorativeElements />
      
      {/* Main Sections */}
      <div className="flex-grow flex flex-col w-full max-w-5xl mx-auto px-4 relative z-10">
        <Hero />
        
        {/* Soft Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mx-auto my-4 opacity-60" />
        
        <EncouragementCards />
        
        <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-teal-300 rounded-full mx-auto my-4 opacity-60" />
        
        <MessageCard />
        
        <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-yellow-300 rounded-full mx-auto my-4 opacity-60" />
        
        <ExamChecklist />
        
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full mx-auto my-4 opacity-60" />
        
        <LuckyBoost />
      </div>
      
      {/* Sticky footer */}
      <Footer />
    </div>
  );
}

export default App;
