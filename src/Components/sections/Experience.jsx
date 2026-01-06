import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Capgemini',
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/1200px-Capgemini_201x_logo.svg.png',
      location: 'Pune, Maharashtra, India',
      workType: 'Hybrid',
      employmentType: 'Full-time',
      period: 'Aug 2025 - Present',
      duration: '6 mos',
      description: 'Working as a Software Engineer developing enterprise-level applications using Java and Spring Boot ecosystem. Building scalable microservices and implementing cloud solutions on AWS.',
      skills: ['Java', 'React.js', 'Spring Boot', 'AWS', 'Spring Security', 'Spring Cloud'],
      achievements: [
        'Developing enterprise applications',
        'Building microservices architecture',
        'Implementing cloud solutions on AWS',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'work',
      title: 'Intern',
      company: 'Capgemini',
      companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/1200px-Capgemini_201x_logo.svg.png',
      location: 'Navi Mumbai, Maharashtra, India',
      workType: 'On-site',
      employmentType: 'Internship',
      period: 'May 2025 - Jul 2025',
      duration: '3 mos',
      description: 'Completed intensive training and hands-on projects in Java and Spring Boot. Gained practical experience in enterprise software development practices and agile methodologies.',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Git', 'Agile'],
      achievements: [
        'Completed enterprise training program',
        'Built REST APIs with Spring Boot',
        'Collaborated in agile environment',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'freelance',
      title: 'Member',
      company: 'Superteam India',
      companyLogo: 'https://pbs.twimg.com/profile_images/1730595728092white49/qNaIiwUm_400x400.jpg',
      location: 'Remote',
      workType: 'Remote',
      employmentType: 'Part-time / Freelance',
      period: 'May 2025 - Present',
      duration: '9 mos',
      description: 'Contributing to blockchain and Web3 projects as a freelance developer. Building decentralized applications and smart contracts using modern tech stack.',
      skills: ['Next.js', 'Rust', 'Node.js', 'Radix CSS', 'Blockchain', 'Web3', 'Solana'],
      achievements: [
        'Building Web3 applications',
        'Working on blockchain projects',
        'Contributing to decentralized solutions',
      ],
      color: 'from-purple-500 to-pink-500',
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
    const isFreelance = experience.type === 'freelance';
    const Icon = isFreelance ? Building2 : Briefcase;

    return (
      <motion.div
        variants={itemVariants}
        className="relative flex items-start gap-8 md:flex-row"
      >
        {/* Timeline connector */}
        <div className="hidden md:flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} p-1 flex items-center justify-center z-10 shadow-lg`}
          >
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
              {experience.companyLogo ? (
                <img 
                  src={experience.companyLogo} 
                  alt={experience.company}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <Icon className="w-6 h-6 text-white" style={{ display: experience.companyLogo ? 'none' : 'block' }} />
            </div>
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
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${experience.color} opacity-10 rounded-full blur-2xl -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`}
          />

          {/* Mobile icon */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${experience.color} p-0.5 flex items-center justify-center`}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                {experience.companyLogo ? (
                  <img 
                    src={experience.companyLogo} 
                    alt={experience.company}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <Icon className="w-5 h-5 text-white" />
                )}
              </div>
            </div>
            <div>
              <span className={`text-sm font-medium bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                {experience.company}
              </span>
              <p className="text-xs text-gray-500">{experience.employmentType}</p>
            </div>
          </div>

          {/* Header */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                {experience.title}
              </h3>
              <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${experience.color} text-white font-medium`}>
                {experience.employmentType}
              </span>
            </div>
            <p className="text-lg text-cyan-400 font-semibold">{experience.company}</p>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period} · {experience.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location} · {experience.workType}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">{experience.description}</p>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.color}`} />
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
                className={`px-3 py-1 text-xs rounded-full border bg-white/5 text-gray-300 border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Calculate total experience
  const totalMonths = 9; // Capgemini total
  const experienceSummary = `${Math.floor(totalMonths / 12)} year${totalMonths >= 12 ? 's' : ''} ${totalMonths % 12} months`;

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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"
          />
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development
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
