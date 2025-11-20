import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";

const cases = [
  {
    tag: "E‑commerce",
    title: "Automated support that boosted CSAT by 27%",
    summary:
      "Multilingual chatbot across web + WhatsApp handling 72% of tickets end‑to‑end.",
    metrics: ["-32% handle time", "+27% CSAT", "24/7 coverage"],
  },
  {
    tag: "B2B SaaS",
    title: "Pipeline lift from AI‑qualified leads",
    summary:
      "LLM‑driven scoring and nurture flows increased MQL→SQL by 18% within 30 days.",
    metrics: ["+18% MQL→SQL", "+11% demo rate", "Zero extra headcount"],
  },
  {
    tag: "Fintech",
    title: "Voice agent that verifies identity in seconds",
    summary:
      "Natural voice IVR with secure verification reduced drop‑offs and wait times.",
    metrics: ["-41% wait time", "NPS +9", "PCI ready"],
  },
  {
    tag: "Logistics",
    title: "Automation that removed 1000+ manual tasks/week",
    summary:
      "Workflow bots orchestrating ERPs, docs, and emails with audit trails.",
    metrics: ["1000+/week offloaded", "<30d payback", "Traceable"],
  },
];

function CaseCard({ item, i }) {
  return (
    <motion.article
      className="group relative min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] rounded-2xl border border-sky-100/70 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-lg overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_var(--mx,50%)_-20%,theme(colors.sky.100/.7),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 px-3 py-1 text-sky-700 text-xs shadow-sm">
          <Sparkles size={14} className="text-sky-500" /> {item.tag}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-900 tracking-tight">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.metrics.map((m) => (
            <li key={m} className="text-xs rounded-md border border-sky-100 bg-white/70 px-2 py-1 text-slate-700">
              {m}
            </li>
          ))}
        </ul>
        <div className="mt-5 inline-flex items-center gap-1 text-sky-700 text-sm font-medium">
          View details <ArrowRight size={16} />
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  const controls = useAnimation();

  useEffect(() => {
    // gentle idle drift
    controls.start({ x: [0, -80, 0], transition: { duration: 18, repeat: Infinity, ease: "easeInOut" } });
  }, [controls]);

  return (
    <section id="cases" className="relative py-20 sm:py-28">
      {/* accent background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sky-700 border border-sky-100 shadow-sm">
            Selected Work
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Outcomes we deliver</h2>
          <p className="mt-3 text-slate-600">A glimpse of recent wins across industries. Real impact, fast timelines.</p>
        </div>

        <div className="mt-10 overflow-hidden">
          <motion.div className="flex gap-6" animate={controls}>
            {cases.map((item, i) => (
              <CaseCard key={i} item={item} i={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
