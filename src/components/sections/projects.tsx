"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Terminal, X } from "lucide-react";

const projects = [
  {
    title: "Healy",
    category: "Healthcare • Multi-Role Platform",
    image: "/projects/healy.png",
    link: "https://github.com/trrayane/Healy-Front",
    github: "https://github.com/trrayane/Healy-Front",
    details:
      "Frontend of Healy, a multi-role medical platform (patient, doctor, pharmacist, caregiver, admin) with AI-assisted diagnosis, real-time messaging, and full appointment management.",
    tech: ["React 18", "Vite", "Redux Toolkit", "Tailwind CSS", "Three.js"],
  },
  {
    title: "Healy Mobile",
    category: "Healthcare • Mobile App",
    image: "/projects/healy-mobile.png",
    link: "https://github.com/trrayane/Healy-Mobile",
    github: "https://github.com/trrayane/Healy-Mobile",
    details:
      "React Native / Expo companion app for the Healy platform, bringing the same patient-doctor workflow to mobile.",
    tech: ["React Native", "Expo", "Expo Router"],
  },
  {
    title: "JusticePath",
    category: "LegalTech • AI Assistant",
    image: "/projects/justicepath.png",
    link: "https://github.com/trrayane/JusticePath-front",
    github: "https://github.com/trrayane/JusticePath-front",
    details:
      "Frontend of an intelligent legal-assistance platform for Algerian citizens, with a rich document editor and smooth scroll-driven UI.",
    tech: ["React 19", "TypeScript", "Vite", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "SummarAI",
    category: "AI / LLM Tooling",
    image: "/projects/summarai.png",
    link: "https://github.com/trrayane/SummarAI",
    github: "https://github.com/trrayane/SummarAI",
    details:
      "Gemini + LangChain summarization engine — turns text, files, and web pages into clean, streamed summaries via a FastAPI backend.",
    tech: ["Python", "FastAPI", "LangChain", "Gemini"],
  },
  {
    title: "AC Collection",
    category: "E-Commerce • Full Stack",
    image: "/projects/ac-collection.png",
    link: "https://ac-collection.vercel.app/",
    github: "https://github.com/trrayane/AC-COOLECTION",
    details:
      "Bilingual (EN/AR, full RTL) e-commerce store for custom-printed clothing in Algeria — live design customization studio, Cash on Delivery checkout across all 58 wilayas.",
    tech: ["React", "Vite", "Express", "Sequelize", "PostgreSQL"],
  },
  {
    title: "Jingle AI",
    category: "AI Audio • Hackathon Project",
    image: "/projects/jingle-ai.png",
    link: "https://github.com/trrayane/Hackiwha3.0",
    github: "https://github.com/trrayane/Hackiwha3.0",
    details:
      "Turns a short brand brief into a fully produced audio jingle — Gemini writes lyrics and performs vocals, MusicGen composes the instrumental, mixed automatically into a finished track.",
    tech: ["FastAPI", "React", "Vite", "PostgreSQL", "Gemini TTS"],
  },
  {
    title: "Portfolio v1",
    category: "Personal • Developer Portfolio",
    image: "/projects/portfolio-v1.png",
    link: "https://rayane-portfolio-eight.vercel.app/",
    github: "#",
    details:
      "An earlier personal portfolio — React + Vite + Tailwind CSS, with a code-editor-styled hero, animated skill sections, and a project showcase.",
    tech: ["React", "Vite", "Tailwind CSS"],
  },
];

type Project = (typeof projects)[number];

function ProjectRow({
  project,
  index,
  active,
  onActivate,
  onOpen,
}: {
  project: Project;
  index: number;
  active: boolean;
  onActivate: () => void;
  onOpen: () => void;
}) {
  return (
    <button
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={() => {
        onActivate();
        onOpen();
      }}
      className="w-full text-left px-5 md:px-6 py-5 border-b last:border-b-0 transition-colors group"
      style={{
        borderColor: "var(--border-subtle)",
        backgroundColor: active ? "var(--bg-surface-hover)" : "transparent",
      }}
    >
      <div className="flex items-center gap-4">
        <span
          className="font-technical text-[10px] tabular-nums flex-shrink-0"
          style={{ color: active ? "var(--accent)" : "var(--text-quaternary)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3
              className="text-lg md:text-xl font-black uppercase tracking-tight truncate"
              style={{ color: active ? "var(--text-primary)" : "var(--text-secondary)" }}
            >
              {project.title}
            </h3>
          </div>
          <span
            className="font-technical text-[9px] uppercase tracking-widest block mt-1 truncate"
            style={{ color: "var(--text-quaternary)" }}
          >
            {project.category}
          </span>
        </div>

        <ArrowUpRight
          size={16}
          className={`flex-shrink-0 transition-all duration-300 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}`}
          style={{ color: "var(--accent)" }}
        />
      </div>
    </button>
  );
}

export default function MyProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = projects[activeIndex];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <section
      id="projects"
      className="py-24 md:py-64 border-t overflow-hidden relative"
      style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 md:mb-24">
          <span
            className="text-[8px] md:text-[10px] font-technical tracking-[0.6em] md:tracking-[1em] uppercase block mb-6 md:mb-8"
            style={{ color: "var(--text-quaternary)" }}
          >
            PROJECT ARCHIVE
          </span>
          <h2
            className="text-[16vw] md:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            SELECTED
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--border-strong)" }}>
              MISSIONS
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20">
          {/* Directory listing */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              className="border rounded-xl overflow-hidden"
              style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="terminal-chrome flex items-center gap-2 px-4 md:px-6 py-3 border-b"
                style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-chrome)" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span
                  className="ml-3 flex items-center gap-2 font-technical text-[9px] uppercase tracking-widest"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  <Terminal size={10} /> ls -la /projects
                </span>
              </div>

              <div>
                {projects.map((project, i) => (
                  <ProjectRow
                    key={project.title}
                    project={project}
                    index={i}
                    active={i === activeIndex}
                    onActivate={() => setActiveIndex(i)}
                    onOpen={() => setMobileOpen(true)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sticky preview pane — desktop only, single fixed frame so every image crops consistently */}
          <div className="hidden lg:block lg:col-span-7 lg:order-2">
            <div className="lg:sticky lg:top-32">
              <div
                className="border rounded-xl overflow-hidden"
                style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)", boxShadow: "var(--shadow-elevated)" }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ backgroundColor: "var(--bg-chrome)" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.title}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(to top, var(--bg-base) 0%, color-mix(in srgb, var(--bg-base) 10%, transparent) 35%, transparent 65%)",
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                    <span className="font-technical text-[9px] text-blue-400 uppercase tracking-[0.3em] block mb-2">
                      {active.category}
                    </span>
                    <h3
                      className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {active.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active.title + "-desc"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {active.details}
                    </motion.p>
                  </AnimatePresence>

                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-1 rounded border"
                        style={{ color: "var(--text-secondary)", backgroundColor: "var(--bg-surface-strong)", borderColor: "var(--border-subtle)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all duration-300"
                      style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
                    >
                      {active.link === active.github ? "View Repo" : "Live Demo"}{" "}
                      {active.link === active.github ? <Github size={14} /> : <ExternalLink size={14} />}
                    </a>
                    {active.github !== "#" && active.github !== active.link && (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3.5 px-6 border rounded-full font-bold uppercase tracking-widest text-xs hover:border-blue-400/50 transition-all duration-300"
                        style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/projects"
            data-cursor="ALL"
            className="group relative inline-flex items-center gap-4 px-8 py-4 border rounded-full hover:border-blue-500/40 transition-colors"
            style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)" }}
          >
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>
              View Full Archive
            </span>
            <ArrowUpRight
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={16}
              style={{ color: "var(--text-primary)" }}
            />
          </a>
        </div>
      </div>

      {/* Mobile project detail — simple full-screen modal */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-[200] overflow-y-auto"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="fixed top-4 right-4 z-[210] flex items-center justify-center w-10 h-10 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#0a0a0e", boxShadow: "0 4px 16px rgba(0,0,0,0.35)" }}
              aria-label="Close"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ backgroundColor: "var(--bg-chrome)" }}>
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, var(--bg-base) 0%, color-mix(in srgb, var(--bg-base) 10%, transparent) 35%, transparent 65%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-[1]">
                    <span className="font-technical text-[9px] text-blue-400 uppercase tracking-[0.3em] block mb-2">
                      {active.category}
                    </span>
                    <h3
                      className="text-3xl font-black uppercase tracking-tighter leading-none"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {active.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {active.details}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-1 rounded border"
                        style={{ color: "var(--text-secondary)", backgroundColor: "var(--bg-surface-strong)", borderColor: "var(--border-subtle)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2 pb-4">
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold uppercase tracking-widest text-xs"
                      style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
                    >
                      {active.link === active.github ? "View Repo" : "Live Demo"}{" "}
                      {active.link === active.github ? <Github size={14} /> : <ExternalLink size={14} />}
                    </a>
                    {active.github !== "#" && active.github !== active.link && (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center justify-center w-14 h-14 border rounded-full"
                        style={{ backgroundColor: "var(--bg-surface-strong)", borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
