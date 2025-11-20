import { CalendarDays, ShieldCheck, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-sky-200/50 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-100 bg-white/80 backdrop-blur p-8 sm:p-12 shadow-xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 px-3 py-1 text-sky-700 text-xs shadow-sm">
                <Sparkles size={14} className="text-sky-500" /> Free Prototype Offer
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Book a 20‑minute discovery call</h3>
              <p className="mt-2 text-slate-600">We’ll map the fastest path to ROI and spin up a working preview within days.</p>
              <ul className="mt-4 text-sm text-slate-700 grid sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-sky-600"/> Clear scope & timeline</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-sky-600"/> No obligation</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-sky-600"/> Security‑first approach</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-sky-600"/> EU‑friendly compliance</li>
              </ul>
            </div>
            <div className="lg:justify-self-end">
              <a href="#" className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 text-sm font-medium shadow-sm shadow-sky-200/70 hover:from-sky-500 hover:to-blue-600 transition">
                <CalendarDays size={18} className="mr-2"/> Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
