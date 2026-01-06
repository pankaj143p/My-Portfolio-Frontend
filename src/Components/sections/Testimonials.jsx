import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Project Manager',
      company: 'Tech Corp',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Pankaj delivered exceptional work on our e-commerce project. His attention to detail and problem-solving skills are impressive.',
      rating: 5,
    },
    {
      name: 'Sarah Smith',
      role: 'Startup Founder',
      company: 'InnovateTech',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Working with Pankaj was a great experience. He understood our requirements perfectly and delivered ahead of schedule.',
      rating: 5,
    },
    {
      name: 'Mike Johnson',
      role: 'Senior Developer',
      company: 'DevStudio',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      text: 'Pankaj\'s coding skills and competitive programming background make him stand out. Highly recommend for complex projects.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="text-yellow-400"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
