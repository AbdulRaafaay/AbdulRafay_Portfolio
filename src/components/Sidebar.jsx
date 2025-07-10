import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Certifications",
  "Language",
  "Contact",
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 text-white flex flex-col items-center py-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
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
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
