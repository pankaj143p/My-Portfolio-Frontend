import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBot = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96"
          >
            <div className="glass-card p-6 m-4 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Hi there! 👋</h3>
                <button
                  onClick={toggleBot}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                I'm Pankaj, a MERN Stack Developer. Thanks for visiting my portfolio! 
                Have a project in mind? Let's discuss it!
              </p>
              
              <div className="space-y-3">
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-sm py-3"
                >
                  <Send className="w-4 h-4" />
                  Get In Touch
                </motion.button>
                
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={toggleBot}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
        className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              
              {/* Notification dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 animate-ping group-hover:animate-pulse"></div>
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap"
        >
          Let's chat!
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </motion.div>
      )}
    </div>
  );
};

export default Bot;
