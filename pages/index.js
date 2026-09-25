import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

// NOTE: Place your schematic images in public/projects/
const projects = [
  {
    id: "metric-app",
    title: "Metric App",
    subtitle: "Financial Intelligence Dashboard",
    role: "Senior Full Stack Developer",
    description:
      "The core Metric platform where founders connect QuickBooks, Zoho, or Xero and ask Max, an AI CFO, plain language questions about cash flow, runway, and spending. Led frontend architecture with Next.js and React, SSR and SSG, and built the backend APIs powering real time financial dashboards.",
    impact: "1M+ transactions processed, 25% faster load times",
    url: "https://web.metricapp.co/login",
    tech: ["Next.js", "React", "Node", "Postgres"],
  },
  {
    id: "metric-website",
    title: "Metric",
    subtitle: "Marketing Website",
    role: "Full Stack Contributor",
    description:
      "The public facing site introducing Max, the AI CFO, to founders across 190+ countries, communicating product value, integrations, and pricing, and driving free trial sign ups and demo bookings.",
    impact: "200K+ business owners reached",
    url: "https://metricapp.co/",
    tech: ["Next.js", "Frontend", "Conversion Design"],
  },
  {
    id: "aios-app",
    title: "NexEng AIOS",
    subtitle: "AI Operating System",
    role: "Product Owner",
    description:
      "AIOS is NexEng's AI operating system for fractional executives, legal, finance, and government, coordinating purpose built agents, Communication Hub, Investment Intelligence, Simply Sign, and more, across cloud or on-premises deployments. Owned product direction, ran live demos, and gathered requirements directly from prospective clients.",
    impact: "12+ live AI agents, 14,000+ client engagements",
    url: "https://aios.nexeng.ai/",
    tech: ["AIOS", "Product Strategy", "Demo Enablement"],
  },
  {
    id: "aios-website",
    title: "NexEng AI",
    subtitle: "Marketing Website",
    role: "Full Stack Contributor",
    description:
      "The public site for NexEng AI, positioning AIOS for fractional executives, enterprises, and government, covering deployment models, security posture, and industry specific use cases.",
    impact: "Cloud + on-premise positioning",
    url: "https://nexeng.ai/",
    tech: ["Next.js", "Frontend", "Content Strategy"],
  },
  {
    id: "protech-engineering",
    title: "Protech Engineering",
    subtitle: "EPCC Corporate Website",
    role: "Full Stack Developer",
    description:
      "A corporate site for an EPCC firm delivering electrical construction, installation, testing, commissioning, and solar EPCC services for power plants, grid stations, and industry across Pakistan, with a projects showcase and client roster.",
    impact: "Solar EPCC 5KW to 100MW+",
    url: "https://www.protech-engg.com/",
    tech: ["Next.js", "Frontend", "Corporate Site"],
  },
  {
    id: "teamio",
    title: "Teamio",
    subtitle: "HR Software Platform",
    role: "Full Stack Developer",
    description:
      "An all-in-one HR platform automating payroll, onboarding, attendance, and compliance, with workforce analytics, approval workflows, and support for teams scaling from 10 to 10,000 employees.",
    impact: "100+ active companies, $200K+ payroll processed",
    url: "https://www.teamio.io/",
    tech: ["Next.js", "SaaS", "Payroll"],
  },
  {
    id: "llfgf",
    title: "Light and Life Full Gospel Fellowship",
    subtitle: "Church Website",
    role: "Full Stack Developer",
    description:
      "A church website with service schedules, upcoming events, an audio library, and online donations, built to keep the congregation connected and support giving from anywhere.",
    impact: "Online giving + event updates",
    url: "https://www.llfgf.org/",
    tech: ["Next.js", "Donations", "CMS"],
  },
  {
    id: "pixara-ai",
    title: "Pixara AI",
    subtitle: "Content Creation Platform",
    role: "Contributor",
    description:
      "An AI content creation platform bringing together top image and video models, Kling, Veo, Midjourney, and more, plus Ara, a built in design agent, into one place so creators can generate video, image, and ad content from a single prompt.",
    impact: "Multi-model AI content platform",
    url: "https://www.pixara.ai/",
    tech: ["AI Platform", "Multimodal Models", "MCP"],
  },
  {
    id: "linkedin-agent",
    title: "LinkedIn Auto-Post Agent",
    subtitle: "Automation Workflow",
    role: "Automation Architect",
    description:
      "An n8n workflow utilizing GPT-4 and Serper.dev to track industry news and auto-generate high-engagement technical content.",
    impact: "300% organic reach growth",
    url: "#",
    tech: ["n8n", "OpenAI", "Node.js"],
  },
  {
    id: "merchant-visibility",
    title: "Merchant Visibility Agent",
    subtitle: "SEO Audit Automation",
    role: "Workflow Engineer",
    description:
      "Automated SEO audit tool that scrapes Google Maps data to identify visibility gaps and trigger automated outreach.",
    impact: "50+ audits weekly, fully automated",
    url: "#",
    tech: ["n8n", "Puppeteer", "PostgreSQL"],
  },
  {
    id: "health-insurance",
    title: "Health Insurance Agent",
    subtitle: "RAG-Based Query System",
    role: "AI Solutions Lead",
    description:
      "RAG-based intelligent system connecting vector databases to insurance policy docs for natural language querying.",
    impact: "90% policy query accuracy",
    url: "#",
    tech: ["n8n", "Pinecone", "LangChain"],
  },
  {
    id: "sababa",
    title: "Sababa Global",
    subtitle: "AI Support Ecosystem",
    role: "AI Engineer",
    description:
      "AI-powered support automation with ChatGPT integration and real-time dashboards for customer success teams.",
    impact: "65% support load reduction",
    url: "https://app.sababa.global/login",
    tech: ["Vue 3", "Node", "WebSockets"],
  },
  {
    id: "busichat-app",
    title: "Busichat",
    subtitle: "AI Business Platform",
    role: "Full Stack Developer",
    description:
      "An AI powered platform integrating voice agents, workflow automation, and payment systems, built to streamline business operations and enhance user interaction.",
    impact: "Voice + payment automation",
    url: "#",
    tech: ["Next.js", "Node", "OpenAI", "Twilio", "AWS"],
  },
  {
    id: "private-ai-platform",
    title: "Private AI Platform",
    subtitle: "Multi-Model, Multi-Tenant",
    role: "AI Architect",
    description:
      "A secure AI system leveraging agent based workflows and context aware retrieval, RAG, with vector embeddings and controlled access layers for scalable, accurate, and secure knowledge driven automation.",
    impact: "Secure, agent based workflows",
    url: "#",
    tech: ["LLMs", "RAG", "Vector DBs"],
  },
];

