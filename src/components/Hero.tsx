import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useThemeStore } from '../store/theme';

export function Hero() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const [hue, setHue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px -100px 0px"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r`}
            style={{ 
              backgroundImage: `linear-gradient(to right, 
                hsl(${hue}, 100%, ${isDark ? '70%' : '45%'}),
                hsl(${(hue + 180) % 360}, 100%, ${isDark ? '70%' : '40%'})
              )`,
              transition: 'color 0.3s ease',
              textShadow: isDark ? 'none' : '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Hariom Harsh
          </h1>
          <p className={`text-xl md:text-2xl ${isDark ? 'text-white/90' : 'text-gray-700'} mb-8`}>
            Empowering entrepreneurs with tailored Android apps that make a difference
          </p>
          <div className="flex space-x-4">
            <SocialLink href="https://github.com" icon={<Github />} isDark={isDark} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} isDark={isDark} />
            <SocialLink href="mailto:contact@example.com" icon={<Mail />} isDark={isDark} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:grid grid-cols-2 gap-4"
        >
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
            alt="Development"
            className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform"
          />
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
            alt="Code"
            className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform"
          />
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Design"
            className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform"
          />
          <img
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80"
            alt="Mobile"
            className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform"
          />
        </motion.div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, isDark }: { href: string; icon: React.ReactNode; isDark: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`p-3 rounded-full transition-colors ${
        isDark 
          ? 'bg-white/10 hover:bg-white/20 text-white' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
      }`}
    >
      {icon}
    </motion.a>
  );
}