import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';
import certificationsData from '../data/certifications';

const CertificationCard = ({ cert, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;
  const isLongText = cert.description.length > maxLength;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col p-6 glass rounded-xl border border-gray-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group h-full relative"
    >
      <div className="flex items-start gap-4 mb-4">
         <div className="p-3 bg-slate-950 rounded-lg text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
           <Award size={24} />
         </div>
         <div>
           <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors text-lg leading-tight">{cert.title}</h3>
           <p className="text-sm text-gray-400 mt-1">{cert.platform}</p>
         </div>
      </div>
      
      <p className="text-sm text-gray-500 mb-4 italic">{cert.date}</p>
      
      <div className="mb-8">
        <p className="text-sm text-gray-400 leading-relaxed">
           {isExpanded || !isLongText ? cert.description : cert.description.substring(0, maxLength) + "..."}
        </p>
      </div>

      {isLongText && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute bottom-6 left-6 text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors mt-auto"
        >
          {isExpanded ? (
            <>Read Less <ChevronUp size={14} /></>
          ) : (
            <>Read More <ChevronDown size={14} /></>
          )}
        </button>
      )}
    </motion.div>
  );
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications & <span className="text-gradient">Awards</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
