import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { SiUpwork, SiTryhackme } from 'react-icons/si';
import contactData from '../data/contact';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container-custom max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm currently looking for new opportunities in cybersecurity and software automation. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
             <a href={`mailto:${contactData.email}`} className="glass p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-cyan-500/50 transition-all group cursor-pointer">
                <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                   <Mail size={32} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-1">Email Me</h3>
                   <p className="text-gray-400 group-hover:text-cyan-300 transition-colors">{contactData.email}</p>
                </div>
             </a>

             <div className="glass p-8 rounded-2xl flex flex-col items-center gap-4 border-gray-800">
                <div className="p-4 rounded-full bg-purple-500/10 text-purple-400">
                   <MapPin size={32} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                   <p className="text-gray-400">{contactData.location}</p>
                </div>
             </div>
          </div>

          <div className="flex justify-center gap-6">
             <SocialBtn href={contactData.github} icon={<Github />} label="GitHub" />
             <SocialBtn href={contactData.linkedin} icon={<Linkedin />} label="LinkedIn" />
             <SocialBtn href={contactData.upwork} icon={<SiUpwork size={24} />} label="Upwork" />
             <SocialBtn href={contactData.tryhackme} icon={<SiTryhackme size={24} />} label="TryHackMe" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialBtn({ href, icon, label }) {
  if (!href) return null;
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="p-4 rounded-full bg-slate-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
