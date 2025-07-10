import home from "../data/home";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start px-6 sm:px-20">
      <p className="text-lg sm:text-xl text-indigo-400 mb-2">Hi, I'm</p>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">{home.name}</h1>
      <h2 className="text-xl sm:text-2xl font-medium text-slate-300 mb-6">
        {home.title}
      </h2>
      <p className="max-w-2xl text-base sm:text-lg text-slate-400 mb-8 leading-relaxed whitespace-pre-line">
        {home.intro}
      </p>

      <div className="flex gap-4 mb-8 flex-wrap">
        <a
          href={home.resume}
          download
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded shadow transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="border border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-400 px-6 py-3 rounded shadow transition"
        >
          Contact Me
        </a>
      </div>

      <div className="flex gap-6 text-2xl text-slate-400 mb-8">
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
    </section>
  );
}
