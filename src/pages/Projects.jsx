import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-20 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-10">Projects</h2>

      <div className="space-y-10">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-indigo-500/20 transition">
            <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <span className="text-sm text-slate-400">{project.date}</span>
            </div>
            <p className="text-sm text-indigo-400 mb-4">{project.tech}</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
              {project.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
