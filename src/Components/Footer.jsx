import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa6";
import { Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const social_media = [
    { name: "LinkedIn", icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/", color: "hover:text-blue-500" },
    { name: "GitHub", icon: <FaGithub size={24} />, link: "https://github.com/pankaj143p", color: "hover:text-gray-300" },
    { name: "Instagram", icon: <FaInstagram size={24} />, link: "https://www.instagram.com/pankaj07._/", color: "hover:text-pink-500" },
    { name: "Facebook", icon: <FaFacebook size={24} />, link: "https://www.facebook.com/profile.php?id=100070913362312", color: "hover:text-blue-600" },
    { name: "Twitter", icon: <FaTwitter size={24} />, link: "https://twitter.com/Pankaj07__", color: "hover:text-sky-400" },
  ];

  const contact_info = [
    { icon: <Mail size={20} />, text: "pankaj114477pankaj@gmail.com", link: "mailto:pankaj114477pankaj@gmail.com" },
    { icon: <Phone size={20} />, text: "+91 91xxxxxx53", link: "tel:+919179213653" },
    { icon: <MapPin size={20} />, text: "India", link: "#" },
  ];

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold font-mono">
                  <span className="text-white">P</span>
                  <span className="gradient-text">ank</span>
                  <span className="text-white">aj</span>
                </h3>
                <p className="text-gray-400 mt-2">MERN Stack Developer</p>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Passionate about creating amazing web experiences with modern technologies. 
                Let's build something incredible together!
              </p>
              
              {/* Social Media */}
              <div className="flex items-center gap-4 mb-6">
                {social_media.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.link}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white text-lg font-semibold mb-6">Get In Touch</h4>
              <ul className="space-y-4">
                {contact_info.map((contact, index) => (
                  <li key={index}>
                    <motion.a
                      href={contact.link}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        {contact.icon}
                      </div>
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>&copy; 2024 Pankaj Prajapati. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>All rights reserved.</span>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
    </footer>
  );
};

export default Footer;