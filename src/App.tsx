import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { useThemeStore } from './store/theme';

function App() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background with will-change for better performance */}
      <div 
        className={`fixed inset-0 will-change-transform ${
          isDark ? 'bg-black' : 'bg-white'
        } transition-colors duration-500`}
      >
        {/* Animated circles with reduced blur and optimized animations */}
        <div 
          className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full blur-2xl animate-float-slow will-change-transform"
          style={{ 
            background: `hsla(${hue}, 100%, ${isDark ? '60%' : '50%'}, ${isDark ? '0.08' : '0.15'})`,
            transform: 'translate3d(0,0,0)' // Force GPU acceleration
          }}
        />
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-float"
          style={{ 
            background: `hsla(${(hue + 60) % 360}, 100%, ${isDark ? '60%' : '50%'}, ${isDark ? '0.08' : '0.15'})`,
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl animate-float-fast"
          style={{ 
            background: `hsla(${(hue + 120) % 360}, 100%, ${isDark ? '60%' : '50%'}, ${isDark ? '0.08' : '0.15'})`,
            animation: 'float 15s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-1/4 left-1/4 w-[525px] h-[525px] rounded-full blur-3xl animate-float-slower"
          style={{ 
            background: `hsla(${(hue + 180) % 360}, 100%, ${isDark ? '60%' : '50%'}, ${isDark ? '0.08' : '0.15'})`,
            animation: 'float 28s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Scrollable Content with smooth-scroll behavior */}
      <div className="relative">
        <Navbar />
        <div 
          className="space-y-20 overflow-y-auto scroll-smooth"
          style={{ 
            perspective: '1000px',
            backfaceVisibility: 'hidden'
          }}
        >
          <section className="min-h-screen">
            <Hero />
          </section>
          <section className="relative">
            <About />
          </section>
          <section className="relative">
            <Services />
          </section>
          <section className="relative">
            <Portfolio />
          </section>
          <section className="relative">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;