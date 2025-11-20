import { ArrowRight, Compass, Wrench, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    { n: 1, title: "Discovery", text: "Deep dive into your goals, data, and operations.", icon: Compass },
    { n: 2, title: "Free Prototype", text: "A working preview to validate value in days.", icon: Wrench },
    { n: 3, title: "Development", text: "Robust systems, integrations, and QA.", icon: Wrench },
    { n: 4, title: "Launch + Scale", text: "Deploy, monitor, and iterate for ROI.", icon: Rocket },
  ];

  return (
    <section id="process" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sky-700 border border-sky-100 shadow-sm">
            Our Process
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">From idea to ROI in days</h2>
          <p className="mt-3 text-slate-600">Clear stages, transparent outcomes, and tangible business impact.</p>
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.n}
                className="group relative rounded-2xl border border-sky-100 bg-white/75 backdrop-blur p-6 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50/0 via-sky-50/70 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-white font-bold flex items-center justify-center shadow-sky-200/70 shadow-md">
                      {s.n}
                    </div>
                    <Icon className="text-sky-600" size={20} />
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-900">{s.title}</div>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sky-700 text-sm font-medium">
                    Learn more
                    <ArrowRight size={16} />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
