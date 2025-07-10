import certifications from "../data/certifications";

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 sm:px-20 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-10">Certifications</h2>

      <div className="space-y-10">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-indigo-500/20 transition">
            <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
              <h3 className="text-2xl font-semibold text-white">{cert.title}</h3>
              <span className="text-sm text-slate-400">{cert.date}</span>
            </div>
            <p className="text-sm text-indigo-400 mb-2">{cert.platform}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-indigo-500/20 my-12"></div>
    </section>
  );
}
