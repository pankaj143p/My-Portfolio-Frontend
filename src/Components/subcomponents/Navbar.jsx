import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Achievements", link: "#achievements" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-[999] transition-all duration-500 ${
        sticky ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-purple-500/10 shadow-lg shadow-purple-900/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.03 }} className="text-xl md:text-2xl font-bold font-mono">
            <span className="text-white">&lt;</span>
            <span className="gradient-text">Pankaj</span>
            <span className="text-white"> /&gt;</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuLinks.map((menu, i) => (
              <motion.a
                key={i}
                href={menu.link}
                whileHover={{ y: -1 }}
                className="px-4 py-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200 rounded-lg hover:bg-purple-500/5 font-medium"
              >
                {menu.name}
              </motion.a>
            ))}
            <motion.a
              href="mailto:pankaj114477pankaj@gmail.com"
              whileHover={{ scale: 1.03 }}
              className="ml-4 px-5 py-2 text-sm btn-primary rounded-lg"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-t border-purple-500/10"
          >
            <div className="px-6 py-4 space-y-1">
              {menuLinks.map((menu, i) => (
                <motion.a
                  key={i}
                  href={menu.link}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-2.5 text-gray-400 hover:text-purple-400 hover:bg-purple-500/5 rounded-lg transition-all text-sm font-medium"
                >
                  {menu.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
