import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// NOTE: This is a single-file Next.js page / React component.
// It expects Tailwind CSS to be configured in the project and Framer Motion installed.
// Place a `cv.pdf` file in the `public/` folder to enable the Download CV button.

const basePath = '/Portfolio';

const projects = [
  {
    id: "metric",
    title: "Metric – Fintech Application for small ",
    description:
      "A comprehensive fintech platform providing real-time financial analytics, reporting dashboards, and data visualization tools to help businesses track performance metrics and make data-driven decisions.",
    url: "https://web.metricapp.co/login",
    tech: ["React", "Next.js", "Node", "Postgres", "AWS"],
    image: `${basePath}/projects/metric.jpeg`,
  },
  {
    id: "sababa",
    title: "Sababa Global – AI Agent Ecosystem",
    description:
      "AI agent ecosystem for customer support automation with intelligent ChatGPT integration, custom AI agents, N8n workflow automation, and real-time analytics dashboards.",
    url: "https://app.sababa.global/login",
    tech: ["Vue 3", "Node", "Next.js", "N8n", "WebSockets", "Azure"],
    image: `${basePath}/projects/sababa.png`,
  },
  {
    id: "remap",
    title: "Remap AI – Real-time Collaboration",
    description:
      "Scalable microservices and Next.js frontend handling hundreds of thousands of concurrent connections.",
    url: "https://app1.busi.chat/login",
    tech: ["Next.js", "Node", "Docker", "GCP"],
    image: `${basePath}/projects/remap.jpeg`,
  },
];

export default function PortfolioPage() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("prefers-dark");
    const prefersDark = saved ? JSON.parse(saved) : false;
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Top bar */}
      <header className="backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Tajnees Qamar
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Senior Full Stack Developer — MERN • Next • AI Agents • Automation
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${basePath}/cv.pdf`}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 focus:outline-none"
            >
              Download CV
            </a>

            <button
              aria-label="Toggle dark mode"
              className="rounded-full p-2 ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-blue-400/30"
              onClick={() => setDark((s) => !s)}
            >
              {dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.03a1 1 0 111.415 1.415l-.707.707a1 1 0 11-1.415-1.414l.707-.708zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM5.05 4.464l.707.708A1 1 0 114.343 6.586l-.707-.708A1 1 0 115.05 4.464zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-6-6a1 1 0 110 2H3a1 1 0 110-2h1zM15 14.95a1 1 0 11-1.415 1.415l-.707-.707a1 1 0 111.415-1.415l.707.707zM4.222 14.97l.707-.707a1 1 0 011.415 1.415l-.707.707A1 1 0 114.222 14.97z" />
                </svg>
              )}
            </button>

            <a
              href="https://github.com/tajneesqamar"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-700 dark:text-gray-200 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl font-extrabold leading-tight">
              Senior Full Stack Developer
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">
              I build scalable web applications, microservices, and
              production-ready CI/CD pipelines. I specialize in developing AI
              agents, workflow automation with N8n, and intelligent systems that
              enhance business processes. I focus on reliability, performance,
              and developer experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                Node.js
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                Vue.js
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                Docker
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                AWS
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                N8n
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                AI Agents
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`${basePath}/cv.pdf`}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700"
              >
                Download CV
              </a>

              <a
                href="mailto:tajneesqamar123@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
                TQ
              </div>
              <div>
                <div className="font-semibold">Tajnees Qamar</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Senior Full Stack Developer
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <p>Available for remote roles · Open to consulting</p>
            </div>
          </motion.div>
        </section>

        <section className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            Projects
          </motion.h3>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <input
              type="search"
              placeholder="Search projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            />

            <div className="flex gap-2">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm border border-transparent bg-gray-100 dark:bg-gray-800"
              >
                All
              </a>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {filtered.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow hover:scale-[1.01] transition-transform"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700">
                  {/* Image is optional; fallback to placeholder */}
                  {p.image ? (
                    // Using next/image helps but requires next.config for external domains if used
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <div className="h-40 w-full flex items-center justify-center text-sm text-gray-400">
                      No image
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="mt-8 text-center text-gray-500">
              No projects match your search.
            </div>
          )}
        </section>

        <section className="mt-12">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            Skills & Tools
          </motion.h3>

          <motion.div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "Docker",
              "Vue.js",
              "Kubernetes",
              "AWS",
              "Postgres",
              "N8n",
              "AI Agents",
            ].map((s) => (
              <div
                key={s}
                className="rounded-md px-3 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center"
              >
                {s}
              </div>
            ))}
          </motion.div>
        </section>

        <section className="mt-12 mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            Contact
          </motion.h3>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            <p>
              Email:{" "}
              <a
                className="text-blue-500"
                href="mailto:tajneesqamar123@gmail.com"
              >
                tajneesqamar123@gmail.com
              </a>
            </p>
            <p className="mt-2">
              LinkedIn:{" "}
              <a
                className="text-blue-500"
                href="https://linkedin.com/in/tajnees-qamar-47138212a"
                target="_blank"
                rel="noreferrer"
              >
                Profile
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tajnees Qamar · Built with Next.js
        </div>
      </footer>
    </div>
  );
}
