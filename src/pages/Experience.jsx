import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import experienceData from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-950/50">
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
             <h2 className="text-4xl font-bold">Work <span className="text-gradient">Experience</span></h2>
          </div>
        </motion.div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-6 w-5 h-5 bg-slate-950 border-4 border-cyan-500 rounded-full box-border"></div>
              
              <div className="glass p-6 md:p-8 rounded-xl hover:bg-slate-800/50 transition-colors border border-gray-800/50 hover:border-cyan-500/30">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                     <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                     <h4 className="text-lg text-cyan-400 font-medium flex items-center gap-2 mt-1">
                        <Briefcase size={16} /> {exp.company}
                     </h4>
                  </div>
                  <div className="text-right flex flex-col items-start md:items-end">
                     <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full mb-1">
                        {exp.dates}
                     </span>
                     <span className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin size={12} /> {exp.location}
                     </span>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.bullets.map((bullet, i) => (
                     <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-500 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-500 block"></span>
                        <span>{bullet}</span>
                     </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
