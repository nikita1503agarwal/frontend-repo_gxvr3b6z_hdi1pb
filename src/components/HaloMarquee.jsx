import { useEffect, useRef } from "react";

export default function HaloMarquee() {
  const wrap = useRef(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let raf;
    let x = 0;
    const step = () => {
      x = (x - 0.5) % el.scrollWidth;
      el.style.setProperty("--mx", `${x}px`);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = [
    "Chatbots", "Voice", "Automation", "Marketing", "Leads", "Websites",
  ];

  return (
    <div className="relative overflow-hidden py-4">
      <div ref={wrap} className="flex gap-6 whitespace-nowrap will-change-transform" style={{ transform: `translateX(var(--mx))` }}>
        {Array.from({ length: 3 }).map((_, k) => (
          <div key={k} className="flex gap-6">
            {items.map((t) => (
              <span
                key={`${t}-${k}`}
                className="px-3 py-1 rounded-full border border-sky-100 bg-white/70 backdrop-blur text-sky-700 text-sm shadow-sm hover:bg-white"
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
