import { motion, useInView } from 'framer-motion';
import { useThemeStore } from '../store/theme';
import { useRef } from 'react';

export function About() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px -100px 0px"
  });

  return (
    <section id="about" className="py-20">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center"
      >
        <motion.img
          src="/path/to/your/image.jpg"
          alt="About me"
          className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8 shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          <p className="mb-4">
            Hi, I'm [Your Name], a passionate developer with a love for creating beautiful and functional web applications. With a background in [Your Background], I bring a unique perspective to every project I work on.
          </p>
          <p>
            When I'm not coding, you can find me [Your Hobbies]. I'm always eager to learn new things and take on new challenges. Let's build something amazing together!
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
}