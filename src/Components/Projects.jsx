import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { ExternalLink, Github, Code, Eye } from "lucide-react";
import project1 from '../../assets/Projects/marketmart.png';
import project2 from '../../assets/Projects/quiz.avif';
import project3 from '../../assets/Projects/education.png';
import project4 from '../../assets/Projects/weather.png';
import project5 from '../../assets/Projects/chat.png';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      img: project1,
      name: "Market Mart",
      description: "Full-stack e-commerce platform with modern UI/UX, shopping cart functionality, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github_link: "https://github.com/pankaj143p/Market-Mart",
      live_link: "https://market-mart-snkt.vercel.app/",
      category: "Full Stack"
    },
    {
      img: project3,
      name: "Smart TnP Education",
      description: "Educational platform for training and placement with interactive learning modules and progress tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github_link: "https://github.com/pankaj143p/Smart-TNP-education-app",
      live_link: "https://smart-tnp-education-app-web.vercel.app/",
      category: "Web App"
    },
    {
      img: project2,
      name: "Interactive Quiz App",
      description: "Dynamic quiz application with timer functionality, score tracking, and responsive design for better user experience.",
      technologies: ["React", "JavaScript", "CSS3"],
      github_link: "https://github.com/pankaj143p/QuizApp",
      live_link: "https://github.com/pankaj143p/QuizApp",
      category: "Frontend"
    },
    {
      img: project4,
      name: "Weather Forecast",
      description: "Real-time weather application with location-based forecasting, beautiful UI animations, and detailed weather metrics.",
      technologies: ["React", "Weather API", "CSS3"],
      github_link: "https://github.com/pankaj143p/Weather-App",
      live_link: "https://github.com/pankaj143p/Weather-App",
      category: "API Integration"
    },
    {
      img: project5,
      name: "Chat With Me",
      description: "Real-time chat application with message encryption, file sharing, and modern chat interface design.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github_link: "https://github.com/pankaj143p/Chat-with-me",
      live_link: "https://chat-with-me-murex.vercel.app/",
      category: "Real-time App"
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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2 }}
      className="glass-card group relative overflow-hidden h-full"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={project.img} 
          alt={project.name}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
          {project.category}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <motion.a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm mt-2 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <motion.a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 flex-1 justify-center"
          >
            <Code className="w-4 h-4" />
            <span className="text-sm font-medium">Code</span>
          </motion.a>
          <motion.a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-300 flex-1 justify-center"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Live</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Here are some of my featured projects that showcase my skills and passion for creating amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Projects Swiper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay, EffectCoverflow]}
            className="projects-swiper pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mb-6 text-lg"
          >
            Want to see more of my work?
          </motion.p>
          <motion.a
            href="https://github.com/pankaj143p"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .projects-swiper .swiper-pagination-bullet {
          background: rgba(6, 182, 212, 0.5);
          opacity: 0.5;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: rgb(6, 182, 212);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Projects;