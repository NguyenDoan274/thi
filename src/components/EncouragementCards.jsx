import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function EncouragementCards() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto z-10 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 font-sans mb-3">
          Em đã làm rất tốt rồi! 🌟
        </h2>
        <p className="text-slate-500 max-w-md mx-auto font-medium">
          Mỗi bước chuẩn bị của em đều vô cùng giá trị. Hãy tự tin nhìn lại hành trình nhé!
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {CONFIG.encouragements.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className={`border rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center ${item.bgColor}`}
          >
            {/* Cute Icon Wrapper */}
            <div className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm border border-white/50`}>
              {item.icon}
            </div>

            {/* Card Content */}
            <h3 className="text-xl font-bold mb-3 font-sans">
              {item.title}
            </h3>
            
            <p className="text-sm leading-relaxed font-semibold opacity-90">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
