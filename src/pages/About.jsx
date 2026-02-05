import { motion } from 'framer-motion';
import aboutData from '../data/about';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-start">
        {/* Education & Values Side */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
          <div className="space-y-6 mb-10">
            {aboutData.education.map((edu, index) => (
               <div key={index} className="glass p-6 rounded-xl border-l-4 border-cyan-500">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-cyan-400">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                     <span>{edu.dates}</span>
                     <span>{edu.location}</span>
                  </div>
               </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-white">Core Values</h3>
          <div className="flex flex-wrap gap-3">
             {aboutData.values.map((val, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-slate-900 border border-gray-700 text-gray-300 text-sm">
                   {val}
                </span>
             ))}
          </div>
        </motion.div>

        {/* Bio Side */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
          
          <div className="text-gray-300 text-lg leading-relaxed space-y-4 whitespace-pre-line">
             {/* Using dangerouslySetInnerHTML if strict markdown isn't processed, or simple replacement */}
            {aboutData.bio.split('\n\n').map((paragraph, idx) => (
               <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}></p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
