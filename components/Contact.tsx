import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass-dark rounded-[40px] p-12 md:p-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Let's build <br />
              <span className="text-gradient-blue">something great</span> <br />
              together.
            </h2>
            <p className="text-gray-400 font-light mb-12 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail size={20} className="text-brand" />
                </div>
                <span>sabariyamuzumder9921@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Linkedin size={20} className="text-brand" />
                </div>
                <a 
                  href="https://linkedin.com/in/sabariya-muzumder/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand transition-colors"
                >
                  linkedin.com/in/sabariya-muzumder/
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand outline-none transition-colors"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand outline-none transition-colors"
            />
            <textarea 
              placeholder="Message" 
              rows={5}
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand outline-none transition-colors resize-none"
            />
            <button className="w-full py-4 bg-brand hover:bg-emerald-600 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
