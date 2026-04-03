import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const basePath = "/Portfolio";

/** Static files from `public/` must include basePath (see next.config.js). */
const asset = (path) =>
  `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

const projects = [
  {
    id: "linkedin-agent",
    title: "LinkedIn Auto-Post Agent",
    role: "Automation Architect",
    description:
      "An n8n workflow utilizing GPT-4 and Serper.dev to track industry news and auto-generate high-engagement technical content.",
    impact: "300% Organic Reach Growth",
    url: "#",
    tech: ["n8n", "OpenAI", "Node.js"],
    image: asset("/projects/linkedin-agent.png"),
  },
  {
    id: "metric",
    title: "Metric – Fintech Dashboard",
    role: "Senior Full Stack",
    description:
      "Backend APIs and performant React frontend optimized for analytics and high-concurrency financial tracking.",
    impact: "1M+ Transactions Processed",
    url: "https://web.metricapp.co/login",
    tech: ["React", "Node", "Postgres", "AWS"],
    image: asset("/projects/metric.jpeg"),
  },
  {
    id: "merchant-visibility",
    title: "Merchant Visibility Agent",
    role: "Workflow Engineer",
    description:
      "Automated SEO audit tool that scrapes Google Maps data to identify visibility gaps and trigger automated outreach.",
    impact: "50+ Audits Weekly (Full Auto)",
    url: "#",
    tech: ["n8n", "Puppeteer", "PostgreSQL"],
    image: asset("/projects/merchant.png"),
  },
  {
    id: "health-insurance",
    title: "Health Insurance Agent",
    role: "AI Solutions Lead",
    description:
      "RAG-based intelligent system connecting vector databases to insurance policy docs for natural language querying.",
    impact: "90% Policy Query Accuracy",
    url: "#",
    tech: ["n8n", "Pinecone", "LangChain"],
    image: asset("/projects/health.png"),
  },

  {
    id: "sababa",
    title: "Sababa Global – AI Ecosystem",
    role: "AI Engineer",
    description:
      "AI-powered support automation with ChatGPT integration and real-time dashboards for customer success teams.",
    impact: "65% Support Load Reduction",
    url: "https://app.sababa.global/login",
    tech: ["Vue 3", "Node", "WebSockets"],
    image: asset("/projects/sababa.png"),
  },
];

const skillGroups = [
  { label: "Engineering", items: ["Next.js", "TypeScript", "Node.js"] },
  { label: "Automation", items: ["n8n", "AI Agents", "LangChain"] },
  { label: "Cloud", items: ["AWS", "Docker", "GCP"] },
];

export default function PortfolioPage() {
  const [dark, setDark] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("prefers-dark");
    setDark(saved ? JSON.parse(saved) : true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("prefers-dark", JSON.stringify(dark));
  }, [dark]);

  const filtered = projects.filter((p) =>
    (p.title + p.description + p.tech.join(" "))
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-blue-500/30">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 dark:bg-[#030712]/40 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xs font-black tracking-widest uppercase">
            Tajnees.Dev
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="text-lg hover:scale-110 transition-transform"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <a
              href={asset("/cv.pdf")}
              download
              className="text-[10px] font-bold bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors uppercase tracking-widest"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8 md:py-12 space-y-24">
        {/* --- HERO SECTION (Tightened to fit screen) --- */}
        <section className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh] md:min-h-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1] mb-6 uppercase">
              Automating <br />{" "}
              <span className="text-blue-600 dark:text-blue-500 italic">
                Intelligence.
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-lg mb-8 leading-relaxed font-medium">
              Senior Full Stack Developer specializing in{" "}
              <span className="text-slate-900 dark:text-white underline decoration-blue-500/50 underline-offset-4">
                agentic workflows
              </span>{" "}
              and high-concurrency systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="mailto:tajneesqamar123@gmail.com"
                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black tracking-widest text-[10px] uppercase hover:scale-105 transition-transform"
              >
                Hire Me
              </a>
              <a
                href={asset("/cv.pdf")}
                target="_blank"
                download
                className="px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-black tracking-widest text-[10px] uppercase hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                View CV
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-[9px] font-black uppercase text-blue-600 mb-1 tracking-widest">
                    {group.label}
                  </p>
                  <p className="text-[10px] font-bold opacity-70 leading-tight uppercase">
                    {group.items.join(" / ")}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group hidden lg:block"
          >
            <div className="aspect-[16/10] bg-slate-200 dark:bg-slate-900 rounded-[2rem] overflow-hidden relative border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-500 group-hover:border-blue-500/30">
              <div className="absolute inset-0 flex items-center justify-center text-[120px] font-black opacity-[0.03] select-none italic tracking-tighter">
                TQ
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2">
                  Availability
                </span>
                <p className="text-3xl font-black italic tracking-tighter uppercase mb-1">
                  Remote / PK
                </p>
                <p className="text-xs font-bold opacity-50 uppercase tracking-widest underline decoration-green-500 decoration-2 underline-offset-4">
                  Open for Consulting
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                Selected Works
              </h2>
              <div className="h-1 w-16 bg-blue-600 mt-2" />
            </div>
            <input
              type="search"
              placeholder="FILTER BY TECH..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest focus:ring-2 ring-blue-500/20 outline-none w-full md:w-72 uppercase"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col h-full bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-40 bg-slate-100 dark:bg-slate-900">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center opacity-10 font-black">
                        NO_IMG
                      </div>
                    )}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest">
                      {p.role}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-black tracking-tight mb-2 group-hover:text-blue-500 transition-colors uppercase">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4 flex-grow">
                      {p.description}
                    </p>

                    <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3 mb-4">
                      <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-0.5">
                        Impact
                      </p>
                      <p className="text-[10px] font-bold italic">{p.impact}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {p.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.url}
                        className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:translate-x-1 transition-transform"
                      >
                        Explore ↗
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="bg-slate-900 text-white rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-blue-600 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
              Ready to Automate?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="mailto:tajneesqamar123@gmail.com"
                className="w-full md:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-black tracking-widest hover:scale-105 transition-transform text-[10px] uppercase"
              >
                Email Inquiry
              </a>
              <a
                href="https://linkedin.com/in/tajnees-qamar-47138212a"
                target="_blank"
                className="w-full md:w-auto px-8 py-4 border border-white/20 rounded-full font-black tracking-widest hover:bg-white/10 transition-colors text-[10px] uppercase"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center opacity-30 text-[8px] font-black uppercase tracking-[0.5em]">
        © {new Date().getFullYear()} Tajnees Qamar · System Established MMXXIV
      </footer>
    </div>
  );
}
