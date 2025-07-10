import contact from "../data/contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-20 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-10">Contact</h2>

      <p className="text-slate-300 text-lg mb-6">
        Feel free to reach out to me via email or connect with me on GitHub and LinkedIn. I’m always open to discussing cybersecurity, collaboration, and learning opportunities.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 text-white text-md sm:text-lg mb-10">
        <div className="flex items-center gap-3">
          <HiOutlineMail className="text-indigo-400 text-2xl" />
          <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-indigo-400">📍</span>
          <span>{contact.location}</span>
        </div>
      </div>

      <div className="flex gap-6 text-white text-3xl">
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
          <FaGithub />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
