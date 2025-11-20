import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-sky-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg shadow-sky-200/60 flex items-center justify-center text-white font-bold">
            C
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-800 tracking-tight">ciobai</div>
            <div className="text-xs text-slate-500">Switzerland</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#solutions" className="hover:text-slate-900 transition">Solutions</a>
          <a href="#process" className="hover:text-slate-900 transition">Process</a>
          <a href="#work" className="hover:text-slate-900 transition">Work</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 text-sm font-medium shadow-sm shadow-sky-200/70 hover:from-sky-500 hover:to-blue-600 transition">
            Start Free Prototype
          </a>
          <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
