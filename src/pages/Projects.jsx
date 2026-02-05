import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import projectsData from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects, featuring security automation, machine learning, and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl relative group flex flex-col h-full"
            >
              <div className="absolute top-8 right-8 flex gap-4">
                 {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>}
                 {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><ExternalLink size={20} /></a>}
              </div>
              
              <div className="mb-6 text-cyan-500">
                <Folder size={40} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-xs text-gray-500 mb-4 font-mono">{project.date}</p>
              
              <ul className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow space-y-2 list-disc pl-4">
                {project.bullets.slice(0, 3).map((bullet, i) => (
                   <li key={i} dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-300">$1</strong>') }} />
                ))}
              </ul>

              <div className="pt-4 mt-auto border-t border-gray-800">
                  <div className="text-xs font-mono text-cyan-300 break-words">
                    {project.tech}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
