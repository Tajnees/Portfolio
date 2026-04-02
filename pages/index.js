import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Configuration
const basePath = '/Portfolio';

const projects = [
  {
    id: "metric",
    title: "Metric – Fintech for SMBs",
    description: "A comprehensive fintech platform providing real-time financial analytics, reporting dashboards, and data visualization tools.",
    impact: "Processed $1M+ in transactions with 99.9% uptime.",
    url: "https://web.metricapp.co/login",
    tech: ["React", "Next.js", "Node", "Postgres", "AWS"],
    image: `${basePath}/projects/metric.jpeg`,
    category: "Fintech"
  },
  {
    id: "sababa",
    title: "Sababa Global – AI Ecosystem",
    description: "AI agent ecosystem for customer support automation with ChatGPT integration and N8n workflow automation.",
    impact: "Reduced support response times by 65% via AI routing.",
    url: "https://app.sababa.global/login",
    tech: ["Vue 3", "Node", "N8n", "WebSockets", "Azure"],
    image: `${basePath}/projects/sababa.png`,
    category: "AI & Automation"
  },
  {
    id: "remap",
    title: "Remap AI – Collaboration",
    description: "Scalable microservices handling hundreds of thousands of concurrent real-time connections.",
    impact: "Scaled to 100k+ concurrent users using Redis/WebSockets.",
    url: "https://app1.busi.chat/login",
    tech: ["Next.js", "Node", "Docker", "GCP", "Redis"],
    image: `${basePath}/projects/remap.jpeg`,
    category: "Infrastructure"
  },
];

const skillCategories = [
  { title: "Frontend", skills: ["React", "Next.js", "Vue 3", "Tailwind CSS", "TypeScript"] },
  { title: "Backend", skills: ["Node.js", "Express", "Postgres", "MongoDB", "Redis"] },
  { title: "Automation & AI", skills: ["N8n", "AI Agents", "LangChain", "OpenAI API", "Python"] },
  { title: "DevOps", skills: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD Pipelines"] },
];

export default function PortfolioPage() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("prefers-dark");
    const prefersDark = saved ? JSON.parse(saved) : (window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("prefers-dark", JSON.stringify(dark));
  }, [dark]);

  const filtered = projects.filter((p) =>
    (p.title + p.description + p.tech.join(" "))
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-blue-500/30">
      
      {/* --- Animated Background Decor --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      {/* --- Header --- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
              Tajnees Qamar
            </h1>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Senior Full Stack Engineer
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-blue-500/20 transition-all"
            >
              {dark ? "🌙" : "☀️"}
            </button>
            <a
              href={`${basePath}/cv.pdf`}
              download
              className="hidden md:block px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* --- Hero Section --- */}
        <section className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Architecting <span className="text-blue-600">Intelligent</span> Scalable Systems.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Specializing in the <span className="text-slate-900 dark:text-white font-semibold">MERN stack, Next.js, and AI Automation</span>. 
              I build production-grade AI agents and microservices that bridge the gap between complex data and user-centric interfaces.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a href="mailto:tajneesqamar123@gmail.com" className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold hover:scale-105 transition-transform">
                Get in touch
              </a>
              <a href="https://github.com/tajneesqamar" target="_blank" className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                View GitHub
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center text-white font-bold">TQ</div>
                <div>
                  <h3 className="font-bold">Status</h3>
                  <p className="text-xs text-green-500 font-mono">● Available for Projects</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 1 }} className="h-full bg-blue-500" />
                </div>
                <p className="text-sm text-slate-500">Expertise in distributed systems & agentic workflows.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h3 className="text-3xl font-bold">Featured Work</h3>
              <p className="text-slate-500 mt-2">Selection of recent full-stack & AI deployments.</p>
            </div>
            <input
              type="search"
              placeholder="Filter by tech (e.g. Node)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm focus:ring-2 ring-blue-500 outline-none transition-all w-full md:w-64"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    {p.image ? (
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400">No Preview</div>
                    )}
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {p.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{p.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-3">{p.description}</p>
                    
                    {p.impact && (
                      <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">🚀 Impact: {p.impact}</p>
                      </div>
                    )}

                    <div className="mt-auto pt-6 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <a href={p.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">
                      Live Demo ↗
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-3xl font-bold mb-12">Technical Ecosystem</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm hover:border-blue-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Footer/Contact --- */}
        <footer className="pt-24 pb-12 text-center space-y-6">
          <div className="max-w-md mx-auto p-8 rounded-3xl bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/40">
            <h3 className="text-2xl font-bold">Let's build something epic.</h3>
            <p className="mt-2 text-blue-100 opacity-90">Currently accepting new projects and full-time opportunities.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="mailto:tajneesqamar123@gmail.com" className="bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Email Me
              </a>
              <div className="flex justify-center gap-4 text-sm font-medium">
                <a href="https://linkedin.com/in/tajnees-qamar-47138212a" target="_blank" className="hover:text-blue-200 underline underline-offset-4">LinkedIn</a>
                <a href="https://github.com/tajneesqamar" target="_blank" className="hover:text-blue-200 underline underline-offset-4">GitHub</a>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-12">
            © {new Date().getFullYear()} Tajnees Qamar. Handcrafted with Next.js & Framer Motion.
          </p>
        </footer>
      </main>
    </div>
  );
}
