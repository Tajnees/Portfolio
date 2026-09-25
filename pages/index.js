import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

// Matches basePath in next.config.js. Change to "" if you move to a custom domain.
const BASE = "/Portfolio";
const asset = (path) => `${BASE}${path}`;

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const showcase = [
  {
    id: "metric-site",
    title: "Metric",
    kind: "Marketing website",
    category: "websites",
    summary: "Landing site for Max, an AI CFO used by founders in 190+ countries.",
    tech: ["Next.js", "Conversion design"],
    url: "https://metricapp.co/",
    domain: "metricapp.co",
    image: "/projects/metric-site.jpg",
    pan: true,
  },
  {
    id: "bookluxury",
    title: "Book Luxury",
    kind: "Booking website",
    category: "websites",
    summary: "Private residence rentals in Vail and Avon, with booking built into the first screen.",
    tech: ["Booking flow", "Responsive UI"],
    url: "https://bookluxury.co/",
    domain: "bookluxury.co",
    image: "/projects/bookluxury.jpg",
    pan: true,
  },
  {
    id: "pixara",
    title: "Pixara AI",
    kind: "Web app",
    category: "products",
    summary: "One workspace for the top image, video, and voice AI models, plus a built in design agent.",
    tech: ["AI platform", "MCP"],
    url: "https://www.pixara.ai/",
    domain: "pixara.ai",
    image: "/projects/pixara.jpg",
    position: "left top",
  },
  {
    id: "protech",
    title: "Protech Engineering",
    kind: "Corporate website",
    category: "websites",
    summary: "Site for an electrical and solar EPCC firm serving power plants and grid stations.",
    tech: ["Next.js", "Corporate site"],
    url: "https://www.protech-engg.com/",
    domain: "protech-engg.com",
    image: "/projects/protech.jpg",
    pan: true,
  },
  {
    id: "teamio",
    title: "Teamio",
    kind: "SaaS platform",
    category: "products",
    summary: "HR platform for payroll, onboarding, and attendance, used by 100+ companies.",
    tech: ["Next.js", "SaaS"],
    url: "https://www.teamio.io/",
    domain: "teamio.io",
    image: "/projects/teamio.jpg",
    pan: true,
  },
  {
    id: "nexeng",
    title: "NexEng AI",
    kind: "Marketing website",
    category: "websites",
    summary: "Site for AIOS, an AI operating system for executives, legal, finance, and government.",
    tech: ["Next.js", "Content strategy"],
    url: "https://nexeng.ai/",
    domain: "nexeng.ai",
    image: "/projects/nexeng.jpg",
    fit: "contain",
    bg: "#ffffff",
  },
  {
    id: "newtech",
    title: "NewTech Car Service",
    kind: "Local business website",
    category: "websites",
    summary: "WordPress site for a certified car detailing studio in Randers, Denmark.",
    tech: ["WordPress", "Elementor", "Local SEO"],
    url: "https://newtechcarservice.dk/",
    domain: "newtechcarservice.dk",
    image: "/projects/newtech.jpg",
    position: "left top",
  },
  {
    id: "taskgo",
    title: "Taskgo",
    kind: "Company website",
    category: "websites",
    summary: "Site for a studio that builds pharmacy websites designed around profit.",
    tech: ["Web design", "Firebase"],
    url: "https://taskgo-website.web.app/",
    domain: "taskgo-website.web.app",
    image: "/projects/taskgo.jpg",
    position: "left top",
  },
  {
    id: "flowers",
    title: "Flower Delivery",
    kind: "Ecommerce website",
    category: "websites",
    summary: "Same day flower delivery store for Dubai and Sharjah, built for quick gifting.",
    tech: ["Ecommerce", "UI design"],
    domain: "Client project",
    image: "/projects/flowers.jpg",
  },
  {
    id: "art",
    title: "Art Gallery",
    kind: "Gallery website",
    category: "websites",
    summary: "A place to browse and collect original paintings, laid out like a gallery wall.",
    tech: ["UI design", "Ecommerce"],
    domain: "Client project",
    image: "/projects/art.jpg",
  },
  {
    id: "agency",
    title: "Digital Agency",
    kind: "Agency website",
    category: "websites",
    summary: "Site for a UAE brand and product studio with a bold, confident identity.",
    tech: ["UI design", "Branding"],
    domain: "Client project",
    image: "/projects/agency.jpg",
  },
];

