
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiPython, 
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Database, Code2, Palette, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", icon: SiJavascript, level: 90, color: "#F7DF1E" },
        { name: "React.js", icon: SiReact, level: 85, color: "#61DAFB" },
        { name: "HTML5", icon: SiHtml5, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, level: 88, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend Development",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 80, color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: 78, color: "#000000" },
        { name: "Python", icon: SiPython, level: 75, color: "#3776AB" },
        { name: "Java", icon: FaJava, level: 70, color: "#007396" },
        { name: "C++", icon: SiCplusplus, level: 65, color: "#00599C" },
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 80, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, level: 75, color: "#4479A1" },
        { name: "AWS", icon: SiAmazonaws, level: 65, color: "#FF9900" },
        { name: "Docker", icon: SiDocker, level: 60, color: "#2496ED" },
      ]
    },
    {
      title: "Tools & Others",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: SiGit, level: 85, color: "#F05032" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      className="space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${skill.color}20` }}
          >
            <skill.icon 
              className="w-5 h-5" 
              style={{ color: skill.color }} 
            />
          </div>
          <span className="text-gray-300 font-medium">{skill.name}</span>
        </div>
        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
        <motion.div
          custom={skill.level}
          variants={progressVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-80 animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  );

  const SkillCategory = ({ category, index }) => {
    const IconComponent = category.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        className="glass-card p-6 space-y-6 hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color}`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
        </div>
        
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title} 
              category={category} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
              frameworks, and best practices to stay current with industry standards and deliver 
              cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Machine Learning", "AI Integration", "Next.js", "GraphQL", 
                "TypeScript", "Microservices", "DevOps", "Cloud Computing"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full text-cyan-400 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
