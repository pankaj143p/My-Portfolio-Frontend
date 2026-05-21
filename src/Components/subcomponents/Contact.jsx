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
    { icon: Phone, label: "Phone", value: "+91 9179*****3", link: "#" },
    { icon: MapPin, label: "Location", value: "India", link: "#" },
  ];

  const socials = [
    { icon: FaGithub, name: "GitHub", link: "https://github.com/pankaj143p" },
    { icon: FaLinkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/" },
    { icon: FaInstagram, name: "Instagram", link: "https://www.instagram.com/pankaj07._/" },
    { icon: FaTwitter, name: "Twitter", link: "https://twitter.com/Pankaj07__" },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-500 outline-none transition-all duration-200 border focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20";

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl" />
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
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-purple-400" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-gray-300 text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Pankaj Prajapati"
                      required
                      className={inputClass}
                      style={{ backgroundColor: "#16161f", borderColor: "#2d2d3d" }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-gray-300 text-sm font-medium">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className={inputClass}
                      style={{ backgroundColor: "#16161f", borderColor: "#2d2d3d" }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-gray-300 text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    required
                    className={inputClass}
                    style={{ backgroundColor: "#16161f", borderColor: "#2d2d3d" }}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-gray-300 text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                    style={{ backgroundColor: "#16161f", borderColor: "#2d2d3d" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm p-3 bg-green-500/10 rounded-xl border border-green-500/20"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-500/10 rounded-xl border border-red-500/20"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Failed to send. Please email me directly at pankaj114477pankaj@gmail.com
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* ── Info sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact info */}
            <div className="glass-card p-6">
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
                        <p className="text-gray-300 text-sm font-medium group-hover:text-purple-400 transition-colors break-all">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Socials */}
            <div className="glass-card p-6">
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
                      className="flex items-center gap-2.5 p-3 rounded-xl text-gray-400 hover:text-purple-400 transition-all text-sm font-medium border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/5"
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {s.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA note */}
            <div className="glass-card p-5 text-center">
              <p className="text-gray-500 text-sm leading-relaxed">
                Available for freelance projects, collaborations, and consulting work.
              </p>
              <p className="text-purple-400 text-sm font-medium mt-2">Response within 24 hours ⚡</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
