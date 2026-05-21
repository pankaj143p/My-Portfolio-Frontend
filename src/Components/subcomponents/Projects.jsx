import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import project1 from "../Projects/marketmart.png";
import project2 from "../Projects/quiz.avif";
import project3 from "../Projects/education.png";
import project4 from "../Projects/railway.png";
import project5 from "../Projects/chat.png";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      img: project1,
      name: "Market Mart",
      description: "Full-stack e-commerce platform with modern UI/UX, shopping cart functionality, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/pankaj143p/Market-Mart",
      live: "https://market-mart-snkt.vercel.app/",
      category: "Full Stack",
    },
    {
      img: project3,
      name: "Smart TnP Education",
      description: "Educational platform for training and placement with interactive learning modules and progress tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/pankaj143p/Smart-TNP-education-app",
      live: "https://smart-tnp-education-app-web.vercel.app/",
      category: "Web App",
    },
    {
      img: project2,
      name: "Interactive Quiz App",
      description: "Dynamic quiz application with timer functionality, score tracking, and responsive design.",
      technologies: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/pankaj143p/QuizApp",
      live: "https://github.com/pankaj143p/QuizApp",
      category: "Frontend",
    },
    {
      img: project4,
      name: "I Rail Gateway",
      description: "Real-time railway information system with live tracking, schedule management, and user notifications.",
      technologies: ["React", "Railway API", "CSS3"],
      github: "https://github.com/pankaj143p/Railway_Reservation_System/",
      live: "https://irailgateway.vercel.app/",
      category: "API Integration",
    },
    {
      img: project5,
      name: "Chat With Me",
      description: "Real-time chat application with message encryption, file sharing, and modern chat interface.",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="tag-pill text-xs">{project.category}</span>
                </div>
                {/* Hover links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/40 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/40 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, ti) => (
                    <span key={ti} className="tag-pill">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
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
