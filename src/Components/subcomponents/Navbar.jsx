import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "GitHub", link: "#github" },
    { name: "Stack", link: "#skills" },
    { name: "Work", link: "#projects" },
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
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-[999] transition-all duration-400 ${
        sticky ? "bg-[#0a0f0a]/90 backdrop-blur-md border-b border-cyan-500/10 shadow-lg shadow-cyan-900/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a href="#about" whileHover={{ scale: 1.03 }} className="text-xl md:text-2xl font-bold font-mono">
            <span className="text-white">&lt;</span>
            <span className="gradient-text">Pankaj</span>
            <span className="text-white"> /&gt;</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {menuLinks.map((menu, i) => (
              <motion.a
                key={i}
                href={menu.link}
                whileHover={{ y: -1 }}
                className="px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-cyan-500/5 font-medium"
              >
                {menu.name}
              </motion.a>
            ))}

          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f0a]/95 backdrop-blur-md border-t border-cyan-500/10"
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
                  className="block px-4 py-2.5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all text-sm font-medium"
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
