export default function Section({ id, eyebrow, title, intro, items }) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sky-700 border border-sky-100">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              {eyebrow}
            </div>
          )}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
          {intro && <p className="mt-3 text-slate-600">{intro}</p>}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((item) => (
            <div key={item.title} className="rounded-2xl border border-sky-100 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <div className="text-lg font-semibold text-slate-800">{item.title}</div>
              {item.points && (
                <ul className="mt-3 text-sm text-slate-600 space-y-2 list-disc list-inside">
                  {item.points.map((p) => (<li key={p}>{p}</li>))}
                </ul>
              )}
              {item.cta && (
                <a href="#cta" className="mt-4 inline-block text-sky-700 hover:text-sky-900 font-medium">{item.cta}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
