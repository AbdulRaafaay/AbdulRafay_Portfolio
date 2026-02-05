import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { SiUpwork, SiTryhackme } from 'react-icons/si';
import homeData from '../data/home';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container-custom grid md:grid-cols-2 gap-8 md:gap-12 items-center px-6 pt-32 md:pt-0 h-full">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col justify-center"
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm self-start">
            <span className="text-cyan-400 text-sm font-medium tracking-wide">{homeData.title}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">{homeData.name}</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed line-clamp-4 md:line-clamp-none">
             {homeData.intro}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <ScrollLink to="projects" smooth={true} offset={-80} className="btn-primary group cursor-pointer">
              <span className="absolute inset-0 rounded-lg overflow-hidden">
                <span className="btn-bg absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              </span>
              <span className="btn-primary-content">
                View Projects <ArrowRight size={18} />
              </span>
            </ScrollLink>
          </div>

          <div className="flex gap-5">
             {homeData.socials.github && (
                <a href={homeData.socials.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"><Github size={24} /></a>
             )}
             {homeData.socials.linkedin && (
                <a href={homeData.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
             )}
             {homeData.socials.upwork && (
                <a href={homeData.socials.upwork} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#14a800] transition-colors transform hover:scale-110"><SiUpwork size={24} /></a>
             )}
             {homeData.socials.tryhackme && (
                <a href={homeData.socials.tryhackme} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#C50000] transition-colors transform hover:scale-110"><SiTryhackme size={24} /></a>
             )}
          </div>
        </motion.div>

        {/* Hero Visual/Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-full"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900">
               <img src="/rafay.jpg" alt={homeData.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-cyan-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
