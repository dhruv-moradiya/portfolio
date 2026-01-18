import type { Metadata, Viewport } from "next";
import { personal, seo, socialLinks, experience, stack } from "./portfolio";

export const siteMetadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${personal.name} Portfolio`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: personal.name, url: seo.siteUrl }],
  creator: personal.name,
  publisher: personal.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.siteUrl,
    siteName: `${personal.name} Portfolio`,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personal.name} - ${personal.tagline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og-image.png"],
    creator: seo.twitterHandle,
    site: seo.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: seo.siteUrl,
  },
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark light",
};

// Get all technologies from stack for JSON-LD
const allTechnologies = stack.flatMap((category) => category.technologies.map((tech) => tech.name));

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  url: seo.siteUrl,
  image: personal.profileImage,
  sameAs: socialLinks.map((link) => link.href),
  jobTitle: personal.tagline,
  worksFor: {
    "@type": "Organization",
    name: experience[0]?.company || "Freelance",
  },
  description: seo.description,
  knowsAbout: allTechnologies,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${personal.name} Portfolio`,
  url: seo.siteUrl,
  description: seo.description,
  author: {
    "@type": "Person",
    name: personal.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${seo.siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
