import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { AppProvider } from '@/providers/app-provider';
import { SmoothScroll } from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';

const defaultUrl = process.env.VERCEL_URL
  ? `https://` + process.env.VERCEL_URL
  : "http://localhost:3000";


export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Victoire Luxury service (VLS) - Chauffeur Privé & Conciergerie de Luxe',
  description: 'Services de luxe de chauffeur, location de voiture et conciergerie à Paris, Cannes, Monaco, Genève et Courchevel.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <AppProvider>
            <CustomCursor />
            <SmoothScroll />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
