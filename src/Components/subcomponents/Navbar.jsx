import React, { useEffect, useState } from "react";
import { Menu, X, Home, User, Code, FolderOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  
  const menuLinks = [
    { name: "HOME", link: "#home", icon: Home },
    { name: "ABOUT", link: "#about", icon: User },
    { name: "SKILLS", link: "#skills", icon: Code },
    { name: "PROJECTS", link: "#projects", icon: FolderOpen },
    { name: "CONTACT", link: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full left-0 top-0 z-[999] transition-all duration-500 ${
        sticky 
          ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono">
              <span className="text-white">P</span>
              <span className="gradient-text">ank</span>
              <span className="text-white">aj</span>
            </h4>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className={`flex items-center space-x-1 px-6 py-3 rounded-2xl transition-all duration-300 ${
              sticky ? "bg-white/5 backdrop-blur-md border border-white/10" : "bg-white/10 backdrop-blur-sm"
            }`}>
              {menuLinks.map((menu, i) => {
                const IconComponent = menu.icon;
                return (
                  <motion.a
                    key={i}
                    href={menu.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                    <span className="font-medium text-sm lg:text-base">{menu.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all duration-300"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-3">
              {menuLinks.map((menu, i) => {
                const IconComponent = menu.icon;
                return (
                  <motion.a
                    key={i}
                    href={menu.link}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                    <span className="font-medium">{menu.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;