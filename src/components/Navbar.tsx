import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useThemeStore } from '../store/theme';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Services', 'Portfolio', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark ? 'bg-black/50' : 'bg-white/50' 
          : 'bg-transparent'
      } backdrop-blur-lg`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Hariom Harsh
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  isDark ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } transition-colors relative group`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark 
                  ? 'hover:bg-white/10' 
                  : 'hover:bg-gray-100'
              } transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? (
                <Sun className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <Moon className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              isDark ? 'bg-black/90' : 'bg-white/90'
            } backdrop-blur-lg`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block ${
                    isDark 
                      ? 'text-white/90 hover:text-white' 
                      : 'text-gray-700 hover:text-gray-900'
                  } py-2`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`w-full text-left py-2 ${
                  isDark 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}