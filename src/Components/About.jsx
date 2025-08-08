import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Trophy, Award, Briefcase } from "lucide-react";
import aboutImg from "./MyImages/IMG-20240402-WA0012-removebg-preview.png";

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
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8 order-2 lg:order-1">
            <div className="glass-card p-8 space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                Hello, I'm <span className="text-cyan-400 font-semibold">Pankaj Prajapati</span>, 
                a passionate <span className="gradient-text font-semibold">MERN Stack Developer</span> 
                and a dedicated student pursuing a Bachelor's degree in Computer Science with a focus on 
                <span className="text-purple-400 font-semibold"> Artificial Intelligence and Machine Learning</span>.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg leading-relaxed"
              >
                I have a strong foundation in multiple programming languages and technologies, 
                allowing me to create robust, efficient, and innovative solutions in the web development domain. 
                I'm passionate about creating amazing digital experiences that solve real-world problems.
              </motion.p>
            </div>

            {/* Stats Section */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              {info.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    variants={counterVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 sm:p-6 text-center group cursor-pointer"
                  >
                    <div className={`${item.color} mb-3 flex justify-center`}>
                      <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    </div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
                    >
                      {item.count}
                      <span className="gradient-text">+</span>
                    </motion.h3>
                    <p className="text-gray-400 text-sm sm:text-base font-medium">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Skills Highlight */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 space-y-4"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Key Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React.js & Next.js",
                  "Node.js & Express",
                  "MongoDB & SQL",
                  "JavaScript & TypeScript",
                  "Python & AI/ML",
                  "Cloud & DevOps"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated background elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl blur-2xl"
              ></motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 bg-gradient-to-l from-blue-500/10 to-pink-600/10 rounded-3xl blur-xl"
              ></motion.div>

              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="w-80 h-96 sm:w-96 sm:h-[450px] lg:w-[400px] lg:h-[500px] relative">
                  <div className="glass-card absolute inset-0 p-4">
                    <img
                      src={aboutImg}
                      alt="Pankaj Prajapati"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center"
                  >
                    <Code2 className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-lg flex items-center justify-center"
                  >
                    <Trophy className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;