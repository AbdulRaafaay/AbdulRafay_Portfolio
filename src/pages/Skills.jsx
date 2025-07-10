import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-20 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-10">Skills</h2>

      {/* Technical Skills */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
        <ul className="flex flex-wrap gap-3 text-slate-300">
          {skills.technical.map((skill, idx) => (
            <li key={idx} className="bg-slate-800 px-4 py-2 rounded-md text-sm">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Tools & Platforms</h3>
        <ul className="flex flex-wrap gap-3 text-slate-300">
          {skills.tools.map((tool, idx) => (
            <li key={idx} className="bg-slate-800 px-4 py-2 rounded-md text-sm">{tool}</li>
          ))}
        </ul>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">Soft Skills</h3>
        <ul className="flex flex-wrap gap-3 text-slate-300">
          {skills.soft.map((s, idx) => (
            <li key={idx} className="bg-slate-800 px-4 py-2 rounded-md text-sm">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
