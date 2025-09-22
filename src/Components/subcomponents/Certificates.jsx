import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, X, Calendar, Building2 } from 'lucide-react';
import Certificate1 from "./certificates/c1.jpg";
import Certificate2 from "./certificates/c2.jpg";
import Certificate3 from "./certificates/c3.jpeg";
import Certificate4 from "./certificates/c4.png";
import Certificate8 from "./certificates/c8.jpg";
import Certificate9 from "./certificates/c9.jpg";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const myCertificates = [
    {
      img: Certificate1,
      title: "Core Java",
      issuer: "Coding Ninjas",
      date: "2024",
      description: "Introduction to Java programming, covering syntax, OOP concepts, and basic data structures.",
      category: "Programming"
    },
    {
      img: Certificate2,
      title: "Basic Java",
      issuer: "Coursera",
      date: "2024",
      description: "Introduction to Java programming, covering syntax, OOP concepts, and basic data structures.",
      category: "Programming"
    },
    {
      img: Certificate3,
      title: "Cloud Practitioner",
      issuer: "AWS",
      date: "2024",
      description: "Professional certification in cloud computing concepts and AWS services.",
      category: "Cloud"
    },
    {
      img: Certificate4,
      title: "Data Structures & Algorithms",
      issuer: "Great Learning",
      date: "2023",
      description: "Advanced data structures, algorithms, and problem-solving techniques for software development.",
      category: "Fundamentals"
    },
    {
      img: Certificate8,
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "2022",
      description: "Comprehensive on problem-solving and competitive programming.",
      category: "Computer Science"
    },
    {
      img: Certificate9,
      title: "Web Technologies",
      issuer: "Coursera",
      date: "2022",
      description: "Introduction to web development, covering HTML, CSS, JavaScript, and modern frameworks.",
      category: "Web"
    },
  ];

  const categories = [...new Set(myCertificates.map(cert => cert.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All' 
    ? myCertificates 
    : myCertificates.filter(cert => cert.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const CertificateCard = ({ certificate, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={() => setSelectedCertificate(certificate)}
    >
      <div className="glass-card p-6 h-full relative overflow-hidden">
        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full z-10">
          {certificate.category}
        </div>

        {/* Certificate Image */}
        <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
          <img
            src={certificate.img}
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Certificate Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
            {certificate.title}
          </h3>
          
          <div className="flex items-center gap-2 text-gray-400">
            <Building2 className="w-4 h-4" />
            <span className="text-sm">{certificate.issuer}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{certificate.date}</span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {certificate.description}
          </p>
        </div>

        {/* Award Icon */}
        <div className="absolute bottom-4 right-4 p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300">
          <Award className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
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
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Professional certifications and achievements that showcase my continuous learning journey
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['All', ...categories].map((category, index) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCertificates.map((certificate, index) => (
              <CertificateCard
                key={index}
                certificate={certificate}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Certificates", value: myCertificates.length },
            { label: "Categories", value: categories.length },
            { label: "Years Active", value: "3+" },
            { label: "Skills Covered", value: "20+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center sm:p-4 pt-4 sm:pt-4 overflow-y-auto"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-card p-4 sm:p-6 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl my-4 sm:my-8 max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4 mt-8 sm:mb-6">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                    {selectedCertificate.title}
                  </h3>
                  <div className="mt-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full inline-block">
                    {selectedCertificate.category}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 rounded-xl hover:bg-white/10 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                </button>
              </div>
              
              {/* Certificate Image */}
              <div className="relative mb-4 sm:mb-6">
                <img
                  src={selectedCertificate.img}
                  alt={selectedCertificate.title}
                  className="w-full rounded-xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 text-gray-300">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">Issued by</div>
                    <div className="text-sm sm:text-base font-medium">{selectedCertificate.issuer}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-gray-300">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">Completed in</div>
                    <div className="text-sm sm:text-base font-medium">{selectedCertificate.date}</div>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-white/10">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Description</div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {selectedCertificate.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons - Mobile Friendly */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors text-sm font-medium"
                >
                  Close
                </button>
                <button 
                  onClick={() => window.open(selectedCertificate.img, '_blank')}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Full Size
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}