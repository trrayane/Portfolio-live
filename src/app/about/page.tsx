import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rayane Terki | Full-Stack Engineer",
  description: "Learn more about Rayane Terki's professional journey, technical expertise, and focus on backend systems, AI integration, and security.",
};

const journey = [
  {
    year: "2024 — PRES",
    role: "Full-Stack Engineer",
    company: "Freelance",
    status: "ACTIVE",
    description: "Building and maintaining production applications for independent clients — from backend architecture and APIs to AI-integrated features and full deployment.",
  },
  {
    year: "2023 — 2024",
    role: "Backend Developer",
    company: "Independent Projects",
    status: "COMPLETED",
    description: "Delivered backend systems and distributed services using Node.js, TypeScript, and Python, with a focus on security and reliability.",
  },
];

const education = {
  school: "Self-Directed & Continuous Learning",
  degree: "Software Engineering, Backend Systems & Security",
  date: "ONGOING",
  skills: "Backend Architecture, APIs, Distributed Systems, AI/LLM Integration",
};

const certifications = [
  { name: "Docker Foundations Professional Certificate", issuer: "Docker, Inc.", date: "2025" },
];

const expertise = [
  { label: "Backend", stack: "Node.js, TypeScript, Python, APIs" },
  { label: "AI Integration", stack: "LLM Features, ML Integration" },
  { label: "Security", stack: "Application Security, Secure Architecture" },
  { label: "Systems", stack: "Distributed Systems, Docker, Linux" },
];

const STATUS_STYLES: Record<string, string> = {
  ACTIVE: "bg-green-500",
  COMPLETED: "bg-blue-500",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

        <header className="mb-16 md:mb-20 max-w-3xl">
          <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-6" style={{ color: "var(--text-tertiary)" }}>
            PROFILE_RECORD
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.95] md:leading-[0.9]" style={{ color: "var(--text-primary)" }}>
            About <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--border-strong)" }}>The Engineer</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A Full-Stack Engineer focused on backend systems, AI integration, and security — building scalable apps for real production environments.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-24">
          <section className="p-6 sm:p-8 md:p-10 border rounded-2xl space-y-6" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-card)" }}>
            <span className="text-[10px] font-technical text-blue-400/80 uppercase tracking-[0.4em] block">Core Philosophy</span>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              In an era of rapidly evolving technology, my approach remains grounded in the fundamentals of computer science and system architecture. I believe that true innovation stems from a deep understanding of how systems interact at every level — from the application layer down to the network infrastructure.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              My work is characterized by a commitment to precision, scalability, and security. Whether I&apos;m architecting backend infrastructure, integrating AI and LLM features, or hardening an application, my goal is always to deliver solutions that are not just functional, but production-ready.
            </p>
          </section>

          <section className="p-6 sm:p-8 md:p-10 border rounded-2xl space-y-6" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-card)" }}>
            <span className="text-[10px] font-technical text-blue-400/80 uppercase tracking-[0.4em] block">Technical Expertise</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="p-4 border rounded-lg hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                  style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
                >
                  <h3 className="font-technical text-[9px] uppercase tracking-[0.3em] mb-2" style={{ color: "var(--text-muted)" }}>{item.label}</h3>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.stack}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="pt-16 border-t" style={{ borderColor: "var(--border-default)" }}>
          <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4" style={{ color: "var(--text-tertiary)" }}>
            Session Log
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10 md:mb-12" style={{ color: "var(--text-primary)" }}>
            Professional Journey
          </h2>
          <div className="space-y-4">
            {journey.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 md:p-8 border rounded-xl hover:border-blue-500/20 transition-colors"
                style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
              >
                <div className="md:w-40 flex-shrink-0 flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${STATUS_STYLES[item.status]} ${item.status === "ACTIVE" ? "animate-pulse" : ""}`} />
                  <span className="text-xs sm:text-sm font-black uppercase" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    {item.role} <span className="font-technical text-xs" style={{ color: "var(--text-muted)" }}>@ {item.company}</span>
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-16 mt-16 border-t grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ borderColor: "var(--border-default)" }}>
          <div>
            <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4" style={{ color: "var(--text-tertiary)" }}>
              Education
            </span>
            <div className="p-6 md:p-8 border rounded-xl hover:border-blue-500/20 transition-colors" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}>
              <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{education.degree}</h3>
              <p className="font-technical text-xs mb-3" style={{ color: "var(--text-muted)" }}>{education.school}</p>
              <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>{education.date}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{education.skills}</p>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-4" style={{ color: "var(--text-tertiary)" }}>
              Certifications
            </span>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-6 border rounded-xl hover:border-blue-500/20 transition-colors"
                  style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
                >
                  <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>{cert.name}</h3>
                  <p className="font-technical text-xs" style={{ color: "var(--text-muted)" }}>{cert.issuer} · Issued {cert.date}</p>
                </div>
              ))}
            </div>
            <a
              href="/learning-journey"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors"
            >
              See ongoing self-study →
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
