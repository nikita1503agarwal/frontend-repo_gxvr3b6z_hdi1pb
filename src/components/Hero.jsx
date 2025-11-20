export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-sky-200 blur-3xl opacity-40"></div>
        <div className="absolute -bottom-24 -left-20 w-[28rem] h-[28rem] rounded-full bg-blue-100 blur-3xl opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sky-700 border border-sky-100">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Switzerland-based AI + Web Agency
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Build modern websites and AI automations with confidence
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              We create beautiful, fast websites and intelligent automation systems. From chatbots to voice agents and process automation — we help you launch quickly and scale smarter.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 text-sm font-medium shadow-sm shadow-sky-200/70 hover:from-sky-500 hover:to-blue-600 transition">
                Start Your Free Prototype
              </a>
              <a href="#solutions" className="inline-flex items-center rounded-full border border-sky-200 bg-white/70 backdrop-blur text-sky-700 px-6 py-3 text-sm font-medium hover:bg-white transition">
                Explore Solutions
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-500">
              <div className="text-sm"><span className="font-semibold text-slate-700">ciobai</span> • Trusted by teams in EU</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-sky-100 bg-white/70 backdrop-blur p-5 shadow-xl">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-sky-600 font-semibold">What we do</div>
                  <div className="mt-2 grid grid-cols-2 gap-3 text-left text-sm text-slate-700">
                    <div className="rounded-lg bg-white/80 border border-sky-100 p-3">Intelligent Chatbots</div>
                    <div className="rounded-lg bg-white/80 border border-sky-100 p-3">Voice Agents</div>
                    <div className="rounded-lg bg-white/80 border border-sky-100 p-3">Process Automation</div>
                    <div className="rounded-lg bg-white/80 border border-sky-100 p-3">Automated Marketing</div>
                    <div className="rounded-lg bg-white/80 border border-sky-100 p-3">Lead Generation</div>
                    <div className="rounded-lg bg-white/80 border border-sky-100 p-3">Modern Websites</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
