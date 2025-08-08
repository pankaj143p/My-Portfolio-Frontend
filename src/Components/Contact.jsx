import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent, error

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // EmailJS configuration - Using environment variables for security
  const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'pankaj114477pankaj@gmail.com';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Using EmailJS to send email directly from frontend
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: CONTACT_EMAIL, // Your email where you want to receive messages
      };

      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      );

      if (result.status === 200) {
        setFormStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  // Alternative method using mailto (simpler but less seamless)
  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:pankaj114477pankaj@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    
    setFormStatus('sent');
    setTimeout(() => {
      setFormStatus('idle');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pankaj114477pankaj@gmail.com",
      link: "mailto:pankaj114477pankaj@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9179*****3",
      link: "tel:+919179*****3",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: "#",
      color: "text-red-400"
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/pankaj143p",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/pankaj07._/",
      color: "hover:text-pink-500"
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      link: "https://twitter.com/Pankaj07__",
      color: "hover:text-sky-400"
    },
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

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-cyan-400" />
                Send me a message
              </h3>
              
              <form onSubmit={handleMailtoSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 mb-2 font-medium">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion"
                    required
                    className="w-full"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="w-full resize-none"
                  ></textarea>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Opening Email...
                      </>
                    ) : formStatus === 'sent' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Email Opened!
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Send via Email
                      </>
                    )}
                  </motion.button>

                  {/* Alternative direct contact button */}
                  <motion.a
                    variants={itemVariants}
                    href="mailto:pankaj114477pankaj@gmail.com?subject=Portfolio Contact&body=Hi Pankaj,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0ABest regards,"
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-cyan-400/50"
                  >
                    <Send className="w-5 h-5" />
                    Quick Email
                  </motion.a>
                </div>

                {formStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 p-3 bg-red-500/10 rounded-xl border border-red-500/20"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try the "Quick Email" option or contact me directly.</span>
                  </motion.div>
                )}

                {formStatus === 'sent' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 p-3 bg-green-500/10 rounded-xl border border-green-500/20"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Your email app should open with the message pre-filled. Thanks for reaching out!</span>
                  </motion.div>
                )}

                <div className="text-center pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-3">
                    Or contact me directly:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="mailto:pankaj114477pankaj@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      pankaj114477pankaj@gmail.com
                    </a>
                    <span className="text-gray-600">•</span>
                    <a
                      href="tel:+919179*****3"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      +91 9179*****3
                    </a>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-600 ${info.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-slate-700/30 text-gray-400 ${social.color} transition-all duration-300 hover:bg-slate-600/30`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="glass-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Let's Build Something Amazing Together!</h3>
              <p className="text-gray-400 text-sm">
                I'm always excited to work on new projects and collaborate with fellow developers and designers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;