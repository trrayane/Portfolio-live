import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import JsonLd from "@/components/seo/json-Id";
import ThemeProvider from "@/components/ui/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-jetbrains-mono',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-live-trrayane.vercel.app"),
  title: {
    default: "Rayane Terki | Full-Stack Engineer",
    template: "%s",
  },
  description: "Official portfolio of Rayane Terki, a Full-Stack Engineer focused on backend systems, AI integration, and security — building scalable apps for real production environments.",
  keywords: ["Rayane Terki", "Full-Stack Engineer", "Backend Developer", "Security Enthusiast", "AI Integrations Developer", "Node.js Developer", "TypeScript Developer", "Python Developer"],
  authors: [{ name: "Rayane Terki" }],
  openGraph: {
    title: "Rayane Terki | Full-Stack Engineer",
    description: "Building scalable backend systems, AI integrations, and secure production applications.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-live-trrayane.vercel.app",
    siteName: "Rayane Terki Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rayane Terki - Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayane Terki | Full-Stack Engineer",
    description: "Full-stack development focused on backend systems, AI integration, and security.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-live-trrayane.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: replace with Rayane's own Google Search Console verification code
  // once the site is verified under his account.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <JsonLd />
          <div className="grain-overlay" />
          <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="afterInteractive"
            data-orchids-project-id="c99fa3a9-7f61-4053-a892-9a79b5387a9e"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
