import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Coffee, GitBranch, Zap, Users } from 'lucide-react';

const AnimatedStats = () => {
  const stats = [
    {
      icon: Code,
      value: '4000+',
      label: 'Problems Solved',
      color: 'from-cyan-400 to-blue-500',
      description: 'Across all platforms',
    },
    {
      icon: Trophy,
      value: '19th',
      label: 'Global Rank',
      color: 'from-yellow-400 to-orange-500',
      description: 'CodeChef Starters 130',
    },
    {
      icon: GitBranch,
      value: '50+',
      label: 'Git Commits',
      color: 'from-green-400 to-emerald-500',
      description: 'This month',
    },
    {
      icon: Coffee,
      value: '1000+',
      label: 'Cups of Coffee',
      color: 'from-amber-400 to-orange-500',
      description: 'And counting...',
    },
    {
      icon: Zap,
      value: '1927',
      label: 'LeetCode Rating',
      color: 'from-purple-400 to-pink-500',
      description: 'Knight Coder',
    },
    {
      icon: Users,
      value: '100%',
      label: 'Client Satisfaction',
      color: 'from-rose-400 to-pink-500',
      description: 'Always delivering quality',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            By The <span className="gradient-text">Numbers</span>
          </h3>
          <p className="text-gray-400">A snapshot of my coding journey</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass-card p-4 lg:p-6 text-center group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Value with counter animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100, delay: index * 0.1 + 0.2 }}
                  className="text-2xl lg:text-3xl font-bold text-white mb-1"
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className="text-sm text-gray-300 font-medium mb-1">{stat.label}</div>

                {/* Description */}
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.description}
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${stat.color} opacity-20 rounded-full blur-lg`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
