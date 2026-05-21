import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Medal, Star, Crown, ExternalLink, Target, Zap } from "lucide-react";
import codechef from "../CodingProfiles/cc-logo.svg";
import leetcode from "../CodingProfiles/lc-logo.webp";
import geeksforgeeks from "../CodingProfiles/gfg-logo.svg";
import codingninjas from "../CodingProfiles/cn-logo.svg";
import hackerearth from "../CodingProfiles/he-logo.png";
import hackerrank from "../CodingProfiles/hr-logo.png";

const Achievements = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const achievements = [
    {
      icon: Crown,
      title: "CodeChef Global Rank 19th",
      description: "Achieved global rank 19th in Starters 130 Division 4 (Rated) with highest rating of 1911.",
      stats: [{ label: "Rank", value: "19th" }, { label: "Rating", value: "1911" }],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Trophy,
      title: "Coding Ninjas AIR 16th",
      description: "Secured AIR 16th position in Coding Ninjas World Cup event with 2000+ problems solved.",
      stats: [{ label: "AIR", value: "16th" }, { label: "Problems", value: "2000+" }],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Medal,
      title: "LeetCode Knight Coder",
      description: "Achieved Knight Coder status with highest rating of 1927 and solved 1100+ questions.",
      stats: [{ label: "Title", value: "Knight" }, { label: "Rating", value: "1927" }, { label: "Problems", value: "1100+" }],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Star,
      title: "GeeksforGeeks 4-Star Coder",
      description: "Earned 4-Star coder status with rating 1856 and solved 1200+ questions on the platform.",
      stats: [{ label: "Stars", value: "4★" }, { label: "Rating", value: "1856" }, { label: "Problems", value: "1200+" }],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const profiles = [
    { img: codechef, platform: "CodeChef", username: "pankajp07", link: "https://www.codechef.com/users/pankajp07", stat: "1911 Rating" },
    { img: leetcode, platform: "LeetCode", username: "pankaj077", link: "https://leetcode.com/pankaj077", stat: "Knight · 1927" },
    { img: geeksforgeeks, platform: "GeeksforGeeks", username: "pankaj07", link: "https://auth.geeksforgeeks.org/user/pankaj07", stat: "4-Star · 1856" },
    { img: codingninjas, platform: "Coding Ninjas", username: "pankaj07", link: "https://www.codingninjas.com/studio/profile/pankaj07", stat: "2000+ Problems" },
    { img: hackerearth, platform: "HackerEarth", username: "pankaj07", link: "https://www.hackerearth.com/@pankaj07/", stat: "Active Coder" },
    { img: hackerrank, platform: "HackerRank", username: "i_am_pankaj", link: "https://www.hackerrank.com/profile/i_am_pankaj", stat: "Problem Solver" },
  ];

  const summaryStats = [
    { icon: Trophy, label: "Contest Wins", value: "15+", color: "text-yellow-400" },
    { icon: Target, label: "Problems Solved", value: "4000+", color: "text-purple-400" },
    { icon: Star, label: "Max Rating", value: "1927", color: "text-indigo-400" },
    { icon: Zap, label: "Global Ranks", value: "Top 50", color: "text-green-400" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="achievements" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">My milestones</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Achievements & <span className="gradient-text">Profiles</span>
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Summary stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {summaryStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} variants={item} whileHover={{ y: -4 }} className="glass-card p-5 text-center">
                <Icon className={`w-6 h-6 ${s.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div key={i} variants={item} whileHover={{ y: -4 }} className="glass-card p-6 relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${a.color} opacity-5 rounded-full blur-2xl -translate-y-8 translate-x-8`} />
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${a.color} shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{a.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {a.stats.map((s, si) => (
                        <span key={si} className="text-xs px-2.5 py-1 bg-white/4 rounded-full text-gray-400">
                          {s.label}: <span className="text-purple-400 font-medium">{s.value}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Coding <span className="gradient-text">Profiles</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2">Connect with me on competitive programming platforms</p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {profiles.map((p, i) => (
              <motion.a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-card p-4 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/8 transition-colors">
                  <img src={p.img} alt={p.platform} className="w-8 h-8 object-contain" />
                </div>
                <div className="text-white text-xs font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                  {p.platform}
                </div>
                <div className="text-gray-600 text-xs mb-2">@{p.username}</div>
                <div className="text-purple-400 text-xs font-medium">{p.stat}</div>
                <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-purple-400 mx-auto mt-2 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
