import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";
import ProjectsGrid, { Project } from "@/components/sections/projects-grid";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Projects Portfolio | Rayane Terki",
  description: "Explore a curated collection of software engineering projects — healthcare platforms, legal AI tooling, LLM tools, and full-stack e-commerce.",
};

const projects: Project[] = [
  {
    title: "Healy",
    category: "Healthcare • Multi-Role Platform",
    image: "/projects/healy.png",
    link: "https://github.com/trrayane/Healy-Front",
    github: "https://github.com/trrayane/Healy-Front",
    desc: "Multi-role medical platform frontend (patient, doctor, pharmacist, caregiver, admin) with AI-assisted diagnosis, real-time messaging, and appointment management.",
    tech: ["React 18", "Vite", "Redux Toolkit", "Tailwind CSS", "Three.js"],
    year: "2025",
    caseStudy: {
      problem: "Patients and clinicians needed one platform covering diagnosis support, messaging, and scheduling across five different roles.",
      approach: "Built a React 18 + Vite frontend with role-based routing, a Redux Toolkit data layer, real-time chat, and Three.js-powered landing visuals.",
      outcome: "A single multi-role app handling the full patient-doctor-pharmacist workflow, including PDF prescription generation and bilingual support.",
    },
  },
  {
    title: "Healy Mobile",
    category: "Healthcare • Mobile App",
    image: "/projects/healy-mobile.png",
    link: "https://github.com/trrayane/Healy-Mobile",
    github: "https://github.com/trrayane/Healy-Mobile",
    desc: "React Native / Expo companion app bringing the Healy patient-doctor workflow to mobile.",
    tech: ["React Native", "Expo", "Expo Router"],
    year: "2025",
    caseStudy: {
      problem: "Patients needed access to the Healy platform on the go, not just from a desktop browser.",
      approach: "Built a native mobile app with Expo Router, camera/document picker integration, and secure token storage.",
      outcome: "A mobile companion app mirroring the core patient workflow of the web platform.",
    },
  },
  {
    title: "JusticePath",
    category: "LegalTech • AI Assistant",
    image: "/projects/justicepath.png",
    link: "https://github.com/trrayane/JusticePath-front",
    github: "https://github.com/trrayane/JusticePath-front",
    desc: "Frontend of an intelligent legal-assistance platform for Algerian citizens, with a rich document editor and AI chat assistant.",
    tech: ["React 19", "TypeScript", "Vite", "shadcn/ui", "Framer Motion"],
    year: "2025",
    caseStudy: {
      problem: "Citizens navigating legal procedures in Algeria lack an accessible way to get guidance or draft documents.",
      approach: "Built a React 19 + TypeScript app with a Tiptap-based rich document editor, an AI assistant chat, and GSAP/Lenis scroll animations.",
      outcome: "A working frontend for AI-assisted legal document drafting and Q&A, built for a hackathon.",
    },
  },
  {
    title: "SummarAI",
    category: "AI / LLM Tooling",
    image: "/projects/summarai.png",
    link: "https://github.com/trrayane/SummarAI",
    github: "https://github.com/trrayane/SummarAI",
    desc: "Production-ready summarization engine — Gemini + LangChain turn text, files, and web pages into clean summaries streamed in real time.",
    tech: ["Python", "FastAPI", "LangChain", "Gemini 2.5 Flash", "NLTK"],
    year: "2025",
    caseStudy: {
      problem: "Reading through long PDFs, Word docs, or articles to extract the key points is slow and repetitive.",
      approach: "Built a FastAPI backend using Gemini 2.5 Flash + LangChain, with SSE streaming, multiple summary styles, and an analytics dashboard.",
      outcome: "A working summarization API and dashboard covering PDFs, URLs, and pasted text with real-time streamed output.",
    },
  },
  {
    title: "AC Collection",
    category: "E-Commerce • Full Stack",
    image: "/projects/ac-collection.png",
    link: "https://ac-collection.vercel.app/",
    github: "https://github.com/trrayane/AC-COOLECTION",
    desc: "Bilingual (EN/AR, full RTL) e-commerce store for custom-printed clothing in Algeria, with a live design customization studio and Cash on Delivery checkout.",
    tech: ["React", "Vite", "Node.js", "Express", "Sequelize", "PostgreSQL"],
    year: "2025",
    caseStudy: {
      problem: "Algerian custom-apparel buyers needed a store where they could design their own print and pay Cash on Delivery, with full Arabic RTL support.",
      approach: "Built a React/Vite storefront with a drag-and-drop customization studio (upload, place, resize, layer designs) and a Node/Express/Sequelize backend with an admin dashboard.",
      outcome: "A full bilingual storefront covering catalog, live product customization, and COD checkout across all 58 wilayas.",
    },
  },
  {
    title: "Jingle AI",
    category: "AI Audio • Hackathon Project",
    image: "/projects/jingle-ai.png",
    link: "https://github.com/trrayane/Hackiwha3.0",
    github: "https://github.com/trrayane/Hackiwha3.0",
    desc: "Turns a short brand brief into a fully produced audio jingle — Gemini writes lyrics and performs vocals, MusicGen composes the instrumental.",
    tech: ["FastAPI", "React", "Vite", "PostgreSQL", "Gemini TTS", "MusicGen"],
    year: "2025",
    caseStudy: {
      problem: "Small brands can't afford a studio session just to get a short branded jingle for an ad or in-store playlist.",
      approach: "Built an AI pipeline: Gemini writes lyrics and a style prompt, Gemini TTS performs vocals with DSP autotune, MusicGen composes the instrumental, then everything is mixed automatically.",
      outcome: "A working end-to-end pipeline generating a finished, mixed jingle from just a brand brief, built during a hackathon.",
    },
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <BreadcrumbSchema items={[{ name: "Projects", url: "/projects" }]} />
        <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />

        <header className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            Project <span style={{ color: "var(--text-muted)" }}>Archive</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A selection of technical missions and digital builds. Focused on performance, architecture, and user-centric design.
          </p>
        </header>

        <ProjectsGrid projects={projects} />
      </div>
      <Footer />
    </main>
  );
}
