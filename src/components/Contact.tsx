import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Contact</h2>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-white/80 mb-8">
                I'm excited to collaborate on your next project. Feel free to reach out
                to discuss how we can achieve your goals together.
              </p>
              <div className="space-y-4">
                <ContactItem
                  icon={<Mail />}
                  text="contact@example.com"
                  href="mailto:contact@example.com"
                />
                <ContactItem
                  icon={<Phone />}
                  text="+1 (555) 123-4567"
                  href="tel:+15551234567"
                />
                <ContactItem
                  icon={<Linkedin />}
                  text="LinkedIn Profile"
                  href="https://linkedin.com/in/profile"
                />
                <ContactItem
                  icon={<MapPin />}
                  text="San Francisco, CA"
                  href="#"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Education & Certifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium">Master of Computer Science</h4>
                  <p className="text-white/60">Stanford University, 2019</p>
                </div>
                <div>
                  <h4 className="text-white font-medium">Google Certified Android Developer</h4>
                  <p className="text-white/60">2020</p>
                </div>
                <div>
                  <h4 className="text-white font-medium">AWS Certified Developer</h4>
                  <p className="text-white/60">2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{text}</span>
    </a>
  );
}