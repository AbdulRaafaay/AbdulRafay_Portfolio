import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-gray-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
      
      <div className="container-custom text-center">
        <h2 className="text-2xl font-bold mb-6 text-gradient inline-block">Abdul Rafay</h2>
        
        <div className="flex justify-center gap-6 mb-8">
          <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:contact@example.com" icon={<Mail size={20} />} label="Email" />
        </div>

        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Developed by Abdul Rafay
        </p>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      className="p-3 rounded-full bg-slate-900 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