const moreWork = [
  {
    title: "Metric App",
    kind: "Web app",
    summary: "Real time financial dashboards behind Max, the AI CFO, with 1M+ transactions processed.",
    url: "https://web.metricapp.co/login",
  },
  {
    title: "NexEng AIOS",
    kind: "Product",
    summary: "Product owner for an AI operating system with 12+ live agents across cloud and on premise.",
    url: "https://aios.nexeng.ai/",
  },
  {
    title: "Light and Life Full Gospel Fellowship",
    kind: "Website",
    summary: "Church website with service schedules, events, an audio library, and online giving.",
    url: "https://www.llfgf.org/",
  },
  {
    title: "Sababa Global",
    kind: "AI support",
    summary: "Support automation with ChatGPT and live dashboards that cut support load by 65%.",
    url: "https://app.sababa.global/login",
  },
  {
    title: "Busichat",
    kind: "AI platform",
    summary: "Voice agents, workflow automation, and payments in one platform for small businesses.",
  },
  {
    title: "Private AI Platform",
    kind: "AI platform",
    summary: "Secure multi model system with agent workflows, RAG, and controlled access layers.",
  },
  {
    title: "LinkedIn Auto Post Agent",
    kind: "Automation",
    summary: "n8n workflow that tracks industry news and drafts posts with GPT 4.",
  },
  {
    title: "Merchant Visibility Agent",
    kind: "Automation",
    summary: "Scrapes Google Maps to find local SEO gaps and triggers outreach, 50+ audits a week.",
  },
  {
    title: "Health Insurance Agent",
    kind: "Automation",
    summary: "Answers plain language questions about insurance policies using a vector database.",
  },
];

const services = [
  {
    title: "Websites that bring in customers",
    body: "Design and build in Next.js or WordPress, with local SEO, analytics, and a clear path to book or buy.",
    items: ["Web design", "WordPress & Elementor", "Local SEO", "Analytics"],
  },
  {
    title: "Web apps and dashboards",
    body: "Full stack products from first sketch to launch, including APIs, databases, and integrations.",
    items: ["Next.js & React", "Node & Postgres", "Stripe, QuickBooks, Xero", "AWS & GCP"],
  },
  {
    title: "AI agents and automation",
    body: "Assistants and workflows that take repetitive work off a team's plate, with a human in control.",
    items: ["LLM apps & RAG", "Voice agents", "n8n & Zapier", "OpenAI & LangChain"],
  },
];

const experience = [
  {
    years: "2026 to now",
    company: "NexEng AI",
    role: "Product Owner",
    note: "Own product direction for AIOS, run client demos, and lead outbound sales.",
  },
  {
    years: "2022 to 2026",
    company: "Remap AI",
    role: "Full Stack Developer, AI",
    note: "Built a multi tenant platform for custom AI agents, voice agents, and RAG pipelines.",
  },
  {
    years: "2021 to 2026",
    company: "Metric",
    role: "Full Stack Developer",
    note: "Led frontend architecture for real time financial dashboards and worked on Max, the AI CFO.",
  },
  {
    years: "2019 to 2026",
    company: "ZamSolutions",
    role: "Full Stack & PHP Developer",
    note: "Built CRM platforms, React apps, and Laravel sites for clients.",
  },
];

const filters = [
  { id: "all", label: "All work" },
  { id: "websites", label: "Websites" },
  { id: "products", label: "Web apps" },
];

/* ------------------------------------------------------------------ */
/* Small components                                                    */
/* ------------------------------------------------------------------ */

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Shot({ src, alt, pan, fallback, fit, position, bg }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="shot-fallback">
        <span>{fallback}</span>
      </div>
    );
  }
  return (
    <img
      className={`shot${pan ? " can-pan" : ""}`}
      src={asset(src)}
      alt={alt}
      loading="lazy"
      style={{ objectFit: fit, objectPosition: position, background: bg }}
      onError={() => setFailed(true)}
    />
  );
}

function Frame({ domain, children }) {
  return (
    <div className="frame">
      <div className="frame-bar" aria-hidden="true">
        <span className="frame-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="frame-url">{domain}</span>
      </div>
      <div className="frame-view">{children}</div>
    </div>
  );
}

