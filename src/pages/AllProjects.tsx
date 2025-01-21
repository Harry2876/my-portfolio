import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../store/theme';

const allProjects = [
  {
    id: 1,
    title: 'E-commerce App',
    description: 'A full-featured shopping app with real-time inventory and secure payments.',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80',
    tags: ['Kotlin', 'MVVM', 'Firebase'],
    year: '2023',
    client: 'ShopEase Inc.',
    role: 'Lead Android Developer',
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    }
  },
  // Add more projects here...
];

export function AllProjects() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} pt-20`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link
          to="/"
          className={`inline-flex items-center space-x-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          } mb-8 hover:opacity-80 transition-opacity`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12`}>
          All Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-xl overflow-hidden ${
                isDark ? 'bg-white/10' : 'bg-gray-100'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-white/80' : 'text-gray-600'} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                    {project.year}
                  </span>
                  <div className="flex space-x-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDark ? 'text-white/80' : 'text-gray-600'} hover:opacity-80`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDark ? 'text-white/80' : 'text-gray-600'} hover:opacity-80`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}