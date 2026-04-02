import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const basePath = '/Portfolio';

const projects = [
  {
    id: "linkedin-agent",
    title: "LinkedIn Auto-Post Agent",
    role: "Automation Architect",
    description: "A sophisticated n8n workflow utilizing GPT-4 and Serper.dev to monitor industry news, generate high-engagement technical content, and auto-schedule posts via LinkedIn API with human-in-the-loop validation.",
    impact: "300% Increase in Organic Reach",
    url: "#", // Add your demo/repo link
    tech: ["n8n", "OpenAI", "Node.js", "Redis"],
    image: `${basePath}/projects/linkedin-agent.png`, // Schematic provided
  },
  {
    id: "merchant-visibility",
    title: "Merchant Visibility Agent",
    role: "Workflow Engineer",
    description: "Automated SEO and presence audit tool. Scrapes Google Maps and Business Directories to identify visibility gaps for merchants, generating automated PDF reports and email outreach sequences.",
    impact: "Automated 50+ Audits Weekly",
    url: "#",
    tech: ["n8n", "Puppeteer", "PostgreSQL", "Resend"],
    image: `${basePath}/projects/merchant.png`, // Schematic provided
  },
  {
    id: "health-insurance",
    title: "Health Insurance Agent",
    role: "AI Solutions Lead",
    description: "Intelligent RAG (Retrieval-Augmented Generation) system. Uses n8n to connect vector databases with insurance policy documents, allowing users to query complex coverage details in natural language.",
    impact: "90% Query Accuracy Rate",
    url: "#",
    tech: ["n8n", "Pinecone", "LangChain", "FastAPI"],
    image: `${basePath}/projects/health.png`, // Schematic provided
  },
  {
    id: "metric",
    title: "Metric Fintech",
    role: "Lead Full Stack",
    description: "Financial analytics engine for SMBs. Built a custom reporting engine that visualizes complex cash-flow data in real-time.",
    impact: "Processed $1M+ in transactions",
    url: "https://web.metricapp.co/login",
    tech: ["Next.js", "Postgres", "AWS"],
    image: `${basePath}/projects/metric.jpeg`, // Example placeholder
  },
  {
    id: "sababa",
    title: "Sababa AI Ecosystem",
    role: "AI Engineer",
    description: "An agentic workflow system integrating ChatGPT with N8n. Automates 70% of customer support queries with high accuracy.",
    impact: "65% Faster Support Response",
    url: "https://app.sababa.global/login",
    tech: ["Vue 3", "N8n", "OpenAI"],
    image: `${basePath}/projects/sababa.png`, // Example placeholder
  },
  {
    id: "remap",
    title: "Remap Real-time",
    role: "Backend Architect",
    description: "High-concurrency collaboration tool. Optimized WebSocket connections to support 100k+ simultaneous users.",
    impact: "99.99% Socket Uptime",
    url: "https://app1.busi.chat/login",
    tech: ["Node", "Docker", "Redis"],
    image: `${basePath}/projects/remap.jpeg`, // Example placeholder
  },
];

const skillGroups = [
  { label: "Core", items: ["Next.js", "TypeScript", "Node.js"] },
  { label: "AI/Auto", items: ["n8n", "AI Agents", "LangChain"] },
  { label: "Cloud", items: ["AWS", "Docker", "GCP"] },
];

export default function PortfolioPage() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-700 selection:bg-blue-500/30">
      
      {/* Background Aesthetic */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/10 dark:bg-indigo-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 dark:bg-[#020617]/40 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-black tracking-tighter uppercase">TQ — Dev</span>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setDark(!dark)}
              className="text-xl hover:scale-110 transition-transform"
            >
              {dark ? "☼" : "☾"}
            </button>
            <a href="mailto:tajneesqamar123@gmail.com" className="text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              SENIOR <br/> <span className="text-blue-600">FULLSTACK</span> <br/> ENGINEER.
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
              Crafting high-performance web systems and AI-driven automations. I focus on code that scales and interfaces that delight.
            </p>
            <div className="flex gap-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-[10px] font-black uppercase text-blue-600 mb-2">{group.label}</p>
                  <p className="text-sm font-medium opacity-70">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }} 
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-200 dark:border-slate-700 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-[180px] font-black opacity-10 select-none italic">TQ</div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                   <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Based In</p>
                   <p className="text-2xl font-bold italic">Rawalpindi, PK</p>
                </div>
            </div>
          </motion.div>
        </section>

        {/* Project Bento */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-widest">Selected Works</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group block p-1 rounded-[2rem] bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent hover:from-blue-500 transition-all duration-500"
              >
                <div className="bg-white dark:bg-[#020617] rounded-[1.8rem] p-6 h-full flex flex-col">
                  <div className="relative h-40 mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    {p.image ? (
                      <Image 
                        src={p.image} 
                        alt={p.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        sizes="(max-w-7xl) 33vw, 100vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full opacity-20">NO_IMG</div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-[10px] font-black text-blue-600 uppercase mb-1">{p.role}</p>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{p.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                      {p.impact}
                    </span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact Strip */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-blue-500 blur-[150px] rounded-full" />
            </div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">Ready to start?</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a href="mailto:tajneesqamar123@gmail.com" className="px-10 py-4 bg-white text-slate-900 rounded-full font-black hover:scale-105 transition-transform">EMAIL ME</a>
                    <a href="https://linkedin.com/in/tajnees-qamar-47138212a" className="px-10 py-4 border border-white/20 rounded-full font-black hover:bg-white/10 transition-colors">LINKEDIN</a>
                </div>
            </motion.div>
        </section>

      </main>

      <footer className="py-10 text-center opacity-40 text-[10px] font-bold uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} Tajnees Qamar · Designed for Performance
      </footer>
    </div>
  );
}