function WorkCard({ project, featured }) {
  const body = (
    <>
      <Frame domain={project.domain}>
        <Shot
          src={project.image}
          alt={`${project.title} homepage`}
          pan={project.pan}
          fit={project.fit}
          position={project.position}
          bg={project.bg}
          fallback={project.title}
        />
      </Frame>
      <div className="work-info">
        <div className="work-text">
          <p className="work-kind">{project.kind}</p>
          <h3>{project.title}</h3>
          <p className="work-summary">{project.summary}</p>
        </div>
        {project.url && (
          <span className="work-link" aria-hidden="true">
            <ArrowIcon />
          </span>
        )}
      </div>
      <ul className="tag-list">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`work-card${featured ? " is-featured" : ""}`}
    >
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer" className="work-card-inner" aria-label={`Visit ${project.title}`}>
          {body}
        </a>
      ) : (
        <div className="work-card-inner">{body}</div>
      )}
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) setDark(saved === "dark");
    } catch (e) {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {}
  }, [dark]);

  const visible = useMemo(
    () => (filter === "all" ? showcase : showcase.filter((p) => p.category === filter)),
    [filter]
  );

  const counts = {
    all: showcase.length,
    websites: showcase.filter((p) => p.category === "websites").length,
    products: showcase.filter((p) => p.category === "products").length,
  };

  return (
    <div className={`${sans.variable} ${mono.variable} page`}>
      <Head>
        <title>Tajnees Qamar | Full stack engineer</title>
        <meta
          name="description"
          content="Tajnees Qamar designs and builds websites, web apps, and AI tools for startups and local businesses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ---------- Header ---------- */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Back to top">
            <span className="brand-mark">TQ</span>
            <span className="brand-name">Tajnees Qamar</span>
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <button
              type="button"
              className="theme-btn"
              onClick={() => setDark((d) => !d)}
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            >
              {dark ? "Light" : "Dark"}
            </button>
            <a className="btn btn-accent btn-sm" href="mailto:tajneesqamar123@gmail.com">
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="container hero-grid">
            <motion.div className="hero-copy" variants={heroStagger} initial="hidden" animate="show">
              <motion.p variants={heroItem} className="hero-status">
                <span className="status-dot" />
                Available for new projects
              </motion.p>
              <motion.h1 variants={heroItem}>
                I design and build websites, web apps, and AI tools that businesses rely on.
              </motion.h1>
              <motion.p variants={heroItem} className="hero-lede">
                I'm Tajnees, a full stack engineer with 5+ years of shipping work for startups and local
                businesses, from booking sites and SaaS dashboards to AI agents.
              </motion.p>
              <motion.div variants={heroItem} className="hero-actions">
                <a className="btn btn-accent" href="#work">
                  See my work
                </a>
                <a className="btn btn-ghost" href={asset("/cv.pdf")} target="_blank" rel="noreferrer">
                  Download résumé
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-stack"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              aria-hidden="true"
            >
              <div className="stack-item stack-back">
                <Frame domain="bookluxury.co">
                  <Shot src="/projects/bookluxury.jpg" alt="" fallback="Book Luxury" />
                </Frame>
              </div>
              <div className="stack-item stack-mid">
                <Frame domain="protech-engg.com">
                  <Shot src="/projects/protech.jpg" alt="" fallback="Protech" />
                </Frame>
              </div>
              <div className="stack-item stack-front">
                <Frame domain="metricapp.co">
                  <Shot src="/projects/metric-site.jpg" alt="" fallback="Metric" />
                </Frame>
              </div>
            </motion.div>
          </div>

          <div className="container hero-stats">
            <div>
              <strong>5+</strong>
              <span>years building for the web</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>projects shipped</span>
            </div>
            <div>
              <strong>10</strong>
              <span>websites launched</span>
            </div>
            <div>
              <strong>1M+</strong>
              <span>transactions on Metric</span>
            </div>
          </div>
        </section>

        {/* ---------- Work ---------- */}
        <section className="section" id="work">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Selected work</p>
                <h2>Real projects, live today.</h2>
              </div>
              <div className="filters" role="tablist" aria-label="Filter projects">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={filter === f.id}
                    className={`filter${filter === f.id ? " is-active" : ""}`}
                    onClick={() => setFilter(f.id)}
                  >
                    {f.label}
                    <span className="filter-count">{counts[f.id]}</span>
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="work-grid">
              <AnimatePresence mode="popLayout">
                {visible.map((project, i) => (
                  <WorkCard key={project.id} project={project} featured={i === 0} />
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="more">
              <h3 className="more-title">More products and AI tools</h3>
              <ul className="more-list">
                {moreWork.map((w) => {
                  const row = (
                    <>
                      <span className="more-name">{w.title}</span>
                      <span className="more-kind">{w.kind}</span>
                      <span className="more-summary">{w.summary}</span>
                      <span className="more-arrow">{w.url ? <ArrowIcon /> : null}</span>
                    </>
                  );
                  return (
                    <li key={w.title}>
                      {w.url ? (
                        <a className="more-row" href={w.url} target="_blank" rel="noreferrer">
                          {row}
                        </a>
                      ) : (
                        <div className="more-row">{row}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section className="section section-alt" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Services</p>
                <h2>What I can help with.</h2>
              </div>
              <p className="section-note">
                I work directly with founders and business owners, and I explain everything in plain language.
              </p>
            </div>
            <div className="service-grid">
              {services.map((s) => (
                <article className="service" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul>
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="section" id="experience">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">Experience</p>
                <h2>Where I've worked.</h2>
              </div>
              <a className="btn btn-ghost" href={asset("/cv.pdf")} target="_blank" rel="noreferrer">
                Full résumé
              </a>
            </div>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.company} className="timeline-row">
                  <span className="timeline-years">{e.years}</span>
                  <div className="timeline-main">
                    <h3>
                      {e.company}
                      <span>{e.role}</span>
                    </h3>
                    <p>{e.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="contact" id="contact">
          <div className="container contact-inner">
            <p className="kicker">Contact</p>
            <h2>Have a project in mind? Let's talk.</h2>
            <p className="contact-note">
              Tell me what you're building. I usually reply within a day.
            </p>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:tajneesqamar123@gmail.com">
                tajneesqamar123@gmail.com
              </a>
              <a
                className="btn btn-ghost-light"
                href="https://linkedin.com/in/tajnees-qamar-47138212a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Tajnees Qamar</span>
          <span>Remote from Pakistan, working worldwide</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
