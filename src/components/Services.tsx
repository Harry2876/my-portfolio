import React, { useRef } from 'react';
import { Smartphone, Code, Palette, Gauge } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useThemeStore } from '../store/theme';

export function Services() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px -100px 0px"
  });

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Native Android Apps',
      description: 'Custom Android applications built with modern technologies and best practices.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'App Architecture',
      description: 'Scalable and maintainable architecture design for long-term success.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that delight your users.',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements for existing applications.',
    }
  ];

  return (
    <section 
      ref={ref} 
      id="services" 
      className={`transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`group relative overflow-hidden rounded-xl ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-white hover:bg-gray-50'
              } backdrop-blur-lg transition-all duration-300 p-6 shadow-lg`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`${isDark ? 'text-white' : 'text-gray-900'} mb-4`}
              >
                {service.icon}
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
              <p className={isDark ? 'text-white/80' : 'text-gray-600'}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}