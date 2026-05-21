import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Briefcase, Terminal, Award, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import hero from "../../../public/heroimage.jpg";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { icon: Briefcase, count: "1+", label: "Years at Capgemini", color: "#4ade80" },
    { icon: Code2, count: "10+", label: "Projects Built", color: "#4ade80" },
    { icon: Terminal, count: "4000+", label: "Problems Solved", color: "#4ade80" },
    { icon: Award, count: "20+", label: "Certifications", color: "#4ade80" },
  ];

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
    <section id="about" className="min-h-screen flex items-center py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-green-600/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* ── Left: image ── */}
          <motion.div variants={item} className="flex justify-center lg:justify-start order-1">
            <div className="relative">
              {/* glow */}
              <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-2xl scale-105" />
              <img
                src={hero}
                alt="Pankaj Prajapati"
                className="relative z-10 w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 object-cover rounded-2xl border border-green-500/15 shadow-2xl shadow-green-900/20"
              />
              {/* corner accents */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-green-500/30 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-green-500/30 rounded-tl-2xl" />
              {/* badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-card px-4 py-2 flex items-center gap-2 whitespace-nowrap z-20"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-300 font-medium">Software Engineer @ Capgemini</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: content ── */}
          <motion.div variants={item} className="order-2 space-y-6">
            {/* greeting */}
            <p className="text-green-400 font-mono text-sm tracking-widest uppercase">Hello, I'm</p>

            {/* name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Pankaj </span>
              <span className="gradient-text">Prajapati</span>
            </h1>

            {/* typewriter */}
            <div className="text-lg sm:text-xl font-medium text-gray-400">
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
                className="text-green-400"
              />
            </div>

            {/* bio */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed">
                A <span className="text-green-400 font-medium">Software Engineer at Capgemini</span> working
                in the Java Full Stack domain. I build enterprise-grade applications using{" "}
                <span className="text-green-300 font-medium">Java, Spring Boot, and React.js</span>, and
                contribute to AI-powered features within client projects.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate competitive programmer with 4000+ problems solved across all major platforms.
                I love writing clean, scalable software that solves real-world problems.
              </p>
            </div>

            {/* info rows */}
            <div className="space-y-2 pt-1">
              {[
                { label: "Role", value: "Software Engineer @ Capgemini" },
                { label: "Stack", value: "Java · Spring Boot · React.js · AI" },
                { label: "Location", value: "India" },
                { label: "Email", value: "pankaj114477pankaj@gmail.com" },
              ].map((info, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-green-400 font-medium w-20 shrink-0">{info.label}:</span>
                  <span className="text-gray-300">{info.value}</span>
                </div>
              ))}
            </div>

            {/* buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="mailto:pankaj114477pankaj@gmail.com" className="btn-primary">
                <Mail className="w-4 h-4" />
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-xl border border-green-500/25 text-green-400 hover:bg-green-500/8 transition-all font-medium"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* socials */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-lg text-gray-500 hover:text-green-400 hover:bg-green-500/8 transition-all"
                    title={s.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="glass-card p-5 text-center"
              >
                <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: s.color }} />
                <div className="text-2xl font-bold mb-0.5" style={{ color: s.color }}>{s.count}</div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
