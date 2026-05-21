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
      duration: "2024 – Present",
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
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">Where I've worked</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div key={i} variants={item} className="relative md:pl-24 mb-8">
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 -translate-x-1/2 hidden md:flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/30" />
                <div className="absolute w-8 h-8 rounded-full border border-purple-500/20 animate-ping opacity-30" />
              </div>

              <div className="glass-card p-7 group">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shrink-0`}>
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl group-hover:text-purple-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-purple-400 font-semibold text-base mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    {exp.current && (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tech.map((t, ti) => (
                    <span key={ti} className="tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
