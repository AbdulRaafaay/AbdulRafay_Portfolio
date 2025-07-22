import about from "../data/about";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-20 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-10">About Me</h2>

      <p className="text-slate-300 leading-relaxed text-md sm:text-lg mb-10 whitespace-pre-line">
        {about.bio}
      </p>

      {/* Education */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
        <ul className="space-y-6">
          {about.education.map((edu, index) => (
            <li key={index} className="bg-slate-800 p-5 rounded-md shadow hover:shadow-indigo-500/20 transition">
              <h4 className="text-xl font-medium text-white">{edu.degree}</h4>
              <p className="text-sm text-indigo-400">{edu.institution}</p>
              <p className="text-sm text-slate-400">{edu.dates} • {edu.location}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Core Values */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Core Values</h3>
        <ul className="flex flex-wrap gap-3 text-slate-300">
          {about.values.map((value, idx) => (
            <li key={idx} className="bg-slate-800 px-4 py-2 rounded-md text-sm shadow hover:shadow-indigo-500/20 transition">{value}</li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">Languages</h3>
        <ul className="space-y-2 text-slate-300 max-w-md">
          {about.languages.map((lang, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{lang.name}</span>
              <span className="text-indigo-400">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
