import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target, Code, Star, ExternalLink, Medal, Crown, Zap } from 'lucide-react';
import codechef from "./CodingProfiles/cc-logo.svg";
import leetcode from "./CodingProfiles/lc-logo.webp";
import geeksfogeeks from "./CodingProfiles/gfg-logo.svg";
import codingninjas from "./CodingProfiles/cn-logo.svg";
import hackerearth from "./CodingProfiles/he-logo.png";
import hackerrank from "./CodingProfiles/hr-logo.png";
import { useSEO, SEO_CONFIGS } from "../hooks/useSEO";
import StructuredDataInjector from "./StructuredDataInjector";

export default function Achievements() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // SEO optimization for achievements section
  useSEO(SEO_CONFIGS.achievements);

  const myAchievements = [
    {
      title: "CodeChef Global Rank 19th",
      description: "Achieved global rank 19th on CodeChef in Starters 130 Division 4 (Rated) with highest rating of 1911",
      icon: Crown,
      color: "from-yellow-400 to-orange-500",
      stats: { rank: "19th", rating: "1911", platform: "CodeChef" }
    },
    {
      title: "Coding Ninjas AIR 16th",
      description: "Secured AIR 16th position in Coding Ninjas World Cup event and solved 2000+ problems",
      icon: Trophy,
      color: "from-blue-400 to-cyan-500",
      stats: { rank: "16th", problems: "2000+", platform: "Coding Ninjas" }
    },
    {
      title: "LeetCode Knight Coder",
      description: "Achieved Knight Coder status with highest rating of 1927 and solved 1100+ questions",
      icon: Medal,
      color: "from-green-400 to-emerald-500",
      stats: { title: "Knight", rating: "1927", problems: "1100+", platform: "LeetCode" }
    },
    {
      title: "GeeksforGeeks 4-Star Coder",
      description: "Earned 4-Star coder status with rating 1856, college rank 2, and solved 1200+ questions",
      icon: Star,
      color: "from-purple-400 to-pink-500",
      stats: { stars: "4-Star", rating: "1856", rank: "2nd", problems: "1200+", platform: "GeeksforGeeks" }
    },
  ];

  const codingProfiles = [
    {
      img: codechef,
      platform: "CodeChef",
      username: "pankajp07",
      link: "https://www.codechef.com/users/pankajp07",
      stats: "1911 Rating",
      color: "from-orange-400 to-red-500"
    },
    {
      img: leetcode,
      platform: "LeetCode",
      username: "pankaj077",
      link: "https://leetcode.com/pankaj077",
      stats: "Knight Coder",
      color: "from-yellow-400 to-orange-400"
    },
    {
      img: geeksfogeeks,
      platform: "GeeksforGeeks",
      username: "pankaj07",
      link: "https://auth.geeksforgeeks.org/user/pankaj07",
      stats: "4-Star Coder",
      color: "from-green-400 to-emerald-500"
    },
    {
      img: codingninjas,
      platform: "Coding Ninjas",
      username: "pankaj07",
      link: "https://www.codingninjas.com/studio/profile/pankaj07",
      stats: "2000+ Problems",
      color: "from-blue-400 to-cyan-500"
    },
    {
      img: hackerearth,
      platform: "HackerEarth",
      username: "pankaj07",
      link: "hhttps://www.hackerearth.com/@pankaj07/",
      stats: "Active Coder",
      color: "from-purple-400 to-pink-500"
    },
    {
      img: hackerrank,
      platform: "HackerRank",
      username: "i_am_pankaj",
      link: "https://www.hackerrank.com/profile/i_am_pankaj",
      stats: "Problem Solver",
      color: "from-indigo-400 to-purple-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const AchievementCard = ({ achievement, index }) => {
    const IconComponent = achievement.icon;
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -5 }}
        className="glass-card p-8 relative overflow-hidden group"
      >
        {/* Background Gradient */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-2xl -translate-y-8 translate-x-8`}></div>
        
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
          {achievement.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {achievement.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-3">
          {Object.entries(achievement.stats).map(([key, value]) => (
            <div key={key} className="px-3 py-1 bg-white/5 rounded-full text-sm">
              <span className="text-gray-400 capitalize">{key}: </span>
              <span className="text-cyan-400 font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  const ProfileCard = ({ profile, index }) => {
    const handleProfileClick = (e) => {
      e.preventDefault();
      window.open(profile.link, '_blank', 'noopener,noreferrer');
    };

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -10, scale: 1.02 }}
        className="glass-card p-6 text-center group relative overflow-hidden cursor-pointer"
        onClick={handleProfileClick}
      >
        {/* Background Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        
        {/* Platform Logo */}
        <div className="relative mb-4">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img
              src={profile.img}
              alt={profile.platform}
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* Platform Info */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {profile.platform}
        </h3>
        
        <div className="text-sm text-gray-400 mb-3">
          @{profile.username}
        </div>

        <div className={`px-3 py-1 bg-gradient-to-r ${profile.color} text-white text-sm rounded-full mb-4 inline-block`}>
          {profile.stats}
        </div>

        {/* Visit Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-all duration-300 group-hover:text-cyan-400"
          onClick={(e) => {
            e.stopPropagation();
            handleProfileClick(e);
          }}
        >
          <ExternalLink className="w-4 h-4" />
          Visit Profile
        </motion.div>
      </motion.div>
    );
  };

  return (
    // Achievements Section
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Competitive programming milestones and coding achievements that highlight my problem-solving journey
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {myAchievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </motion.div>

        {/* Coding Profiles Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Coding <span className="gradient-text">Profiles</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Connect with me on various competitive programming platforms
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {codingProfiles.map((profile, index) => (
              <ProfileCard key={index} profile={profile} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Trophy, label: "Contest Wins", value: "15+", color: "text-yellow-400" },
            { icon: Target, label: "Problems Solved", value: "4000+", color: "text-cyan-400" },
            { icon: Star, label: "Max Rating", value: "1927", color: "text-purple-400" },
            { icon: Zap, label: "Global Ranks", value: "Top 50", color: "text-green-400" },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform"
              >
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Structured Data for SEO */}
        <StructuredDataInjector type="achievements" data={myAchievements} />
        <StructuredDataInjector type="profiles" data={codingProfiles} />
        <StructuredDataInjector type="faq" />

      </div>
    </section>
  );
}





