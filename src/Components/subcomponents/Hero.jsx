import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Download, ArrowDown, Mail } from "lucide-react";
import hero from "../../../public/heroimage.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/pankaj143p", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/", label: "LinkedIn" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/pankaj07._/", label: "Instagram" },
    { icon: <FaTwitter />, link: "https://twitter.com/Pankaj07__", label: "Twitter" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left — Text */}
          <motion.div variants={item} className="order-2 lg:order-1 space-y-6">
            <motion.p variants={item} className="text-purple-400 font-mono text-sm tracking-widest uppercase">
              Hello, I'm
            </motion.p>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Pankaj</span>
              <br />
              <span className="gradient-text">Prajapati</span>
            </motion.h1>

            <motion.div variants={item} className="text-xl sm:text-2xl text-gray-400 font-medium">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "MERN Stack Developer", 2000,
                  "Java Developer", 2000,
                  "Competitive Programmer", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-purple-400"
              />
            </motion.div>

            <motion.p variants={item} className="text-gray-400 text-base leading-relaxed max-w-lg">
              Passionate about building modern web experiences. CSE student specializing in AI/ML at
              Technocrats Institute of Technology, Bhopal. 4000+ problems solved across coding platforms.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-primary">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/30 text-purple-400 hover:bg-purple-500/8 transition-all duration-300 font-semibold text-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-4 pt-2">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-xl text-gray-500 hover:text-purple-400 transition-colors duration-200 p-2 rounded-lg hover:bg-purple-500/8"
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            variants={item}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl scale-110" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Rotating border */}
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-spin" style={{ animationDuration: "12s" }} />
                  <div className="absolute inset-2 rounded-full border border-indigo-500/15 animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }} />
                  <img
                    src={hero}
                    alt="Pankaj Prajapati"
                    className="w-full h-full object-cover rounded-full border-2 border-purple-500/30 shadow-2xl shadow-purple-900/30 relative z-10"
                  />
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 flex items-center gap-2 z-20"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-300 font-medium">Available for work</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 z-20"
              >
                <span className="text-xs text-purple-400 font-mono font-medium">4000+ Problems Solved</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
