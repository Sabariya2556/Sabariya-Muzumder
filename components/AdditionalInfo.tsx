import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

const trends = [
  "AI Powered", "Neumorphism", "Glassmorphism", "Dark Mode with Depth", 
  "Minimalism + Bold Typography", "Skeuomorphic", "Story-Driven", 
  "Scrollytelling", "Data-Driven", "Voice & Chat-Based"
];

const AdditionalInfo = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[40px] border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles size={120} className="text-brand" />
          </div>
          
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Zap className="text-brand" size={28} />
            Additional Information
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Designed AI-powered mobile applications with modern, user-centric interfaces, 
            incorporating current UI trends and interactive prototyping to enhance 
            usability and engagement.
          </p>
        </motion.div>

        <div>
          <h3 className="text-sm font-mono text-brand uppercase tracking-[0.2em] mb-8">
            Most Used Trending Design
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trends.map((trend, index) => (
              <motion.div
                key={trend}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand/30 transition-all hover:bg-white/10 group"
              >
                <div className="w-2 h-2 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
                <span className="text-gray-300 font-medium">{trend}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
