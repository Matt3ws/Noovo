import type React from 'react';
import type { Metadata } from 'next';

import './globals.css';
//import Header from "@/components/layout/header";
//import Footer from "@/components/layout/footer";
import { Toaster } from '@/components/ui/toaster';
import { CookieBanner } from '@/components/cookie-banner';
import Script from 'next/script';

import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://noovo.dk'),
  title: {
    default: 'Shopify webshops og hjemmesider, der er nemme at bruge – Noovo',
    template: '%s – Noovo',
  },
  description:
    'Noovo er et webstudio, der specialiserer sig i hurtige, moderne websites og Shopify webshops samt skræddersyede Next.js hjemmesider. Fra custom storefronts til fuldstack‑løsninger bygger vi digitale oplevelser, der konverterer.',
  keywords: [
    'Noovo',
    'webstudio',
    'webbureau',
    'Shopify',
    'Shopify udvikling',
    'Shopify webshops',
    'Next.js',
    'hjemmeside',
    'webudvikling',
    'hastighed',
    'SEO',
    'headless',
    'e-handel',
    'Danmark',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://noovo.dk/',
    siteName: 'Noovo',
    title: 'Shopify webshops og hjemmesider, der er nemme at bruge – Noovo',
    description:
      'Noovo er et webstudio, der specialiserer sig i hurtige, moderne websites og Shopify webshops samt skræddersyede Next.js hjemmesider. Fra custom storefronts til fuldstack‑løsninger bygger vi digitale oplevelser, der konverterer.',
    images: [
      {
        url: '/tech-code-interface.png',
        width: 1200,
        height: 630,
        alt: 'Noovo – moderne websites og Shopify‑apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify webshops og hjemmesider, der er nemme at bruge – Noovo',
    description: 'Vi bygger hurtige, moderne websites og Shopify‑løsninger, der konverterer.',
    images: ['/tech-code-interface.png'],
    creator: '@noovo_dk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  themeColor: '#000000',
  authors: [{ name: 'Noovo', url: 'https://noovo.dk' }],
  creator: 'Noovo',
  publisher: 'Noovo',
  category: 'technology',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <html lang="da" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        {recaptchaSiteKey ? (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            strategy="afterInteractive"
          />
        ) : null}
        {/*<Header />*/}
        <main className="pt-[var(--header-height)]">{children}</main>
        {/*<Footer />*/}
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
