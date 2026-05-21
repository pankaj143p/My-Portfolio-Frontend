import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, ExternalLink } from "lucide-react";

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-20 right-0 w-72 sm:w-80"
          >
            <div className="glass-card p-5 shadow-2xl shadow-cyan-900/20 border border-cyan-500/15">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <h3 className="text-white font-semibold text-sm">Pankaj Prajapati</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Hey! 👋 I'm a <span className="text-cyan-400 font-medium">Software Engineer at Capgemini</span> — Java Full Stack + React.js + AI.
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Java", "Spring Boot", "React.js", "AI"].map((t) => (
                  <span key={t} className="tag-pill text-xs">{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Reach Out
                </motion.button>
                <motion.a
                  href="https://github.com/pankaj143p"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/8 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-13 h-13 w-14 h-14 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg shadow-cyan-900/30 transition-colors flex items-center justify-center"
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
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ping ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-cyan-500/30 animate-ping" />
        )}
      </motion.button>
    </div>
  );
};

export default Bot;
