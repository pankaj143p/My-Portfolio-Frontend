import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { Download, MessageCircle, ArrowDown } from "lucide-react";
import hero from "../../assets/MyImages/IMG-20240402-WA0008.jpg";


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const social_media = [
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/", color: "hover:text-blue-500" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/pankaj143p", color: "hover:text-gray-300" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/pankaj07._/", color: "hover:text-pink-500" },
    { name: "Facebook", icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100070913362312", color: "hover:text-blue-600" },
    { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/Pankaj07__", color: "hover:text-sky-400" },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const handleContactClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Content Section */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Greeting */}
              <motion.h2
                variants={itemVariants}
                className="text-lg md:text-xl font-medium text-cyan-400 font-mono"
              >
                Hello, I'm
              </motion.h2>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Pankaj</span>
                <br />
                <span className="gradient-text">Prajapati</span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300"
              >
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'Java Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-cyan-400"
                />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Passionate about creating amazing web experiences with modern technologies.
                Let's build something incredible together!
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
              >
                <button
                  onClick={handleContactClick}
                  className="btn-primary group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3 font-semibold backdrop-blur-sm"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.button>
              </motion.div>

              {/* Social Media */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-6 mt-12"
              >
                {social_media.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-2xl text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-xl hover:bg-white/10 backdrop-blur-sm`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
              
              {/* Main image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-3xl transform rotate-3"></div>
                  <img
                    src={hero}
                    alt="Pankaj Prajapati"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-white/10 relative z-10"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-15 animate-pulse delay-1000"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;