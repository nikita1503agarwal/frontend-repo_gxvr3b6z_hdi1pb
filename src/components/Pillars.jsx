import { Bot, PhoneCall, Workflow, Rocket, Megaphone, Globe } from "lucide-react";

const cards = [
  {
    id: "chatbots",
    icon: Bot,
    title: "Intelligent Chatbots",
    text: "Human-level conversations, 24/7. Multilingual, compliant, and on-brand.",
    points: ["Support, sales, and internal ops", "Analytics & continuous training"],
  },
  {
    id: "voice",
    icon: PhoneCall,
    title: "Voice Agents",
    text: "Natural phone conversations for inbound and outbound at scale.",
    points: ["Realtime speech + LLMs", "CRM and tool integrations"],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Process Automation",
    text: "Orchestrate workflows that remove manual work and errors.",
    points: ["Approvals, RPA, APIs", "Secure, observable, reliable"],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Automated Marketing",
    text: "Acquisition and lifecycle programs that optimize themselves.",
    points: ["Multi-channel automation", "Experimentation at scale"],
  },
  {
    id: "leads",
    icon: Rocket,
    title: "Lead Generation",
    text: "AI prospecting that finds, qualifies, and books meetings.",
    points: ["ICP targeting with AI", "Lead scoring & outreach"],
  },
  {
    id: "websites",
    icon: Globe,
    title: "Modern Websites",
    text: "Blazing-fast, responsive, and conversion-focused web experiences.",
    points: ["SEO-first architecture", "Design systems & A/B testing"],
  },
];

export default function Pillars() {
  return (
    <section id="solutions" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sky-700 border border-sky-100 shadow-sm">
            Core Solutions
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Everything you need to scale with AI</h2>
          <p className="mt-3 text-slate-600">High-impact capabilities, delivered with enterprise precision.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ id, icon: Icon, title, text, points }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group relative rounded-2xl border border-sky-100 bg-white/75 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -inset-0.5 bg-gradient-to-br from-sky-100/0 via-sky-100/40 to-blue-100/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center shadow-md">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{text}</p>
                <ul className="mt-4 text-sm text-slate-700 space-y-1">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
