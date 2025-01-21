import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Award, Users } from 'lucide-react';

export function AdditionalInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      title: 'Professional Philosophy',
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      content: `I believe in creating mobile applications that not only meet technical requirements 
      but also deliver exceptional user experiences. My approach combines innovative solutions 
      with sustainable development practices, ensuring long-term value for clients and users alike.`
    },
    {
      title: 'Notable Achievements',
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      content: `
      • Google Play Store Editor's Choice Award 2022
      • Featured in Android Developer Stories
      • Speaker at Android Dev Summit 2023
      • Published technical articles on Medium with 50k+ reads`
    },
    {
      title: 'Volunteer Work',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      content: `
      • Android Development Mentor at local coding bootcamps
      • Organizer of Android Developer Meetups
      • Contributing to open-source Android libraries
      • Teaching coding to underprivileged students`
    }
  ];

  return (
    <section id="additional" className="py-20 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Additional Information
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h3 className="text-xl font-semibold text-white ml-3">
                  {section.title}
                </h3>
              </div>
              <div className="text-white/80 whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}