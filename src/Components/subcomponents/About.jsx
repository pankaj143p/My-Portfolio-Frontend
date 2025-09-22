import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Trophy, Award, Briefcase, Target, Users } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const info = [
    { text: "Completed Projects", count: "10", icon: Code2, color: "text-blue-400" },
    { text: "Internships", count: "02", icon: Briefcase, color: "text-green-400" },
    { text: "Certifications", count: "20", icon: Award, color: "text-purple-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants} className="glass-card p-8 lg:p-12 space-y-8">
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg lg:text-xl leading-relaxed text-center"
            >
              Hello, I'm <span className="text-cyan-400 font-semibold">Pankaj Prajapati</span>, 
              a passionate <span className="gradient-text font-semibold">MERN Stack Developer</span> 
              and a dedicated student pursuing a Bachelor's degree in Computer Science with a focus on 
              <span className="text-purple-400 font-semibold"> Artificial Intelligence and Machine Learning</span>.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg lg:text-xl leading-relaxed text-center"
            >
              I have a strong foundation in multiple programming languages and technologies, 
              allowing me to create robust, efficient, and innovative solutions in the web development domain. 
              I'm passionate about creating amazing digital experiences that solve real-world problems.
            </motion.p>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">My Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To leverage cutting-edge technology and innovative thinking to create impactful digital solutions 
                  that enhance user experiences and drive business success.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">My Values</h3>
                <p className="text-gray-400 leading-relaxed">
                  Continuous learning, collaboration, and delivering excellence in every project. 
                  I believe in writing clean, maintainable code and creating seamless user experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {info.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.text}
                  variants={counterVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 lg:p-8 text-center group cursor-pointer"
                >
                  <div className={`${item.color} mb-4 flex justify-center`}>
                    <IconComponent className="w-10 h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className="text-3xl lg:text-4xl font-bold text-white mb-3"
                  >
                    {item.count}
                    <span className="gradient-text">+</span>
                  </motion.h3>
                  <p className="text-gray-400 text-base lg:text-lg font-medium">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Highlight */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl lg:text-3xl font-semibold text-white mb-4 flex items-center justify-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-400" />
                Key Expertise
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { skill: "React.js & Next.js", color: "from-blue-400 to-cyan-500" },
                { skill: "Node.js & Express", color: "from-green-400 to-emerald-500" },
                { skill: "MongoDB & SQL", color: "from-purple-400 to-pink-500" },
                { skill: "JavaScript & TypeScript", color: "from-yellow-400 to-orange-500" },
                { skill: "Python & AI/ML", color: "from-indigo-400 to-purple-500" },
                { skill: "Cloud & DevOps", color: "from-cyan-400 to-blue-500" }
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded-full`}></div>
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;