import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function Section({ id, eyebrow, title, intro, items }) {
  return (
    <section id={id} className="relative py-18 sm:py-24">
      {/* top divider glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sky-700 border border-sky-100 shadow-sm">
              <Sparkles size={14} className="text-sky-500" />
              {eyebrow}
            </div>
          )}
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h2>
          {intro && <p className="mt-3 text-slate-600">{intro}</p>}
        </div>

        {/* premium cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-2xl border border-sky-100 bg-white/75 backdrop-blur p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
            >
              {/* subtle gradient bloom */}
              <div className="pointer-events-none absolute -inset-0.5 bg-gradient-to-br from-sky-100/0 via-sky-100/40 to-blue-100/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 px-3 py-1 text-sky-700 text-xs shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Premium capability
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 tracking-tight">{item.title}</h3>
                {item.points && (
                  <ul className="mt-3 text-sm text-slate-700 space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-0.5 rounded-md bg-sky-50 border border-sky-100 p-1 text-sky-600">
                          <Check size={14} />
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.cta && (
                  <a
                    href="#cta"
                    className="mt-5 inline-flex items-center gap-1 text-sky-700 font-medium hover:text-sky-900"
                  >
                    {item.cta}
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
