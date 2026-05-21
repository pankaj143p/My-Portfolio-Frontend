import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiCplusplus,
  SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiGit, SiDocker,
  SiAmazonaws, SiMysql, SiNextdotjs, SiTypescript, SiFirebase, SiPostman,
  SiSpring, SiHibernate, SiOracle, SiJenkins, SiSonarqube,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
        { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#aaaaaa" },
        { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "Oracle DB", icon: SiOracle, color: "#F80000" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "SonarQube", icon: SiSonarqube, color: "#4E9BCD" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.08 }}
              className="glass-card p-6"
            >
              <h3 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
                {cat.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-5 gap-2"
              >
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={si}
                      variants={item}
                      whileHover={{ y: -4, scale: 1.08 }}
                      className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/3 hover:bg-purple-500/8 border border-transparent hover:border-purple-500/20 transition-all duration-200 cursor-default group"
                    >
                      <Icon
                        className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-[10px] text-gray-600 group-hover:text-gray-300 transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass-card p-6 text-center"
        >
          <p className="text-gray-500 text-sm mb-4 font-mono">Currently working with →</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["AI Integration", "Microservices", "Spring Cloud", "Kafka", "GraphQL", "DevOps", "Cloud Computing"].map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
