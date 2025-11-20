export default function Process() {
  const steps = [
    { n: 1, title: "Discovery", text: "We analyze your needs and identify automation opportunities." },
    { n: 2, title: "Free Prototype", text: "We build a custom prototype showing AI potential for your business." },
    { n: 3, title: "Development", text: "We implement and integrate tailored AI solutions." },
    { n: 4, title: "Deployment", text: "We deploy and ensure everything runs smoothly." },
  ];

  return (
    <section id="process" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sky-700 border border-sky-100">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            Our Process
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">From idea to launch in days</h2>
          <p className="mt-3 text-slate-600">We move fast while keeping quality high. You get clarity at every step.</p>
        </div>

        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-sky-100 bg-white/70 backdrop-blur p-6">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-white font-bold flex items-center justify-center shadow-sky-200/70 shadow-md">{s.n}</div>
              <div className="mt-4 text-lg font-semibold text-slate-800">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
