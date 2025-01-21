import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce App',
    description: 'A full-featured shopping app with real-time inventory and secure payments.',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80',
    tags: ['Kotlin', 'MVVM', 'Firebase'],
    longDescription: 'Built a scalable e-commerce platform using modern Android architecture components. Implemented real-time inventory tracking, secure payment processing, and a seamless shopping experience.',
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    }
  },
  {
    title: 'Fitness Tracker',
    description: 'Health monitoring app with workout planning and progress tracking.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Jetpack Compose', 'Room DB', 'Health APIs'],
    longDescription: 'Developed a comprehensive fitness tracking application that helps users monitor their health metrics, plan workouts, and track progress over time.',
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    }
  },
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center"
        >
          Portfolio
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(index)}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all cursor-pointer"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="${isDark ? 'text-white' : 'text-gray-900'} mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-white/20 rounded-full ${isDark ? 'text-white' : 'text-gray-900'}"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {projects[selectedProject].title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white/60 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-white/80 mb-4">
                  {projects[selectedProject].longDescription}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={projects[selectedProject].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/80 hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={projects[selectedProject].links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/80 hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}