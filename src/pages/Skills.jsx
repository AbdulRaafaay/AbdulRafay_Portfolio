import { motion } from 'framer-motion';
import skillsData from '../data/skills';

export default function Skills() {
  // Transform string array into object array for consistency if needed, 
  // but simpler to just map the object keys since structure varies slightly
  
  const skillCategories = [
    { title: "Technical Skills", items: skillsData.technical },
    { title: "Tools & Frameworks", items: skillsData.tools },
    { title: "Soft Skills", items: skillsData.soft }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-950/50">
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-400">My comprehensive tech stack and toolset.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-xl border-t-4 border-t-cyan-500/50 hover:border-t-cyan-400 transition-all h-full"
            >
              <h3 className="text-xl font-bold mb-6 text-white text-center pb-4 border-b border-gray-800">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 rounded-md bg-slate-800 text-cyan-300 text-sm font-medium border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
