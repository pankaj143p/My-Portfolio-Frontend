import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, Phone, ArrowRight, Sparkles, Code, Laptop } from 'lucide-react';
import imageUrl from '../../public/heroimage.jpeg'; // Adjust the path as necessary

// hire me section
const Hireme = ({ altText }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const handleContact = () => {
    window.location.href = 'mailto:pankaj.prajapati@example.com';
  };

  return (
    <section id="hireme" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl"></div>
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
            Hire <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life? Let's collaborate and build something amazing together!
          </motion.p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="glass-card p-6 sm:p-8 lg:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-10">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-8 left-8 p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-10">
            <Code className="w-8 h-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                >
                  Ready to work on your{' '}
                  <span className="gradient-text">next project?</span>
                </motion.h3>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 text-base sm:text-lg leading-relaxed"
                >
                  Hi there! I'm <span className="text-cyan-400 font-semibold">Pankaj Prajapati</span>, 
                  a passionate Computer Science Engineering student specializing in AI/ML from 
                  Technocrats Institute of Technology, Bhopal. I'm excited to apply my academic 
                  knowledge and programming skills to real-world projects.
                </motion.p>
              </div>

              {/* Skills Highlights */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, label: 'Full Stack Dev', color: 'from-green-400 to-emerald-500' },
                  { icon: Laptop, label: 'AI/ML Projects', color: 'from-purple-400 to-pink-500' },
                  { icon: MessageCircle, label: 'Problem Solver', color: 'from-cyan-400 to-blue-500' },
                  { icon: Sparkles, label: 'Creative Solutions', color: 'from-yellow-400 to-orange-500' },
                ].map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{skill.label}</span>
                    </div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContact}
                  className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 group"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Let's Talk
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 border border-white/10 hover:border-cyan-400/50"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Call
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>
                
                {/* Image Container */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-3xl overflow-hidden border-2 border-white/10 backdrop-blur-sm group-hover:border-cyan-400/30 transition-all duration-500">
                  <motion.img
                    src={imageUrl}
                    alt={altText || "Pankaj Prajapati"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute top-4 right-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Code className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 grid grid-cols-4 gap-2 opacity-30">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { label: 'Projects Completed', value: '25+', color: 'text-green-400' },
              { label: 'Technologies', value: '20+', color: 'text-cyan-400' },
              { label: 'Client Satisfaction', value: '100%', color: 'text-purple-400' },
              { label: 'Response Time', value: '< 24h', color: 'text-yellow-400' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hireme;