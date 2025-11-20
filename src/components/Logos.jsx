export default function Logos() {
  const logos = ["TisaLabs", "ESA", "Startup EU", "AlpineTech", "FinNext", "DataForge"];
  return (
    <section id="work" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sky-100 bg-white/70 backdrop-blur p-8 text-center shadow-sm">
          <p className="text-slate-500 text-sm">Trusted by ambitious teams</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
            {logos.map((name) => (
              <div
                key={name}
                className="py-2 text-slate-500 text-sm rounded-xl border border-transparent hover:border-sky-100 hover:bg-white/60 transition"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
