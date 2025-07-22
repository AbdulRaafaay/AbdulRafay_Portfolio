import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Certificates",
  "Contact",
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-slate-800 p-3 rounded-md text-white"
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 text-white flex flex-col items-center py-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 z-40 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <img
          src="/rafay.jpg"
          alt="Abdul Rafay"
          className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-indigo-500"
        />
        <h1 className="text-xl font-semibold mb-1">Abdul Rafay</h1>
        <p className="text-sm text-slate-400 mb-6 text-center px-4">
          Cybersecurity Enthusiast
        </p>

        <nav className="w-full px-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="cursor-pointer block px-3 py-2 rounded hover:bg-slate-800 hover:text-indigo-400 transition"
                  activeClass="text-indigo-400 font-semibold"
                  spy={true}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}