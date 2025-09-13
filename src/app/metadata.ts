import type { Metadata } from 'next';

export const siteConfig = {
    name: "Tevin Owino",
    url: "https://tevinowino.vercel.app",
    ogImage: "https://tevinowino.vercel.app/og-image.png",
    description:
        "Tevin Owino's portfolio. A full-stack developer showcasing projects and skills in modern web technologies.",
    links: {
        twitter: "https://x.com/tevinowino",
        github: "https://github.com/tevinowino",
    },
    keywords: "Tevin Owino, portfolio, web development, React, Next.js, Developers, JavaScript, Full Stack Developer"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Tevin Owino",
      url: siteConfig.url,
    },
  ],
  creator: "Tevin Owino",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@tevinowino",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: `${siteConfig.url}/site.webmanifest`
};
