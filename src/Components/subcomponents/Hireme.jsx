import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, ArrowRight, Code, Laptop, MessageCircle, Sparkles } from "lucide-react";

const Hireme = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const offerings = [
    { icon: Code, label: "Full Stack Dev", color: "text-purple-400" },
    { icon: Laptop, label: "AI/ML Projects", color: "text-indigo-400" },
    { icon: MessageCircle, label: "Problem Solver", color: "text-violet-400" },
    { icon: Sparkles, label: "Creative Solutions", color: "text-fuchsia-400" },
  ];

  return (
    <section id="hireme" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-10 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 to-indigo-600/5" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4"
          >
            Open to opportunities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let's Work <span className="gradient-text">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I'm a passionate developer ready to bring your ideas to life. Whether it's a web app,
            API, or full-stack project — let's build something amazing together!
          </motion.p>

          {/* Offerings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {offerings.map((o, i) => {
              const Icon = o.icon;
              return (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/3 rounded-full border border-white/5">
                  <Icon className={`w-4 h-4 ${o.color}`} />
                  <span className="text-gray-400 text-sm">{o.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#contact" className="btn-primary text-base px-8 py-3.5 group">
              <Mail className="w-5 h-5" />
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/pankaj143p"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-purple-500/30 text-purple-400 hover:bg-purple-500/8 transition-all font-semibold text-base"
            >
              View My Work
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/5"
          >
            {[
              { value: "10+", label: "Projects Completed", color: "text-purple-400" },
              { value: "20+", label: "Technologies", color: "text-indigo-400" },
              { value: "100%", label: "Client Satisfaction", color: "text-violet-400" },
              { value: "< 24h", label: "Response Time", color: "text-fuchsia-400" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-gray-600 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hireme;
