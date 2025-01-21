import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';
import { useThemeStore } from '../store/theme';

const testimonials = [
  {
    text: "Hariom's expertise in Android development transformed our business. The app he created exceeded all expectations.",
    author: "Sarah Chen",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "https://example.com/techstart"
  },
  {
    text: "Working with Hariom was a game-changer. His attention to detail and technical knowledge are outstanding.",
    author: "Michael Rodriguez",
    position: "Product Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "https://example.com/innovate"
  },
  {
    text: "The app development process was smooth and professional. Hariom delivered exactly what we needed.",
    author: "Emily Watson",
    position: "Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    company: "https://example.com/startup"
  }
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center`}
        >
          Client Testimonials
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl ${
                isDark 
                  ? 'bg-white/10 backdrop-blur-lg' 
                  : 'bg-white shadow-lg'
              } transform hover:scale-105 transition-all duration-300`}
            >
              <Quote className={`w-8 h-8 ${isDark ? 'text-white/60' : 'text-gray-400'} mb-4`} />
              <p className={`${isDark ? 'text-white/90' : 'text-gray-700'} mb-4`}>
                {testimonial.text}
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.author}
                  </p>
                  <a
                    href={testimonial.company}
                    className={`text-sm ${
                      isDark 
                        ? 'text-white/60 hover:text-white/80' 
                        : 'text-gray-500 hover:text-gray-700'
                    } transition-colors`}
                  >
                    {testimonial.position}
                  </a>
                </div>
              </div>
              <div className="flex mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}