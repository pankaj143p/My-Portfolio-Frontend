import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_PUBLIC_KEY) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }
    try {
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, reply_to: formData.email },
        EMAIL_PUBLIC_KEY
      );
      if (result.status === 200) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else throw new Error();
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "pankaj114477pankaj@gmail.com", link: "mailto:pankaj114477pankaj@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9179*****3", link: "tel:+919179xxxxx3" },
    { icon: MapPin, label: "Location", value: "Bhopal, India", link: "#" },
  ];

  const socials = [
    { icon: FaGithub, name: "GitHub", link: "https://github.com/pankaj143p" },
    { icon: FaLinkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/" },
    { icon: FaInstagram, name: "Instagram", link: "https://www.instagram.com/pankaj07._/" },
    { icon: FaTwitter, name: "Twitter", link: "https://twitter.com/Pankaj07__" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
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
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">Say hello</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.div variants={item} className="glass-card p-8">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-purple-400" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Discussion" required />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} required className="resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : status === "sent" ? (
                    <><CheckCircle className="w-4 h-4" /> Message Sent!</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-500/8 rounded-xl border border-red-500/15">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Failed to send. Please email me directly.
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact info */}
            <motion.div variants={item} className="glass-card p-6">
              <h3 className="text-white font-semibold mb-5">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <a key={i} href={info.link} className="flex items-center gap-3 group">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs">{info.label}</p>
                        <p className="text-gray-300 text-sm font-medium group-hover:text-purple-400 transition-colors">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="glass-card p-6">
              <h3 className="text-white font-semibold mb-5">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/3 hover:bg-purple-500/8 text-gray-500 hover:text-purple-400 transition-all border border-transparent hover:border-purple-500/15 text-sm"
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {s.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={item} className="glass-card p-6 text-center">
              <p className="text-gray-500 text-sm leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow developers. Let's build something amazing!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
