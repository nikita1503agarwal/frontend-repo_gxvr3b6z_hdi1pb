import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Section from "./components/Section";
import Process from "./components/Process";
import Logos from "./components/Logos";
import Footer from "./components/Footer";

function App() {
  const chatbot = {
    id: "chatbots",
    eyebrow: "Intelligent Chatbots",
    title: "Revolutionize your customer interactions",
    items: [
      { title: "24/7 customer support", points: ["Real-time responses", "Multi-channel integration", "Conversation analytics", "Automated management", "Multilingual support"], cta: "Learn More" },
      { title: "Customer Service", points: ["Help your leads and customers 24/7 instantly."] },
      { title: "Sales Assistant", points: ["Navigate complex catalogs with ease, increasing conversions."] },
      { title: "Informational", points: ["Educate customers and team members with instant knowledge access."] },
      { title: "Tutor", points: ["Provides step-by-step guidance for complex operations."] },
    ],
  };

  const voice = {
    id: "voice",
    eyebrow: "Voice Agents",
    title: "Enhance experiences with natural language interactions",
    items: [
      { title: "Inbound & Outbound Calls", points: ["Advanced voice recognition", "Natural and fluid responses", "Automated call handling", "Integration with existing systems", "Voice conversation analytics", "Multilingual support"] },
      { title: "Voice Commands", points: ["Enable voice-controlled operations for hands-free work."] },
      { title: "Virtual Assistant", points: ["AI-powered voice assistants for complex and natural interactions."] },
    ],
  };

  const automation = {
    id: "automation",
    eyebrow: "Process Automation",
    title: "Optimize operations with intelligent automation",
    items: [
      { title: "Workflow Automation", points: ["Simplify complex processes with intelligent flows."] },
      { title: "Email Automation", points: ["Automate responses and manage campaigns effortlessly."] },
      { title: "Scheduling Automation", points: ["Streamline appointment scheduling with automatic reminders."] },
    ],
  };

  const marketing = {
    id: "marketing",
    eyebrow: "Automated Marketing",
    title: "Enhance your marketing with AI",
    items: [
      { title: "AI Advertising", points: ["Create and optimize cross-platform campaigns."] },
      { title: "Social Media Automation", points: ["Schedule, publish, and analyze content automatically."] },
      { title: "Email Marketing", points: ["Design, send, and optimize campaigns with AI."] },
    ],
  };

  const leads = {
    id: "leads",
    eyebrow: "Lead Generation",
    title: "Increase conversions with automated lead gen",
    items: [
      { title: "AI Lead Identification", points: ["Discover and qualify potential leads using AI algorithms."] },
      { title: "Lead Nurturing", points: ["Automate personalized nurturing for higher conversions."] },
      { title: "Funnel Optimization", points: ["Analyze and optimize your sales funnel with AI insights."] },
    ],
  };

  const websites = {
    id: "websites",
    eyebrow: "Modern Websites",
    title: "Professional, responsive, and fast websites",
    items: [
      { title: "Responsive Design", points: ["Perfect display on all devices, from mobile to desktop."] },
      { title: "SEO Optimized", points: ["Built to maximize your online visibility."] },
      { title: "Lightning Fast", points: ["Optimized for instant page loads and smooth navigation."] },
      { title: "Modern Design", points: ["Contemporary designs that captivate and convert."] },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-800">
      <Navbar />
      <Hero />

      <main>
        <Pillars />
        <Section {...chatbot} />
        <Section {...voice} />
        <Section {...automation} />
        <Section {...marketing} />
        <Section {...leads} />
        <Section {...websites} />
        <Process />
        <Logos />

        <section id="cta" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-10 text-center shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to transform your business with AI?</h3>
              <p className="mt-3 text-slate-600">Start your AI journey with a free prototype. No commitment.</p>
              <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 text-sm font-medium shadow-sm shadow-sky-200/70 hover:from-sky-500 hover:to-blue-600 transition">
                Start Your AI Journey
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
