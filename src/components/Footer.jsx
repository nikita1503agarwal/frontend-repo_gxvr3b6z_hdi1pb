export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sky-100 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 text-white font-bold flex items-center justify-center">C</div>
          <div>
            <div className="font-semibold text-slate-800">ciobai</div>
            <div className="text-xs text-slate-500">Switzerland</div>
          </div>
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} ciobai. All rights reserved.</div>
      </div>
    </footer>
  );
}
