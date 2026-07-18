import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";
import { Server, Layout, Search, Shield, Zap, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Backend, AI Integration & Security",
  description: "Explore the range of professional services offered by Rayane Terki, including backend architecture, API development, AI/LLM integration, and application security.",
};

const services = [
  {
    title: "Backend & API Development",
    description: "Designing resilient backend systems, APIs, and distributed architectures using Node.js, TypeScript, and Python. Built for scale and real production traffic.",
    icon: Server,
    features: ["REST & API Development", "Database Architecture", "Distributed Systems", "Authentication Systems"],
  },
  {
    title: "AI & LLM Integration",
    description: "Integrating machine learning and large language model features into existing products — from chat interfaces to automated pipelines.",
    icon: Layout,
    features: ["LLM Feature Integration", "ML Model Integration", "AI-Powered Workflows", "Prompt & Pipeline Design"],
  },
  {
    title: "Application Security",
    description: "Building with security in mind from day one — hardening APIs, auth flows, and infrastructure against real-world threats.",
    icon: Shield,
    features: ["Secure Architecture Review", "Auth & Access Control", "Docker & Deployment Hardening", "Vulnerability Remediation"],
  },
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web application development with modern frontend frameworks paired with production-grade backends.",
    icon: Search,
    features: ["Next.js & React", "Full-Stack Architecture", "Performance Optimization", "Deployment Pipelines"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

        <header className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-6" style={{ color: "var(--text-tertiary)" }}>
            SERVICE_CATALOG
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            What I <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--border-strong)" }}>Build</span>
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Practical solutions tailored for the modern digital landscape — technical execution paired with system-level thinking.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 md:mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 md:p-10 border rounded-2xl hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-500"
              style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center justify-between mb-8">
                <div
                  className="w-14 h-14 border rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-500"
                  style={{ backgroundColor: "var(--bg-surface-strong)", borderColor: "var(--border-default)" }}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="font-technical text-[9px] uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>{`0${index + 1}`}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>{service.title}</h2>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{service.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    <Zap size={11} className="text-blue-400/80 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="border rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden relative" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-card)" }}>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
          <span className="text-[10px] font-technical tracking-[0.4em] md:tracking-[0.6em] uppercase block mb-6" style={{ color: "var(--text-tertiary)" }}>
            INITIATE_PROJECT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            Ready to start a project?
          </h2>
          <p className="max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Whether you need a full website build or technical consulting, I&apos;m here to help you build something reliable.
          </p>
          <a
            href="/#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-all duration-500"
            style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
          >
            Get In Touch
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </section>
      </div>
      <Footer />
    </main>
  );
}
