import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Flyte Solutions Ltd.",
    role: "User Experience Designer",
    period: "Nov 2023 – Present",
    description: "Led user research and design, boosting task success by 25% and team efficiency by 40% across 10+ projects including Time-Tracker (PMS, HRMS, DMS), AgriTech, and eCommerce solutions.",
  },
  {
    company: "CRID USA (Remote)",
    role: "Jr. UI/UX Designer",
    period: "Feb 2023 – Nov 2023",
    description: "Designed user-centric, research-driven health innovation apps and web projects, including Patient & Receptionist apps, E-Tracker, and IoT-based ERP systems.",
  },
  {
    company: "TOTALOFFTEC",
    role: "UI Designer (Intern)",
    period: "Oct 2022 – Feb 2023",
    description: "Designed wireframes, prototypes, and visuals for web and mobile apps, ensuring consistent and feasible UI designs for various client projects.",
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400 font-light">
            Over 2.5 years of dedicated experience in crafting high-impact digital products across various industries.
          </p>
          <div className="mt-8 h-1 w-20 bg-brand rounded-full" />
        </div>
        
        <div className="md:w-2/3 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-electric-blue rounded-full shadow-[0_0_10px_rgba(10,205,130,0.8)]" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                <span className="text-electric-blue font-mono text-sm">{exp.period}</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4 font-medium">{exp.role}</h4>
              <p className="text-gray-400 leading-relaxed font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
