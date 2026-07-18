/**
 * Organization + WebSite structured data.
 *
 * This doesn't force sitelinks (only Google's algorithm decides that), but
 * it gives Google the clearest possible signal about who you are, what your
 * site's name/URL is, and — via the `potentialAction` SearchAction — makes
 * you eligible for the search box Google sometimes shows under a result.
 *
 * Render this once, sitewide, e.g. in layout.tsx next to your existing
 * <JsonLd /> import (or replace that file's contents with this).
 */
export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-live-trrayane.vercel.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rayane Terki",
    url: siteUrl,
    jobTitle: "Full-Stack Engineer",
    image: `${siteUrl}/og-image.png`,
    email: "rayaneterki55@gmail.com",
    sameAs: [
      "https://github.com/trrayane",
      "https://www.linkedin.com/in/rayane-terki-334b19378/",
    ],
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "Python",
      "Full-Stack Web Development",
      "Backend Architecture",
      "AI & LLM Integration",
      "Security",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rayane Terki Portfolio",
    url: siteUrl,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: "Rayane Terki",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // A SiteNavigationElement list is one of the clearer signals for how a
  // site is structured — this mirrors the actual links in navigation.tsx.
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "About", "Services", "Projects"],
    url: [
      siteUrl,
      `${siteUrl}/about`,
      `${siteUrl}/services`,
      `${siteUrl}/projects`,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
    </>
  );
}
