import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";

const GitHub = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="github" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Activity</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-3">
            <Github className="w-8 h-8 text-cyan-400" />
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-6 sm:p-8 overflow-x-auto"
        >
          <GitHubCalendar
            username="pankaj143p"
            colorScheme="dark"
            theme={{
              dark: ["#0d1f0d", "#14532d", "#166534", "#16a34a", "#4ade80"],
            }}
            style={{ width: "100%" }}
            fontSize={12}
            blockSize={13}
            blockMargin={4}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <a
            href="https://github.com/pankaj143p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors font-mono"
          >
            <Github className="w-4 h-4" />
            github.com/pankaj143p
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
