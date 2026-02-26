import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Hajira Khata (হাজিরা খাতা)",
    category: "Mobile App",
    description: "A digital attendance and student management solution for educational institutions with 35+ screens and user-focused design.",
    image: "https://raw.githubusercontent.com/Sabariya2556/Sabariya-Muzumder/refs/heads/main/images/Cover.png",
    color: "from-indigo-500/20 to-blue-500/20",
    link: "https://www.figma.com/design/iZB9K57B1Uj8epcyB0adWv"
  },
  {
    title: "Food Analytica-ERP",
    category: "Restuarant ERP",
    description: "Enterprise resource planning for the food industry with a focus on nutritional data.",
    image: "https://picsum.photos/seed/food/800/600",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://www.figma.com/design/gj5lrpUtzieTjoQFPrsrks"
  },
  {
    title: "Time2Task",
    category: "SaaS",
    description: "A comprehensive task management system designed for high-performance teams.",
    image: "https://picsum.photos/seed/time2task/800/600",
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://www.figma.com/design/VZ6AzmAhdbBbcjVd7nQyS9"
  },
  {
    title: "Biddalay.app",
    category: "EdTech",
    description: "A modern school management platform streamlining administrative tasks and communication.",
    image: "https://picsum.photos/seed/biddalay/800/600",
    color: "from-rose-500/20 to-pink-500/20",
    link: "https://www.figma.com/design/fAWDB4EmXdwTTBaeeP1U7M"
  },
  {
    title: "AI Study Buddy",
    category: "AI",
    description: "Personalized learning assistant powered by advanced language models.",
    image: "https://picsum.photos/seed/ai/800/600",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://www.figma.com/design/wWM3soWlMSiv3nDkW5P1wb"
  },
  {
    title: "MediCare",
    category: "Health-Tech",
    description: "MediCare is a modern, minimal, and user-focused medical clinic website designed to build trust and improve patient experience.",
    image: "https://picsum.photos/seed/medicare/800/600",
    color: "from-blue-400/20 to-emerald-400/20",
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-charcoal/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Core Projects</h2>
            <p className="text-gray-400 font-light">A showcase of products built with precision and purpose.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand hover:underline font-medium">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden glass border-white/5 block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-brand uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="p-3 rounded-full bg-white/5 border border-white/10"
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
