import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      role: "Software Engineer",
      company: "Capgemini",
      location: "India",
      duration: "2025 – Present",
      current: true,
      description:
        "Working as a Software Engineer in the Java Full Stack domain, building and maintaining enterprise-grade web applications using Java, Spring Boot, and React.js. Also contributing to AI-powered features and integrations within client projects.",
      responsibilities: [
        "Developing scalable RESTful APIs using Java & Spring Boot",
        "Building responsive frontend interfaces with React.js",
        "Integrating AI/ML capabilities into enterprise applications",
        "Collaborating in Agile sprints with cross-functional teams",
        "Code reviews, unit testing, and CI/CD pipeline management",
      ],
      tech: ["Java", "Spring Boot", "React.js", "Hibernate", "Oracle DB", "REST APIs", "AI Integration", "Git", "Agile"],
      color: "from-cyan-600 to-emerald-600",
    },
  ];

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">Where I've worked</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="relative">
          {/* Timeline line — only md+ */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/10 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot — md+ only */}
              <div className="absolute left-6 top-6 -translate-x-1/2 hidden md:flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/30" />
                <div className="absolute w-6 h-6 rounded-full border border-cyan-500/20 animate-ping opacity-30" />
              </div>

              <div className="glass-card p-5 sm:p-7 group">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.color} shrink-0`}>
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-sm sm:text-base mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5 flex-wrap">
                    {exp.current && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.tech.map((t, ti) => (
                    <span key={ti} className="tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
