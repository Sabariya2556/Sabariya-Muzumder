import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden glass border-white/10 relative z-10">
            <img 
              src="https://picsum.photos/seed/sabariya-pro/800/800" 
              alt="Sabariya Muzumder" 
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand rounded-tl-3xl z-0" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand rounded-br-3xl z-0" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
            <p>
              <span className="text-white font-medium">UI/UX & Product Designer</span> with 2.5+ years of experience across 
              AI (Artificial Intelligence), SaaS, Health-Tech, ERP, and eCommerce.
            </p>
            <p>
              Delivered <span className="text-brand font-semibold">15+ projects</span> driving 
              <span className="text-brand font-semibold"> $100K+</span> in business impact.
            </p>
            <p>
              Skilled in UX research, prototyping, style guide and design systems, with technical knowledge of 
              HTML, CSS & JS framework for seamless collaboration with development teams.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="p-6 glass rounded-2xl border-white/5">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Projects Completed</div>
            </div>
            <div className="p-6 glass rounded-2xl border-white/5">
              <div className="text-3xl font-bold text-white mb-1">2.5+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</div>
            </div>
          </div>

          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="https://www.behance.net/sabariymuzumde" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-emerald-600 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand/20"
            >
              Visit Portfolio
            </a>
            <a 
              href="https://drive.google.com/file/d/1V-kS4tRNWUroZ8K3CXsMnu1g7mYEjkkq/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText size={20} className="text-brand" />
              View CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
