import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/", label: "LinkedIn" },
    { icon: FaGithub, link: "https://github.com/pankaj143p", label: "GitHub" },
    { icon: FaInstagram, link: "https://www.instagram.com/pankaj07._/", label: "Instagram" },
    { icon: FaTwitter, link: "https://twitter.com/Pankaj07__", label: "Twitter" },
  ];

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "GitHub", href: "#github" },
    { name: "Stack", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold font-mono">
              <span className="text-white">&lt;</span>
              <span className="gradient-text">Pankaj</span>
              <span className="text-white"> /&gt;</span>
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs">
              Software Engineer at Capgemini. Java Full Stack Developer & Competitive Programmer.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-lg text-gray-600 hover:text-cyan-400 hover:bg-cyan-500/8 transition-all"
                    title={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4">
              {links.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-gray-500 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:pankaj114477pankaj@gmail.com"
                className="block text-gray-500 hover:text-cyan-400 transition-colors text-xs sm:text-sm break-all"
              >
                pankaj114477pankaj@gmail.com
              </a>
              <p className="text-gray-500 text-xs sm:text-sm">India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            © 2024 Pankaj Prajapati. Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;
