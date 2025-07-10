import home from "../data/Home";

export default function Footer() {
  return (
    <footer className="text-slate-400 text-sm text-center py-6 px-4 border-t border-slate-700">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
        <p>&copy; {new Date().getFullYear()} {home.name}. All rights reserved.</p>

        <div className="flex gap-4 text-lg">
          <a
            href={home.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={home.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
