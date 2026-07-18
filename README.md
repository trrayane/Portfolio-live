# Rayane Terki — Portfolio

Personal portfolio site for **Rayane Terki**, Full-Stack Engineer focused on backend systems, AI integration, and security. Built as a Linux-terminal-themed single-page experience with a full project archive, resume, and contact section.

**Live:** [portdolio-beta.vercel.app](https://portdolio-beta.vercel.app)

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — UI animations
- [GSAP](https://gsap.com) + [Lenis](https://lenis.darkroom.engineering) — scroll-driven effects and smooth scroll
- Deployed on [Vercel](https://vercel.com)

## Features

- Terminal / Linux-OS themed design system with light and dark modes
- Home page: hero, impact marquee, system stack ("neofetch"), tech experience ("career.log"), and a featured project archive
- Dedicated pages: `/about`, `/services`, `/projects`, `/learning-journey`
- Command palette (`⌘K` / `Ctrl+K`) for quick navigation
- Downloadable CV, contact form (EmailJS), SEO metadata & JSON-LD structured data

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Environment variables

Create a `.env.local` with:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

> Note: `npm install` requires `legacy-peer-deps` (already configured via `.npmrc`) due to an unrelated peer dependency conflict between `better-auth` and `drizzle-orm` in the dependency tree.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/               # Next.js App Router pages
├── components/
│   ├── sections/      # Page sections (hero, projects, footer, ...)
│   ├── ui/             # Reusable UI primitives
│   └── seo/            # Structured data / breadcrumbs
public/
├── projects/           # Project screenshots
└── resume.pdf          # Downloadable CV
```

## Contact

- Email: [rayaneterki55@gmail.com](mailto:rayaneterki55@gmail.com)
- GitHub: [@trrayane](https://github.com/trrayane)
- LinkedIn: [rayane-terki](https://www.linkedin.com/in/rayane-terki-334b19378/)
