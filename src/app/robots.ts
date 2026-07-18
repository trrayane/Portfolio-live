import { MetadataRoute } from "next";

/**
 * Next.js App Router auto-generates /robots.txt from this file.
 * Save as app/robots.ts.
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-live-trrayane.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
