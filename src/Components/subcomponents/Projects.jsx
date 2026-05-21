import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      name: "Market Mart",
      description: "Full-stack e-commerce platform with shopping cart, product management, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/pankaj143p/Market-Mart",
      live: "https://market-mart-snkt.vercel.app/",
      category: "Full Stack",
    },
    {
      name: "Smart TnP Education",
      description: "Educational platform for training and placement with interactive learning modules and progress tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/pankaj143p/Smart-TNP-education-app",
      live: "https://smart-tnp-education-app-web.vercel.app/",
      category: "Web App",
    },
    {
      name: "Interactive Quiz App",
      description: "Dynamic quiz application with timer functionality, score tracking, and fully responsive design.",
      technologies: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/pankaj143p/QuizApp",
      live: "https://github.com/pankaj143p/QuizApp",
      category: "Frontend",
    },
    {
      name: "I Rail Gateway",
      description: "Real-time railway information system with live train tracking, schedule management, and notifications.",
      technologies: ["React", "Railway API", "CSS3"],
      github: "https://github.com/pankaj143p/Railway_Reservation_System/",
      live: "https://irailgateway.vercel.app/",
      category: "API Integration",
    },
    {
      name: "Chat With Me",
      description: "Real-time chat application with Socket.io, message encryption, and a modern chat interface.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/pankaj143p/Chat-with-me",
      live: "https://chat-with-me-murex.vercel.app/",
      category: "Full Stack",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                  : "text-gray-500 hover:text-purple-400 border border-white/5 hover:border-purple-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid — no images */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass-card p-6 flex flex-col gap-4 group"
            >
              {/* Top row: name + category */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors leading-tight">
                  {project.name}
                </h3>
                <span className="tag-pill shrink-0 text-xs">{project.category}</span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, ti) => (
                  <span key={ti} className="tag-pill">{tech}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/pankaj143p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/30 text-purple-400 hover:bg-purple-500/8 transition-all text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
