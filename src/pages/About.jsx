import about from "../data/about";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-20 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-8">About Me</h2>

      {/* Bio */}
      <p className="text-slate-300 max-w-4xl leading-relaxed whitespace-pre-line mb-10">
        {about.bio}
      </p>

      {/* Education */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
        <ul className="space-y-4">
          {about.education.map((edu, index) => (
            <li key={index} className="text-slate-400">
              <p className="text-lg font-medium text-white">{edu.degree}</p>
              <p>{edu.institution} — {edu.location}</p>
              <p className="text-sm">{edu.dates}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Core Values */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Core Values</h3>
        <ul className="flex flex-wrap gap-3 text-slate-400">
          {about.values.map((value, index) => (
            <li key={index} className="bg-slate-800 px-3 py-1 rounded">{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
