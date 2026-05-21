import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import hero from "../../../public/heroimage.jpg";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const socials = [
    { icon: FaGithub, link: "https://github.com/pankaj143p", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/", label: "LinkedIn" },
    { icon: FaInstagram, link: "https://www.instagram.com/pankaj07._/", label: "Instagram" },
    { icon: FaTwitter, link: "https://twitter.com/Pankaj07__", label: "Twitter" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-600/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          {/* Image — on mobile shows first, centered */}
          <motion.div variants={item} className="flex justify-center order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-2xl scale-105" />
              <img
                src={hero}
                alt="Pankaj Prajapati"
                className="relative z-10 w-48 h-56 sm:w-64 sm:h-72 lg:w-80 lg:h-96 object-cover rounded-2xl border border-cyan-500/15 shadow-2xl shadow-cyan-900/20"
              />
              <div className="absolute -bottom-3 -right-3 w-14 h-14 sm:w-20 sm:h-20 border-r-2 border-b-2 border-cyan-500/30 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-14 h-14 sm:w-20 sm:h-20 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-2xl" />
              {/* badge — below image on all screens */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card px-3 py-1.5 flex items-center gap-2 whitespace-nowrap z-20"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-300 font-medium">Software Engineer @ Capgemini</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={item} className="order-2 space-y-5 text-center lg:text-left mt-6 lg:mt-0">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase">Hello, I'm</p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Pankaj </span>
              <span className="gradient-text">Prajapati</span>
            </h1>

            <div className="text-base sm:text-xl font-medium text-gray-400 min-h-[28px]">
              <TypeAnimation
                sequence={[
                  "Software Engineer @ Capgemini", 2500,
                  "Java Full Stack Developer", 2000,
                  "React.js Developer", 2000,
                  "AI Enthusiast", 2000,
                  "Competitive Programmer", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-400"
              />
            </div>

            <div className="space-y-2">
              <p className="text-gray-400 text-sm leading-relaxed">
                A <span className="text-cyan-400 font-medium">Software Engineer at Capgemini</span> working
                in the Java Full Stack domain. I build enterprise-grade applications using{" "}
                <span className="text-cyan-300 font-medium">Java, Spring Boot, and React.js</span>, and
                contribute to AI-powered features within client projects.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate competitive programmer with 4000+ problems solved across all major platforms.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-xl border border-cyan-500/25 text-cyan-400 hover:bg-cyan-500/8 transition-all font-medium"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-lg text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/8 transition-all"
                    title={s.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
