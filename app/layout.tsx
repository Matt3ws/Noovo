import type React from 'react';
import type { Metadata } from 'next';

import './globals.css';
//import Header from "@/components/layout/header";
//import Footer from "@/components/layout/footer";
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Højtydende websites og Shopify‑apps, skræddersyet – Noovo',
  description:
    'Noovo er et webstudio, der specialiserer sig i hurtige, moderne websites og Shopify webshops og skæredesyet Next.js hjemmesider. Fra skræddersyede storefronts til fuldstack‑løsninger bygger vi digitale oplevelser, der konverterer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {/*<Header />*/}
          <main className="pt-[var(--header-height)]">{children}</main>
          {/*<Footer />*/}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
