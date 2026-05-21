import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Briefcase, Award, GraduationCap } from "lucide-react";
import hero from "../../../public/heroimage.jpg";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { icon: Code2, count: "10+", label: "Projects", color: "text-purple-400" },
    { icon: Briefcase, count: "02", label: "Internships", color: "text-indigo-400" },
    { icon: Award, count: "20+", label: "Certifications", color: "text-violet-400" },
    { icon: GraduationCap, count: "4000+", label: "Problems Solved", color: "text-fuchsia-400" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <motion.div variants={item} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl blur-2xl scale-105" />
              <img
                src={hero}
                alt="Pankaj Prajapati"
                className="relative z-10 w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-900/20"
              />
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-purple-500/40 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-indigo-500/40 rounded-tl-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={item} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Hi, I'm <span className="gradient-text">Pankaj Prajapati</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A passionate <span className="text-purple-400 font-medium">MERN Stack Developer</span> and
                dedicated student pursuing a Bachelor's degree in Computer Science with a focus on{" "}
                <span className="text-indigo-400 font-medium">Artificial Intelligence and Machine Learning</span> at
                Technocrats Institute of Technology, Bhopal.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I have a strong foundation in multiple programming languages and technologies, allowing me to
                create robust, efficient, and innovative solutions. I'm passionate about competitive programming
                with 4000+ problems solved across all major platforms.
              </p>
            </div>

            {/* Info list */}
            <div className="space-y-3 pt-2">
              {[
                { label: "Name", value: "Pankaj Prajapati" },
                { label: "Location", value: "Bhopal, India" },
                { label: "Email", value: "pankaj114477pankaj@gmail.com" },
                { label: "Degree", value: "B.Tech CSE (AI/ML)" },
              ].map((info, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-purple-400 font-medium w-20 shrink-0">{info.label}:</span>
                  <span className="text-gray-300">{info.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn-primary text-sm">
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-5 py-2.5 text-sm rounded-xl border border-purple-500/30 text-purple-400 hover:bg-purple-500/8 transition-all font-medium"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="glass-card p-6 text-center"
              >
                <Icon className={`w-6 h-6 ${s.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${s.color} mb-1`}>{s.count}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