const skillGroups = [
  { label: "Engineering", items: ["Next.js", "TypeScript", "Node.js", "Postgres"] },
  { label: "Automation & AI", items: ["n8n", "AI Agents", "LangChain", "OpenAI"] },
  { label: "Infrastructure", items: ["AWS", "Docker", "GCP", "Kubernetes"] },
  { label: "CMS & SEO", items: ["WordPress", "Elementor", "Yoast SEO", "Local SEO"] },
];

const status = [
  { label: "Based", value: "Remote, Pakistan" },
  { label: "Experience", value: "5+ years" },
  { label: "Focus", value: "Full stack, AI agents, SEO" },
  { label: "Availability", value: "Open for consulting" },
];

export default function PortfolioPage() {
  const [dark, setDark] = useState(true);
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("prefers-dark");
    setDark(saved ? JSON.parse(saved) : true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("prefers-dark", JSON.stringify(dark));
  }, [dark]);

  const filtered = useMemo(
    () =>
      projects.filter((p) =>
        (p.title + p.subtitle + p.description + p.tech.join(" "))
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div
      className={`${mono.variable} ${sans.variable} min-h-screen transition-colors duration-300`}
      style={{
        background: "var(--bg)",
        color: "var(--ink)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <style jsx global>{`
        :root {
          --bg: #f2f1ec;
          --bg-panel: #ffffff;
          --ink: #14181f;
          --ink-muted: #5b6069;
          --line: #d8d6cd;
          --accent: #b5772c;
        }
        .dark {
          --bg: #0a0d12;
          --bg-panel: #10141b;
          --ink: #e7e3d8;
          --ink-muted: #8a8f97;
          --line: #232932;
          --accent: #e8a33d;
        }
        .grid-field {
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.35;
        }
        .font-display {
          font-family: var(--font-mono);
        }
      `}</style>

      {/* Blueprint grid backdrop, one deliberate texture, used once */}
      <div className="fixed inset-0 pointer-events-none -z-10 grid-field" />

      <nav
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderBottom: "1px solid var(--line)", background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-sm font-semibold tracking-tight">
            tajnees<span style={{ color: "var(--accent)" }}>.</span>dev
          </span>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setDark(!dark)}
              className="text-xs font-display px-2 py-1"
              style={{ color: "var(--ink-muted)" }}
              aria-label="Toggle color theme"
            >
              {dark ? "[ light ]" : "[ dark ]"}
            </button>
            <a
              href="mailto:tajneesqamar123@gmail.com"
              className="font-display text-xs hover:underline underline-offset-4"
              style={{ color: "var(--accent)" }}
            >
              [ hire me ]
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* Hero */}
        <section className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <div>
            <p className="font-display text-sm mb-4" style={{ color: "var(--ink-muted)" }}>
              Tajnees Qamar — Full Stack &amp; Automation Engineer
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-6">
              I build the systems that run behind the scenes.
            </h1>
            <p className="text-base leading-relaxed max-w-md" style={{ color: "var(--ink-muted)" }}>
              Senior full stack engineer building AI agents, product platforms, and the web
              presence around them, from Next.js applications to WordPress builds with local SEO.
            </p>
          </div>

          <div
            className="p-6"
            style={{ background: "var(--bg-panel)", border: "1px solid var(--line)" }}
          >
            <p className="font-display text-xs mb-4" style={{ color: "var(--ink-muted)" }}>
              status
            </p>
            <dl className="space-y-3">
              {status.map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between text-sm pb-3"
                  style={{
                    borderBottom: i < status.length - 1 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <dt style={{ color: "var(--ink-muted)" }}>{row.label}</dt>
                  <dd className="font-medium text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Toolbox */}
        <section>
          <h2 className="font-display text-xl font-semibold mb-6">Toolbox</h2>
          <div
            className="divide-y"
            style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
          >
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
                style={{ borderColor: "var(--line)" }}
              >
                <span className="text-sm font-medium w-40 shrink-0">{group.label}</span>
                <span className="text-sm" style={{ color: "var(--ink-muted)" }}>
                  {group.items.join(" / ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Selected work, directory style */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <h2 className="font-display text-xl font-semibold">Selected Work</h2>
            <input
              type="search"
              placeholder="filter by tech"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="font-display text-xs bg-transparent outline-none w-full sm:w-56 pb-2"
              style={{ borderBottom: "1px solid var(--line)", color: "var(--ink)" }}
            />
          </div>

          <div style={{ borderTop: "1px solid var(--line)" }}>
            {filtered.map((p, i) => {
              const isOpen = openId === p.id;
              return (
                <div key={p.id} style={{ borderBottom: "1px solid var(--line)" }}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    className="w-full text-left py-5 flex items-start gap-4 group"
                  >
                    <span
                      className="font-display text-xs mt-1 w-6 shrink-0"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-base font-semibold">{p.title}</h3>
                        <span className="text-sm" style={{ color: "var(--ink-muted)" }}>
                          {p.subtitle}
                        </span>
                      </div>
                      <p className="text-xs mt-1" style={{ color: "var(--ink-muted)" }}>
                        {p.role} · {p.tech.join(" / ")}
                      </p>
                    </div>
                    <span
                      className="font-display text-xs mt-1 shrink-0 transition-transform"
                      style={{
                        color: "var(--accent)",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-10 pr-6">
                          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--ink-muted)" }}>
                            {p.description}
                          </p>
                          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                            <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                              {p.impact}
                            </p>
                            {p.url !== "#" && (
                              <a
                                href={p.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm underline underline-offset-4"
                              >
                                View project
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section
          className="p-8 md:p-12"
          style={{ background: "var(--bg-panel)", border: "1px solid var(--line)" }}
        >
          <h2 className="font-display text-2xl font-semibold mb-3">Get in touch</h2>
          <p className="text-sm max-w-md mb-6" style={{ color: "var(--ink-muted)" }}>
            Open to full stack, automation, and WordPress or SEO focused work, remote, part time
            or full time.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:tajneesqamar123@gmail.com"
              className="underline underline-offset-4"
              style={{ color: "var(--accent)" }}
            >
              tajneesqamar123@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/tajnees-qamar-47138212a"
              className="underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer
        className="py-10 text-center text-xs"
        style={{ color: "var(--ink-muted)", borderTop: "1px solid var(--line)" }}
      >
        © {new Date().getFullYear()} Tajnees Qamar
      </footer>
    </div>
  );
}
