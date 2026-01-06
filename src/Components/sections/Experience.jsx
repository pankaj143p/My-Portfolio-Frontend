import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      company: 'Tech Startup',
      location: 'Remote',
      period: 'Jan 2024 - Present',
      description: 'Developing scalable web applications using MERN stack. Implemented RESTful APIs and optimized database queries resulting in 40% performance improvement.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
      achievements: [
        'Built 5+ production features',
        'Reduced load time by 40%',
        'Mentored 2 junior developers',
      ],
    },
    {
      type: 'work',
      title: 'Web Development Intern',
      company: 'Digital Agency',
      location: 'Bhopal, India',
      period: 'Jun 2023 - Dec 2023',
      description: 'Created responsive websites and landing pages. Collaborated with design team to implement pixel-perfect UI components.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma'],
      achievements: [
        'Delivered 10+ client projects',
        'Achieved 95% client satisfaction',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      type: 'education',
      title: 'B.Tech in Computer Science',
      company: 'Specialization in AI/ML',
      location: 'Bhopal, India',
      period: '2021 - 2025',
      description: 'Pursuing Bachelor\'s degree with focus on Artificial Intelligence and Machine Learning. Active member of coding club and technical societies.',
      skills: ['Data Structures', 'Algorithms', 'Machine Learning', 'Python', 'Java'],
      achievements: [
        'CGPA: 8.5+',
        'College Rank: 2nd on GeeksforGeeks',
        'Led technical workshops',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const TimelineCard = ({ experience, index }) => {
    const isWork = experience.type === 'work';
    const Icon = isWork ? Briefcase : GraduationCap;

    return (
      <motion.div
        variants={itemVariants}
        className={`relative flex items-start gap-8 ${
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        } md:flex-row`}
      >
        {/* Timeline connector */}
        <div className="hidden md:flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`w-14 h-14 rounded-full bg-gradient-to-r ${
              isWork ? 'from-cyan-500 to-blue-600' : 'from-purple-500 to-pink-600'
            } flex items-center justify-center z-10 shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          {index < experiences.length - 1 && (
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : { height: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              className="w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent flex-1 min-h-[200px]"
            />
          )}
        </div>

        {/* Content card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="flex-1 glass-card p-6 lg:p-8 relative overflow-hidden group"
        >
          {/* Background glow */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
              isWork ? 'from-cyan-500/10' : 'from-purple-500/10'
            } to-transparent rounded-full blur-2xl -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`}
          />

          {/* Mobile icon */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <div
              className={`w-10 h-10 rounded-full bg-gradient-to-r ${
                isWork ? 'from-cyan-500 to-blue-600' : 'from-purple-500 to-pink-600'
              } flex items-center justify-center`}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className={`text-sm font-medium ${isWork ? 'text-cyan-400' : 'text-purple-400'}`}>
              {isWork ? 'Work Experience' : 'Education'}
            </span>
          </div>

          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
              {experience.title}
            </h3>
            <p className="text-lg text-gray-300 font-medium">{experience.company}</p>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">{experience.description}</p>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isWork ? 'bg-cyan-400' : 'bg-purple-400'}`} />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs rounded-full border ${
                  isWork
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                    : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"
          />
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and educational background that shaped me as a developer
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {experiences.map((experience, index) => (
            <TimelineCard key={index} experience={experience} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
