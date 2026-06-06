import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Circle } from 'lucide-react';
import { CONFIG } from '../config';

export default function ExamChecklist() {
  // Local state to keep track of checked items
  const [checkedItems, setCheckedItems] = useState(
    new Array(CONFIG.checklist.length).fill(false)
  );

  const toggleCheck = (index) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  // Calculate percentage of checklist completed for a nice progress indicator!
  const completedCount = checkedItems.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / CONFIG.checklist.length) * 100);

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto z-10 relative">
      <div className="bg-gradient-to-br from-teal-50/90 to-mint-50/90 border border-teal-100 rounded-3xl p-6 sm:p-10 shadow-lg backdrop-blur-sm">
        <div className="text-center mb-8">
          <span className="text-2xl sm:text-3xl">📝</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-sans mt-2 mb-2">
            Checklist Trước Giờ G
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            Tích chọn từng mục để đảm bảo em đã sẵn sàng 100% tinh thần chiến đấu nha!
          </p>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto bg-slate-100 h-3.5 rounded-full overflow-hidden border border-slate-200/50 flex">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="mt-2 text-xs font-bold text-teal-600">
            Đã sẵn sàng: {completedCount}/{CONFIG.checklist.length} ({progressPercent}%)
          </div>
        </div>

        {/* Checklist items */}
        <div className="space-y-3 max-w-xl mx-auto">
          {CONFIG.checklist.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => toggleCheck(index)}
              className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300 select-none ${
                checkedItems[index]
                  ? 'bg-emerald-50/60 border-emerald-200 text-slate-500 line-through decoration-emerald-300'
                  : 'bg-white border-slate-100 text-slate-700 shadow-sm hover:border-teal-200'
              }`}
            >
              {/* Checkbox Icon */}
              <div className="mt-0.5 flex-shrink-0">
                <AnimatePresence mode="wait">
                  {checkedItems[index] ? (
                    <motion.div
                      key="checked"
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      className="w-6 h-6 rounded-full bg-emerald-400 border border-emerald-500 flex items-center justify-center text-white"
                    >
                      <Check size={14} strokeWidth={3} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unchecked"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="w-6 h-6 text-slate-300 hover:text-teal-400 transition-colors"
                    >
                      <Circle size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Text */}
              <span className={`text-base font-semibold transition-colors ${checkedItems[index] ? 'text-slate-400' : 'text-slate-700'}`}>
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Completion Message */}
        {completedCount === CONFIG.checklist.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-sm mx-auto"
          >
            🎉 Em đã sẵn sàng tuyệt đối rồi! Đi thi thôi, chiến thắng đang chờ em! 🚀
          </motion.div>
        )}
      </div>
    </section>
  );
}
