import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "pankaj114477pankaj@gmail.com",
      link: "mailto:pankaj114477pankaj@gmail.com",
      description: "Best way to reach me",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "pankaj-prajapati",
      link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/",
      description: "Let's connect professionally",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "pankaj143p",
      link: "https://github.com/pankaj143p",
      description: "Check out my code",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      value: "@Pankaj07__",
      link: "https://twitter.com/Pankaj07__",
      description: "Follow for updates",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@pankaj07._",
      link: "https://www.instagram.com/pankaj07._/",
      description: "Personal updates",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Say hello</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Reach out <span className="gradient-text">to me</span>
          </h2>
          <div className="section-line" />
          <p className="text-gray-500 text-sm mt-5 leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a good conversation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-3"
        >
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={i}
                href={c.link}
                target={c.link.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ x: 6 }}
                className="flex items-center justify-between p-5 glass-card group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                      {c.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{c.description}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm font-mono group-hover:text-cyan-400 transition-colors">
                  {c.value}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
