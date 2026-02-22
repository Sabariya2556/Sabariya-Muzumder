import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Cpu, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "User Research",
    icon: <Search className="text-brand" />,
    description: "Deep diving into user behaviors, pain points, and market trends to define the core problem.",
  },
  {
    title: "Wireframing",
    icon: <Layout className="text-brand" />,
    description: "Architecting the information flow and structural layout to ensure seamless navigation.",
  },
  {
    title: "Prototyping",
    icon: <Cpu className="text-brand" />,
    description: "Bringing designs to life with interactive high-fidelity prototypes for realistic testing.",
  },
  {
    title: "Testing",
    icon: <CheckCircle className="text-brand" />,
    description: "Validating solutions with real users and iterating based on data-driven insights.",
  },
];

const DesignProcess = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Design Strategy</h2>
        <p className="text-gray-400 font-light max-w-2xl mx-auto">
          A systematic approach to solving complex problems through empathy and iterative design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 z-0" />
        
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative z-10 flex flex-col items-center text-center p-8 glass rounded-3xl border-white/5 hover:border-white/20 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-xl">
              {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DesignProcess;
