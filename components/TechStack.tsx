import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "User-centered design", level: 95, color: "bg-brand" },
  { name: "User research", level: 90, color: "bg-brand" },
  { name: "Product design", level: 92, color: "bg-brand" },
  { name: "Wireframing & prototyping", level: 95, color: "bg-brand" },
  { name: "Interactive Design", level: 88, color: "bg-brand" },
  { name: "Graphics & branding", level: 85, color: "bg-brand" },
];

const stack = [
  { name: "Figma", slug: "figma" },
  { name: "Framer", slug: "framer" },
  { name: "Sketch", slug: "sketch" },
  { name: "Adobe XD", slug: "adobexd" },
  { name: "Illustrator", slug: "adobeillustrator" },
  { name: "Photoshop", slug: "adobephotoshop" },
  { name: "Canva", slug: "canva" },
  { name: "Miro", slug: "miro" },
  { name: "Usability Hub", slug: "usabilityhub" },
  { name: "Google Analytics", slug: "googleanalytics" },
  { name: "AI Tools", slug: "openai" },
  { name: "Trello", slug: "trello" },
  { name: "Jira", slug: "jira" },
  { name: "ClickUp", slug: "clickup" }
];

const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-charcoal/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Tech Stack & Skills</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-8">
            I leverage industry-standard tools and modern design methodologies to create impactful digital experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            {stack.map((tool) => (
              <span key={tool.name} className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium border-white/5 hover:border-brand/30 transition-colors group">
                <img 
                  src={`https://cdn.simpleicons.org/${tool.slug}`} 
                  alt={tool.name}
                  className="w-4 h-4 opacity-90 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {tool.name}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-300">{skill.name}</span>
                <span className="text-gray-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
